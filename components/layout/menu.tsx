import {
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"

export default function Menu() {
    return <Menubar className="bg-background flex flex-row items-center justify-around gap-4 p-4 rounded-none">
        <MenubarMenu>
            <MenubarTrigger><Link href="/">Home</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><Link href="directory">Directory</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Game Jams</MenubarTrigger>
            <MenubarContent className="w-md p-2 m-2">
                <div className="cursor-pointer hover:bg-secondary hover:underline">Art and Logos</div></MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Resources</MenubarTrigger>
            <MenubarContent className="w-md p-2 m-2">
                <div className="cursor-pointer hover:bg-secondary hover:underline">Art and Logos</div>
                <MenubarSeparator />
                <div className=" cursor-pointer hover:bg-secondary hover:underline">Officer/Mod Area</div>
            </MenubarContent>
        </MenubarMenu>
    </Menubar>
}