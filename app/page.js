import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import EditorsPick from "@/sections/EditorsPick";
import BestSeller from "@/sections/BestSeller";
import HomePage from "@/sections/HomePage";
import FeaturedProducts from "@/sections/FeaturedProducts";

export default function Page1() {
    return (
        <div>
            <TopBanner/>
            <Navbar/>
            <Hero/>
            <EditorsPick/>
            <BestSeller/>
            <HomePage/>
            <FeaturedProducts/>
        </div>
    );
}
