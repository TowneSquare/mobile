import React, {useCallback, useState, useEffect} from "react";
import { Text, View, StyleSheet, Pressable , Dimensions} from "react-native";
import { appColor, fonts } from "../../../constants";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { sizes } from "../../../utils";
import { ScrollView } from "react-native-gesture-handler";
import { useAppSelector } from "../../../controller/hooks";

export enum VerifyCommunityState {
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

interface CommunityStepCardProps {
  Title: string;
  Header: string;
  Description: string;
  navigateScreen:any;
  index:number;
  SKIP_THIS_STEP: (index:number) => void
  isCompleted
}
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

const CommunityStepCard = (
  ) => {
    const CommunityCardStepDetails = [
    {
      id: 1,
      Title: "step 1 of 5",
      Header: "Verify Community",
      Description: "Dummy text if needed as additional description",
      navigation: "VerifyCommunityScreen",
      isCompleted:true
    },
    {
      id: 2,
      Title: "step 2 of 5",
      Header: "Invite members",
      Description: "Dummy text if needed as additional description",
      navigation: "InviteMembersScreen",
      isCompleted:false
    },
    {
      id: 3,
      Title: "step 3 of 5",
      Header: "Add Admins",
      Description: "Dummy text if needed as additional description",
      navigation: "AddAdminsScreen",
      isCompleted:false
    },
    {
      id: 4,
      Title: "step 4 of 5",
      Header: "Create channel",
      Description: "Dummy text if needed as additional description",
      navigation: "CreateChannelScreen",
      isCompleted:false
    },
    {
      id: 5,
      Title: "step 5 of 5",
      Header: "Complete About Section",
      Description: "Dummy text if needed as additional description",
      navigation: "",
      isCompleted:false
    },
  ];

  const verificationStatus = useAppSelector(
    (state) => state.COMMUNITY.verificationStatus
  )

  const [skipVerify, setSkipVerify] = useState(false)
   const [skipInviteMem, setSkipInviteMem] = useState(false)
   const [skipAddAdmin, setSkipAddAdmin] = useState(false)
    const [skipCreateChannel, setSkipCreateChannel] = useState(false)
    const [skipAddAbout, setSkipAddAbout] = useState(false)

  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
   const navigation = useNavigation();
  

  return (
   <ScrollView
          style={{
            marginRight: 12,
            paddingBottom: size.getHeightSize(32),
          }}
          horizontal
        >
     {
      skipVerify || verificationStatus == VerifyCommunityState.APPROVED  ? <></> : <View style={styles.card}>
      <Text style={styles.Title}>{CommunityCardStepDetails[0].Title}</Text>
      <Pressable onPress={() => {
        navigation.navigate("VerifyCommunityScreen")
      }} >
        <Text  style={styles.header}>{CommunityCardStepDetails[0].Header}</Text>
      </Pressable>
      <Text style={styles.description}> Dummy text if needed as additional description</Text>
      <Pressable onPress={() => {
        setSkipVerify(true)
      }}>
        <Text style={styles.btnText}>Skip for now</Text>
      </Pressable>
    </View>
     }
     {
      skipInviteMem ? <></>:
      <View style={styles.card}>
      <Text style={styles.Title}>step 2 of 5</Text>
      <Pressable onPress={() => {
        navigation.navigate("InviteMembersScreen")
      }} >
        <Text  style={styles.header}>Invite members</Text>
      </Pressable>
      <Text style={styles.description}>Dummy text if needed as additional description</Text>
      <Pressable onPress={() => {
       setSkipInviteMem(true)
      }}>
        <Text style={styles.btnText}>Skip for now</Text>
      </Pressable>
    </View>
     }
     {
      skipAddAdmin ? <></>:
      <View style={styles.card}>
      <Text style={styles.Title}>step 3 of 5</Text>
      <Pressable onPress={() => {
        navigation.navigate("AddAdminsScreen")
      }} >
        <Text  style={styles.header}>Add Admins</Text>
      </Pressable>
      <Text style={styles.description}>Dummy text if needed as additional description</Text>
      <Pressable onPress={() => {
       setSkipAddAdmin(true)
      }}>
        <Text style={styles.btnText}>Skip for now</Text>
      </Pressable>
    </View>
     }
     {
      skipCreateChannel ? <></>:
      <View style={styles.card}>
      <Text style={styles.Title}>step 4 of 5</Text>
      <Pressable onPress={() => {
        navigation.navigate("CreateChannelScreen")
      }} >
        <Text  style={styles.header}>Create Channel</Text>
      </Pressable>
      <Text style={styles.description}>Dummy text if needed as additional description</Text>
      <Pressable onPress={() => {
       setSkipCreateChannel(true)
      }}>
        <Text style={styles.btnText}>Skip for now</Text>
      </Pressable>
    </View>
     }
      {
      skipAddAbout ? <></>:
      <View style={styles.card}>
      <Text style={styles.Title}>step 5 of 5</Text>
      <Pressable onPress={() => {
        
      }} >
        <Text  style={styles.header}>Add About</Text>
      </Pressable>
      <Text style={styles.description}>Dummy text if needed as additional description</Text>
      <Pressable onPress={() => {
       setSkipAddAbout(true)
      }}>
        <Text style={styles.btnText}>Skip for now</Text>
      </Pressable>
    </View>
     }
  </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  card: {
    height: 168,
    width: 291,
    backgroundColor: appColor.kgrayDark2,
    paddingLeft: 12,
    paddingTop: 16,
    marginLeft: 16,
    marginTop:20
  },
  Title: {
    color: appColor.kWhiteColor,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Outfit-Bold",
    marginVertical: 4,
  },
  header: {
    color: appColor.klightPurple,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Outfit-Bold",
    marginVertical: 4,
  },
  description: {
    color: appColor.kGrayscale,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Outfit-Regular",
    marginVertical: 4,
  },
  btnText: {
    color: appColor.kWhiteColor,
    textDecorationStyle: "solid",
    textDecorationColor: appColor.kWhiteColor,
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Outfit-Bold",
  },
});

export default CommunityStepCard;
