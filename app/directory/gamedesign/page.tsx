import MainCard from "@/components/layout/main-card";

import GamesTable from "@/components/directory/games-table";
export default function GameDesign() {
    return (
        <MainCard title={"CIS 464: Computer Game Design Previous Games"}>

            <p>This is where a table of previous games will go.</p>
            <GamesTable />
        </MainCard>
    )
}