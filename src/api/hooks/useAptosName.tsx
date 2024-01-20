import { useQuery } from "react-query";
import axios from "axios";
import { APTOS_NAME_URL , BACKEND_URL} from "../../../config/env";

const getUserAptosName = async (address: string) => {
  return await axios
    .get(`${APTOS_NAME_URL}${address}`)
    .then((response) => response.data);
};
export const useAptosName = ({ userAddress }) => {
  return useQuery({
    queryKey: ["userAptosName", userAddress],
    queryFn: () => getUserAptosName(userAddress),
    initialData:"unavailable"
  });
};


