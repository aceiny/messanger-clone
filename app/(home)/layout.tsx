import React from "react";
import SideBar from "./_componants/sidebar/Sidebar";
import ChatBar from "./_componants/chats/ChatBar";
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
        <div>
            {children}
        </div>
    </div>
    );
}