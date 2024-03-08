import axios from "axios";
import { NFT_SCAN, APTOS_NAME_URL, BACKEND_URL } from "../../../../config/env";
import { useQuery } from "react-query";
import { UserNFT } from "../../../controller/UserController/models";
import { Coin } from "../../../models/wallet";
import { aptos } from "../../../../config/wallet";
import { CMC_PRO_API_KEY } from "../../../../constants";
import { getProfile } from "../..";

const baseUrl = "https://pro-api.coinmarketcap.com";

const BALANCE_URL = `${baseUrl}/v1/cryptocurrency/quotes/latest`;

const IMAGE_URL = `${baseUrl}/v2/cryptocurrency/info`;

const getTokenBalances = async (symbols: string[]) => {
  const response = await axios.get(BALANCE_URL, {
    params: {
      symbol: symbols.join(", "),
      convert: "USD",
    },
    headers: {
      "X-CMC_PRO_API_KEY": CMC_PRO_API_KEY, // Make sure to define CMC_PRO_API_KEY
    },
  });

  return response.data.data;
};

const getTokenWithImages = async (coins: Coin[]): Promise<Coin[]> => {
  const ids = coins.map((coin) => coin.metadata.symbol);
  const response = await axios.get(IMAGE_URL, {
    params: {
      symbol: ids.join(", "),
    },
    headers: {
      "X-CMC_PRO_API_KEY": CMC_PRO_API_KEY, //
    },
  });

  const coinsWithImages = coins.map((coin) => {
    const image =
      response.data.data[coin.assetSymbol][0].logo ||
      response.data.data[coin.assetSymbol].logo;

    return {
      ...coin,
      image_uri: image,
      assetImage: image,
    };
  });
  return coinsWithImages;
};

const extractTokenBalance = (
  symbolBalanceObject: string[],
  coins: Coin[]
): Coin[] => {
  const coinsWithBalance = coins.map((coin) => {
    const balance = symbolBalanceObject[coin.metadata.symbol];
    return {
      ...coin,
      assetMarketPrice: balance ? balance.quote.USD.price.toFixed(2) : "0",
      assetPercentChange24h: balance
        ? balance.quote.USD.percent_change_24h.toFixed(2)
        : "0",
      assetBalance: (
        coin.amount / Math.pow(10, coin.metadata.decimals)
      ).toString(),
      coinmarketcap_id: balance ? balance.id : 0,
      assetSymbol: coin.metadata.symbol,
      assetName: coin.metadata.name,
    };
  });
  return coinsWithBalance;
};

const getUserTokensFn = async (address: string) => {
  const aptTokens: Coin[] = await aptos.getAccountCoinsData({
    accountAddress: address,
  });

  const symbols = aptTokens.map((token) => token.metadata.symbol);

  const tokenBalances = await getTokenBalances(symbols);
  const tokenBalancesArray = extractTokenBalance(tokenBalances, aptTokens);
  const tokenBalancesImages = await getTokenWithImages(tokenBalancesArray);
  return tokenBalancesImages.map((token) => {
    const { metadata } = token;
    const { decimals } = metadata;

    return {
      ...token,
      decimals,
    };
  });
};

export const getUserTokens = (address: string) => {
  const {
    data: tokens,
    error,
    isLoading,
    refetch,
  } = useQuery("tokens", () => getUserTokensFn(address));

  let addressBalance = 0;
  if (tokens) {
    addressBalance = tokens.reduce((acc, token) => {
      return (
        acc +
        parseFloat(token?.assetBalance) * parseFloat(token?.assetMarketPrice)
      );
    }, 0);
  }
  return { tokens, error, isLoading, refetch, addressBalance };
};

export const getUserApt = (token: string) => {
  return getProfile(token);
};

export const useUserCoins = ({ userAddress }) => {
  axios.defaults.headers["X-API-KEY"] = "OTwwCP3PG9ia9PlgBcCiwqxt";
  const fetchUserNFT = async (userAddress: string): Promise<UserNFT> => {
    return await axios
      .get(`${NFT_SCAN}${userAddress}`, {})
      .then((response) => response.data);
  };
  return useQuery({
    queryKey: ["UserNFT", userAddress],
    queryFn: () => fetchUserNFT(userAddress),
    staleTime: 86400000,
  });
};
