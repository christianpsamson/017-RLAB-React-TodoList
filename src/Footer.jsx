import React from "react";

function Footer({ length }) {
  return (
    <footer>
      <p>
        {length} {length === 1 ? "Todo" : "Todos"}
      </p>
    </footer>
  );
}

export default Footer;
