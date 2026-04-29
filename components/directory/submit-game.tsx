
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";

export default function SubmitGame() {
    return (<Dialog>
        <DialogTrigger className=" font-bold hover:cursor-pointer"><Button>Submit a game</Button></DialogTrigger>
        <DialogContent className="min-w-[calc(90%)] md:min-w-1/2">
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Submit Game</DialogTitle>
                <p>Once you submit a game, a mod will approve it.
                    Games are stored on a free database.
                    Your submission will generate a password.
                    Keep this password in case you want to edit information about your game or delete it.
                </p>
            </DialogHeader>
        </DialogContent>
    </Dialog>);


}