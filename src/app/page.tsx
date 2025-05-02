"use client";
import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("../components/pages/home/index"), {
    ssr: false,
});
const HomePage = () => {
    return <HomeComponent />;
};

export default HomePage;
