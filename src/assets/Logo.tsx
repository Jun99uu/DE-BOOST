import { ReactComponent as LogoAsset } from "./logo.svg";

interface Props {
  width: number;
  height: number;
  fill: string;
}

/**
 * Logo svg component
 */
export const Logo = ({ ...props }: Props) => {
  return <LogoAsset {...props} />;
};

export default Logo;
