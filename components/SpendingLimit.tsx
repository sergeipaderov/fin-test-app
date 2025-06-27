import { Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Section from "./Section";

type SpendingLimitProps = {
  limitInput: string;
  spendingLimit: number | null;
  setLimitInput: (input: string) => void;
  handleSetLimit: () => void;
};

const SpendingLimit = ({
  limitInput,
  spendingLimit,
  setLimitInput,
  handleSetLimit,
}: SpendingLimitProps) => {
  return (
    // Have sense to create Custom Input's component for more customization
    // and reusability inside forms, but for simplicity, we use TextInput here
    <Section title="Set Monthly Spending Limit">
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your budget (e.g., 500)"
        value={limitInput}
        onChangeText={setLimitInput}
        onEndEditing={handleSetLimit}
      />
      <TouchableOpacity style={styles.setLimitButton} onPress={handleSetLimit}>
        <Text style={styles.setLimitButtonText}>Set Limit</Text>
      </TouchableOpacity>
      {spendingLimit !== null && (
        <Text style={styles.currentLimitText}>
          Current Limit:{" "}
          <Text style={styles.currentLimitValue}>
            ${spendingLimit.toFixed(2)}
          </Text>
        </Text>
      )}
    </Section>
  );
};

export default SpendingLimit;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    color: "#34495e",
  },
  setLimitButton: {
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#007bff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  setLimitButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  currentLimitText: {
    fontSize: 16,
    marginTop: 15,
    color: "#555",
    textAlign: "center",
  },
  currentLimitValue: {
    fontWeight: "bold",
    color: "#007bff",
  },
});
