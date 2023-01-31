// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tolar_proto_blockchain_pb = require('../../tolar/proto/blockchain_pb.js');
var tolar_proto_storage_pb = require('../../tolar/proto/storage_pb.js');
var tolar_proto_transaction_pb = require('../../tolar/proto/transaction_pb.js');

function serialize_tolar_proto_GetBalanceRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetBalanceRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetBalanceRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetBalanceResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetBalanceResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetBalanceResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetBlockByHashRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetBlockByHashRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetBlockByHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetBlockByHashRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetBlockByHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetBlockByIndexRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetBlockByIndexRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetBlockByIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetBlockByIndexRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetBlockByIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetBlockCountRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetBlockCountRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetBlockCountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetBlockCountRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetBlockCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetBlockCountResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetBlockCountResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetBlockCountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetBlockCountResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetBlockCountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetBlockResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetBlockResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetBlockResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetBlockResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetBlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetBlockchainInfoRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetBlockchainInfoRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetBlockchainInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetBlockchainInfoRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetBlockchainInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetBlockchainInfoResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetBlockchainInfoResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetBlockchainInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetBlockchainInfoResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetBlockchainInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetCompleteBlockByIndexResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetCompleteBlockByIndexResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetCompleteBlockByIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetCompleteBlockByIndexResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetCompleteBlockByIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetGasEstimateResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetGasEstimateResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetGasEstimateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetGasEstimateResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetGasEstimateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetLatestBlockRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetLatestBlockRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetLatestBlockRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetLatestBlockRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetLatestBlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetNonceRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetNonceRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetNonceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetNonceRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetNonceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetNonceResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetNonceResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetNonceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetNonceResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetNonceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetPaginatedBlocksByIndexRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetPaginatedBlocksByIndexRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetPaginatedBlocksByIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetPaginatedBlocksByIndexRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetPaginatedBlocksByIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetPaginatedBlocksByIndexResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetPaginatedBlocksByIndexResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetPaginatedBlocksByIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetPaginatedBlocksByIndexResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetPaginatedBlocksByIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetPastEventsRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetPastEventsRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetPastEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetPastEventsRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetPastEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetPastEventsResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetPastEventsResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetPastEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetPastEventsResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetPastEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetTransactionListRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetTransactionListRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetTransactionListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetTransactionListRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetTransactionListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetTransactionListResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetTransactionListResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetTransactionListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetTransactionListResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetTransactionListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetTransactionReceiptRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetTransactionReceiptRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetTransactionReceiptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetTransactionReceiptRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetTransactionReceiptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetTransactionReceiptResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetTransactionReceiptResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetTransactionReceiptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetTransactionReceiptResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetTransactionReceiptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetTransactionRequest(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetTransactionRequest)) {
    throw new Error('Expected argument of type tolar.proto.GetTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetTransactionRequest(buffer_arg) {
  return tolar_proto_blockchain_pb.GetTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_GetTransactionResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.GetTransactionResponse)) {
    throw new Error('Expected argument of type tolar.proto.GetTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_GetTransactionResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.GetTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_TryCallTransactionResponse(arg) {
  if (!(arg instanceof tolar_proto_blockchain_pb.TryCallTransactionResponse)) {
    throw new Error('Expected argument of type tolar.proto.TryCallTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_TryCallTransactionResponse(buffer_arg) {
  return tolar_proto_blockchain_pb.TryCallTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_storage_Block(arg) {
  if (!(arg instanceof tolar_proto_storage_pb.Block)) {
    throw new Error('Expected argument of type tolar.proto.storage.Block');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_storage_Block(buffer_arg) {
  return tolar_proto_storage_pb.Block.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_tx_Transaction(arg) {
  if (!(arg instanceof tolar_proto_transaction_pb.Transaction)) {
    throw new Error('Expected argument of type tolar.proto.tx.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_tx_Transaction(buffer_arg) {
  return tolar_proto_transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlockchainServiceService = exports.BlockchainServiceService = {
  getBlockCount: {
    path: '/tolar.proto.BlockchainService/GetBlockCount',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetBlockCountRequest,
    responseType: tolar_proto_blockchain_pb.GetBlockCountResponse,
    requestSerialize: serialize_tolar_proto_GetBlockCountRequest,
    requestDeserialize: deserialize_tolar_proto_GetBlockCountRequest,
    responseSerialize: serialize_tolar_proto_GetBlockCountResponse,
    responseDeserialize: deserialize_tolar_proto_GetBlockCountResponse,
  },
  getLatestBlock: {
    path: '/tolar.proto.BlockchainService/GetLatestBlock',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetLatestBlockRequest,
    responseType: tolar_proto_blockchain_pb.GetBlockResponse,
    requestSerialize: serialize_tolar_proto_GetLatestBlockRequest,
    requestDeserialize: deserialize_tolar_proto_GetLatestBlockRequest,
    responseSerialize: serialize_tolar_proto_GetBlockResponse,
    responseDeserialize: deserialize_tolar_proto_GetBlockResponse,
  },
  getBlockByHash: {
    path: '/tolar.proto.BlockchainService/GetBlockByHash',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetBlockByHashRequest,
    responseType: tolar_proto_blockchain_pb.GetBlockResponse,
    requestSerialize: serialize_tolar_proto_GetBlockByHashRequest,
    requestDeserialize: deserialize_tolar_proto_GetBlockByHashRequest,
    responseSerialize: serialize_tolar_proto_GetBlockResponse,
    responseDeserialize: deserialize_tolar_proto_GetBlockResponse,
  },
  getBlockByIndex: {
    path: '/tolar.proto.BlockchainService/GetBlockByIndex',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetBlockByIndexRequest,
    responseType: tolar_proto_blockchain_pb.GetBlockResponse,
    requestSerialize: serialize_tolar_proto_GetBlockByIndexRequest,
    requestDeserialize: deserialize_tolar_proto_GetBlockByIndexRequest,
    responseSerialize: serialize_tolar_proto_GetBlockResponse,
    responseDeserialize: deserialize_tolar_proto_GetBlockResponse,
  },
  deprecatedGetPaginatedBlocksByIndexStream: {
    path: '/tolar.proto.BlockchainService/DeprecatedGetPaginatedBlocksByIndexStream',
    requestStream: false,
    responseStream: true,
    requestType: tolar_proto_blockchain_pb.GetPaginatedBlocksByIndexRequest,
    responseType: tolar_proto_storage_pb.Block,
    requestSerialize: serialize_tolar_proto_GetPaginatedBlocksByIndexRequest,
    requestDeserialize: deserialize_tolar_proto_GetPaginatedBlocksByIndexRequest,
    responseSerialize: serialize_tolar_proto_storage_Block,
    responseDeserialize: deserialize_tolar_proto_storage_Block,
  },
  getPaginatedBlocksByIndexStream: {
    path: '/tolar.proto.BlockchainService/GetPaginatedBlocksByIndexStream',
    requestStream: false,
    responseStream: true,
    requestType: tolar_proto_blockchain_pb.GetPaginatedBlocksByIndexRequest,
    responseType: tolar_proto_blockchain_pb.GetPaginatedBlocksByIndexResponse,
    requestSerialize: serialize_tolar_proto_GetPaginatedBlocksByIndexRequest,
    requestDeserialize: deserialize_tolar_proto_GetPaginatedBlocksByIndexRequest,
    responseSerialize: serialize_tolar_proto_GetPaginatedBlocksByIndexResponse,
    responseDeserialize: deserialize_tolar_proto_GetPaginatedBlocksByIndexResponse,
  },
  getCompleteBlockByIndex: {
    path: '/tolar.proto.BlockchainService/GetCompleteBlockByIndex',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetBlockByIndexRequest,
    responseType: tolar_proto_blockchain_pb.GetCompleteBlockByIndexResponse,
    requestSerialize: serialize_tolar_proto_GetBlockByIndexRequest,
    requestDeserialize: deserialize_tolar_proto_GetBlockByIndexRequest,
    responseSerialize: serialize_tolar_proto_GetCompleteBlockByIndexResponse,
    responseDeserialize: deserialize_tolar_proto_GetCompleteBlockByIndexResponse,
  },
  getTransaction: {
    path: '/tolar.proto.BlockchainService/GetTransaction',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetTransactionRequest,
    responseType: tolar_proto_blockchain_pb.GetTransactionResponse,
    requestSerialize: serialize_tolar_proto_GetTransactionRequest,
    requestDeserialize: deserialize_tolar_proto_GetTransactionRequest,
    responseSerialize: serialize_tolar_proto_GetTransactionResponse,
    responseDeserialize: deserialize_tolar_proto_GetTransactionResponse,
  },
  getTransactionReceipt: {
    path: '/tolar.proto.BlockchainService/GetTransactionReceipt',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetTransactionReceiptRequest,
    responseType: tolar_proto_blockchain_pb.GetTransactionReceiptResponse,
    requestSerialize: serialize_tolar_proto_GetTransactionReceiptRequest,
    requestDeserialize: deserialize_tolar_proto_GetTransactionReceiptRequest,
    responseSerialize: serialize_tolar_proto_GetTransactionReceiptResponse,
    responseDeserialize: deserialize_tolar_proto_GetTransactionReceiptResponse,
  },
  getBlockchainInfo: {
    path: '/tolar.proto.BlockchainService/GetBlockchainInfo',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetBlockchainInfoRequest,
    responseType: tolar_proto_blockchain_pb.GetBlockchainInfoResponse,
    requestSerialize: serialize_tolar_proto_GetBlockchainInfoRequest,
    requestDeserialize: deserialize_tolar_proto_GetBlockchainInfoRequest,
    responseSerialize: serialize_tolar_proto_GetBlockchainInfoResponse,
    responseDeserialize: deserialize_tolar_proto_GetBlockchainInfoResponse,
  },
  getTransactionList: {
    path: '/tolar.proto.BlockchainService/GetTransactionList',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetTransactionListRequest,
    responseType: tolar_proto_blockchain_pb.GetTransactionListResponse,
    requestSerialize: serialize_tolar_proto_GetTransactionListRequest,
    requestDeserialize: deserialize_tolar_proto_GetTransactionListRequest,
    responseSerialize: serialize_tolar_proto_GetTransactionListResponse,
    responseDeserialize: deserialize_tolar_proto_GetTransactionListResponse,
  },
  getBalance: {
    path: '/tolar.proto.BlockchainService/GetBalance',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetBalanceRequest,
    responseType: tolar_proto_blockchain_pb.GetBalanceResponse,
    requestSerialize: serialize_tolar_proto_GetBalanceRequest,
    requestDeserialize: deserialize_tolar_proto_GetBalanceRequest,
    responseSerialize: serialize_tolar_proto_GetBalanceResponse,
    responseDeserialize: deserialize_tolar_proto_GetBalanceResponse,
  },
  getLatestBalance: {
    path: '/tolar.proto.BlockchainService/GetLatestBalance',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetBalanceRequest,
    responseType: tolar_proto_blockchain_pb.GetBalanceResponse,
    requestSerialize: serialize_tolar_proto_GetBalanceRequest,
    requestDeserialize: deserialize_tolar_proto_GetBalanceRequest,
    responseSerialize: serialize_tolar_proto_GetBalanceResponse,
    responseDeserialize: deserialize_tolar_proto_GetBalanceResponse,
  },
  getNonce: {
    path: '/tolar.proto.BlockchainService/GetNonce',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetNonceRequest,
    responseType: tolar_proto_blockchain_pb.GetNonceResponse,
    requestSerialize: serialize_tolar_proto_GetNonceRequest,
    requestDeserialize: deserialize_tolar_proto_GetNonceRequest,
    responseSerialize: serialize_tolar_proto_GetNonceResponse,
    responseDeserialize: deserialize_tolar_proto_GetNonceResponse,
  },
  tryCallTransaction: {
    path: '/tolar.proto.BlockchainService/TryCallTransaction',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_transaction_pb.Transaction,
    responseType: tolar_proto_blockchain_pb.TryCallTransactionResponse,
    requestSerialize: serialize_tolar_proto_tx_Transaction,
    requestDeserialize: deserialize_tolar_proto_tx_Transaction,
    responseSerialize: serialize_tolar_proto_TryCallTransactionResponse,
    responseDeserialize: deserialize_tolar_proto_TryCallTransactionResponse,
  },
  getGasEstimate: {
    path: '/tolar.proto.BlockchainService/GetGasEstimate',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_transaction_pb.Transaction,
    responseType: tolar_proto_blockchain_pb.GetGasEstimateResponse,
    requestSerialize: serialize_tolar_proto_tx_Transaction,
    requestDeserialize: deserialize_tolar_proto_tx_Transaction,
    responseSerialize: serialize_tolar_proto_GetGasEstimateResponse,
    responseDeserialize: deserialize_tolar_proto_GetGasEstimateResponse,
  },
  getPastEvents: {
    path: '/tolar.proto.BlockchainService/GetPastEvents',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_blockchain_pb.GetPastEventsRequest,
    responseType: tolar_proto_blockchain_pb.GetPastEventsResponse,
    requestSerialize: serialize_tolar_proto_GetPastEventsRequest,
    requestDeserialize: deserialize_tolar_proto_GetPastEventsRequest,
    responseSerialize: serialize_tolar_proto_GetPastEventsResponse,
    responseDeserialize: deserialize_tolar_proto_GetPastEventsResponse,
  },
};

exports.BlockchainServiceClient = grpc.makeGenericClientConstructor(BlockchainServiceService);
