import { Suspense } from "react";
import * as Iconset from "./iconset";
import type { IconProps } from "./types";

const Icon = ({ icon, ...props }: IconProps): JSX.Element => {
  const IconComponent = Iconset[icon];
  return (
    <Suspense>
      <IconComponent {...props} />
    </Suspense>
  );
};

export default Icon;
