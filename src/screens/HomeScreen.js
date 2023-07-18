import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from "../components/features";
import { dummyMessages } from "../constans";

export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording,setRecording]= useState(false); 
  const [speaking,setSpeaking] =useState(true);

  const clear= ()=>{
    setMessages([]);
  }

  const stopSpeaking= ()=>{
    setSpeaking(false);
  }
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{ backgroundColor: "white" }}>
        <Image
          style={{
            width: wp("45%"),
            height: hp("23%"),
            alignSelf: "center"

          }}
          source={require("../../assets/images/ai.png")} />
      </View>

      {/* features || messages */}
      {
        messages.length > 0 ? (
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <Text style={{ fontSize: wp(5) ,marginLeft:hp("5%") }}>
              Assistan
            </Text>
            <View style={{
              height: hp(58),
              backgroundColor: "#EBE5DE",
              borderRadius: 20,
              margin: hp(2)

            }}>
              <ScrollView
                style={{
                  marginHorizontal: 50
                }}
                bounces={false}
                showsVerticalScrollIndicator={false}>
                {
                  messages.map((messages, index) => {
                    if (messages.role == "assistant") {
                      if (messages.content.includes('https')) {
                        // its an ai images
                        return(
                          <View style={{
                            flexDirection:"row",
                            justifyContent:"flex-start"
                          }}>
                              <View style={{
                                marginVertical:hp("0.5"),

                                }}>
                                  <Image 
                                  source={{uri:messages.content}}
                                  resizeMode="contain"
                                  style={{
                                    height:wp(60),
                                    width:wp(60),
                                    borderRadius:hp("3%"),
                                    borderWidth:hp("0.5%"),
                                    borderColor:"#E0F6CA"

                                    }}
                                  />
                              </View>

                          </View>
                        )
                      } else {
                        // text response
                        return (
                       
                            <View 
                               key={index}
                              style={{
                              width: wp("60%"),
                              backgroundColor: "white",
                              marginVertical: hp("0.5%"),
                              borderRadius:15,
                              padding:hp("2%"),
                              backgroundColor:"#6AF090"
                            }}>
                              <Text>
                                {messages.content}
                              </Text>

                            </View>

                         
                        )
                      }


                    } else {
                      // user input
                      return (
                        <View
                          style={{
                            justifyContent: "flex-end",
                            flexDirection: "row"
                          }}
                          key={index}
                        >
                          <View style={{
                            width: wp("60%"),
                            backgroundColor: "white",
                            marginVertical: hp("0.5%"),
                            borderRadius:15,
                              padding:hp("2%"),
                              backgroundColor:  "#E9EEF1"
                          }}>
                            <Text>
                              {messages.content}
                            </Text>

                          </View>

                        </View>
                      );

                    }

                  })
                }

              </ScrollView>

            </View>

          </View>
        ) :

          (
            <Features />
          )
      }
      {/* recording, clear and stop buttons*/}
          <View style={{
              flex:1,
              justifyContent:"center",
              alignItems:"center",
              marginTop:"90%" ,
              flexDirection:"row"
          }}>
            {
              recording?(
                <TouchableOpacity style={{justifyContent:"center"}}>
                    <Image 
                    source={require("../../assets/images/voiceLoading.gif")}
                    style={{
                      width:hp(10), 
                      height:hp(10),
                      borderRadius:1000,}}
                      />
                </TouchableOpacity>
              ):(
                <TouchableOpacity style={{justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
                <Image 
                source={require("../../assets/images/recordingicon.png")}
                style={{
                  width:hp(10), 
                  height:hp(10),
                  alignSelf:"center",
                  borderRadius:1000}}
                  />
            </TouchableOpacity>
              )
            }

            {
              messages.length>0 &&(
                <TouchableOpacity 
                  onPress={clear}
                  style={{
                  backgroundColor:"grey",
                  borderRadius:hp("100%"),
                  padding:hp("0.75%"),
                  position:"absolute",
                  right:hp("5%")
                }}>
                    <Text style={{
                      color:"white",
                    }}>
                      Clear
                    </Text>
                </TouchableOpacity>
              )
            }
                 {
              speaking &&(
                <TouchableOpacity 
                  onPress={stopSpeaking}
                  style={{
                  backgroundColor:"red",
                  borderRadius:hp("100%"),
                  padding:hp("0.75%"),
                  position:"absolute",
                  left:hp("5%")
                }}>
                    <Text style={{
                      color:"white",
                    }}>
                      Stop
                    </Text>
                </TouchableOpacity>
              )
            }
          </View>
      

    </SafeAreaView>
  )
}