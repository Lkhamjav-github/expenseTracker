import Image from "next/image";
import { Inter } from "next/font/google";
import { Loading } from "@/components/Loading";
import { Dashboard } from "@/components/Dashboard";
import { Header } from "@/components/Header";
import { Records } from "@/components/Records";
import { Modal } from "@/components/Modal";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      {/* <Loading /> */}
      {/* <Dashboard /> */}
      <Records />
      {/* <Modal /> */}
    </main>
  );
}
