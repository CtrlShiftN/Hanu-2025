import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import moneyIcon from "../../../assets/money.png";
import { jobOffersData } from "../../../constants/jobOffersData";
import ExitButton from "../../../components/main/ExitButton";
import { CharacterContext } from "../../../store/character-context";

const JobOfferDetailsScreen = ({ navigation, route, onApply }) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_800ExtraBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  
  const characterCtx = useContext(CharacterContext)
  const offerData = jobOffersData.find((offerData) => offerData.company == route.params.companyName)
  const [isApplied, setIsApplied] = useState(characterCtx.currentJobs.includes(offerData.title))

  if (!offerData)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  const handleApply = () => {
    var isEnoughCriteria = true
    for (let requirement of offerData.required) {
      if (requirement.id == "1" && !characterCtx.education.university.java) {  // not learn  java
          isEnoughCriteria = false;
          break;
      }
      if (requirement.id == "2" && characterCtx.healthPoint < 80) { // health < 80
          isEnoughCriteria = false;
          break;
      }
      if (requirement.id == "3" && !characterCtx.education.university.htmlCss) { // not learn html css
        isEnoughCriteria = false;
        break;
      }
      if (requirement.id == "4" && !characterCtx.education.university.javaScript) { // not learn  javascript
        isEnoughCriteria = false;
        break;
      }
      if (requirement.id == "5" && !characterCtx.age < 30) { // > 30 age
        isEnoughCriteria = false;
        break;
      }
    }
    
    if (isEnoughCriteria) {
      const currentJobs = characterCtx.currentJobs
      currentJobs.push(offerData.title)
      characterCtx.setCurrentJobs(currentJobs)
      setIsApplied(true)
    } else {
      Alert.alert("OOPS!!!", "Not meet all criteria!")
    }
  };
  return (
    <View style={styles.container}>
      <ExitButton zIndexSetting={2} onPress={() => navigation.goBack()}/>
      <PicturedHeader
        image={offerData.cover}
        icon={offerData.logo}
        jobName={offerData.title}
        companyName={offerData.company}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.locationNPublish}>
          <Text
            style={{
              fontFamily: "Inter_800ExtraBold",
              fontSize: 20,
              color: "#626262",
            }}
          >
            {offerData.location} (Remote)
          </Text>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 12,
              color: "#415EB6",
            }}
          >
            Public {offerData.dateAgo} {offerData.dateAgo > 1 ? "days" : "day"}{" "}
            ago
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Inter_700Bold",
            fontSize: 16,
            color: "#060527",
          }}
        >
          In-Demand Skills
        </Text>
        <DemandSkills skills={offerData.required} />
        <Text
          style={{
            fontFamily: "Inter_400Regular",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {offerData.description}
        </Text>
        <View style={styles.salaryContainer}>
          <Image
            source={moneyIcon}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text
            style={{
              fontFamily: "Inter_700Bold",
              fontSize: 20,
              color: "#0300A2",
            }}
          >
            {offerData.salary}
          </Text>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 16,
              color: "#626262",
            }}
          >
            /year
          </Text>
        </View>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            style={isApplied ? styles.appliedButton : styles.applyButton}
            onPress={() => handleApply()}
            disabled={isApplied ? true : false}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Inter_400Regular",
                fontSize: 16,
              }}
            >
              {
                isApplied ? "Applied" : "Apply"
              }
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default JobOfferDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  scrollView: {
    minHeight:
      Dimensions.get("window").height - Dimensions.get("window").height / 3.3,
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  salaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  applyButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "80%",
    borderRadius: 10,
    marginBottom: 20,
  },
  appliedButton: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "80%",
    borderRadius: 10,
    marginBottom: 20,
  }
});

const PicturedHeader = ({ image, icon, jobName, companyName, onLeave }) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={headerStyles.container}>
      <Image source={image} style={headerStyles.companyCoverImage} />
      <View style={headerStyles.infoContainer}>
        <View style={headerStyles.headerInfo}>
          <View style={headerStyles.imageContainer}>
            <Image source={icon} style={headerStyles.companyImage} />
          </View>
          <View style={headerStyles.textContainer}>
            <Text
              style={{ ...headerStyles.jobName, fontFamily: "Inter_700Bold" }}
            >
              {jobName}
            </Text>
            <Text
              style={{
                ...headerStyles.companyName,
                fontFamily: "Inter_400Regular",
              }}
            >
              {companyName}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 1,
    justifyContent: "space-between",
    height: "33.3%",
    width: "100%",
  },
  backButton: {
    paddingLeft: 16,
    paddingTop: 20,
    zIndex: 3,
  },
  companyCoverImage: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
    zIndex: 0,
  },
  infoContainer: {
    flex: 1,
    position: "relative",
    justifyContent: "flex-end",
  },
  headerInfo: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingBottom: 30,
    zIndex: 2,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    width: Dimensions.get("window").width / 5,
    height: Dimensions.get("window").width / 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddddd",
    borderRadius: 100,
    zIndex: 1,
  },
  companyImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  textContainer: {
    paddingLeft: 10,
    justifyContent: "center",
    zIndex: 1,
  },
  jobName: {
    fontSize: 25,
    color: "white",
  },
  companyName: {
    fontSize: 20,
    color: "white",
  },
});

const DemandSkills = ({ skills }) => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={skillsStyles.container}>
      {skills.map((skill) => (
        <View key={skill.id} style={skillsStyles.skillContainer}>
          <Image source={skill.image} style={skillsStyles.skillImage} />
          <Text
            style={{ ...skillsStyles.skillText, fontFamily: "Inter_700Bold" }}
          >
            {skill.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

const skillsStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 20,
    height: "auto",
  },
  skillContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  skillImage: {
    width: Dimensions.get("window").width / 8,
    height: Dimensions.get("window").width / 8,
    marginRight: 10,
  },
  skillText: {
    fontSize: 16,
  },
});
