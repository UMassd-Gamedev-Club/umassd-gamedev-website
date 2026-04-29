import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "lucide-react";
import { Button } from "../ui/button";

export default function GamesTable() {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >Game Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Created By</TableHead>
                        <TableHead >
                            <div className="flex items-center justify-end gap-1">
                                <h3>Link</h3>
                                <Link className="w-4 h-4" />
                            </div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    <TableRow>
                        <TableCell className="font-medium">Untitled Game</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</TableCell>
                        <TableCell>Unnamed Student</TableCell>
                        <TableCell > <div className="flex items-center justify-end gap-1">
                            <Button>Click To Play</Button>
                        </div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Untitled Game</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</TableCell>
                        <TableCell>Unnamed Student</TableCell>
                        <TableCell > <div className="flex items-center justify-end gap-1">
                            <Button>Click To Play</Button>
                        </div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Untitled Game</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</TableCell>
                        <TableCell>Unnamed Student</TableCell>
                        <TableCell > <div className="flex items-center justify-end gap-1">
                            <Button>Click To Play</Button>
                        </div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Untitled Game</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</TableCell>
                        <TableCell>Unnamed Student</TableCell>
                        <TableCell > <div className="flex items-center justify-end gap-1">
                            <Button>Click To Play</Button>
                        </div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Untitled Game</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</TableCell>
                        <TableCell>Unnamed Student</TableCell>
                        <TableCell > <div className="flex items-center justify-end gap-1">
                            <Button>Click To Play</Button>
                        </div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Untitled Game</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</TableCell>
                        <TableCell>Unnamed Student</TableCell>
                        <TableCell > <div className="flex items-center justify-end gap-1">
                            <Button>Click To Play</Button>
                        </div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Untitled Game</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</TableCell>
                        <TableCell>Unnamed Student</TableCell>
                        <TableCell > <div className="flex items-center justify-end gap-1">
                            <Button>Click To Play</Button>
                        </div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Untitled Game</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</TableCell>
                        <TableCell>Unnamed Student</TableCell>
                        <TableCell > <div className="flex items-center justify-end gap-1">
                            <Button>Click To Play</Button>
                        </div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Untitled Game</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</TableCell>
                        <TableCell>Unnamed Student</TableCell>
                        <TableCell > <div className="flex items-center justify-end gap-1">
                            <Button>Click To Play</Button>
                        </div></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Untitled Game</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la</TableCell>
                        <TableCell>Unnamed Student</TableCell>
                        <TableCell > <div className="flex items-center justify-end gap-1">
                            <Button>Click To Play</Button>
                        </div></TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>);
}