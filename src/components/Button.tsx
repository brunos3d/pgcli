import React, { ReactNode } from "react";
import { Text, Box, useFocus, useInput } from "ink";

export type ButtonProps = {
  disabled?: boolean;
  children: ReactNode;
  onActive: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  disabled,
  onActive,
  children,
}: ButtonProps) => {
  const { isFocused } = useFocus();

  useInput((_input, key) => {
    if (key.return && isFocused && !disabled) {
      onActive();
    }
  });

  return (
    <Box
      borderStyle={"round"}
      borderColor={disabled ? "gray" : isFocused ? "blue" : "white"}
      paddingX={2}
    >
      <Text
        color={disabled ? "gray" : isFocused ? "blue" : "white"}
        bold={true}
        underline={isFocused}
      >
        {children}
      </Text>
    </Box>
  );
};

export default Button;
