import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import Section from "./Section";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "./ProgressBar";

type ISpendingSummary = {
  isOverBudget: boolean;
  totalSpent: number;
  spendingLimit: number | null;
  remainingBudget: number;
};

const SpendingSummary = ({
  isOverBudget,
  totalSpent,
  spendingLimit,
  remainingBudget,
}: ISpendingSummary) => {
  const progressPercentage = useMemo(() => {
    if (spendingLimit === null || spendingLimit <= 0) return 0;
    const percentage = (totalSpent / spendingLimit) * 100;
    return Math.min(percentage, 100);
  }, [totalSpent, spendingLimit]);

  return (
    <Section title="Spending Summary">
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Total Spent:</Text>
        <Text
          style={[
            styles.summaryValue,
            isOverBudget ? styles.overBudgetText : styles.underBudgetText,
          ]}
        >
          ${totalSpent.toFixed(2)}
        </Text>
      </View>

      {spendingLimit !== null && (
        <>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Remaining Budget:</Text>
            <Text
              style={[
                styles.summaryValue,
                remainingBudget < 0
                  ? styles.overBudgetText
                  : styles.underBudgetText,
              ]}
            >
              ${remainingBudget.toFixed(2)}
            </Text>
          </View>
          <ProgressBar
            spendingLimit={spendingLimit}
            progressPercentage={progressPercentage}
            isOverBudget={isOverBudget}
          />
          <View style={styles.budgetStatusContainer}>
            <Ionicons
              name={isOverBudget ? "alert-circle" : "checkmark-circle"}
              size={24}
              color={isOverBudget ? "#dc3545" : "#28a745"}
            />
            <Text
              style={[
                styles.budgetStatusText,
                isOverBudget ? styles.overBudgetText : styles.underBudgetText,
              ]}
            >
              {isOverBudget ? "You are OVER budget!" : "You are within budget."}
            </Text>
          </View>
        </>
      )}
      {spendingLimit === null && (
        <Text style={styles.noLimitText}>
          Set a limit to track your budget!
        </Text>
      )}
    </Section>
  );
};

export default SpendingSummary;

const styles = StyleSheet.create({
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 17,
    color: "#555",
    fontWeight: "500",
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  overBudgetText: {
    color: "#dc3545",
  },
  underBudgetText: {
    color: "#28a745",
  },
  budgetStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    paddingVertical: 10,
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    marginBottom: 10,
  },
  budgetStatusText: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 8,
  },
  noLimitText: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 10,
  },
});
