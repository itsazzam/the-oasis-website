import SideNavigation from "@/app/_components/SideNavigation";
import { Children } from "react";

export default function RootLayout ({children}) {
    return (
        <div className="grid grid-cols-[16rem_1fr] h-full gap-16">

        <SideNavigation />
        <div>{children}</div>
        </div>
    )
    
}