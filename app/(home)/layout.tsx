import React from "react";
import SideBar from "./_componants/sidebar/Sidebar";
import ChatBar from "./_componants/chatbar/ChatBar";
import SecureRoutes from "./_componants/SecureRoutes";
interface Props {
    children: React.ReactNode;
}
export default function HomeLayout({
    children
} : Props) {
    return (
        <SecureRoutes>
            <div className="flex w-full h-screen">
                <SideBar />
                <ChatBar />
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </SecureRoutes>
    );
}