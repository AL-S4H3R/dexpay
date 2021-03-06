pragma solidity ^0.8.0;
import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol';

contract PaymentProcessor {
    address public admin;
    IERC20 public daiToken;

    //all the transactions will occur through DAI stablecoin.
    
    constructor(address _admin, address _daiToken) public {
        admin = _admin;
        daiToken = IERC20(_daiToken);
    }
    
    //events
    event PaymentDone (
        address _payer,
        uint256 _amount,
        uint256 _transactionId,
        uint256 _timestamp
    );
    
    function transact(uint256 _amount, uint256 _transactionId) public {
        daiToken.transferFrom(msg.sender, admin, _amount);
        emit PaymentDone(msg.sender, _amount, _transactionId, block.timestamp);
    }
}