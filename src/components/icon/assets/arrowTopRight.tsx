import * as React from "react";
const SvgComponent = (props: any): JSX.Element => (
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
        fill="#122640"
        d="M20.878 4.62c.06-.888-.614-1.561-1.501-1.502l-11.365.758c-.887.059-1.656.828-1.716 1.716-.059.887.614 1.56 1.502 1.501l7.49-.503L3.666 18.212c-.67.67-.738 1.686-.151 2.273.586.587 1.602.519 2.272-.152L17.405 8.715l-.495 7.483c-.06.887.614 1.56 1.502 1.501.887-.059 1.656-.828 1.716-1.716l.757-11.364h-.007Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
