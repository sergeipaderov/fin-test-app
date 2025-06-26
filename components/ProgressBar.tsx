import { Text, StyleSheet, View } from "react-native";
import { useMemo } from "react";

interface IProgressBar {
  spendingLimit: number;
  progressPercentage: number;
  isOverBudget: boolean;
}

const ProgressBar = ({
  spendingLimit,
  progressPercentage,
  isOverBudget,
}: IProgressBar) => {
  const progressBarFillColor = useMemo(() => {
    if (spendingLimit === null) return "rgba(107,114,128,0.5)";
    return isOverBudget ? "#dc3545" : "#28a745";
  }, [isOverBudget, spendingLimit]);

  return (
    <>
      {spendingLimit > 0 && (
        <>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBarFill,
                {
                  width: `${progressPercentage}%`,
                  backgroundColor: progressBarFillColor,
                },
              ]}
            />
          </View>
          <Text style={styles.progressPercentageText}>
            {progressPercentage.toFixed(0)}% of limit used
          </Text>
        </>
      )}
    </>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 12,
    backgroundColor: "#E0E0E0",
    marginTop: 20,
    marginBottom: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 6,
  },
  progressPercentageText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
  },
});
