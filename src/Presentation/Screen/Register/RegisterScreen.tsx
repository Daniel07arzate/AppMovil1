import React, { useState } from 'react'
import { View, Text, TextInput, Button, ImageBackground } from 'react-native'
import { styles } from "./RegisterScreenStyle"
import RegisterViewModel from './ViewModel';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const { name, password, apellidoPaterno, apellidoMaterno, email, onChange, register } = RegisterViewModel();
  const navigation = useNavigation();

  const handleRegister = () => {
      register();
      navigation.navigate('Login'); // Navega de vuelta a la pantalla de inicio de sesión después de guardar
  };

  return (
      <View style={styles.container}> 
        <ImageBackground
        source={{uri: 'https://media4.giphy.com/media/BHNfhgU63qrks/giphy.gif'}}
        style={styles.backgroundImage}>
        <View style={styles.form}>
          <Text style={styles.title}>...BIENVENIDO AL REGISTRO...</Text> 
            <TextInput
            placeholder="Nombre"
            value={name}
            onChangeText={(text) => onChange('name', text)}
            style={styles.input}
            />

            <TextInput
            placeholder="Apellido Paterno"
            value={apellidoPaterno}
            onChangeText={(text) => onChange('apellidoPaterno', text)}
            style={styles.input} 
            />

            <TextInput
            placeholder="Apellido Materno"
            value={apellidoMaterno}
            onChangeText={(text) => onChange('apellidoMaterno', text)}
            style={styles.input} 
            />

            <TextInput
            placeholder="Correo Electrónico"
            value={email}
            onChangeText={(text) => onChange('email', text)}
            style={styles.input} 
            />

            <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={(text) => onChange('password', text)}
            style={styles.input} 
            secureTextEntry={true}
            />

            <Button title='Guardar' onPress={handleRegister} />
          </View>
        </ImageBackground>
      </View>
    )
  }
  
export default RegisterScreen;
