import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <p className="text-center py-5">
        {new Date().getFullYear()} © Copyrights by Developer Routes . All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
