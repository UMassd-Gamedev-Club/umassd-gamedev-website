
import Image from "next/image";
import MainCard from "@/components/layout/main-card";
export default function Home() {
  return (
    <MainCard title="Welcome!">
      <div className="flex flex-col lg:flex-row text-lg">
        <div className="flex-2 bg-sky-300">
          <div>
            Welcome to the UMass Dartmouth Gamedev club! Here you will find a
            directory of games by our students, information on past game jams
            and events, and resources for officers.
          </div>
        </div>

        <div className="flex flex-1 bg-red-300 items-center justify-center p-2">
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
    </MainCard>
  );
}
