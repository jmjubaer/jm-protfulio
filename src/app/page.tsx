"use client";
import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("../components/pages/home/Home"), {
    ssr: false,
});
const HomePage = () => {
    return <HomeComponent />;
};

export default HomePage;
