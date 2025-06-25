import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import { MOCKED_TRANSACTIONS, Transaction } from "./mockData";
import CustomModal from "./components/CustomModal";
import { loadSpendingLimit, saveSpendingLimit } from "./utils/spendingLimit";
import TransactionsList from "./components/TransactionsList";
import SpendingSummary from "./components/SpendingSummary";
import SpendingLimit from "./components/SpendingLimit";
import ScreenTitle from "./components/ScreenTitle";

export default function App() {
  const [spendingLimit, setSpendingLimit] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [limitInput, setLimitInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const showModal = (message: string) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  useEffect(() => {
    initializeAppData();
  }, []);

  const initializeAppData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const limit = await loadSpendingLimit(showModal);
      if (limit !== null) {
        setSpendingLimit(limit);
        setLimitInput(limit.toString()); // Pre-fill input if limit exists
      }

      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
      setTransactions(MOCKED_TRANSACTIONS);
    } catch (err) {
      console.error("Error initializing app data:", err);
      setError("Failed to load data. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const calculateTotalSpent = useCallback((): number => {
    return transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
  }, [transactions]);

  const totalSpent = calculateTotalSpent();
  const isOverBudget = spendingLimit !== null && totalSpent > spendingLimit;
  const remainingBudget =
    spendingLimit !== null ? spendingLimit - totalSpent : 0;

  const handleSetLimit = async () => {
    const parsedLimit = parseFloat(limitInput);
    if (isNaN(parsedLimit) || parsedLimit < 0) {
      showModal("Please enter a valid positive number for the spending limit.");
      return;
    }
    setSpendingLimit(parsedLimit);
    await saveSpendingLimit(showModal, parsedLimit);
    showModal(`Spending limit set to $${parsedLimit.toFixed(2)}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ScreenTitle title="Fintech Budget Tracker" />
        <SpendingLimit
          spendingLimit={spendingLimit}
          limitInput={limitInput}
          setLimitInput={setLimitInput}
          handleSetLimit={handleSetLimit}
        />
        <SpendingSummary
          isOverBudget={isOverBudget}
          totalSpent={totalSpent}
          spendingLimit={spendingLimit}
          remainingBudget={remainingBudget}
        />
        <TransactionsList
          transactions={transactions}
          isLoading={isLoading}
          error={error}
        />
      </ScrollView>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalMessage={modalMessage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  scrollViewContent: {
    padding: 20,
    paddingBottom: 40,
  },
});
