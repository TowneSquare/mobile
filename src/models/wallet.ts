export interface TokenDetails {
  assetBalance: string;
  assetImage: string;
  assetMarketPrice: string;
  assetName: string;
  assetPercentChange24h: string;
  assetSymbol: string;
}

export interface Coin {
  amount: any;
  asset_type: string;
  is_frozen: boolean;
  is_primary: boolean;
  last_transaction_timestamp: any;
  last_transaction_version: any;
  owner_address: string;
  storage_id: string;
  token_standard: string;
  image_uri?: string | null;
  decimals?: number | 0;
  assetBalance?: string | null;
  assetMarketPrice?: string | null;
  assetPercentChange24h?: string | null;
  assetImage?: string | null;
  assetSymbol?: string | null;
  assetName?: string | null;
  coinmarketcap_id?: number | null;
  metadata?: {
    token_standard: string;
    symbol: string;
    supply_aggregator_table_key_v1?: string | null;
    supply_aggregator_table_handle_v1?: string | null;
    project_uri?: string | null;
    name: string;
    last_transaction_version: any;
    last_transaction_timestamp: any;
    icon_uri?: string | null;
    decimals: number;
    creator_address: string;
    asset_type: string;
  } | null;
}
