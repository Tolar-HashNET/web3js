import { Method } from "web3-core-method";

var Method = require("web3-core-method");
var _ = require("underscore");

var Accounts = require("@tolar/web3-tolar-accounts");

export class TolarAccounts extends Accounts {
    methods: Method[] = [
        new Method({
            name: "createRemote",
            call: "account_create",
            params: 1,
        }),
        new Method({
            name: "openRemote",
            call: "account_open",
            params: 1,
        }),
        new Method({
            name: "listAddresses",
            call: "account_listAddresses",
            params: 0,
        }),

        new Method({
            name: "verifyAddress",
            call: "account_verifyAddress",
            params: 1,
        }),
        new Method({
            name: "createNewAddress",
            call: "account_createNewAddress",
            params: 3,
            inputFormatter: [null, null, null],
        }),
        new Method({
            name: "exportKeyFile",
            call: "account_exportKeyFile",
            params: 1,
        }),
        new Method({
            name: "importKeyFile",
            call: "account_importKeyFile",
            inputFormatter: [(a: any) => a, null, (a: any) => a || "", null],
            params: 4,
        }),
        new Method({
            name: "listBalancePerAddress",
            call: "account_listBalancePerAddress",
            params: 0,
        }),
        new Method({
            name: "sendRawTransaction",
            call: "account_sendRawTransaction",
            params: 8,
        }),
        new Method({
            name: "changePassword",
            call: "account_changePassword",
            params: 2,
        }),
        new Method({
            name: "changeAddressPassword",
            call: "account_changeAddressPasswords",
            params: 3,
        }),
        new Method({
            name: "sendFundTransferTransaction",
            call: "account_sendFundTransferTransaction",
            params: 7,
        }),
        new Method({
            name: "sendDeployContractTransaction",
            call: "account_sendDeployContractTransaction",
            params: 7,
        }),
        new Method({
            name: "sendExecuteFunctionTransaction",
            call: "account_sendExecuteFunctionTransaction",
            params: 8,
        }),
        new Method({
            name: "getHashHex",
            call: "util_getHashHex",
            params: 1,
        }),
    ];
    constructor(private web3: any) {
        super(web3);
        this.extendAccounts();
    }

    extendAccounts() {
        _.each(this.methods, (method: any) => {
            method.attachToObject(this);
            method.setRequestManager((this.web3 as any)._requestManager);
        });
    }
}
