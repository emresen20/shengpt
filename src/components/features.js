import React, { useState } from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Features() {

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "white"
        }}>
            <View style={{
                height: ("7%")
            }}>
                <Text style={{
                    fontSize: hp(3),
                    color: "black",
                    fontWeight: "bold",
                    marginTop: hp(1)

                }}>
                    Features
                </Text>
            </View>
    <View style={{justifyContent:"space-evenly"}}>
            <View style={{
                backgroundColor: "lightgreen",
                width:wp("100%"),
                height:hp("17%"),
                borderRadius: 30,
                marginVertical:hp("1.7%"),
                

            }}>
                <View style={{ flexDirection: "row",marginVertical:hp("0.75%") }}>
                    <Image
                        style={{ width: wp("7%"), height: hp("5%"), marginHorizontal: hp("1.5%") }}
                        source={require("../../assets/images/chatgpt.png")} />
                    <Text
                        style={{
                            fontSize: hp("3%"),
                            color: "black",
                            fontWeight: "bold",
                            paddingLeft: hp("1%")
                        }}> ChatGPT</Text>
                </View>
                <Text style={{
                    fontSize:hp("2.5%"),
                    color:"black",
                    fontWeight:"bold",
                    alignItems:"center",
                    alignContent:"center",
                    marginHorizontal:10,
                    
                    
                    }}>
                    ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
                </Text>

            </View>
            <View style={{
                backgroundColor: "#FF9185",
                width:wp("100%"),
                height:hp("19%"),
                borderRadius: 30,
                marginVertical:hp("1.7%")
                

            }}>
                <View style={{ flexDirection: "row",marginVertical:hp("0.75%"),marginHorizontal:wp("1%") }}>
                    <Image
                        style={{ width: wp("7%"), height: hp("5%"), marginHorizontal: hp("1.5%") }}
                        source={require("../../assets/images/dal.png")} />
                    <Text
                        style={{
                            fontSize: hp("3%"),
                            color: "black",
                            fontWeight: "bold",
                            paddingLeft: hp("1%"),
                            
                        }}> DALL-E</Text>
                </View>
                <Text style={{
                    fontSize:hp("2.5%"),
                    color:"black",
                    fontWeight:"bold",
                    alignItems:"center",
                    alignContent:"center",
                    marginHorizontal:10,
                    marginHorizontal:wp("5%")
                    
                    }}>
                    DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.
                </Text>

            </View>
            <View style={{
                backgroundColor: "#D7FDF0",
                width:wp("100%"),
                height:hp("17%"),
                borderRadius: 30,
                marginVertical:hp("1.7%")
                

            }}>
                <View style={{ flexDirection: "row",marginVertical:hp("0.75%") }}>
                    <Image
                        style={{ width: wp("7%"), height: hp("5%"), marginHorizontal: hp("1.5%") }}
                        source={require("../../assets/images/smart.png")} />
                    <Text
                        style={{
                            fontSize: hp("3%"),
                            color: "black",
                            fontWeight: "bold",
                            paddingLeft: hp("1%")
                        }}> Smart AI</Text>
                </View>

                <View style={{alignItems:"center",justifyContent:"center"}}>
                <Text style={{
                    fontSize:hp("2.5%"),
                    color:"black",
                    fontWeight:"bold",
                    alignItems:"center",
                    alignContent:"center",
                    marginHorizontal:10
                    
                    }}>
                     A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.
                </Text>
                </View>

            </View>
            
            
    </View>

           
        </View>
    )
}