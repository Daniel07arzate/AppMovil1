import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useUserLocal } from '../../../hooks/useUserLocal';
import { styles } from './ProfileInfoStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserCredential from './UserCredential'; // Importa el componente UserCredential

const ProfileInfo = () => {
  const { user } = useUserLocal();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Información del Usuario</Text>
        <Text style={styles.mainContent}>Bienvenido a tu perfil, te mostraremos una breve informacion de tu inicio de sesion</Text>
        <View style={styles.avatarContainer}>
          <Icon name="user" size={50} color="#000" />
        </View>
        {user ? (
          <UserCredential name={user.name} email={user.email} /> 
        ) : (
          <Text>No se encontraron datos de usuario</Text>
        )}
      </View>
    </ScrollView> 
  );
};

export default ProfileInfo;
