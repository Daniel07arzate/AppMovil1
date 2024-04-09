import React, {Profiler, useEffect, useState} from "react";
import {View, Text, TextInput, Button, TouchableOpacity, ImageBackground} from "react-native";
import { styles } from "./LoginScreenStyl";
import { useNavigation } from "@react-navigation/native";
import { MyColors } from "../../theme/AppTheme";
import LoginViewModel from "./ViewModel";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";

interface Props extends StackScreenProps<RootStackParamList, "Login"> {};

const LoginScreen = ({navigation, route}: Props) => {

  const { email, password, onChange, login, errorMessage, user } = LoginViewModel();

  useEffect(() => {
    console.log("inicia ");
    console.log(user);
    if(user?.token != null && user?.id !== undefined){
        navigation.navigate('Home');
    }else{
        console.log("no direccion")
    }
}, [user]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://media4.giphy.com/media/BHNfhgU63qrks/giphy.gif' }}
        style={styles.backgroundImage}
      >
        <View style={styles.form}>
          <Text style={styles.title}>...BIENVENIDO AL LOGIN...</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => onChange("email", text)}
            value={email}
            placeholder="email"
            placeholderTextColor="#DDD"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => onChange("password", text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#DDD"
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => login()}
          >
            <Text style={styles.submitButtonText}>Iniciar Sesion</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>No tines cuenta?</Text>
            <TouchableOpacity
              onPress={() => {navigation.navigate('Register')}}
            >
              <Text style={styles.link}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
