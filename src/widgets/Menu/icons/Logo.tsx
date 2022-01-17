import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 162 50" {...props}>
      <image
        href="data:image/png;base64,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"
        width="100"
      ></image>
    </Svg>
  );
};

export default Logo;
