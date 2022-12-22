//SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.15;

contract demo {
    uint256 public num = 0;

    function setNumber(uint256 _num) public {
        num = _num;
    }
}
