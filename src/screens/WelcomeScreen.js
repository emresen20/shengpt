import React from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <View style={{
                justifyContent: "space-around",
                alignItems: "center",

            }}>
                <Text style={{
                    fontSize: wp("12"),
                    fontWeight: "bold",
                    color: "black",
                    alignSelf: "center",
                    paddingTop: 50,
                }}>
                    Shen
                </Text>
                <Text style={{
                    fontSize: wp("5"),
                    fontWeight: "300",
                    color: "black",
                    padding: 10

                }}>
                    The Future is here, powered by AI
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
                style={{
                    marginTop: 190,
                    padding: 40,
                    backgroundColor: "#1098F7",
                    borderRadius: 10000
                }}>
                <Text style={{
                    fontSize: wp("5"),
                    color: "white",
                    fontWeight: "bold"
                }}>
                    Get Started
                </Text>
            </TouchableOpacity>
            <View style={{ justifyContent: "flex-end", flex: 1 }}>
                <Image
                    style={{
                        width: wp("45%"),
                        height: hp("25%"),
                        alignSelf: "center"

                    }}
                    source={require("../../assets/images/ai.png")} />

            </View>

        </SafeAreaView>
    )
}