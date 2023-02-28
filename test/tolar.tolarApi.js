var Web3 = require('../packages/web3')
var assert = require('assert');


var blockByIndexOne;
var blockByIndexWithTransaction;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

    describe('tolar Tolar API', function() {
        before(async function() {
            web3 = new Web3('https://jsongw.stagenet.tolar.io/jsonrpc');
        })

        it.skip('check block count', async function(){
            const blockCount = await web3.tolar.getBlockCount();

            await sleep(30000);

            const blockCountNew = await web3.tolar.getBlockCount();
            
            assert(blockCountNew > blockCount, "New block count should be equal or bigger than current one");
        }).timeout(35000);

        it('get block by index one', async function(){
            blockByIndexOne = await web3.tolar.getBlockByIndex(1);

            assert.equal(blockByIndexOne.block_hash, "aa094fdafdbf7f2db86d09ce7f5d62bea4723646efdba4eb79187c308083bee0", "Block hash value is not correct");
            assert.equal(blockByIndexOne.block_index, 1, "Block index should be 1");
            assert.equal(blockByIndexOne.confirmation_timestamp, 0, "Confirmation timestamp should be 0");
            assert.equal(blockByIndexOne.previous_block_hash, "0000000000000000000000000000000000000000000000000000000000000000", "Previous block hash value is not correct");
            assert(Array.isArray(blockByIndexOne.transaction_hashes));
            assert.equal(blockByIndexOne.transaction_hashes.length, 0, "list should be empty");
        })

        it('get block by index - block has transaction', async function(){
            blockByIndexWithTransaction = await web3.tolar.getBlockByIndex(1954);
            
            assert.equal(blockByIndexWithTransaction.block_hash, "40562d80c2241f3d5cbd555991f254e13d04de018a04a6d6af4110d3c5585025", "Block hash value is not correct");
            assert.equal(blockByIndexWithTransaction.block_index, 1954, "Block index should be 1954");
            assert.equal(blockByIndexWithTransaction.confirmation_timestamp, 1675333181955, "Confirmation timestamp should be 1675333181955");
            assert.equal(blockByIndexWithTransaction.previous_block_hash, "9f89b8ab4c6819b9b4ea32b98664937de989e77a152fe5f35c6cfa1ac7dd8f24", "Previous block hash value is not correct");
            assert.equal(blockByIndexWithTransaction.transaction_hashes.length, 1, "There should be one transaction in the transaction list");
            assert.equal(blockByIndexWithTransaction.transaction_hashes[0], "e218f25ee4bed8c7e48e0742019b2aa5008ed71ca5b66660dd4dffa2fe7017f6", "Transaction hash is not correct");
        })

        it('get block by index 0 - should return error', async function(){
            try{
                await web3.tolar.getBlockByIndex(0);
            }
            catch(err){
                assert.equal(err.message, "Returned error: gRPC error code: 3; message: Block with that index doesn't exist; details: ");
            }
        })

        it('get block by index which doesnt exist - should return error', async function(){
            try{
                await web3.tolar.getBlockByIndex(9999999999);
            }
            catch(err){
                assert.equal(err.message, "Returned error: gRPC error code: 3; message: Block with that index doesn't exist; details: ");
            }
        })

        it('get block by index without index parameter - should return error', async function(){
            try{
                await web3.tolar.getBlockByIndex();
            }
            catch(err){
                assert.equal(err.message, 'Invalid number of parameters for "getBlockByIndex". Got 0 expected 1!');
            }
        })

        it('get block by hash - should be the same as block with index 1', async function(){
            var blockByHashWithIndexOne = await web3.tolar.getBlockByHash("aa094fdafdbf7f2db86d09ce7f5d62bea4723646efdba4eb79187c308083bee0");
            assert.equal(JSON.stringify(blockByHashWithIndexOne), JSON.stringify(blockByIndexOne), "Returned values should be the same");
        })

        it('get block by hash - should be the same as block with index 1954', async function(){
            var blockByHash = await web3.tolar.getBlockByHash("40562d80c2241f3d5cbd555991f254e13d04de018a04a6d6af4110d3c5585025");
            assert.equal(JSON.stringify(blockByHash), JSON.stringify(blockByIndexWithTransaction), "Returned values should be the same");
        })

        it('get block by non existing hash - should return error', async function(){
            try{
                await web3.tolar.getBlockByHash("50562d80c2241f3d5cbd555991f254e13d04de018a04a6d6af4110d3c5585025");
            }
            catch(err){
                assert.equal(err.message, "Returned error: gRPC error code: 3; message: Block with that hash doesn't exist; details: ");
            }
        })

        it('get block by hash which is not in valid format', async function(){
            try{
                await web3.tolar.getBlockByHash("abcdefghijkl");
            }
            catch(err){
                assert.equal(err.message, "Returned error: Block hash parameter not in valid format");
            }
        })

        it('get block by hash without hash parameter - should return error', async function(){
            try{
                await web3.tolar.getBlockByHash();
            }
            catch(err){
                assert.equal(err.message, 'Invalid number of parameters for "getBlockByHash". Got 0 expected 1!');
            }
        })

        it('get transaction with valid transaction hash', async function(){
            const transaction = await web3.tolar.getTransaction("168d0bbc223b542b780aba274f3c56effd106d1918cda1310c9b0265e0d0376e");

            assert.equal(transaction.block_hash, "eaf9bd560925df1bb0927e0889727147724d2b4db77fd68f74501c3030000839", "Block hash is not valid");
            assert.equal(transaction.confirmation_timestamp, 1675326047295, "Confirmation timestamp is not valid");
            assert.equal(transaction.data, "746573742064617461", "Data field is not valid");
            assert.equal(transaction.excepted, false, "Excepted value should be false");
            assert.equal(transaction.exception, 0, "Exception should be 0");
            assert.equal(transaction.gas, "210000", "Gas should be 210000");
            assert.equal(transaction.gas_price, "1000000000000", "Gas price should be 1000000000000");
            assert.equal(transaction.gas_refunded, "0", "Gas refunded should be 0");
            assert.equal(transaction.gas_used, "21144", "Gas used should be 21144");
            assert.equal(transaction.network_id, 3, "Network id should be 3");
            assert.equal(transaction.new_address, "54000000000000000000000000000000000000000023199e2b", "New address field is not valid");
            assert.equal(transaction.nonce, '36', "Nonce should be 36");
            assert.equal(transaction.output, '', "There should be no output");
            assert.equal(transaction.receiver_address, '549f86338b7967c20acfaf816b27ecdb4e87fe94355185c614', "Received address is not valid");
            assert.equal(transaction.sender_address, '5412c347d6570bcdde3a89fca489f679b8b0ca22a5d4e3b6ca', "Sender address is not valid");
            assert.equal(transaction.transaction_hash, '168d0bbc223b542b780aba274f3c56effd106d1918cda1310c9b0265e0d0376e', "Transaction hash is not valid");
            assert.equal(transaction.transaction_index, 0, "Transaction index should be 0");
            assert.equal(transaction.value, "1000003432", "Transaction value should be 1000003432");
        })

        it('get transaction with non existing hash - should trigger error', async function(){
            try {
                await web3.tolar.getTransaction("168d0bbc223b542b780aba274f3c56effd106d1918cda1310c9b0265e0d0376a");
            }
            catch(err){
                assert.equal(err.message, "Returned error: gRPC error code: 3; message: Transaction with that hash doesn't exist; details: ");
            }
        })

        it('get transaction with hash which is not in valid format - should trigger error', async function(){
            try {
                await web3.tolar.getTransaction("abccccccdeffffghhhh");
            }
            catch(err){
                assert.equal(err.message, "Returned error: Transaction hash parameter not in valid format");
            }
        })

        it('get transaction without hash parameter - should trigger error', async function(){
            try {
                await web3.tolar.getTransaction();
            }
            catch(err){
                assert.equal(err.message, 'Invalid number of parameters for "getTransaction". Got 0 expected 1!');
            }
        })

        it('get transaction list for two addresses', async function (){
            const transactionList = await web3.tolar.getTransactionList(
                ["54fe871e34f8bed75ea435b43da4719c2fad93e68489ee27aa", "540ca8e6e0a205340ad9a1dc89650fbbef648f65911bd4c4da"], 10, 0);

            assert.equal(transactionList.transactions[0].block_hash, "398d032f26f8ee27f72e5bf29f2a2b597273a07ff18790998e666cbb630d178c", "Block hash is not valid");
            assert.equal(transactionList.transactions[0].confirmation_timestamp, 1677160272224, "Confirmation timestamp is not valid");
            assert.equal(transactionList.transactions[0].data, "", "Data is not valid");
            assert.equal(transactionList.transactions[0].excepted, false, "Excepted field should be False");
            assert.equal(transactionList.transactions[0].exception, 0, "Exception should be 0");
            assert.equal(transactionList.transactions[0].gas, "21000", "Gas should be 21000");
            assert.equal(transactionList.transactions[0].gas_price, "1", "Gas price should be 1");
            assert.equal(transactionList.transactions[0].gas_refunded, "0", "Gas refunded should be 0");
            assert.equal(transactionList.transactions[0].gas_used, "21000", "Gas used should be 21000");
            assert.equal(transactionList.transactions[0].network_id, 3, "Network id should be 3");
            assert.equal(transactionList.transactions[0].new_address, "54000000000000000000000000000000000000000023199e2b", "New address is not valid");
            assert.equal(transactionList.transactions[0].nonce, "41", "Nonce is not valid");
            assert.equal(transactionList.transactions[0].output, "", "Output is not valid");
            assert.equal(transactionList.transactions[0].receiver_address, "540ca8e6e0a205340ad9a1dc89650fbbef648f65911bd4c4da", "Received address is not valid");
            assert.equal(transactionList.transactions[0].sender_address, "5412c347d6570bcdde3a89fca489f679b8b0ca22a5d4e3b6ca", "Sender address is not valid");
            assert.equal(transactionList.transactions[0].transaction_hash, "6f1d6bd0eaf6dc3715ef38ec048bc045223211ddf17ef81ad982f68c77aa1f08", "Transaction hash is not valid");
            assert.equal(transactionList.transactions[0].transaction_index, 0, "Transaction index should be 0");
            assert.equal(transactionList.transactions[0].value, "100000000000", "Value is not valid");

            assert.equal(transactionList.transactions[1].block_hash, "3c97337b037af973b8e451ffc92908228171c26d45b8fefbfca5670e0f27c3df", "Block hash is not valid");
            assert.equal(transactionList.transactions[1].confirmation_timestamp, 1677160186669, "Confirmation timestamp is not valid");
            assert.equal(transactionList.transactions[1].data, "", "Data is not valid");
            assert.equal(transactionList.transactions[1].excepted, false, "Excepted field should be False");
            assert.equal(transactionList.transactions[1].exception, 0, "Exception should be 0");
            assert.equal(transactionList.transactions[1].gas, "21000", "Gas should be 21000");
            assert.equal(transactionList.transactions[1].gas_price, "1", "Gas price should be 1");
            assert.equal(transactionList.transactions[1].gas_refunded, "0", "Gas refunded should be 0");
            assert.equal(transactionList.transactions[1].gas_used, "21000", "Gas used should be 21000");
            assert.equal(transactionList.transactions[1].network_id, 3, "Network id should be 3");
            assert.equal(transactionList.transactions[1].new_address, "54000000000000000000000000000000000000000023199e2b", "New address is not valid");
            assert.equal(transactionList.transactions[1].nonce, "40", "Nonce is not valid");
            assert.equal(transactionList.transactions[1].output, "", "Output is not valid");
            assert.equal(transactionList.transactions[1].receiver_address, "54fe871e34f8bed75ea435b43da4719c2fad93e68489ee27aa", "Received address is not valid");
            assert.equal(transactionList.transactions[1].sender_address, "5412c347d6570bcdde3a89fca489f679b8b0ca22a5d4e3b6ca", "Sender address is not valid");
            assert.equal(transactionList.transactions[1].transaction_hash, "de22f30d9255457c1ff14f157e3614f5969eb52594aae5ef92f5781dcd3d6881", "Transaction hash is not valid");
            assert.equal(transactionList.transactions[1].transaction_index, 0, "Transaction index should be 0");
            assert.equal(transactionList.transactions[1].value, "100000000000", "Value is not valid");

        })

        it('get transaction list with limit to one transaction', async function(){
            const transactionList = await web3.tolar.getTransactionList(
                ["54fe871e34f8bed75ea435b43da4719c2fad93e68489ee27aa", "540ca8e6e0a205340ad9a1dc89650fbbef648f65911bd4c4da"], 1, 0);
            
                assert.equal(transactionList.transactions.length, 1, "There should be only one transaction in the list");
        })

        it('get transaction list with skip parameter set to 1 - it should return only one transaction', async function(){
            const transactionList = await web3.tolar.getTransactionList(
                ["54fe871e34f8bed75ea435b43da4719c2fad93e68489ee27aa", "540ca8e6e0a205340ad9a1dc89650fbbef648f65911bd4c4da"], 2, 1);
            
                assert.equal(transactionList.transactions.length, 1, "There should be only one transaction in the list");
        })

        it('get transaction list with invalid address - checksum is not correct', async function(){
            try{
                await web3.tolar.getTransactionList(
                    ["54fe871e34f8bed75ea435b43da4719c2fad93e68489ee27ab"], 5, 0);
            }
            catch(err){
                assert.equal(err.message, "Returned error: Address not in valid format");
            }
        })

        it('get transaction list with empty string as address - it should return an error', async function(){
            try{
                await web3.tolar.getTransactionList(
                    [""], 5, 0);
            }
            catch(err){
                assert.equal(err.message, "Returned error: Address not in valid format");
            }
        })


        it('get transaction list with one valid and one invalid address - should return an error', async function(){
            try{
                await web3.tolar.getTransactionList(
                    ["54fe871e34f8bed75ea435b43da4719c2fad93e68489ee27ab", "540ca8e6e0a205340ad9a1dc89650fbbef648f65911bd4c4da"], 5, 0);
            }
            catch(err){
                assert.equal(err.message, "Returned error: Address not in valid format");
            }
        })

        it.skip('get transaction list without skip parameter - no error should be shown', async function(){
            const transactionList = await web3.tolar.getTransactionList(
                ["54fe871e34f8bed75ea435b43da4719c2fad93e68489ee27aa"], 2);
            
                assert.equal(transactionList.transactions.length, 1, "There should be only one transaction in the list");
        })

        it.skip('get nonce for valid address which is not registered on blockchain', async function(){
            const nonce = await web3.tolar.getNonce("54465F9c26960d2240054175f4C733be805bEb8C3E2320890a");

            assert.equal(nonce, 115792089237316195423570985008687907853269984665640564039457584007913129639935, "Nonce is not valid");
        })

        it('get nonce for valid Tolar address', async function(){
            const nonce = await web3.tolar.getNonce("547B51154F9446b465104F3aaea78D8d4A740279935359220d");
            
            assert.equal(nonce, 2, "Nonce is not valid");
        })

        it('get nonce for invalid Tolar address', async function(){
            try{
                await web3.tolar.getNonce("547B51154F9446b465104F3aaea78D8d4A740279935359220c");
            }
            catch(err){
                assert.equal(err.message, "Returned error: Address not in valid format");
            }
        })

        it('get nonce without address parameter', async function(){
            try{
                await web3.tolar.getNonce();
            }
            catch(err){
                assert.equal(err.message, 'Invalid number of parameters for "getNonce". Got 0 expected 1!');
            }
        })

        it('get nonce with invalid data type', async function(){
            try{
                await web3.tolar.getNonce(123);
            }
            catch(err){
                assert.equal(err.message, 'Returned error: invalid parameter: must be string, but is unsigned integer for parameter "address"');
            }
        })

        it('get nonce with empty string as hash', async function(){
            try{
                await web3.tolar.getNonce("");
            }
            catch(err){
                assert.equal(err.message, 'Returned error: Address not in valid format');
            }
        })

        it('get latest balance for valid address which is not registered on blockchain', async function(){
            const balance = await web3.tolar.getLatestBalance("54465F9c26960d2240054175f4C733be805bEb8C3E2320890a");

            assert.equal(balance.balance, '0', "Balance is not valid");
        })

        it('get latest balance for valid Tolar address', async function(){
            const balance = await web3.tolar.getLatestBalance("547B51154F9446b465104F3aaea78D8d4A740279935359220d");
            
            assert.equal(balance.balance, '99979999999958000', "Balance is not valid");
        })

        it('get latest balance for invalid Tolar address', async function(){
            try{
                await web3.tolar.getLatestBalance("547B51154F9446b465104F3aaea78D8d4A740279935359220c");
            }
            catch(err){
                assert.equal(err.message, "Returned error: Address not in valid format");
            }
        })

        it('get latest balance wihout address parameter', async function(){
            try{
                await web3.tolar.getLatestBalance();
            }
            catch(err){
                assert.equal(err.message, 'Invalid number of parameters for "getLatestBalance". Got 0 expected 1!');
            }
        })

        it('get latest balance with address parameter as empty string', async function(){
            try{
                await web3.tolar.getLatestBalance("");
            }
            catch(err){
                assert.equal(err.message, 'Returned error: Address not in valid format');
            }
        })

        it('get transaction receipt for valid transaction hash',async function(){
            const transactionReceipt = await web3.tolar.getTransactionReceipt("8d3d494351e27699ced96fea63e7432c98d4b472ec84972156bb34fe4710c52c");

            assert.equal(transactionReceipt.block_hash, "aef5767dd1d23cbe5d47a5974fcc3790169335c518550bfe0e79b52fc6a4c158", "Block hash is not valid");
            assert.equal(transactionReceipt.block_number, 44778, "Block number is not valid");
            assert.equal(transactionReceipt.excepted, false, "Excepted should be false");
            assert.equal(transactionReceipt.gas_used, "21000", "Gas used is not valid");
            assert.equal(transactionReceipt.logs.length, 0, "There should be no logs");
            assert.equal(transactionReceipt.new_address, "54000000000000000000000000000000000000000023199e2b", "New address is not valid");
            assert.equal(transactionReceipt.receiver_address, "54120f548e3f68a66158a653c4b0d5ede3a6f0bd5da7c8cf8a", "Receiver address is not valid");
            assert.equal(transactionReceipt.sender_address, "547b51154f9446b465104f3aaea78d8d4a740279935359220d", "Sender address is not valid");
            assert.equal(transactionReceipt.transaction_hash, "8d3d494351e27699ced96fea63e7432c98d4b472ec84972156bb34fe4710c52c", "Transaction hash is not valid");
            assert.equal(transactionReceipt.transaction_index, 0, "Transaction index should be 0");
        })

        it('get transaction receipt with invalid transaction hash', async function(){
            try{
                await web3.tolar.getTransactionReceipt("8d3d494351e27699ced96fea63e7432c98d4b472ec84972156bb34fe4710c52d");
            }
            catch(err){
                assert.equal(err.message, "Returned error: gRPC error code: 3; message: Transaction receipt with that hash doesn't exist; details: ");
            }
        })

        it('get transaction receipt with empty string as transaction hash', async function(){
            try{
                await web3.tolar.getTransactionReceipt("");
            }
            catch(err){
                assert.equal(err.message, "Returned error: Transaction hash parameter not in valid format");
            }
        })

        it('get transaction receipt without hash parameter', async function(){
            try{
                await web3.tolar.getTransactionReceipt();
            }
            catch(err){
                assert.equal(err.message, 'Invalid number of parameters for "getTransactionReceipt". Got 0 expected 1!');
            }
        })

        it('get transaction receipt with invalid data type as hash', async function(){
            try{
                await web3.tolar.getTransactionReceipt(123);
            }
            catch(err){
                assert.equal(err.message, 'Returned error: invalid parameter: must be string, but is unsigned integer for parameter "transaction_hash"');
            }
        })

        it('get transaction receipt for transactoin hash which contains logs',async function(){
            const transactionReceipt = await web3.tolar.getTransactionReceipt("c3118d3742b8224809a2b7949e88556f9e5af2042ef6328d70c5db6585db05af");


            assert.equal(transactionReceipt.block_hash, "2fb1404b618f4ae0903ebd69798edee4a1a0d6f92c8971629db9c030c723cd29", "Block hash is not valid");
            assert.equal(transactionReceipt.block_number, 50442, "Block number is not valid");
            assert.equal(transactionReceipt.excepted, false, "Excepted should be false");
            assert.equal(transactionReceipt.gas_used, "22859", "Gas used is not valid");
            assert.equal(transactionReceipt.logs[0].address, "54d41dfb580da8053d97a91227da9f2adc5a0376962f0f71d7", "Logs address is not valid");
            assert.equal(transactionReceipt.logs[0].data, "30303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303031", "Data is not valid");
            assert.equal(transactionReceipt.new_address, "54000000000000000000000000000000000000000023199e2b", "New address is not valid");
            assert.equal(transactionReceipt.receiver_address, "54d41dfb580da8053d97a91227da9f2adc5a0376962f0f71d7", "Receiver address is not valid");
            assert.equal(transactionReceipt.sender_address, "5412c347d6570bcdde3a89fca489f679b8b0ca22a5d4e3b6ca", "Sender address is not valid");
            assert.equal(transactionReceipt.transaction_hash, "c3118d3742b8224809a2b7949e88556f9e5af2042ef6328d70c5db6585db05af", "Transaction hash is not valid");
            assert.equal(transactionReceipt.transaction_index, 0, "Transaction index should be 0");

            console.log(transactionReceipt.logs[0].topics);
        })
        

    });
