import Image from "next/image";
import Login from "./_componants/Login";
import Register from "./_componants/Register";
import image from "@/public/AuthImage.png"
export default function Auth() {
    return (
    <div className=" flex h-screen w-full">
        <div className=" w-[60%] bg-transparent rounded-r-2xl ">
            <Image src={image} alt="image" className=" object-fit w-full h-full" />
        </div>
        <div className=" flex-1 h-full flex flex-col items-center gap-3 justify-center">
            <Login />
            <Register />
        </div>
    </div>
    )
}