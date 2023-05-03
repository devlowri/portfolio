import * as React from "react";
const PaperPlaneIcon = (props: any): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M.755 12.197c-1.06.605-.961 2.217.168 2.686L7.5 17.625v4.842a1.53 1.53 0 0 0 2.71.98l2.906-3.483 5.808 2.419c.885.37 1.912-.211 2.057-1.158l3-19.5a1.496 1.496 0 0 0-.633-1.462 1.505 1.505 0 0 0-1.593-.066l-21 12Zm2.442 1.195 16.008-9.145L8.91 15.75l.056.047-5.77-2.405Zm15.708 6.549-7.81-3.258L21.131 5.466 18.905 19.94Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="transparent" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PaperPlaneIcon;
