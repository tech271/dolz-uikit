import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#cccccc",
  primaryBright: "#e66000",
  primaryDark: "#d95b00",
  secondary: "#7645D9",
  success: "#68CF29",
  warning: "#8330ff",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#3d3561",
  input: "#eeeaf4",
  inputBorder: "#ffffff",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8330ff",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "#140f29",
  backgroundDisabled: "#592E5A",
  contrast: "#ffffff",
  invertedContrast: "#0a0e17",
  input: "#000",
  inputBorder: "#000000",
  primaryDark: "#d95b00",
  tertiary: "#000000",
  text: "#d1d5db",
  textDisabled: "#666171",
  textSubtle: "#d1d5db",
  borderColor: "#000000",
  card: "#410c61",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #000000 0%, #3d3561 100%)",
  },
};