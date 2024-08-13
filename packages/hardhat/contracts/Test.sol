//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract TestContract {
	//mapping(address => uint256) public userBalances;

	uint256 public counter;

	event TestCreated(
		uint256 indexed _counter
	);

	function testIt() external payable {
		counter++;
		emit TestCreated(counter);
	}

}
