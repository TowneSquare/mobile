import React, { ReactNode, createContext, useState } from "react";
import { PostData } from "../controller/createPost";

import { useAppSelector } from "../controller/hooks";
interface SearchPostContextProps {
  children: ReactNode;
}
export type SearchPostContextType = {
  searchData: (searchword: string) => void;
  filteredPosts: PostData[];
};
export const SearchPostContext = createContext<SearchPostContextType>({
  searchData: (searchPost: string) => {},
  filteredPosts: [],
});
const SearchPostContextProvider: React.FC<SearchPostContextProps> = ({
  children,
}) => {
  const allPosts = useAppSelector(
    (state) => state.CreatePostController.AllPost
  );

  const [filteredPosts, setFilteredPosts] = useState<PostData[]>(allPosts);
  const contextValue: SearchPostContextType = {
    filteredPosts,
    searchData(searchWord) {
      const filtered = search(filteredPosts, searchWord);
      if (filtered?.length === 0) {
        setFilteredPosts(null);
      } else {
        setFilteredPosts(filtered);
      }
    },
  };
  function search(posts: PostData[], searchTerm: string): PostData[] {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    if (posts) {
      return posts.filter(
        (post) =>
          post.description?.toLowerCase().includes(lowerCaseSearchTerm) ||
          post.comments?.some(
            (comment) =>
              comment.username?.toLowerCase().includes(lowerCaseSearchTerm) ||
              comment.nickname?.toLowerCase().includes(lowerCaseSearchTerm)
          ) ||
          post.customer.username?.toLowerCase().includes(lowerCaseSearchTerm) ||
          post.customer.nickname?.toLowerCase().includes(lowerCaseSearchTerm) ||
          post.originalCustomer?.username
            .toLowerCase()
            .includes(lowerCaseSearchTerm) ||
          post.originalCustomer?.nickname
            .toLowerCase()
            .includes(lowerCaseSearchTerm)
      );
    } else {
      return allPosts;
    }
  }
  return (
    <SearchPostContext.Provider value={contextValue}>
      {children}
    </SearchPostContext.Provider>
  );
};
export default SearchPostContextProvider;
