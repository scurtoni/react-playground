import React, {FC} from "react";
import "./button.css";

import MuiButton, {ButtonProps as MuiButtonProps} from "@mui/material/Button";

interface ButtonProps extends MuiButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({primary = false, size = "medium", backgroundColor, label, ...props}: ButtonProps) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <MuiButton color="primary" className={["storybook-button", `storybook-button--${size}`, mode].join(" ")} style={{backgroundColor}} {...props}>
      {props.children}
    </MuiButton>
  );
};
