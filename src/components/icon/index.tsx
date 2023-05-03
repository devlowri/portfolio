import { Suspense } from "react";
import * as Iconset from "./iconset";

interface IconProps {
  icon: keyof typeof Iconset;
  className?: string;
}

const Icon = ({ icon, ...props }: IconProps): JSX.Element => {
  const IconComponent = Iconset[icon];
  return (
    <Suspense>
      <IconComponent {...props} />
    </Suspense>
  );
};

export default Icon;
