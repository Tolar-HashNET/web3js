// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tolar_proto_account_pb = require('../../tolar/proto/account_pb.js');

function serialize_tolar_proto_ChangeAddressPasswordRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ChangeAddressPasswordRequest)) {
    throw new Error('Expected argument of type tolar.proto.ChangeAddressPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ChangeAddressPasswordRequest(buffer_arg) {
  return tolar_proto_account_pb.ChangeAddressPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ChangeAddressPasswordResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ChangeAddressPasswordResponse)) {
    throw new Error('Expected argument of type tolar.proto.ChangeAddressPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ChangeAddressPasswordResponse(buffer_arg) {
  return tolar_proto_account_pb.ChangeAddressPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ChangePasswordRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type tolar.proto.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ChangePasswordRequest(buffer_arg) {
  return tolar_proto_account_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ChangePasswordResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ChangePasswordResponse)) {
    throw new Error('Expected argument of type tolar.proto.ChangePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ChangePasswordResponse(buffer_arg) {
  return tolar_proto_account_pb.ChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_CreateNewAddressRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.CreateNewAddressRequest)) {
    throw new Error('Expected argument of type tolar.proto.CreateNewAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_CreateNewAddressRequest(buffer_arg) {
  return tolar_proto_account_pb.CreateNewAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_CreateNewAddressResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.CreateNewAddressResponse)) {
    throw new Error('Expected argument of type tolar.proto.CreateNewAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_CreateNewAddressResponse(buffer_arg) {
  return tolar_proto_account_pb.CreateNewAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_CreateRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.CreateRequest)) {
    throw new Error('Expected argument of type tolar.proto.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_CreateRequest(buffer_arg) {
  return tolar_proto_account_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_CreateResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.CreateResponse)) {
    throw new Error('Expected argument of type tolar.proto.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_CreateResponse(buffer_arg) {
  return tolar_proto_account_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ExportKeyFileRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ExportKeyFileRequest)) {
    throw new Error('Expected argument of type tolar.proto.ExportKeyFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ExportKeyFileRequest(buffer_arg) {
  return tolar_proto_account_pb.ExportKeyFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ExportKeyFileResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ExportKeyFileResponse)) {
    throw new Error('Expected argument of type tolar.proto.ExportKeyFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ExportKeyFileResponse(buffer_arg) {
  return tolar_proto_account_pb.ExportKeyFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ImportKeyFileRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ImportKeyFileRequest)) {
    throw new Error('Expected argument of type tolar.proto.ImportKeyFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ImportKeyFileRequest(buffer_arg) {
  return tolar_proto_account_pb.ImportKeyFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ImportKeyFileResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ImportKeyFileResponse)) {
    throw new Error('Expected argument of type tolar.proto.ImportKeyFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ImportKeyFileResponse(buffer_arg) {
  return tolar_proto_account_pb.ImportKeyFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ImportRawPrivateKeyRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ImportRawPrivateKeyRequest)) {
    throw new Error('Expected argument of type tolar.proto.ImportRawPrivateKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ImportRawPrivateKeyRequest(buffer_arg) {
  return tolar_proto_account_pb.ImportRawPrivateKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ImportRawPrivateKeyResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ImportRawPrivateKeyResponse)) {
    throw new Error('Expected argument of type tolar.proto.ImportRawPrivateKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ImportRawPrivateKeyResponse(buffer_arg) {
  return tolar_proto_account_pb.ImportRawPrivateKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ListAddressesRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ListAddressesRequest)) {
    throw new Error('Expected argument of type tolar.proto.ListAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ListAddressesRequest(buffer_arg) {
  return tolar_proto_account_pb.ListAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ListAddressesResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ListAddressesResponse)) {
    throw new Error('Expected argument of type tolar.proto.ListAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ListAddressesResponse(buffer_arg) {
  return tolar_proto_account_pb.ListAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ListBalancePerAddressRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ListBalancePerAddressRequest)) {
    throw new Error('Expected argument of type tolar.proto.ListBalancePerAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ListBalancePerAddressRequest(buffer_arg) {
  return tolar_proto_account_pb.ListBalancePerAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_ListBalancePerAddressResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.ListBalancePerAddressResponse)) {
    throw new Error('Expected argument of type tolar.proto.ListBalancePerAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_ListBalancePerAddressResponse(buffer_arg) {
  return tolar_proto_account_pb.ListBalancePerAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_OpenRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.OpenRequest)) {
    throw new Error('Expected argument of type tolar.proto.OpenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_OpenRequest(buffer_arg) {
  return tolar_proto_account_pb.OpenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_OpenResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.OpenResponse)) {
    throw new Error('Expected argument of type tolar.proto.OpenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_OpenResponse(buffer_arg) {
  return tolar_proto_account_pb.OpenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_SendDeployContractTransactionRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.SendDeployContractTransactionRequest)) {
    throw new Error('Expected argument of type tolar.proto.SendDeployContractTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_SendDeployContractTransactionRequest(buffer_arg) {
  return tolar_proto_account_pb.SendDeployContractTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_SendExecuteFunctionTransactionRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.SendExecuteFunctionTransactionRequest)) {
    throw new Error('Expected argument of type tolar.proto.SendExecuteFunctionTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_SendExecuteFunctionTransactionRequest(buffer_arg) {
  return tolar_proto_account_pb.SendExecuteFunctionTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_SendFundTransferTransactionRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.SendFundTransferTransactionRequest)) {
    throw new Error('Expected argument of type tolar.proto.SendFundTransferTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_SendFundTransferTransactionRequest(buffer_arg) {
  return tolar_proto_account_pb.SendFundTransferTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_SendRawTransactionRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.SendRawTransactionRequest)) {
    throw new Error('Expected argument of type tolar.proto.SendRawTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_SendRawTransactionRequest(buffer_arg) {
  return tolar_proto_account_pb.SendRawTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_SendTransactionsResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.SendTransactionsResponse)) {
    throw new Error('Expected argument of type tolar.proto.SendTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_SendTransactionsResponse(buffer_arg) {
  return tolar_proto_account_pb.SendTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_VerifyAddressRequest(arg) {
  if (!(arg instanceof tolar_proto_account_pb.VerifyAddressRequest)) {
    throw new Error('Expected argument of type tolar.proto.VerifyAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_VerifyAddressRequest(buffer_arg) {
  return tolar_proto_account_pb.VerifyAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tolar_proto_VerifyAddressResponse(arg) {
  if (!(arg instanceof tolar_proto_account_pb.VerifyAddressResponse)) {
    throw new Error('Expected argument of type tolar.proto.VerifyAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tolar_proto_VerifyAddressResponse(buffer_arg) {
  return tolar_proto_account_pb.VerifyAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountServiceService = exports.AccountServiceService = {
  create: {
    path: '/tolar.proto.AccountService/Create',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.CreateRequest,
    responseType: tolar_proto_account_pb.CreateResponse,
    requestSerialize: serialize_tolar_proto_CreateRequest,
    requestDeserialize: deserialize_tolar_proto_CreateRequest,
    responseSerialize: serialize_tolar_proto_CreateResponse,
    responseDeserialize: deserialize_tolar_proto_CreateResponse,
  },
  open: {
    path: '/tolar.proto.AccountService/Open',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.OpenRequest,
    responseType: tolar_proto_account_pb.OpenResponse,
    requestSerialize: serialize_tolar_proto_OpenRequest,
    requestDeserialize: deserialize_tolar_proto_OpenRequest,
    responseSerialize: serialize_tolar_proto_OpenResponse,
    responseDeserialize: deserialize_tolar_proto_OpenResponse,
  },
  changePassword: {
    path: '/tolar.proto.AccountService/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.ChangePasswordRequest,
    responseType: tolar_proto_account_pb.ChangePasswordResponse,
    requestSerialize: serialize_tolar_proto_ChangePasswordRequest,
    requestDeserialize: deserialize_tolar_proto_ChangePasswordRequest,
    responseSerialize: serialize_tolar_proto_ChangePasswordResponse,
    responseDeserialize: deserialize_tolar_proto_ChangePasswordResponse,
  },
  listAddresses: {
    path: '/tolar.proto.AccountService/ListAddresses',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.ListAddressesRequest,
    responseType: tolar_proto_account_pb.ListAddressesResponse,
    requestSerialize: serialize_tolar_proto_ListAddressesRequest,
    requestDeserialize: deserialize_tolar_proto_ListAddressesRequest,
    responseSerialize: serialize_tolar_proto_ListAddressesResponse,
    responseDeserialize: deserialize_tolar_proto_ListAddressesResponse,
  },
  listBalancePerAddress: {
    path: '/tolar.proto.AccountService/ListBalancePerAddress',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.ListBalancePerAddressRequest,
    responseType: tolar_proto_account_pb.ListBalancePerAddressResponse,
    requestSerialize: serialize_tolar_proto_ListBalancePerAddressRequest,
    requestDeserialize: deserialize_tolar_proto_ListBalancePerAddressRequest,
    responseSerialize: serialize_tolar_proto_ListBalancePerAddressResponse,
    responseDeserialize: deserialize_tolar_proto_ListBalancePerAddressResponse,
  },
  verifyAddress: {
    path: '/tolar.proto.AccountService/VerifyAddress',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.VerifyAddressRequest,
    responseType: tolar_proto_account_pb.VerifyAddressResponse,
    requestSerialize: serialize_tolar_proto_VerifyAddressRequest,
    requestDeserialize: deserialize_tolar_proto_VerifyAddressRequest,
    responseSerialize: serialize_tolar_proto_VerifyAddressResponse,
    responseDeserialize: deserialize_tolar_proto_VerifyAddressResponse,
  },
  createNewAddress: {
    path: '/tolar.proto.AccountService/CreateNewAddress',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.CreateNewAddressRequest,
    responseType: tolar_proto_account_pb.CreateNewAddressResponse,
    requestSerialize: serialize_tolar_proto_CreateNewAddressRequest,
    requestDeserialize: deserialize_tolar_proto_CreateNewAddressRequest,
    responseSerialize: serialize_tolar_proto_CreateNewAddressResponse,
    responseDeserialize: deserialize_tolar_proto_CreateNewAddressResponse,
  },
  changeAddressPassword: {
    path: '/tolar.proto.AccountService/ChangeAddressPassword',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.ChangeAddressPasswordRequest,
    responseType: tolar_proto_account_pb.ChangeAddressPasswordResponse,
    requestSerialize: serialize_tolar_proto_ChangeAddressPasswordRequest,
    requestDeserialize: deserialize_tolar_proto_ChangeAddressPasswordRequest,
    responseSerialize: serialize_tolar_proto_ChangeAddressPasswordResponse,
    responseDeserialize: deserialize_tolar_proto_ChangeAddressPasswordResponse,
  },
  exportKeyFile: {
    path: '/tolar.proto.AccountService/ExportKeyFile',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.ExportKeyFileRequest,
    responseType: tolar_proto_account_pb.ExportKeyFileResponse,
    requestSerialize: serialize_tolar_proto_ExportKeyFileRequest,
    requestDeserialize: deserialize_tolar_proto_ExportKeyFileRequest,
    responseSerialize: serialize_tolar_proto_ExportKeyFileResponse,
    responseDeserialize: deserialize_tolar_proto_ExportKeyFileResponse,
  },
  importKeyFile: {
    path: '/tolar.proto.AccountService/ImportKeyFile',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.ImportKeyFileRequest,
    responseType: tolar_proto_account_pb.ImportKeyFileResponse,
    requestSerialize: serialize_tolar_proto_ImportKeyFileRequest,
    requestDeserialize: deserialize_tolar_proto_ImportKeyFileRequest,
    responseSerialize: serialize_tolar_proto_ImportKeyFileResponse,
    responseDeserialize: deserialize_tolar_proto_ImportKeyFileResponse,
  },
  importRawPrivateKey: {
    path: '/tolar.proto.AccountService/ImportRawPrivateKey',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.ImportRawPrivateKeyRequest,
    responseType: tolar_proto_account_pb.ImportRawPrivateKeyResponse,
    requestSerialize: serialize_tolar_proto_ImportRawPrivateKeyRequest,
    requestDeserialize: deserialize_tolar_proto_ImportRawPrivateKeyRequest,
    responseSerialize: serialize_tolar_proto_ImportRawPrivateKeyResponse,
    responseDeserialize: deserialize_tolar_proto_ImportRawPrivateKeyResponse,
  },
  sendRawTransaction: {
    path: '/tolar.proto.AccountService/SendRawTransaction',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.SendRawTransactionRequest,
    responseType: tolar_proto_account_pb.SendTransactionsResponse,
    requestSerialize: serialize_tolar_proto_SendRawTransactionRequest,
    requestDeserialize: deserialize_tolar_proto_SendRawTransactionRequest,
    responseSerialize: serialize_tolar_proto_SendTransactionsResponse,
    responseDeserialize: deserialize_tolar_proto_SendTransactionsResponse,
  },
  sendFundTransferTransaction: {
    path: '/tolar.proto.AccountService/SendFundTransferTransaction',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.SendFundTransferTransactionRequest,
    responseType: tolar_proto_account_pb.SendTransactionsResponse,
    requestSerialize: serialize_tolar_proto_SendFundTransferTransactionRequest,
    requestDeserialize: deserialize_tolar_proto_SendFundTransferTransactionRequest,
    responseSerialize: serialize_tolar_proto_SendTransactionsResponse,
    responseDeserialize: deserialize_tolar_proto_SendTransactionsResponse,
  },
  sendDeployContractTransaction: {
    path: '/tolar.proto.AccountService/SendDeployContractTransaction',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.SendDeployContractTransactionRequest,
    responseType: tolar_proto_account_pb.SendTransactionsResponse,
    requestSerialize: serialize_tolar_proto_SendDeployContractTransactionRequest,
    requestDeserialize: deserialize_tolar_proto_SendDeployContractTransactionRequest,
    responseSerialize: serialize_tolar_proto_SendTransactionsResponse,
    responseDeserialize: deserialize_tolar_proto_SendTransactionsResponse,
  },
  sendExecuteFunctionTransaction: {
    path: '/tolar.proto.AccountService/SendExecuteFunctionTransaction',
    requestStream: false,
    responseStream: false,
    requestType: tolar_proto_account_pb.SendExecuteFunctionTransactionRequest,
    responseType: tolar_proto_account_pb.SendTransactionsResponse,
    requestSerialize: serialize_tolar_proto_SendExecuteFunctionTransactionRequest,
    requestDeserialize: deserialize_tolar_proto_SendExecuteFunctionTransactionRequest,
    responseSerialize: serialize_tolar_proto_SendTransactionsResponse,
    responseDeserialize: deserialize_tolar_proto_SendTransactionsResponse,
  },
};

exports.AccountServiceClient = grpc.makeGenericClientConstructor(AccountServiceService);
