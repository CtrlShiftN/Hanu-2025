import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react' 
import NoMoreTicket from '../../components/main/NoMoreTicket';
import DarkOverlay from '../../components/ui/DarkOverlay';
import Money from '../../components/main/Money';
import Ticket from '../../components/main/Ticket';
import Exit from "../../components/main/ExitButton"
import GameResultAlert from '../../components/main/GameResultAlert';

const RockPaperScissorScreen = ({ navigation }) => {
    const [opponentOption, setOpponentOption] = useState(0)
    const [playerOption, setPlayerOption] = useState(0)
    const [numberTicket, setNumberTicket] = useState(0)
    const [result, setResult] = useState("")
    const [isResultShown, setIsResultShown] = useState(false)
    const [isGameStarted, setIsGameStarted] = useState(false)
    const [isNoMoreTicketDisplayed, setIsNoMoreTicketDisplayed] = useState(false)
    const [imageOpponentChoiceStyles, setImageOpponentChoiceStyles] = useState({
        opacity: 0,
        width: 170, height: 170,
        transform: [{rotate: "180deg"}]
    })
    const [imagePlayerChoiceStyles, setImagePlayerChoiceStyles] = useState({
        opacity: 0,
        width: 170, height: 170,
    })

    function watchAdsEarnTicket() {
        navigation.navigate("AdvertiseScreen")
        setNumberTicket((prevValue) => prevValue += 1)
        setIsNoMoreTicketDisplayed(false)
    }

    function cancel() {
        setIsNoMoreTicketDisplayed(false)
    }

    function exit() {
        navigation.goBack()
    }

    useEffect(() => {
        function handleResult() {
            if (playerOption == opponentOption) {
                setResult("Tie")
            } else {
                if ((playerOption == 0 && opponentOption == 1) || 
                (playerOption == 1 && opponentOption == 2) || 
                (playerOption == 2 && opponentOption == 0)) {
                    setResult("Lose")
                } else {
                    setResult("Win")
                }
            }
        }

        if (isGameStarted) {
            setTimeout(() => {
                handleResult();
                setIsGameStarted(false)
                setIsResultShown(true)
            }, 3000)
        }
    }, [isGameStarted])


    function playAgain() {
        setIsResultShown(false)
    }

    function handleGame(playerOption) {
        // Trừ 1 lần chơi
        setNumberTicket((prevValue) => prevValue -= 1)

        setOpponentOption(Math.floor(Math.random() * 3));
        setPlayerOption(playerOption)
        
        setImageOpponentChoiceStyles((prevValue) => {
            return(
                {...prevValue, opacity: 1,}
            )
        })
        setImagePlayerChoiceStyles((prevValue) => {
            return(
                {...prevValue, opacity: 1,}
            )
        })

    }   // end runGame()

    
    function runGame(playerOption) {
        if (numberTicket > 0) {
            setIsGameStarted(true)
            setIsNoMoreTicketDisplayed(false)
            handleGame(playerOption);
        } else {
            setIsNoMoreTicketDisplayed(true)
        }
    }

    const GameButton = ({ onPress, imageURL }) => {
        return(
            <Pressable
                style={
                    [styles.button ,isGameStarted && styles.inactiveButton]
                }
                onPress={onPress}
            >
                <Image 
                    style={styles.image}
                    source={imageURL}
                />
            </Pressable>
        )
    }

    return (
        <ImageBackground 
            source={require("../../assets/backgroundGameQuiz.png")}    
            style={styles.container}
        >
            <Exit onPress={exit}/>
            <Ticket numberTicket={numberTicket} onPress={watchAdsEarnTicket}/>
            <Money 
                containerCustomStyle={styles.moneyContainer}  
                moneyImageCustomStyle={styles.moneyImage}
                moneyAmountCustomStyle={styles.moneyAmount}
            />
            <View style={styles.opponent}>
                {
                    isGameStarted && 
                    <>
                        <Text style={styles.prompt}>Opponent Choice</Text>
                        <Image 
                            style={imageOpponentChoiceStyles}
                            source={
                                (opponentOption == 0) 
                                    ? require("../../assets/scissor.png")
                                    : (opponentOption == 1)
                                        ? require("../../assets/rock.png")
                                        : require("../../assets/paper.png")
                                }
                        />
                    </>
                }
                {
                    !isGameStarted && 
                    <Text style={styles.opponentWaitingText}>Your opponent is waiting...</Text>
                }
            </View>   
            <View style={styles.player}>
                <Image 
                    style={[imagePlayerChoiceStyles, !isGameStarted && {opacity: 0} ]}
                    source={
                        (playerOption == 0) 
                            ? require("../../assets/scissor.png")
                            : (playerOption == 1)
                                ? require("../../assets/rock.png")
                                : require("../../assets/paper.png")
                        }
                />
                <Text style={styles.prompt}>Choose</Text>
                <View style={styles.buttonGroup}>
                    <GameButton 
                        onPress={isGameStarted ? null : () => runGame(0)}
                        imageURL={require("../../assets/scissor.png")}
                    />
                    <GameButton 
                        onPress={isGameStarted ? null : () => runGame(1)}
                        imageURL={require("../../assets/rock.png")}
                    />
                    <GameButton 
                        onPress={isGameStarted ? null : () => runGame(2)}
                        imageURL={require("../../assets/paper.png")}
                    />
                </View>
            </View>         
            {
                isNoMoreTicketDisplayed && 
                <>
                    <DarkOverlay />
                    <NoMoreTicket 
                        onWatchAdsEarnTicket={watchAdsEarnTicket}
                        onCancel={cancel}
                    /> 
                </>
            }
            {
                isResultShown && 
                <>
                    <DarkOverlay />
                    <GameResultAlert 
                        gameName={"Rock Paper Scissors"}
                        resultTitle={result} onPress={playAgain} 
                        rewardMoney={result === "Win" ? 5 : result === "Tie" ? 2 : 0}/>
                </>
            }
        </ImageBackground>
    )
} 

export default RockPaperScissorScreen

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },

    // ------------- Money ------------
    moneyContainer: {
        position: "absolute", right: 10, top: 10,
        marginTop: 0,

        // override default style
        paddingHorizontal: 20,
        paddingVertical: 0, paddingHorizontal: 5,
        borderRadius: 10,
        backgroundColor: "#D9D9D9",
        flexDirection: "row",
        alignItems: "center"
    },
    moneyImage: {
        width: 30, height: 30
    },
    moneyAmount: {
        fontSize: 24,
        color: "black"
    },

    // ------------- Opponent ----------
    opponent: {
        marginTop: 50,
        position: "absolute", top: 20,
        alignItems: "center",
    },
    opponentWaitingText: {
        marginTop: 50,
        fontSize: 24, fontWeight: "bold",
    },
    inactiveButton: {
        opacity: 0.5
    },

    // ---------- Player ------------
    prompt: {
        fontSize: 35, fontWeight: "bold",
        textAlign: "center",
        marginTop: 30, 
    },
    player: {
        position: "absolute",
        alignItems: "center",
        bottom: 10,
        width: "80%", 
        justifyContent: "space-between",
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    button: {
    },
    pressed: {
        opacity: 0.7
    },
    image: {
        width: 80, height: 80,
    },


    
    
})