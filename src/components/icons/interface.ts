export interface IIconProps {
  color?: "black" | "white" | "grey" | "red" | "green" | "blue";
  size?: "small" | "medium" | "large";
}

export const defaultIconProps: Required<IIconProps> = {
  size: "medium",
  color: "white",
};
