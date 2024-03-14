import { Html, Head, Main, NextScript } from "next/document";
import { useContext } from "react";
import AddProvider, { AddContext } from "../../context/AddContext";

export default function Document() {
  const { add, setAdd } = useContext(AddContext)
  console.log("document ", add)
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
