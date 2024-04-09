import { StyleSheet } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    form: {
      width: "70%",
      padding: 20,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: 20,
    },
    title: {
      color: "#FFF",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 24, // Cambiado para que coincida con el tamaño del título del formulario de registro
      marginBottom: 20, // Ajustado para que coincida con el margen inferior del título del formulario de registro
    },
    input: {
      width: "100%",
      height: 40,
      marginTop: 20,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.1)",
      paddingHorizontal: 10,
      color: "#FFF",
      borderRadius: 5,
      fontSize: 14,
    },
    submitButton: {
      width: "100%",
      height: 40,
      marginTop: 40,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    submitButtonText: {
      color: "#444",
      fontSize: 15,
      fontWeight: "bold",
    },
    registerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10, // Ajustado para que coincida con el margen superior del enlace de registro del formulario de registro
    },
    registerText: {
      color: "#FFF",
      marginRight: 5,
    },
    link: {
      color: MyColors.primary,
      textDecorationLine: "underline",
    },
  });
  