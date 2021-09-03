// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract DBR is ERC721, Ownable {
    using SafeMath for uint256;
    uint256 public totalSupply;
    uint256 public DBRPrice = 50000000000000000; // 0.05 ETH
    uint256 public maxDBRPurchase = 20;
    uint256 public maxDBRs = 10000;
    uint256 public adminFeeRatio = 0;
    uint256 public reserveAmount = 40;
    string public baseTokenURI;
    address admin;
    mapping(address => bool) public admins;

    bool public saleIsActive = false;
    bool public reserved = false;
    bool public allFrozen;
    mapping(uint256 => bool) frozenIds;
    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;
    // Base URI
    string private _baseTokenURI;

    event DBRPriceChanged(uint256 price);
    event MaxTokenAmountChanged(uint256 value);
    event MaxPurchaseChanged(uint256 value);
    event DBRsReserved();
    event RolledOver(bool status);
    event PermanentURI(string _value, uint256 indexed _id);

    modifier onReserve() {
        require(!reserved, "Tokens reserved");
        _;
        reserved = true;
        emit DBRsReserved();
    }

    modifier onlyAdmin() {
        require(admins[msg.sender], "Not admin");
        _;
    }

    constructor(address _admin) ERC721("Dont Buy Rocks", "DBRT") {
        admin = _admin;
        admins[admin] = true;
        admins[msg.sender] = true;
    }

    function withdraw() public onlyAdmin {
        uint256 balance = address(this).balance;
        uint256 adminFee = (balance * adminFeeRatio) / 100;
        Address.sendValue(payable(admin), adminFee);
        balance = balance - adminFee;
        Address.sendValue(payable(_msgSender()), balance);
    }

    function reserveDBRs(address receipt) public onlyAdmin onReserve {
        uint256 supply = totalSupply;
        uint256 i;
        for (i; i < reserveAmount; i++) {
            _safeMint(receipt, supply + i);
        }
    }

    function flipSaleState() public onlyAdmin {
        saleIsActive = !saleIsActive;
        emit RolledOver(saleIsActive);
    }

    function mintDBRs(uint256 numberOfTokens) public payable {
        require(saleIsActive, "Sale is not active");
        require(numberOfTokens > 0, "Cannot buy 0");
        require(
            numberOfTokens <= maxDBRPurchase,
            "Exceeds max number of DBRs in one transaction"
        );
        require(
            totalSupply.add(numberOfTokens) <= maxDBRs,
            "Purchase would exceed max supply of DBRs"
        );
        require(
            DBRPrice.mul(numberOfTokens) == msg.value,
            "Ether value sent is not correct"
        );

        uint256 i;
        uint256 mintIndex;
        for (i; i < numberOfTokens; i++) {
            mintIndex = totalSupply;
            _safeMint(_msgSender(), mintIndex);
        }
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI)
        external
        onlyAdmin
    {
        require(!allFrozen && !frozenIds[tokenId], "Already frozen");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function setBaseTokenURI(string memory baseTokenURI_) external onlyAdmin {
        require(!allFrozen, "Already frozen");
        _baseTokenURI = baseTokenURI_;
    }

    function getBaseTokenURI() internal view virtual returns (string memory) {
        return _baseTokenURI;
    }

    function setPrice(uint256 _price) external onlyAdmin {
        require(_price > 0, "Zero price");

        DBRPrice = _price;
        emit DBRPriceChanged(_price);
    }

    function setMaxTokenAmount(uint256 _value) external onlyAdmin {
        require(
            _value > totalSupply && _value <= 10_000,
            "Wrong value for max supply"
        );

        maxDBRs = _value;
        emit MaxTokenAmountChanged(_value);
    }

    function setMaxPurchase(uint256 _value) external onlyAdmin {
        require(_value > 0, "Very low value");

        maxDBRPurchase = _value;
        emit MaxPurchaseChanged(_value);
    }

    function setAdminFeeRatio(uint256 _feeRatio) external onlyAdmin {
        adminFeeRatio = _feeRatio;
    }

    function setReserveAmount(uint256 _reserveAmount) external onlyAdmin {
        reserveAmount = _reserveAmount;
    }

    function enableAdmin(address _addr) external onlyOwner {
        admins[_addr] = true;
    }

    function disableAdmin(address _addr) external onlyOwner {
        admins[_addr] = false;
    }

    function freezeAll() external onlyOwner {
        allFrozen = true;
    }

    function freeze(uint256 tokenId) external onlyOwner {
        frozenIds[tokenId] = true;

        emit PermanentURI(tokenURI(tokenId), tokenId);
    }
}
