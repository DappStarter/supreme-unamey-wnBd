require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note stick slow hope cloth equal gather'; 
let testAccounts = [
"0x3430ef4490d7397961482f01dd732f9a6f9d6150837b572b9d45c380680508ae",
"0xef141cbd312a20a94cfc891d4a9b9226df148daf85aca885b41956eba5495609",
"0x5cd28779b40a6e2f0f619d1a5c4a19a151c3ae3fcae01e089287422958f50866",
"0x2f50c4c3d9d1fb745c1964b2740d4eced2da1c5888dc50d0e4373b4abbab78f6",
"0x80aff729bab934abbd07bb51c2f6f4f0f3db33c601036bde1717f357d2176444",
"0x0156e3539c9ff9749e182bc81b39f0c9df3f5ebb0c410e429e96d69071b80bd1",
"0xfa0abd62ea916f0b93a0985372e4bdd130e670dcac21e2bed70cf00356b9204b",
"0xf99751886db9efcc6885b70c7c94e6e4ad01e6669159714d71f2a6561c532c83",
"0xa9ad909646dc7a5c2e7e31fc76f11c9f2ed896d8aa4585d144586cea07993cb6",
"0x5606f536ee2cffb8c0ed344751108de56991a006c650719a8d383499d6b935b1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

