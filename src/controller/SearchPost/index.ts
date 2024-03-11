import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommunitiesData, ProfileData } from './dummyData';
interface Data {
  name: string;
  nickname?: string;
  type: string;
}
interface Profile {
  name: string;
  username: string;
}
interface Communities {
  name: string;
  description: string;
}

type SearchFocusVisibilty = 'default' | 'hide_for_you_tab' | 'search_focused';
//Suggested data
const data = [
  {
    name: 'User Name',
    nickname: '@web3_guru',
    type: 'profile',
  },

  {
    name: 'User Name',
    nickname: '@web3_guru_maniac',
    type: 'profile',
  },
  {
    name: 'TowneSquare',
    type: 'community',
  },
];

const peopleToSearchData = [
  {
    name: 'User Name',
    username: '@web3_guru',
  },
  {
    name: 'User Name',
    username: '@web3_guru',
  },
  {
    name: 'User Name',
    username: '@web3_guru',
  },
  {
    name: 'User Name',
    username: '@web3_guru',
  },
  {
    name: 'User Name',
    username: '@web3_guru',
  },
  {
    name: 'User Name',
    username: '@web3_guru',
  },
  {
    name: 'User Name',
    username: '@web3_guru',
  },
];
const communitySearchData = [
  {
    name: 'Aptomingos from Space',
    description: '',
  },
  {
    name: 'Aptomingos from Space',
    description: '',
  },
  {
    name: 'Aptomingos from Space',
    description: '',
  },
  {
    name: 'Aptomingos from Space',
    description: '',
  },
];
interface SearchPost {
  SearchWord: string;
  data: Data[];
  filteredData: Data[];
  profileData: Profile[];
  communityData: Communities[];
  searchFocus: SearchFocusVisibilty;
  communitySearchData: Communities[];
  peopleToSearchData: Profile[];
  communitySearchDataFiltered: Communities[];
  peopleToSearchDataFiltered: Profile[];
}
const initialState: SearchPost = {
  SearchWord: '',
  filteredData: [],
  data: data,
  profileData: ProfileData,
  communityData: CommunitiesData,
  searchFocus: 'default',
  communitySearchData: communitySearchData,
  peopleToSearchData: peopleToSearchData,
  communitySearchDataFiltered: [],
  peopleToSearchDataFiltered: [],
};
export const SearchPostSlice = createSlice({
  name: 'SearchPostHandler',
  initialState,
  reducers: {
    updateSearchWord: (state, action: PayloadAction<string>) => {
      state.SearchWord = action.payload;
    },
    updateFilteredData: (state, action: PayloadAction<string>) => {
      state.SearchWord = action.payload;
      if (action.payload) {
        state.filteredData = state.data.filter((dat) =>
          Object.values(dat).some((value) => {
            return value
              .toString()
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          })
        );
      } else state.filteredData = [];
    },
    resetSearch: (state) => {
      state.SearchWord = '';
      state.filteredData = [];
    },
    updateFilteredCommunitySearchData: (
      state,
      action: PayloadAction<string>
    ) => {
      state.SearchWord = action.payload;
      if (action.payload) {
        state.communitySearchDataFiltered = state.communitySearchData.filter(
          (dat) =>
            Object.values(dat).some((value) =>
              value
                .toString()
                .toLowerCase()
                .includes(action.payload.toLowerCase())
            )
        );
      } else {
        state.communitySearchDataFiltered = [];
      }
    },
    updateFilteredProfilSearcheData: (state, action: PayloadAction<string>) => {
      state.SearchWord = action.payload;
      if (action.payload) {
        state.peopleToSearchDataFiltered = state.peopleToSearchData.filter(
          (dat) =>
            Object.values(dat).some((value) =>
              value
                .toString()
                .toLowerCase()
                .includes(action.payload.toLowerCase())
            )
        );
      } else state.peopleToSearchDataFiltered = [];
    },

    updateSearchFocus: (state, action: PayloadAction<SearchFocusVisibilty>) => {
      state.searchFocus = action.payload;
    },
  },
});
export const {
  updateSearchWord,
  updateFilteredData,
  resetSearch,
  updateFilteredProfilSearcheData,
  updateFilteredCommunitySearchData,
  updateSearchFocus,
} = SearchPostSlice.actions;
export default SearchPostSlice.reducer;
