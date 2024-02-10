import React from "react";
import SideBar from "./_componants/sidebar/Sidebar";
import ChatBar from "./_componants/chatbar/ChatBar";
interface Props {
    children: React.ReactNode;
}
export default function HomeLayout({
    children
} : Props) {
    return (
    <div className="flex w-full h-screen">
        <SideBar />
        <ChatBar />
        <div className="flex-1">
            {children}
        </div>
    </div>
    );
}