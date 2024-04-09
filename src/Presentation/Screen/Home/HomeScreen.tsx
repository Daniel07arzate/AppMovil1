import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import ProfileInfoViewModel from "./ViewModel";
import { fetchSensorData } from "../../../Data/source/remote/SensorApi/api";
import { styles } from "./HomeScreenStyles";
import { ResponseApiArd, SensorData } from '../../../Data/source/remote/models/ResponseApiArd';
import { LineChart } from "react-native-chart-kit";

interface Props extends StackScreenProps<RootStackParamList, 'Home'> { };

const HomeScreen = ({ navigation, route }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { removeSession } = ProfileInfoViewModel();
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const handleLogoutPress = async () => {
    await removeSession();
    navigation.navigate('Login');
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    fetchSensorData()
      .then((response: ResponseApiArd) => {
        if (response.success) {
          setSensorData(response.data);
        } else {
          console.error('Error fetching sensor data:', response.message);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching sensor data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>

      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={[styles.menuItem, styles.closeButton]} onPress={handleCloseMenu}>
            <Text style={styles.menuItemText}> ☰</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleProfilePress}>
            <Text style={styles.menuItemText}> Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogoutPress}>
            <Text style={styles.menuItemText}> Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.welcomeTitle}>!!Bienvenido a TechSystem!!</Text>
      <Text style={styles.mainContent}>Te mostraremos los datos de tus sensores </Text>

      <Text style={styles.title}>Gráfico de Temperatura</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : sensorData.length === 0 ? (
        <Text>No hay datos disponibles</Text>
      ) : (
        <LineChart
          data={{
            labels: sensorData.map(data => data.id.toString()),
            datasets: [{
              data: sensorData.map(data => data.temperature),
            }],
          }}
          width={400}
          height={200}
          chartConfig={{
            backgroundColor: '#fff', // Fondo blanco
            backgroundGradientFrom: '#fff', // Gradiente blanco
            backgroundGradientTo: '#fff', // Gradiente blanco
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Azul Bootstrap
            labelColor: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Azul Bootstrap
          }}
          style={styles.chart}
        />
      )}

      <Text style={styles.title}>Gráfico de Humedad</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : sensorData.length === 0 ? (
        <Text>No hay datos disponibles</Text>
      ) : (
        <LineChart
          data={{
            labels: sensorData.map(data => data.id.toString()),
            datasets: [{
              data: sensorData.map(data => data.humidity),
            }],
          }}
          width={400}
          height={200}
          chartConfig={{
            backgroundColor: '#fff', // Fondo blanco
            backgroundGradientFrom: '#fff', // Gradiente blanco
            backgroundGradientTo: '#fff', // Gradiente blanco
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Azul Bootstrap
            labelColor: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Azul Bootstrap
          }}
          style={styles.chart}
        />
      )}
    </View>
  );
};

export default HomeScreen;
