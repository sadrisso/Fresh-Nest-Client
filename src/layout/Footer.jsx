// @flow strict

import * as React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Developed by SHOEB DRISSO
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
