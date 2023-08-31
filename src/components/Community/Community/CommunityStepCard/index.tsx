import React from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import { appColor, fonts } from "../../../../constants";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { sizes } from "../../../../utils";
import { ScrollView } from "react-native-gesture-handler";

export enum VerifyCommunityState {
  NOT_APPROVED,
  PENDING,
  APPROVED,
}

interface CommunityStepCardProps {
  Title: string;
  Header: string;
  Description: string;
  navigateScreen: any;
  index: number;
  SKIP_THIS_STEP: (index: number) => void;
  isCompleted;
}
const { height, width } = Dimensions.get("window");
const size = new sizes(height, width);

const CommunityStepCard = () => {
  const CommunityCardStepDetails = [
    {
      id: 1,
      Title: "step 1 of 5",
      Header: "Verify Community",
      Description: "Dummy text if needed as additional description",
      navigation: "VerifyCommunityScreen",
      isCompleted: true,
    },
    {
      id: 2,
      Title: "step 2 of 5",
      Header: "Invite members",
      Description: "Dummy text if needed as additional description",
      navigation: "InviteMembersScreen",
      isCompleted: false,
    },
    {
      id: 3,
      Title: "step 3 of 5",
      Header: "Add Admins",
      Description: "Dummy text if needed as additional description",
      navigation: "AddAdminsScreen",
      isCompleted: false,
    },
    {
      id: 4,
      Title: "step 4 of 5",
      Header: "Create channel",
      Description: "Dummy text if needed as additional description",
      navigation: "CreateChannelScreen",
      isCompleted: false,
    },
    {
      id: 5,
      Title: "step 5 of 5",
      Header: "Complete About Section",
      Description: "Dummy text if needed as additional description",
      navigation: "",
      isCompleted: false,
    },
  ];

  let [isLoaded] = useFonts({
    "Outfit-Bold": fonts.OUTFIT_BOLD,
    "Outfit-Medium": fonts.OUTFIT_NORMAL,
    "Outfit-Regular": fonts.OUTFIT_REGULAR,
  });
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView
        style={{
          marginTop: size.getHeightSize(19),
        }}
        contentContainerStyle={{
          gap: size.getWidthSize(16),
          paddingHorizontal: size.getWidthSize(8),
        }}
        horizontal
      >
        <View style={styles.card}>
          <Text style={styles.Title}>Step 1 of 5</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("VerifyCommunityScreen");
            }}
          >
            <Text style={styles.header}>
              {CommunityCardStepDetails[0].Header}
            </Text>
          </Pressable>
          <Text style={styles.description}>
            Dummy text if needed as additional description
          </Text>
          <Pressable>
            <Text style={styles.btnText}>Skip for now</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.Title}>Step 2 of 5</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("InviteMembersScreen");
            }}
          >
            <Text style={styles.header}>Invite members</Text>
          </Pressable>
          <Text style={styles.description}>
            Dummy text if needed as additional description
          </Text>
          <Pressable>
            <Text style={styles.btnText}>Skip for now</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.Title}>Step 3 of 5</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("AddAdminsScreen");
            }}
          >
            <Text style={styles.header}>Add Admins</Text>
          </Pressable>
          <Text style={styles.description}>
            Dummy text if needed as additional description
          </Text>
          <Pressable>
            <Text style={styles.btnText}>Skip for now</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.Title}>Step 4 of 5</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("CreateChannelScreen");
            }}
          >
            <Text style={styles.header}>Create Channel</Text>
          </Pressable>
          <Text style={styles.description}>
            Dummy text if needed as additional description
          </Text>
          <Pressable>
            <Text style={styles.btnText}>Skip for now</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.Title}>Step 5 of 5</Text>
          <Pressable onPress={() => {}}>
            <Text style={styles.header}>Add About</Text>
          </Pressable>
          <Text style={styles.description}>
            Dummy text if needed as additional description
          </Text>
          <Pressable>
            <Text style={styles.btnText}>Skip for now</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: size.getHeightSize(168),
    width: size.getWidthSize(291),
    backgroundColor: appColor.kgrayDark2,
    paddingHorizontal: size.getWidthSize(12),
    paddingVertical: size.getHeightSize(16),
    borderRadius: 8,
  },
  Title: {
    color: appColor.kWhiteColor,
    fontSize: size.fontSize(14),
    fontWeight: "600",
    fontFamily: "Outfit-SemiBold",
    lineHeight: size.getHeightSize(18),
  },
  header: {
    color: appColor.klightPurple,
    fontSize: size.fontSize(20),
    fontFamily: "Outfit-Bold",
    marginVertical: 4,
    lineHeight: size.getHeightSize(24),
    marginTop: size.getHeightSize(8),
    letterSpacing: 0.4,
  },
  description: {
    color: appColor.kGrayscale,
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Regular",
    lineHeight: size.getHeightSize(21),
    marginTop: size.getHeightSize(8),
  },
  btnText: {
    color: appColor.kWhiteColor,
    textDecorationColor: appColor.kWhiteColor,
    textDecorationLine: "underline",
    fontSize: size.fontSize(16),
    fontFamily: "Outfit-Medium",
    lineHeight: size.getHeightSize(20),
    letterSpacing: 0.32,
    marginTop: size.getHeightSize(16),
  },
});

export default CommunityStepCard;
