pragma solidity ^0.8.0;

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol';

contract MockDai is ERC20 {
    constructor() ERC20 ("DeCoins", "DC") public {}
    
    function faucet(address _to, uint256 _amount) public {
        _mint(_to, _amount);
    }
}