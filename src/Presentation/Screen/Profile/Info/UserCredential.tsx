import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name: string;
  email: string;
}

const UserCredential: React.FC<Props> = ({ name, email }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>{name}</Text>
      <Text style={styles.label}>Correo Electrónico:</Text>
      <Text style={styles.value}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D5D8DC', // Color de fondo de Bootstrap
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007bff', // Azul Bootstrap
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default UserCredential;
