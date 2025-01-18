import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
// import React, { useContext, useEffect, useState, setForceUpdate, useCallback } from "react";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { Bungee_400Regular } from "@expo-google-fonts/bungee";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import profilePicture from "../../../assets/job/profile_pic.png";
import hasNotificationIcon from "../../../assets/job/hasNotiIcon.png";
import careerImage from "../../../assets/job/career_img.png";
import { CharacterContext } from "../../../store/character-context";
import ExitButton from "../../../components/main/ExitButton";
import { jobOffersData } from "../../../constants/jobOffersData";

//Main Screen Component
const JobMainScreen = ({ navigation }) => {
  const characterCtx = useContext(CharacterContext)

  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Bungee_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ExitButton zIndexSetting={1} onPress={() => navigation.goBack()}/>
      <JobScreenHeader title={"CAREER MANAGEMENT"}/>
      <View>
        <JobScreenProfile
          profilePicture={profilePicture}
          profileName={characterCtx.characterName}
          hasNotification={true}
        />
      </View>
      <ScrollView style={styles.currentJobList}>
        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: "Inter_800ExtraBold", fontSize: 20 }}>
            Current Jobs
          </Text>
          { // No job
            characterCtx.currentJobs.length == 0 && 
            <>
              <View style={currentJobStyle.container2}>
                <Text
                  style={{
                    fontFamily: "Inter_700Bold",
                    fontSize: 25,
                    color: "#fff",
                  }}
                >
                  You have no jobs
                </Text>
                <Pressable
                  onPress={() => navigation.navigate("JobOffersScreen")}
                  style={currentJobStyle.workButton}
                >
                  <Text
                    style={{
                      fontFamily: "Inter_700Bold",
                      fontSize: 16,
                      width: "100%"
                    }}
                  >
                    Find job now
                  </Text>
                </Pressable>
              </View>
            </>
          }
          {characterCtx.currentJobs.map((currentJob) => {
            var currentJobData = jobOffersData.find(( jobData ) => jobData.title == currentJob)
            return (
              <CurrentJob
                key={currentJobData.id}
                jobPicture={currentJobData.logo}
                jobName={currentJobData.title}
                jobSalary={currentJobData.salary}
                jobCompanyName={currentJobData.company}
              />
            )
          })
        }
        </View>
        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: "Inter_800ExtraBold", fontSize: 20 }}>
            Find Jobs
          </Text>
          <ExploreJobs
            careerImage={careerImage}
            careerName="Developer"
            numberOfWorkingPeople={"12,302"}
            onExplore={() => navigation.navigate("JobOffersScreen")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default JobMainScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 10
  },
  scrollView: {
    width: "100%",
    height: "auto",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  currentJobList: {
    width: "100%",
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
});

export const JobScreenHeader = ({ title }) => {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.title}>
        {title}
      </Text>
    </View>
  )
}

const headerStyle = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#FFF6DE",
  },
  title: {
    flex: 1,
    fontFamily: "Bungee_400Regular",
    fontSize: 30,
    color: "#54C3EE",
    textAlign: "center",
    padding: 10, // Làm xuống dòng Career Management
    height: "auto",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textShadowColor: "black",
    flexWrap: "wrap",
  }
});

//Profile Component
const JobScreenProfile = ({ profilePicture, profileName, hasNotification }) => {
  const characterCtx = useContext(CharacterContext)
  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={profileStyle.container}>
      <View style={profileStyle.profileDiv}>
        <Image source={characterCtx.characterImage} style={profileStyle.profilePicture} />
      </View>
      <View style={profileStyle.textDiv}>
        <Text
          style={{
            fontFamily: "Inter_500Medium",
            fontSize: 16,
            textAlign: "left",
          }}
        >
          Let's Work
        </Text>
        <Text
          style={{
            fontFamily: "Inter_800ExtraBold",
            fontSize: 20,
            textAlign: "left",
          }}
        >
          {profileName}
        </Text>
      </View>
      <View>
        <Image source={hasNotification && hasNotificationIcon} />
      </View>
    </View>
  );
};

const profileStyle = StyleSheet.create({
  container: {
    width: "100%",
    // borderColor: "red", borderWidth: 1,
    height: Dimensions.get("window").height / 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  textDiv: {
    // borderColor: "blue", borderWidth: 1,
    width: "55%",
  },
  profileDiv: {
    width: 80,
    height: 80,
    borderRadius: 200,
    backgroundColor: "black",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  profilePicture: {
    marginTop: 80,
    width: 150,
    height: 150,
    borderRadius: 200,
  },
});

//Current Job Component
const CurrentJob = ({
  jobPicture,
  jobName,
  jobCompanyName,
  jobSalary,
  onWork,
  onFindJob,
}) => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={currentJobStyle.container}>
      <View style={currentJobStyle.imageContainer}>
        <Image style={currentJobStyle.companyImage} source={jobPicture} />
      </View>
      <View style={currentJobStyle.jobInfo}>
        <Text
          style={{
            fontFamily: "Inter_700Bold",
            fontSize: 25,
            color: "#fff",
          }}
        >
          {jobName}
        </Text>
        <View style={currentJobStyle.bottomJobInfo}>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 16,
              color: "#fff",
              width: "50%",
              // borderColor: "red", borderWidth: 1,
            }}
          >
            {jobCompanyName}
          </Text>
          <View style={currentJobStyle.salaryWrapper}>
            <Image 
              style={currentJobStyle.moneyImage}
              source={require("../../../assets/money.png")}
            />
            <Text style={currentJobStyle.salary}> {jobSalary}/year</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const twoByTenDimHeight = Dimensions.get("window").height / 7;

const currentJobStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    height: twoByTenDimHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#0A0932",
    borderRadius: 16,
    // borderWidth: 3, borderColor: "red",
    justifyContent: "flex-start"
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  jobInfo: {
    marginLeft: 20, 
    width: "65%",
  },
  bottomJobInfo: {
    width: "100%",
    // borderWidth: 1, borderColor: "red",
    flexDirection: "row",
    // justifyContent: "space-between"
  },
  salaryWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  moneyImage: {
    width: 20, height: 20,
  },
  salary: {
    fontSize: 16,
    color: 'white',
  },
  workButton: {
    padding: 6,
    // width: 150,
    width: "auto",
    height: "auto",
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "end",
  },
  container2: {
    width: "100%",
    height: twoByTenDimHeight,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#0A0932",
    borderRadius: 20,
  },
});

//Explore Jobs Component
const ExploreJobs = ({
  careerImage,
  careerName,
  numberOfWorkingPeople,
  onExplore,
}) => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleExplore = (job) => {
    onExplore(job);
  };

  return (
    <View style={exploreJobsStyle.container}>
      <View>
        <Image source={careerImage} />
      </View>
      <Text
        style={{
          fontFamily: "Inter_700Bold",
          fontSize: 25,
          color: "#fff",
        }}
      >
        {careerName}
      </Text>
      <Text
        style={{
          fontFamily: "Inter_400Regular",
          fontSize: 16,
          color: "#8D8DA6",
        }}
      >
        {numberOfWorkingPeople + " people are working"}
      </Text>
      <Pressable style={exploreJobsStyle.button}>
        <Text
          style={{
            fontFamily: "Inter_700Bold",
            fontSize: 16,
          }}
          onPress={() => handleExplore()}
        >
          Explore
        </Text>
      </Pressable>
    </View>
  );
};

const exploreJobsStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height / 4,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#0A0932",
    borderRadius: 16,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    width: "auto",
    height: "auto",
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
