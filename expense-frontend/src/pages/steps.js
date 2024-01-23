import Image from "next/image";
import { Inter } from "next/font/google";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { SterThree } from "@/components/SterThree";

const inter = Inter({ subsets: ["latin"] });

export default function steps() {
    return (
        <main>
            <StepOne />
        </main>
    );
}
