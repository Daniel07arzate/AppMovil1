import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    padding: 10,
  },
  menuButtonText: {
    fontSize: 20,
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#E3E5E8',
    width: 200, // Ancho del menú
    height: '100%', // Altura del menú
    paddingTop: 50, // Espacio para el encabezado del menú (si es necesario)
    paddingHorizontal: 20,
    zIndex: 1,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  mainContent: {
    fontSize: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 1, // Espacio adicional para separar el botón del resto de los elementos del menú
    backgroundColor: '#ABB2B9',
    paddingTop: 3,
    width:25,
    height: '4%',
    alignItems:'baseline'
  },
  temperature: {
    fontSize: 18,
    color: 'blue', 
  },
  humidity: {
    fontSize: 18,
    color: 'green', 
  },
  item: {
    marginBottom: 20, 
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  credentials: {
    backgroundColor: '#ecf0f1',
    padding: 20,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
    marginBottom: 20,
  },
  credentialsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  humidityCredentials: {
    position: 'absolute',
    top: -20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
