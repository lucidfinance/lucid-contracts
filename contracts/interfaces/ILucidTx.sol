//SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./ILucidManager.sol";

struct Multihash {
    bytes32 hash;
    uint8 hashFunction;
    uint8 size;
}

enum Status {
    Pending,
    Repaying,
    Paid,
    Rejected,
    Rescinded
}

struct Claim {
    uint256 claimAmount;
    uint256 paidAmount;
    Status status;
    uint256 dueBy;
    address debtor;
    address claimToken;
    Multihash attachment;
}

interface ILucidTx {
    event ClaimCreated(
        address lucidManager,
        uint256 indexed tokenId,
        address parent,
        address indexed creditor,
        address indexed debtor,
        address origin,
        string description,
        string proposal,
        Claim claim,
        uint256 blocktime
    );

    event ClaimPayment(
        address indexed lucidManager,
        uint256 indexed tokenId,
        address indexed debtor,
        address paidBy,
        address paidByOrigin,
        uint256 paymentAmount,
        uint256 blocktime
    );

    event ClaimRejected(
        address indexed lucidManager,
        uint256 indexed tokenId,
        uint256 blocktime
    );

    event ClaimRescinded(
        address indexed lucidManager,
        uint256 indexed tokenId,
        uint256 blocktime
    );

    event FeePaid(
        address indexed lucidManager,
        uint256 indexed tokenId,
        address indexed collectionAddress,
        uint256 paymentAmount,
        uint256 transactionFee,
        uint256 blocktime
    );

    event LucidManagerSet(
        address indexed prevLucidManager,
        address indexed newLucidManager,
        uint256 blocktime
    );

    function createClaim(
        address[] memory parties,
        string[] memory metadata,
        uint256 claimAmount,
        uint256 dueBy,
        address claimToken,
        Multihash calldata attachment
    ) external returns (uint256 newTokenId);

    function createClaimWithURI(
        address[] memory parties,
        string[] memory metadata,
        uint256 claimAmount,
        uint256 dueBy,
        address claimToken,
        Multihash calldata attachment,
        string calldata _tokenUri
    ) external returns (uint256 newTokenId);

    function payClaim(uint256 tokenId, uint256 paymentAmount) external;

    function rejectClaim(uint256 tokenId) external;

    function rescindClaim(uint256 tokenId) external;

    function getClaim(uint256 tokenId) external view returns (Claim calldata);

    function lucidManager() external view returns (address);
}
