import React, { Component } from "react";
import {View,  StyleSheet,  ImageBackground,  Image,  TextInput,  TouchableOpacity,  Text,  Alert,  KeyboardAvoidingView} from "react-native";

const bgImage = require("../assets/background2.png")
const appName = require("../assets/appName.png")
const appIcon = require("../assets/appIcon.png")
export default class LoginScreen extends Component {

constructor(props){
    super(props);
    this.state={
        email:"",
        password:""
    }
}
handleLogin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
     this.props.navigation.navigate("BottomTab");  
    })
    .catch(error=>{
        Alert.alert(error.message);
    })
}

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style = {styles.container}>
                <ImageBackground source={bgImage} style={styles.bgImage}>
                    <view style ={styles.upperContainer}>
                      <Image source ={"appIcon"} style = {styles.appIcon}/>
                      <Image source ={"appName"} style = {styles.appName}/>
                    </view>
                    <view style ={style.lowerContainer}>
                       <TextInput 
                       style={styles.textinput}
                       placeholder={"email"}
                       placeholderTextColor={"#ffffff"}
                       onChangeText={text=>this.setState({email:text})}
                       autoFocus
                       />
                       <TextInput
                       style={[styles.textinput,{marginTop:20}]}
                       placeholder={"password"}
                       placeholderTextColor={"#ffffff"}
                       onChangeText={text=>this.setState({password:text})}
                       secureTextEntry
                       />
                       <TouchableOpacity
                       style= {[styles.button,{marginTop:20}]}
                       onPress={()=> this.HandleLogin(email,password)}
                       >
                        <Text style={styles.buttonText}>
                            Login
                       </Text>   
                       </TouchableOpacity>
                    </view>
                </ImageBackground>
            </KeyboardAvoidingView>
         
        )

    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
      },
      upperContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
      },
      appIcon: {
        width: 280,
        height: 280,
        resizeMode: "contain",
        marginTop: 80
      },
      appName: {
        width: 130,
        height: 130,
        resizeMode: "contain"
      },
      lowerContainer: {
            flex: 0.5,
            alignItems: "center"
      },
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    textinput: {
        width: "75%",
        height: 55,
        padding: 10,
        borderColor: "#FFFFFF",
        borderWidth: 4,
        borderRadius: 10,
        fontSize: 18,
        color: "#FFFFFF",
        fontFamily: "Rajdhani_600SemiBold",
        backgroundColor: "#5653D4"
      },

      button: {
        width: "43%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F48D20",
        borderRadius: 15
      },

      buttonText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontFamily: "Rajdhani_600SemiBold"
      }

})