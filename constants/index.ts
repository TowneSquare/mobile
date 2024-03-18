export const APTOS_NODE_URL = 'https://fullnode.testnet.aptoslabs.com';

export const MAGIC_WALLET_ADDRESS =
  '0x906fd65afe31b7237cd4d7c4073d8bf76c61b6a24ec64dd26f0c16de5c2444d5';
export const CMC_PRO_API_KEY = '30bfbf51-ec33-485b-ace2-f6c0c401db6a';
export const SAMPLE_TRANSACTION_PAYLOAD = {
  type: 'entry_function_payload',
  function: '0x1::coin::transfer',
  type_arguments: ['0x1::aptos_coin::AptosCoin'],
  arguments: [MAGIC_WALLET_ADDRESS, 1000],
};

export const SAMPLE_MESSAGE_PAYLOAD = {
  message: 'Hello from Aptos Wallet Adapter',
  nonce: 'random_string',
};

export const coinType = {
  DOODOO:
    '0x73eb84966be67e4697fc5ae75173ca6c35089e802650f75422ab49a8729704ec::coin::DooDoo' as `${string}::${string}::${string}`,
  THL: '0x7fd500c11216f0fe3095d0c4b8aa4d64a4e2e04f83758462f2b127255643615::thl_coin::THL' as `${string}::${string}::${string}`,
  GUI: '0xe4ccb6d39136469f376242c31b34d10515c8eaaa38092f804db8e08a8f53c5b2::assets_v1::EchoCoin002' as `${string}::${string}::${string}`,
  USDC: '0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC' as `${string}::${string}::${string}`,
  APT: '0x1::aptos_coin::AptosCoin' as `${string}::${string}::${string}`,
};
