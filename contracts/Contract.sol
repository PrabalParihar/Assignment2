// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Contract is ERC20 {
    constructor() ERC20("Mercel", "MERC") {
        uint256 totalSupply = 1000000 * 10 ** decimals();
        _mint(address(this), totalSupply);
    }

    function faucet() external {
        uint256 balance = balanceOf(address(this));
        require(balance >= 1000 * 10 ** decimals(), "Insufficient supply for faucet");

        _transfer(address(this), msg.sender, 1000 * 10 ** decimals());

       
    }

    
}

