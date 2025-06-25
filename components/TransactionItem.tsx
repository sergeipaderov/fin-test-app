import { View, Text, StyleSheet } from "react-native";
import { Transaction } from "./../mockData";

const TransactionsItem = ({ item }: { item: Transaction }) => {
  return (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionDescription}>{item.description}</Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
      <Text style={styles.transactionAmount}>${item.amount.toFixed(2)}</Text>
    </View>
  );
};

export default TransactionsItem;

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  transactionDescription: {
    fontSize: 16,
    color: "#34495e",
    flex: 2,
  },
  transactionDate: {
    fontSize: 14,
    color: "#777",
    flex: 1,
    textAlign: "center",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#34495e",
    flex: 1,
    textAlign: "right",
  },
});
