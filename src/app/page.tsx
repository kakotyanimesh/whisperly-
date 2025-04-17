import { Features } from "@/components/features";
import HomePage from "@/components/header";



export default function Home() {
  return (
    <div className="mb-10 md:mx-32 mx-5 space-y-20">
      <HomePage/>
      <Features/>
    </div>
  );
}
