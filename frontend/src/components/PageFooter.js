import React from "react";
import { Footer } from "flowbite-react";
export const PageFooter = () => {
  return (
    <Footer
      className="h-[8vh] bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700"
      container
    >
      <Footer.Copyright href="#" by="Side Scroller" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};
