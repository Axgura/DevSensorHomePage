import Header from "../components/Header";
import SectionMain from "@/components/SectionMain";
import SectionFull from "@/components/SectionFull";
import { Inter } from "next/font/google";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen bg-[url('/devsensor_hero.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full absolute">
        <Header />
      </div>
      <SectionMain />
      <Section2
        imagem="/devsensor_base.png"
        title={"DEVSENSOR"}
        content1="Planing the ideal posture grammar for you."
        content2="Specs, in a brief explaination..."
        buttonText1="Order Now"
      />
      <Section3
        imagem="/devsensor_pro.png"
        title={"DEVSENSOR PRO"}
        content1="Planing the best ideal posture grammar for the pro model."
        content2={`Specs, for the PRO model`}
        buttonText1="Order Now"
      />
      <Section2
        imagem="/devsensor_wearable.png"
        title={"DEVSENSOR WEARABLE"}
        content1="Planing the best ideal posture grammar for the pro model."
        content2={`Specs,for the wearable model`}
        content3="Experimente qualquer produto Starlink por 30 dias e, se não estiver satisfeito, devolva o equipamento e receba um reembolso total."
        buttonText1="Order Now"
      />
      <SectionFull
        title="Future with DevSensor"
        imagem="/devsensor_base_downward.png"
        content1="Talk about plans and records we have, and also improvement."
        content2="More of Advancement."
        buttonText1="Order Now"
      />
      <Section2
        imagem="/devsensor_pro.gif"
        title={"All model benefits explained in one Section"}
        content1="First benefit you get from using DevSensor."
        content2="Second benefit you get just by using DevSensor"
        buttonText1="Order Now (Waitlist)"
        buttonText2="Order Now"
      />
      <Section3
        imagem="/devsensor_base.gif"
        title={"A question and prove finalizing why you should get DevSensor."}
        content1="What works if you use DevSensor"
        content2="benefits from DevSensor"
        buttonText1="Order Now"
      />
    </div>
  );
}
