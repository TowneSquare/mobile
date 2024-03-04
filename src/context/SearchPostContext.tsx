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
// Search Post context
export const SearchPostContext = createContext<SearchPostContextType>({
  searchData: (searchPost: string) => {},
  filteredPosts: [],
});
const SearchPostContextProvider: React.FC<SearchPostContextProps> = ({
  children,
}) => {

  // Get all posts
  const allPosts = useAppSelector(
    (state) => state.CreatePostController.AllPost
  );

  // Array of filtered posts
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>(allPosts);

  // Context value
  const contextValue: SearchPostContextType = {
    filteredPosts,
    searchData(searchWord) {

      // Filter posts that match the search term
      const filtered = search(filteredPosts, searchWord);
      if (filtered?.length === 0) {
        // If there are no posts that match the search term, set filteredPosts to null
        setFilteredPosts(null);
      } else {
        // If there are posts that match the search term, set filteredPosts to the filtered array
        setFilteredPosts(filtered);
      }
    },
  };

  
  /**
   * Searches for posts that match the given search term.
   * @param posts - The array of posts to search through.
   * @param searchTerm - The search term to match against.
   * @returns An array of posts that match the search term.
   */

  function search(posts: PostData[], searchTerm: string): PostData[] {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    if (posts) {

      // Filter posts that match the search term
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

      // If there are no posts, return allPost
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
