import { View, Text, StyleSheet } from "react-native";

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <View style={styles.transactionsSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  transactionsSection: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#34495e",
    marginBottom: 15,
  },
});
