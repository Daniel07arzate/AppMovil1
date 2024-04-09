import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

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
    fontSize: 18,
    marginTop: 60,
    marginBottom: 80,
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
    marginTop: 20,
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
