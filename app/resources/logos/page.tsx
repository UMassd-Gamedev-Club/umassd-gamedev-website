import MainCard from "@/components/layout/main-card";
import { ExternalLink } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Logos() {
    return <MainCard title="Art and Logos">

        <p>These artwork and stickers were comissioned by the Gamedev Club and created by{" "}
            <Link
                href="https://www.instagram.com/kaylee_tilldaughter"
                className="inline-flex items-center gap-1 font-bold underline"
            >
                Kaylee
                <ExternalLink className="w-4 h-4" />
            </Link>
            {" "}You may use these images for marketing, flyers and freebies.
        </p>
        <p>The original files are in the  <Link
            href="https://github.com/UMassd-Gamedev-Club/umassd-gamedev-website/tree/main/public/Game%20Dev"
            className="inline-flex items-center gap-1 font-bold underline"
        >
            Github
            <ExternalLink className="w-4 h-4" />
        </Link>.
            A backup of the image files are also on a public <Link
                href="https://drive.google.com/drive/folders/14ok8OYFq7d4d8M0vKBnrKECiqchjNDZQ?usp=sharing"
                className="inline-flex items-center gap-1 font-bold underline"
            >Google Drive folder  <ExternalLink className="w-4 h-4" /></Link>.
        </p>

        <h2 className="mt-4">Stickers</h2>
        <div className="border-b-[1] mb-4" />


        <div className="flex flex-col justify-center w-full">
            <div className="grid grid-cols-4 gap-4 w-full md:h-fit h-50 items-center">
                <div className="relative w-full ">
                    <Image
                        src="/Game Dev/Stickers/Minecraft Arnie.png"
                        alt="Minecraft Arnie"
                        width={900} height={900}
                        className="object-contain"
                    />
                </div>
                <div className="relative w-full">
                    <Image
                        src="/Game Dev/Stickers/Pixel Arnie.png"
                        alt="Pixel Arnie"
                        width={900} height={900}
                        className="object-contain"
                    />
                </div>
                <div className="relative w-full ">
                    <Image
                        src="/Game Dev/Stickers/Race Arnie.png"
                        alt="Race Arnie"
                        width={900} height={900}
                        className="object-contain"
                    />
                </div>
                <div className="relative w-full ">
                    <Image
                        src="/Game Dev/Stickers/Stardew Arnie.png"
                        alt="Stardew Arnie"
                        width={900} height={900}
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full md:h-fit h-50 items-center">
                <div className="relative w-full ">
                    <Image
                        src="/Game Dev/Stickers/Undertale Arnie.png"
                        alt="Undertale Arnie"
                        width={900} height={900}
                        className="object-contain"
                    />
                </div>

                <div className="relative w-full ">
                    <Image
                        src="/Game Dev/Stickers/Unity Arnie.png"
                        alt="Unity Arnie"
                        width={900} height={900}
                        className="object-contain"
                    />
                </div>

                <div className="relative w-full ">
                    <Image
                        src="/Game Dev/Stickers/Unreal Arnie.png"
                        alt="Unreal Arnie"
                        width={900} height={900}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
        <h2 className="mt-4">Banner</h2>
        <div className="border-b-[1] mb-4" />
        <Image src="/Game Dev/Game Dev BANNER Small.png" width={4500} height={825} alt="Arnie Banner" />


        <h2 className="mt-4">T-shirts</h2>
        <div className="border-b-[1] mb-4" />
        <div className="flex flex-col md:flex-row h-fit items-center">
            <div className="md:flex-1 relative">
                <Image src="/Game Dev/Sailing Trimmed.png"
                    className="object-contain" width={2261} height={2039} alt="Sailing T-Shirt" />
            </div>
            <div className="md:flex-1  relative">
                <Image src="/Game Dev/Pixel T-Shirt.png"
                    className="object-contain" width={2550} height={3300} alt="Pixel T-Shirt" />
            </div>
        </div>
        <h2 className="mt-4">Tablecloth</h2>
        <div className="border-b-[1] mb-4" />
        <p className=" mb-4">The tablecloth comes in a 8ft and a 6ft pattern. One has already been printed, but in case it gets lost the files are on the Github to print another.</p>
        <div className="flex flex-row items-center justify-center">
            <Image src="/Game Dev/Table Cloth/Tablecloth 8 ft.svg" width={1219} height={720} alt="Table Cloth 8 ft" />
        </div>

        <h2 className="mt-4">Logos</h2>
        <div className="border-b-[1] mb-4" />
        <div className="flex flex-col justify-center h-fit items-center">
            <div className="grid grid-cols-4 gap-4 w-full md:h-fit h-50 items-center">
                <div className="w-full ">
                    <Image src="/Game Dev/LOGO Files/Game Dev (FULL LOGO).svg" width={900} height={900} alt="FULL LOGO" />
                </div>
                <div className="w-full ">
                    <Image src="/Game Dev/LOGO Files/Game Dev (TYPEFACE LOGO).svg" width={900} height={900} alt="TYPEFACE LOGO" />
                </div>
                <div className="w-full ">
                    <Image src="/Game Dev/LOGO Files/Game Dev DISCORD LOGO.png" width={900} height={900} alt="DISCORD LOGO" />
                </div>
                <div className="w-full">
                    <Image src="/Game Dev/LOGO Files/Game Dev DISCORD TYPE LOGO.png" width={900} height={900} alt="DISCORD TYPE LOGO" />
                </div>
            </div>
        </div>
        <h2 className="mt-4">Stickers (gen 1)</h2>
        <div className="border-b-[1] mb-4" />
        <p className="mb-4">These icons were not made by Kaylee and are free to use as well for club material. You may find them in the  <Link
            href="https://github.com/UMassd-Gamedev-Club/umassd-gamedev-website/tree/main/public/Game%20Dev"
            className="inline-flex items-center gap-1 font-bold underline"
        >
            Github
            <ExternalLink className="w-4 h-4" />
        </Link>.</p>
        <div className="flex flex-col gap-4 md:flex-row h-fit items-center">
            <div className="flex-1 relative">
                <Image
                    src="/Gamedev Club Gen 1 Logos/Arnie vs Godot.png"
                    alt="Arnie vs Godot"
                    width={1463} height={1500}
                    className="object-contain"
                />
            </div>

            <div className="flex-1 relative">
                <Image
                    src="/Gamedev Club Gen 1 Logos/Corsair_Unity.png"
                    alt="Corsair_Unity"
                    width={2500} height={1500}
                    className="object-contain"
                />
            </div>
            <div className="flex-1 relative">
                <Image
                    src="/Gamedev Club Gen 1 Logos/umass+gameclublogo.png"
                    alt="umass+_gameclublogo"
                    width={1500} height={1500}
                    className="object-contain"
                />
            </div>
        </div>
    </MainCard>
}