import {
  APTOS_COIN,
  Aptos,
  AptosConfig,
  Network,
  NetworkToNetworkName,
} from "@aptos-labs/ts-sdk";

// Create an instance of the aptos sdk
const config = new AptosConfig({
  network: Network.TESTNET,
});
export const aptos = new Aptos(config);
