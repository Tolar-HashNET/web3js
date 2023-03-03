var Web3 = require('../packages/web3')
var assert = require('assert');

    describe('tolar Network API', function() {
        before(async function() {
            web3 = new Web3('https://jsongw.stagenet.tolar.io/jsonrpc');
        })

        it('check peer count', async function(){
            const peerCount = await web3.tolar.net.peerCount();
            
            assert.equal(peerCount, 6)
        });

        it('check master node count', async function(){
            const masterNodeCount = await web3.tolar.net.masterNodeCount();
            
            assert.equal(masterNodeCount, 7);
        })

        it('check max peer count', async function(){
            const maxPeerCount = await web3.tolar.net.maxPeerCount();
            
            assert.equal(maxPeerCount, 42);
        })
    });
