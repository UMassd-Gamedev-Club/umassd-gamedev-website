import MainCard from "@/components/layout/main-card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
export default function Mods() {
    return <MainCard title="Resources for Mods">

        <Link
            href="https://myorgs.umassd.edu/feeds?type=club&type_id=35505&tab=about"
            className="inline-flex items-center gap-1 font-bold underline"
        >
            Our Club MyOrg's page
            <ExternalLink className="w-4 h-4" />
        </Link>
        <p>If you are interested in becoming an officer, or are already an officer - this page should help.</p>

        <h2 className="mt-4">Running The Club</h2>
        <div className="border-b-[1] mb-4" />
        <p><b>Elections</b></p>
        <div className="p-4">
            <p>Run elections according to the club constitution. It is usually once a year. You <b>must</b> always have at least 4 officers.</p></div>
        <p><b>Meetings</b></p>
        <div className="p-4">
            <p>If you want to host the meeting in DION, and have your student ID be able to open doors, you must email Administrative Assistant Sheryl Sears and Professional Technician Paul Naylor
            </p><p>The DION labs must be locked when you leave.</p>
            <p>For other rooms such as in CCB or LARTS, use the online portal to book a room.</p>
        </div>
        <h2 className="mt-4">Announcements</h2>
        <div className="border-b-[1] mb-4" />
        <div className="p-4"><p>Use the #announcements channel to announce meetings. Some students also discover the club through MyOrg's page and through flyers.</p></div>
        <h2 className="mt-4">Flyers</h2>
        <div className="border-b-[1] mb-4" />
        <div className="p-4">
            <p>When you come up with a flyer idea, after you print it, be sure to stop by the Office of Student Engagement & Leadership to get it approved before pinning it around the campus.</p>
            <p>For putting flyers in CVPA, you must get the dean's approval before you can pin it in that building.</p>
        </div>
        <h2 className="mt-4">Events</h2>
        <div className="border-b-[1] mb-4" />
        <div className="p-4">
            <p>You can come up with any kind of event you want. Discuss it with the advisors, make flyers, post on MyOrg's to get the word out.</p>
        </div>
        <h2 className="mt-4">Budget</h2>
        <div className="border-b-[1] mb-4" />
        <div className="p-4">
            <Link
                href="https://www.umassdsga.org/budgetrequests"
                className="inline-flex items-center gap-1 font-bold underline"
            >
                Budget Hearings Schedule
                <ExternalLink className="w-4 h-4" /></Link>
            <br />
            <Link
                href="https://www.umassd.edu/student-engagement/student-guide/"
                className="inline-flex items-center gap-1 font-bold underline"
            >
                Office of Student Engagement & Leadership (OSEL) Link
                <ExternalLink className="w-4 h-4" /></Link>
            <p>Please keep track of your expenses throughout the year. You will have to report it during the budget hearings.</p>
            <p>If you forget how much you've spent, talk to the OSEL treasurer. If you have special orders you want to place, talk to them as well.</p>


            <p>The student government decides how to spend the budget.
                The budget comes from every student's student fees, and must be split fairly with every school club.
                What you ask for and how many members are registered with MyOrgs is an important factor in how much of the budget you get.
                You will have to prepare an itemized form of what you'd like to order for the club at these hearings, and if approved, you'll get more funds.
            </p>
            <p>There are also other ways to donate or fundraise for the club.</p>
        </div>

        <h2 className="mt-4">Catering</h2>
        <div className="border-b-[1] mb-4" />
        <div className="p-4">
            <p>You may use <Link
                href="https://umassd.catertrax.com/"
                className="inline-flex items-center gap-1 font-bold underline"
            >
                Catertrax
                <ExternalLink className="w-4 h-4" />
            </Link> to order foods for the club.</p>
            <p>UMass Dartmouth has an exclusive contract with Catertrax, so food may ONLY come from Catertrax.
                If you really want a food that Catertrax does not have, you must submit a special form. </p>
            <p>Use your <b>"Speed Number" or "Speed Type"</b> to place an order using your club's budget.
                If you forget this number, ask the previous treasurer, search the #mods channel, or OSEL.</p>
        </div>

        <h2 className="mt-4">Github</h2>

        <div className="border-b-[1] mb-4" />
        <div className="p-4">
            <p>You may use our club's {" "}

                <Link
                    href="https://umassd.catertrax.com/"
                    className="inline-flex items-center gap-1 font-bold underline"
                >
                    Github
                    <ExternalLink className="w-4 h-4" /></Link> for collabs and other things.</p>
        </div>
        <h2 className="mt-4">Art Resources</h2>
        <div className="border-b-[1] mb-4" />
        <div className="p-4">  <Link
            href="https://github.com/UMassd-Gamedev-Club/umassd-gamedev-website/tree/main/public/Game%20Dev"
            className="inline-flex items-center gap-1 font-bold underline"
        >
            Github
            <ExternalLink className="w-4 h-4" /></Link><br></br><Link
                href="https://drive.google.com/drive/folders/14ok8OYFq7d4d8M0vKBnrKECiqchjNDZQ?usp=sharing"
                className="inline-flex items-center gap-1 font-bold underline"
            >Google Drive folder  <ExternalLink className="w-4 h-4" /></Link>. </div>

    </MainCard>
}