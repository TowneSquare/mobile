List of Features & Fixes

***DM***
Block DM: Implemented blocking functionality for direct messages to prevent unwanted communication.
Path: src/components/DM/Conversation.tsx
Path:src/utils/ChatUtils.ts

Chat Contact: Improved chat contact feature to display relevant information about contacts including, profile pics
Path: src/components/DM/Chat.tsx

Notification: Added notification feature to notify users about new direct messages.
Path: src/services/PushNotification.tsx
Path:src/components/DM/MoreBottomsheet.tsx
Path:src/utils/ChatUtils.ts

Text & Image DM: Enhanced direct messaging to support both text and image messages.
Path: src/components/DM/ChatTextInput.tsx

Clear & Delete Conversation: Implemented options to clear and delete conversation history.
Path: src/components/DM/Conversation.tsx
Path:src/utils/ChatUtils.ts


***Feed***
Tag Fixes: Resolved issues related to tagging functionality in feed posts
Path: src/components/Feed/ForYou.tsx

Fixed spacing between post without text
Path: src/components/Feed/ForYou.tsx

Comment Fixes: Fixed bugs and errors in the comment feature of feed posts (profile image, swipeable profile image)

SwipeableProfilePicture: Fixed feeds profile picture not navigating to user profile
Path: src/components/Feed/SwipeableProfilePicture.tsx

Issue: Profile pictures were overlapping with other elements due to incorrect margin settings
Changes: Increased margin between profile pictures to prevent overlap
Path:src/screens/Feed/SinglePost.tsx

Added Toast when comments are made
Path:src/component/SinglePostView/AddCommentTextInput.tsx


Post Search: Added search functionality to easily find specific posts.
Path: src/components/SearchPost
Path:src/context/SearchPostContext.tsx


Feed Tips UI Fixes: Improved UI layout and design for feed tips section, Tip bottomsheet with user details: user wallet address, user profile picture, user display name
Path: src/shared/Feed/TipBottomSheet.tsx

Feeds Profile Picture: Set default image for users with no pfp


Added Special Character Recognition on Post
Path: src/components/Feed/ForYou.tsx


Disabled back button from feed





***Wallet Connect***

Petra Connect: Implemented integration with Petra for wallet connectivity.
Path: src/utils/connectWallet.ts

User Wallet Data: Fetched user wallet data including address and balance.
Path: src/utils/connectWallet.ts

Address, Balance: Displayed user wallet address and balance in the UI.
Path: src/screens/Wallet/index.ts

userToken: Integrated getting user token from petra wallet 
Path: src/utils/connectWallet.ts
Path: src/SignUp/SignUp.tsx

Conversions to USD: Implemented conversion functionality to display balances in USD.
Path: src/utils/connectWallet.ts
Fetch Real Live Price of Assets: Integrated API to fetch real-time prices of assets.
Path: src/utils/connectWallet.ts

***Profile***
Display button to create Post if user have no post 
Fixed overlaying bottomsheet

Fixed following, followers spacing on profile card
Path:src/component/Profile/About/ProfileCard.tsx

Fixed user posts not displaying username and name
Path:src/Profile/TheirProfileScreen.tsx


***Sign up***
Integrated remember login
Integrated Splash screen
Path:src/navigation/SplashScrenn.tsx



**What I'm Working On**
Pontem Connect
Implementing integration with Pontem for connecting wallet, signing and submiting transaction to aptos 
Path: src/utils/connectWallet.ts


Tips Transactions
Submiting tip transactions to connected wallets (pontem, petra) 
Path: src/utils/connectWallet.ts

NFT Fixes
Resolving issues and bugs related to Non-Fungible Tokens (NFTs) functionality.










