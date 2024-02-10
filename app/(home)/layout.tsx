import React from "react";
import SideBar from "./_componants/sidebar/Sidebar";
interface Props {
    children: React.ReactNode;
}
export default function HomeLayout({
    children
} : Props) {
    return (
    <div className="flex w-full h-screen">
        <SideBar />
        <div>
            {children}
        </div>
    </div>
    );
}