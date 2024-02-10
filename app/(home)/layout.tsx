import React from "react";
import Sidebar from "./_componants/sidebar/Sidebar";
interface Props {
    children: React.ReactNode;
}
export default function HomeLayout({
    children
} : Props) {
    return (
    <div className="flex w-full h-screen">
        <Sidebar />
        <div>
            {children}
        </div>
    </div>
    );
}