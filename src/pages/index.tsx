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
        content1="Intentionally crafted for your well-being, promoting focused productivity and a relaxed posture."
        content2="Versatile for indoor and outdoor use, with a special emphasis on desktop comfort."
        buttonText1="Order Now"
      />
      <Section3
        imagem="/devsensor_pro.png"
        title={"DEVSENSOR PRO"}
        content1="Delivering a host of added benefits, this solution not only offers posture reminders but also provides personalized workout guidance."
        content2={`The built-in LCD posture indicator ensures real-time feedback, making it a comprehensive tool for promoting overall well-being and productivity.`}
        buttonText1="Order Now"
      />
      <Section2
        imagem="/devsensor_wearable.png"
        title={"DEVSENSOR WEARABLE"}
        content1="Made for comfort, whether you're inside or outside. Easy to use and works well in both settings, making things more efficient for you."
        content2={"Uses the way you move your hands to predict your body posture and provide guidance for workouts."}
        content3=""
        buttonText1="Order Now"
      />
      <SectionFull
        title="Future with DevSensor"
        imagem="/devsensor_base_downward.png"
        content1="The carefully crafted ecosystem, inclusive of ergonomic chairs, well-designed tables, and the innovative DevSensor, is specifically engineered to elevate your sitting posture, providing comfort and support."
        content2="This thoughtfully curated setup aims not only to enhance your physical well-being but also to maximize productivity, creating an optimal environment for your work or study sessions. Using DevSensor you get over 5years posture insight."
        buttonText1="Order Now"
      />
      <Section2
        imagem="/devsensor_pro.gif"
        title={"General Benefits"}
        content1="Experience worry-free comfort with DevSensor, ensuring that sitting posture is no longer a concern."
        content2="Allow us to manage your posture care, providing a solution that prioritizes your well-being and promotes ergonomic support for a more comfortable and healthier sitting experience."
        buttonText1="Order Now (Waitlist)"
        buttonText2="Order Now"
      />
      <Section3
        imagem="/devsensor_base.gif"
        title={"30 DAY TRIAL"}
        content1="If not satisfied, start a 30 days free trial."
        content2=""
        buttonText1="Order Now"
      />
    </div>
  );
}
