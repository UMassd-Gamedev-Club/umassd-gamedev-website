import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card";

type MainCardProps = {
    title: string;
    children: React.ReactNode;
};

export default function MainCard({ title, children }: MainCardProps) {
    return (
        <Card className="m-4 w-full">
            <CardContent>
                <CardTitle className="font-bold text-2xl pb-2">
                    {title}
                </CardTitle>

                {children}
            </CardContent>
        </Card>
    );
}