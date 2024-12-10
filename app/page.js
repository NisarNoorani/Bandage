import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import EditorsPick from "@/sections/EditorsPick";

export default function Page1() {
    return (
        <div>
            <TopBanner/>
            <Navbar/>
            <Hero/>
            <EditorsPick/>
        </div>
    );
}
