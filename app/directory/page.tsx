import GameCard from "@/components/directory/game-card";
import SubmitGame from "@/components/directory/submit-game";
import MainCard from "@/components/layout/main-card";
import Link from "next/link";
export default function Directory() {
    return <><MainCard title="Games Directory">
        <div>Games made by former and current UMassd students.</div>
        <div>For previous CIS 464(Computer Game Design) Games, see this <Link className="font-bold text-umd-blue" href="/directory/gamedesign">link</Link></div>

        <div className="border-b-[1] border-muted-foreground my-4" />
        <p>To submit a game, click here: <SubmitGame /></p>

        <div className="border-b-[1] border-muted-foreground my-4" />
        <div className="grid grid-cols-4 justify-center gap-10">
            <GameCard /><GameCard /><GameCard /><GameCard />
            <GameCard /><GameCard /><GameCard /><GameCard />
            <GameCard /><GameCard /><GameCard /><GameCard />
            <GameCard /><GameCard /><GameCard /><GameCard />
        </div>
        <div className="my-4 border-[1] border-muted-foreground" />



    </MainCard></>
}