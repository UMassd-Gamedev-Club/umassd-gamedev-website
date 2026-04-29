import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { ExternalLink } from "lucide-react";
export default function Discord() {
    return (<Dialog>
        <DialogTrigger className="inline-flex font-bold underline hover:cursor-pointer">Discord</DialogTrigger>
        <DialogContent className="min-w-[calc(90%)] md:min-w-1/2">
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold">How to Join the Discord</DialogTitle>
                <p>The Discord is for current and graduated students from Umass Dartmouth only. Here are some methods to join the Discord:</p>
                <div>
                    <h2 className="text-umd-blue font-bold">Corsair Fair</h2>
                    <div className="border-b-[1]" />
                    <div className="mt-4"></div>
                    <p>When the club participates in Corsair Fair and other open houses, come to the table and chat with the officers</p>
                    <h2 className="text-umd-blue font-bold">Find a QR Code on a Flyer</h2>
                    <div className="border-b-[1]" />
                    <div className="mt-4"></div>
                    <p>You may find a QR code to scan to join the Discord around the campus.</p>
                    <h2 className="text-umd-blue font-bold">Email the advisor or a current officer</h2>
                    <div className="border-b-[1]" />
                    <div className="mt-4"></div>
                    <p>You may find the current officer or advisor on the <Link href="https://myorgs.umassd.edu/feeds?type=club&type_id=35505&tab=about" className="inline-flex items-center gap-1 font-bold underline">MyOrgs <ExternalLink className="w-4 h-4" /></Link> page.</p>
                </div>

            </DialogHeader>
        </DialogContent>
    </Dialog>);


}