import { Features } from "@/components/features";
import Footer from "@/components/footer";
import HomePage from "@/components/header";
import { Navbar } from "@/components/navbar";
import TextCard from "@/components/ui/textcard";



export default function Home() {
  return (
    <div className="mb-10 md:mx-32 mx-5 space-y-20">
      <Navbar/>
      <HomePage/>
      <Features/>
      <div className="flex justify-center items-center text-center">
        <TextCard quote="Whisperly is a calming audio experience where your favorite movie and series characters speak directly to you. From iconic quotes to heartfelt reflections, each whisper is crafted to soothe, inspire, and reconnect you with what matters. Whether it's a quiet moment or a deep breath in a busy day, let familiar voices guide you back to balance." author="Developer"/>
      </div>
      <Footer/>
    </div>
  );
}
