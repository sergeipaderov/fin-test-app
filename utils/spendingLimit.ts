import AsyncStorage from "@react-native-async-storage/async-storage";
import { SPENDING_LIMIT_KEY } from "./constants";

interface IShowModal {
  (message: string): void;
}

export const loadSpendingLimit = async (
  showModal: IShowModal
): Promise<number | null> => {
  try {
    const storedLimit: string | null = await AsyncStorage.getItem(
      SPENDING_LIMIT_KEY
    );
    if (storedLimit !== null) {
      return parseFloat(storedLimit);
    }
  } catch (e: unknown) {
    console.error("Failed to load spending limit:", e);
    showModal("Failed to load spending limit from storage.");
  }
  return null;
};

export const saveSpendingLimit = async (
  showModal: IShowModal,
  limit: number
): Promise<number | null> => {
  try {
    await AsyncStorage.setItem(SPENDING_LIMIT_KEY, limit.toString());
    console.log("Spending limit saved successfully.");
  } catch (e: unknown) {
    console.error("Failed to save spending limit:", e);
    showModal("Failed to save spending limit. Please try again.");
  }
  return null;
};
