import { ActivityIndicator, Text, FlatList, StyleSheet } from "react-native";
import Section from "./Section";
import TransactionsItem from "./TransactionItem";
import { Transaction } from "./../mockData";

type ITransactionsList = {
  transactions: Transaction[];
  isLoading: boolean;
  error?: string | null;
};

const TransactionsList = ({
  transactions,
  isLoading,
  error,
}: ITransactionsList) => {
  return (
    <Section title="Recent Transactions">
      {isLoading ? (
        <ActivityIndicator size="large" color="#007bff" /> // A simple loader to emulate data loading delays
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : transactions.length === 0 ? (
        <Text style={styles.noTransactionsText}>No transactions found.</Text>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={TransactionsItem}
          scrollEnabled={false}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </Section>
  );
};

export default TransactionsList;

const styles = StyleSheet.create({
  errorText: {
    fontSize: 16,
    color: "#dc3545",
    textAlign: "center",
    marginTop: 20,
  },
  noTransactionsText: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 20,
  },
  flatListContent: {
    paddingTop: 5,
  },
});
