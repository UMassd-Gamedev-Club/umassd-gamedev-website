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
            <MenubarTrigger><Link href="/directory">Directory</Link></MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger className="cursor-auto">Game Jams</MenubarTrigger>
            <MenubarContent className="w-md p-2 mx-2 ">
                <div className="cursor-pointer hover:bg-secondary hover:underline">
                    <Link href="/events/gamejams/april2026">April 2026</Link>
                </div>
            </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger className="cursor-auto">Resources</MenubarTrigger>
            <MenubarContent className="w-md p-2 mx-2 ">
                <div className="cursor-pointer hover:bg-secondary hover:underline">
                    <Link href="/resources/logos">Art and Logos</Link></div>
                <MenubarSeparator />
                <div className=" cursor-pointer hover:bg-secondary hover:underline"> <Link href="/resources/mods">Officer/Mod Area</Link></div>
            </MenubarContent>
        </MenubarMenu>
    </Menubar>
}