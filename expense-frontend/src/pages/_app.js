import "@/styles/globals.css";
import AddProvider from "../../context/AddContext";

export default function App({ Component, pageProps }) {
  return (
    <AddProvider>
      <Component {...pageProps} />
    </AddProvider>
  )
}
