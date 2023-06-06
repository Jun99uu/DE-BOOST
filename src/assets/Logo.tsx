import { ComponentProps } from "react";
import { ReactComponent as LogoAsset } from "./logo.svg";
import { ReactComponent as LogoBlueAsset } from "./logo-blue.svg";

interface Props extends ComponentProps<"svg"> {
  width?: number;
  height?: number;
  fill?: string;
  blue?: boolean;
}

/**
 * Logo svg component
 */
export const Logo = ({ blue, ...props }: Props) => {
  return blue ? <LogoBlueAsset {...props} /> : <LogoAsset {...props} />;
};

export default Logo;
