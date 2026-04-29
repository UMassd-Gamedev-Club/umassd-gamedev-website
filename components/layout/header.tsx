import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full">
            <Image
                src="/Game Dev/Game Dev BANNER Small.png"
                alt="Arnie holding a controller on the banner"
                width={4500}
                height={825}
                className="w-full h-auto"
                priority
            />
        </header>
    );
}