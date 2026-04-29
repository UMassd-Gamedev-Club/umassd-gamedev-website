
import Image from "next/image";
import MainCard from "@/components/layout/main-card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Discord from "@/components/layout/discord";

export default function Home() {
  return (
    <MainCard title="Welcome!">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="flex-2 flex flex-col justify-between">
          <div>
            <p>Welcome to the UMass Dartmouth Gamedev club! Here you will find a
              directory of games by our students, information on past game jams
              and events, and resources for officers.</p>
            <h2 className="mt-4">Meeting Times & Location</h2>
            <div className="border-b-[1]" />
            <p>Meeting times change every semester, check the Discord #announcements channel for the meeting times.</p>
            <p>The location is always on campus somewhere (usually DION)</p>
            <h2 className="mt-4">Discord</h2>
            <div className="border-b-[1]" />
            <div className="flex-row flex mt-4">
              <div className="pr-4"><Image src="/Assets/Discord-Symbol-Blurple.png" height={100} width={100} alt={"Discord Logo"} /> </div>

              <div>Join the  <Discord></Discord>  for the latest announcements, chats, and devlogs!</div>
            </div>
            <h2 className="mt-4">My Orgs</h2>
            <div className="border-b-[1]" />
            <div className="flex-row flex mt-4">
              <div className="pr-4"><Image src="/Assets/umassd-stacked.webp" height={100} width={100} alt={"UmassD Logo"} /> </div>
              <div>Join on <Link href="https://myorgs.umassd.edu/feeds?type=club&type_id=35505&tab=about" className="inline-flex items-center gap-1 font-bold underline">MyOrgs <ExternalLink className="w-4 h-4" /></Link> as a member to help the club grow!</div>
            </div>

          </div><div className="text-center text-muted-foreground">Founded Spring 2024</div>
        </div>

        <div className="flex flex-1 items-center justify-center p-2">
          <div className="w-full relative">
            <Image
              src="/Game Dev/Sailing Trimmed.png"
              width={2261}
              height={2039}
              className="w-full h-auto"
              alt="Arnie with his gamedev buddies"
            />
          </div>
        </div>
      </div>
    </MainCard >
  );
}
