require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million public hunt beach olympic slice'; 
let testAccounts = [
"0x74880917a77c537a6787aaa02740c33ac2f6112c9d8d003774029752b1a57b6a",
"0x55476a23df840d3782679f568ec57edd4a8dd63a51f0913183b46c6b8a3ea6b5",
"0xf42493537984c129715ee4cc2b93db7e47b6a0a93ddf7fdd09e50d4551566244",
"0x1ee7510845ac15cb2bf51a00f4e6f1f1f15ecd9c1af1188e8312ad89971f3372",
"0x42c27fe5ed46e7870b35c349264f0ed420d1c26ff61d489a1553f311677c2ce0",
"0x081130c4f51abf3afe67d22bc2f2a1965e9a5734fa8bea1e551b55b83108f0f3",
"0x92902204cc6acebf5cd8daacc00387fa5c9792e46e8c0b38f7dbd4c8e9853bae",
"0xbadfa92bd37ab1e5aa0c6a9379c79ef5c7264c8d4ea6a1299fd198ed080a2f9d",
"0xc1256471511ccfaf693fa27244313fe31ae09738b65b3c140bdd95c3a5a42d96",
"0xbbf3b88c856f93de28d7e21bc16a3b1d3565642a4d1d377226fdf3ed0b0d5def"
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
            version: '^0.5.11'
        }
    }
};
