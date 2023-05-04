import type * as Iconset from "./iconset";

export interface IconProps extends Icons {
  className?: string;
}

export interface Icons {
  icon: keyof typeof Iconset;
}
