import Image from "next/image";
import { Inter } from "next/font/google";
import { Loading } from "@/components/Loading";
import { Dashboard } from "@/components/Dashboard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <Loading /> */}
      <Dashboard />
    </main>
  );
}
