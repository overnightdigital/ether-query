const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider(`http://127.0.0.1:8545`));
console.log(web3.eth.accounts);

var myAddr = '0xdb62d39ab4d6eb76138b2d91e2680233125916e5';
var currentBlock = web3.eth.blockNumber;
var n = web3.eth.getTransactionCount(myAddr, currentBlock);
var bal = web3.eth.getBalance(myAddr, currentBlock);
for (var i = currentBlock; i >= 0 && (n > 0 || bal > 0); --i) {
	try {
		var block = eth.getBlock(i, true);
		if (block && block.transactions) {{
			block.transactions.forEach(function(e) {
				if (myAddr == e.from) {
					if (e.from != e.to) {
						bal = bal.plus(e.value);
						console.log(i, e.from, e.to, e.value.toString(10));
						--n;
					}
					if(myAddr = e.to) {
						if (e.from != e.to) 
							bal = bal.minus(e.value);
							console.log(i, e.from, e.to, e.value.toString(10));
					}
				}
			});
		}}
	} catch(e) {
		console.error("Error for block " + i, e);
	}
}