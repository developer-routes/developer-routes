import React from "react";

const DeveloperRoutesLogo = ({
  width = 512,
  height = 512,
  primaryColor = "#5252DD",
  secondaryColor = "#F95FCC",
  stokeColor = "#000",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="219.088" cy="217.306" r="38.1944" fill={primaryColor} />
      <circle cx="219.088" cy="297.005" r="38.1944" fill={secondaryColor} />
      <path
        d="M263.139 177.583C284.952 177.583 305.871 185.779 321.295 200.367C336.719 214.956 345.384 234.742 345.384 255.373C345.384 276.004 336.719 295.79 321.295 310.378C305.871 324.966 284.952 333.162 263.139 333.162L263.139 255.373L263.139 177.583Z"
        fill="#1FDEE0"
      />
      <circle cx="256" cy="259" r="146" stroke={stokeColor} strokeWidth="8" />
    </svg>
  );
};

export default DeveloperRoutesLogo;
