import {
  Aptos,
  AptosConfig,
  Network
} from "@aptos-labs/ts-sdk";

// Create an instance of the aptos sdk
const config = new AptosConfig({
  network: Network.MAINNET,
});
export const aptos = new Aptos(config);
