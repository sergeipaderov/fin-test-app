import { Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const ScreenTitle = ({ title }: { title: string }) => {
  return <Text style={styles.headerTitle}>{title}</Text>;
};

export default ScreenTitle;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 10,
  },
});
