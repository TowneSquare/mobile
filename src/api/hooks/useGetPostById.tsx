import { useQuery } from "react-query";
import axios from "axios";
import { APTOS_NAME_URL, BACKEND_URL } from "../../../config/env";
import { PostData } from "../../controller/createPost";

const fetchUserInfo = async (
  postId: string,
  token: string
): Promise<PostData> => {
  return await axios
    .get(`${BACKEND_URL}posts/${postId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data);
};

export const useGetPostById = ({ postId, token, initialData }) => {
  return useQuery({
    queryKey: ["Post", postId],
    queryFn: () => fetchUserInfo(postId, token),
    initialData,
  });
};
