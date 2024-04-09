import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000",
    textAlign: 'center'
  },
  mainContent: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userContainer: {
    marginBottom: 20,
  },
  fieldContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    width: 120,
    color: "#000000",
  },
  value: {
    flex: 1,
    color: "#000000",
  },
  credentialContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  credentialText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#000000",
  },
});
