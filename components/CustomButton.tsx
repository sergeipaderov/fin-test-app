import { View, Text, Modal, Button, StyleSheet } from "react-native";

// In real projects, you might want to use a custom button component for expand functionality and add colors themes. But I'll lieave it simple for now.

type ICustomButton = {
  text: string;
  action: () => void;
};

const CustomButton: React.FC<ICustomButton> = ({ text, action }) => {
  return <Button title={text} onPress={action} />;
};

export default CustomButton;
