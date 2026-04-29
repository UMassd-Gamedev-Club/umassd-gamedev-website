import { Card, CardTitle, CardContent } from "../ui/card";
import { Link } from "lucide-react";
export default function GameCard() {
    return (
        <Card className=" aspect-3/4">
            <CardContent>

                <div className="bg-sky-200 aspect-square w-full max-h-1/2">Game Cover Image</div>
                <CardTitle>Title</CardTitle>
                <p>(Description)Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>
                <div className="flex items-center justify-end gap-1">
                    <h3>Link</h3>
                    <Link className="w-4 h-4" />
                </div>
            </CardContent>
        </Card>
    );
}