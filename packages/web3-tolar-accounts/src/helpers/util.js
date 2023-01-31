const bigintBuffer = require("bigint-buffer");
const utils = require("web3-utils");

const NetworkId = {
    MainNet: 1,
    TestNet: 2,
    StageNet: 3,
};

function loadProtoDefinitions(protoName) {
    return {
        service: require(`../gen/tolar/proto/${protoName}_grpc_pb.js`),
        msg: require(`../gen/tolar/proto/${protoName}_pb.js`),
    };
}

const account = loadProtoDefinitions("account");
const blockchain = loadProtoDefinitions("blockchain");
const tx = loadProtoDefinitions("transaction");
const common = loadProtoDefinitions("common");

function toU256(amount) {
    const result = bigintBuffer.toBufferBE(BigInt(amount), 256);
    const indexOf0 = result.findIndex((byte) => byte !== 0x00);

    return result.slice(indexOf0, result.length);
}

function removeHexPrefix(hash) {
    if (!hash.startsWith("0x")) {
        return hash;
    }

    return hash.slice(2);
}

function toFixedHexPlaces(hex, places) {
    hex = hex.replace(/^0x/, "");

    while (hex.length < places) {
        hex = `0${hex}`;
    }

    return hex;
}

function calculateTransactionHash(transactionBody) {
    const serializedTransaction = transactionBody.serializeBinary();
    return removeHexPrefix(utils.sha3(Buffer.from(serializedTransaction)));
}

module.exports = {
    account,
    blockchain,
    tx,
    common,
    toU256,
    NetworkId,
    removeHexPrefix,
    toFixedHexPlaces,
    calculateTransactionHash,
};
