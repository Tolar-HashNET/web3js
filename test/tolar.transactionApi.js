var Web3 = require('../packages/web3')
var assert = require('assert');

let priv_key = "67f3c68cedd11ef77ed6b92ca9fd82c699ccfc5f1fd96fa485b0ffeb2cf60fdf";

web3 = new Web3('https://jsongw.stagenet.tolar.io/jsonrpc');

let sender = web3.tolar.accounts.privateKeyToAccount(priv_key);

async function sendSignedTransaction({_nonce, _senderAddress, _receiverAddress, _amount, _gas, _gasPrice, _data, _networkId, _privateKey, _errorMessage}){
    var nonce = _nonce || await web3.tolar.getNonce(sender.address);
    var senderAddress = _senderAddress || sender.address;
    var receiverAddress = _receiverAddress || "5412c347d6570bcdde3a89fca489f679b8b0ca22a5d4e3b6ca";
    var amount = _amount || 0;
    var gas = _gas || 21000;
    var gasPrice = _gasPrice || 1;
    var data = _data || "";
    var networkId = _networkId || 3;
    var privateKey = _privateKey || sender.privateKey

    let tx = {
        sender_address: senderAddress,
        receiver_address: receiverAddress,
        amount: amount,
        gas: gas,
        gas_price: gasPrice,
        data: data,
        nonce: nonce,
        network_id: networkId
    };

    let signedTx = await sender.signTransaction(tx, privateKey);

    try{
        transaction = await web3.tolar.sendSignedTransaction(signedTx);
    }
    catch(err){
        assert.equal(err.message, _errorMessage);
    }
}


describe('tolar Transaction API', function() {

    it('send signed transaction with valid values', async function(){
        sendSignedTransaction();
    })

    it.skip('send signed transaction with invalid private key - its working because it always uses sender.privateKey', async function(){
        sendSignedTransaction({_privateKey: "77f3c68cedd11ef77ed6b92ca9fd82c699ccfc5f1fd96fa485b0ffeb2cf60fdf"});
    })

    it('send signed transaction with invalid network_id', async function(){
        sendSignedTransaction({_networkId: 2,
             _errorMessage: "Returned error: gRPC error code: 3; message: Provided network id does not match '3'; details: "});
    })

    it('send signed transaction with smaller nonce than current one', async function(){
        sendSignedTransaction({_nonce: 2,
             _errorMessage:"Returned error: gRPC error code: 3; message: Provided nonce needs to be strictly greater from last transaction nonce that ended on blockchain; details: "});
    })

    it('send signed transaction with nonce bigger than current one - doesnt pass on blockchain', async function(){
        sendSignedTransaction({_nonce: 500});
    })

    it('send signed transaction with non-hex data', async function(){
        sendSignedTransaction({_data: "data12333"});
    })

    it('send signed transaction with hex data', async function(){
        sendSignedTransaction({_data: "0x606060405263ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166321c80154811461005357806343b267321461007b57806358f19417146100a3575b600080fd5b341561005e57600080fd5b6100696004356100cb565b60405190815260200160405180910390f35b341561008657600080fd5b610069600435610152565b60405190815260200160405180910390f35b34156100ae57600080fd5b61006960043561015c565b60405190815260200160405180910390f35b6000813373ffffffffffffffffffffffffffffffffffffffff167f324591e46c0cd422e42a223fbdaf9117beefd35b5f20a2b908afff711bd55bee60405160208082526005908201527f65787472610000000000000000000000000000000000000000000000000000006040808301919091526060909101905180910390a350805b919050565b600a81015b919050565b60003373ffffffffffffffffffffffffffffffffffffffff167f8c274d7c08aed08867bfb2dd79467ef65d24737515bd587ea658bdde878c5dc28360405190815260200160405180910390a250600281025b9190505600a165627a7a723058204d8659074227b1dba75176623ef1562509bcd04240164f5427a5aed90ef52e910029"});
    })

    it('send signed transaction with gas price low than 1', async function(){
        sendSignedTransaction({_gasPrice: 0,
             _errorMessage: "Returned error: gRPC error code: 3; message: Provided gas price is lower than minimum required gas price (1); details: "});
    })

    it('send signed transaction with gas price bigger than 1', async function(){
        sendSignedTransaction({_gasPrice: 2});
    })

    it('send signed transaction with not enough gas provided', async function(){
        sendSignedTransaction({_gas: 20000,
             _errorMessage: "Returned error: gRPC error code: 3; message: Not enough gas provided to make the basic payment pass; details: "});
    })

    it.skip('send signed transaction with negative amount - should return error', async function(){
        sendSignedTransaction({_amount: -1});
    })

    it('send signed transaction with negative gas', async function(){
        sendSignedTransaction({_gas: -1,
             _errorMessage: "Returned error: gRPC error code: 3; message: Not enough gas provided to make the basic payment pass; details: "});
    })

    it.skip('send signed transaction with negative gas price - should return error', async function(){
        sendSignedTransaction({_gasPrice: -1});
    })

    it('send signed transaction with invalid receiver address', async function(){
        sendSignedTransaction({_receiverAddress: "5412c347d6570bcdde3a89fca489f679b8b0ca22a5d4e3b6cb",
         _errorMessage: "Returned error: gRPC error code: 3; message: Transaction receiver address is in invalid format.; details: "})
    })

    it('send signed transaction with invalid sender address', async function(){
        sendSignedTransaction({_senderAddress: "5412c347d6570bcdde3a89fca489f679b8b0ca22a5d4e3b6cb",
         _errorMessage: "Returned error: gRPC error code: 3; message: Transaction sender address is in invalid format.; details: "});
    })

    it('send signed transaction with one tx field missing - message is a little bit weird', async function(){
        let nonce = await web3.tolar.getNonce(sender.address);

        let tx = {
            sender_address: sender.address,
            receiver_address: "5412c347d6570bcdde3a89fca489f679b8b0ca22a5d4e3b6ca",
            amount: 0,
            gas: 21000,
            gas_price: 1,
            nonce: nonce,
            network_id: 3
        };

        let signedTx = await sender.signTransaction(tx, sender.privateKey);

        try{
            await web3.tolar.sendSignedTransaction(signedTx);
        }
        catch(err){
            assert.equal(err.message, 'Returned error: invalid parameter: must be string, but is object for parameter "signed_transaction"');
        }
    })

    it('send signed transaction with one tx field of a different type - amount is set to string', async function(){
        sendSignedTransaction({_amount: "1",
         _errorMessage: 'Returned error: invalid parameter: must be string, but is object for parameter "signed_transaction"'});
    })

    it('send signed transaction with one tx field of a different type - sender_address is set to integer', async function(){
        sendSignedTransaction({_senderAddressder: 1,
         _errorMessage: 'Returned error: invalid parameter: must be string, but is object for parameter "signed_transaction"'});
    })
});
