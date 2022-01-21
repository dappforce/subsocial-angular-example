const baseNodeAddress = 'dev-subsocial.codebridge.tech/';
const baseNodeUrl = 'https://' + baseNodeAddress;

export const environment = {
  baseUrl: 'http://localhost:4000/',
  production: false,
  ipfsUrl: 'https://app.subsocial.network/ipfs/ipfs/',
  domainUrl: 'http://localhost:4200/',
  appName: 'Subsocial Angular',
  substrateNodeUrl:  'wss://rpc.subsocial.network',
  offchainUrl: 'https://app.subsocial.network/offchain',
  offchainWs: `wss://app.subsocial.network/notif-ws`,
  addFileUrl: `https://app.subsocial.network/offchain/v1/ipfs/addFile`,
  ipfsNodeUrl: 'https://staging.subsocial.network/ipfs-1',
  currency: 'SUB',
  decimals: 11,
  recommendedSpaceIds: [
    '1',
    '1354',
    '1573',
    '1599',
    '1040',
    '1624',
    '1625',
    '2425',
    '1162',
    '1141',
    '1049',
    '1163',
    '1036',
    '1042',
    '1265',
    '1238',
    '1224',
    '1731',
    '1998',
    '2984',
    '1421',
    '1442',
    '1231',
    '1273',
    '1115',
    '1112',
    '1002',
    '1013',
    '4306',
    '4544',
  ],
  loadImageLimitMb: 2,
  enableSessionKey: true,
};
