import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <p className="text-center py-5">
        {" (C) "}Copyrights by Developer Routes - {new Date().getFullYear()} . All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
