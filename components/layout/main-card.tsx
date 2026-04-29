import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card";

type MainCardProps = {
    title?: string;
    children?: React.ReactNode;
};

export default function MainCard({ title, children }: MainCardProps) {
    return (
        <Card className="md:mx-4 w-[calc(90%)] mx-auto mt-4 md:w-full">
            <CardContent>
                <CardTitle className="font-bold text-2xl pb-2">
                    {title}
                </CardTitle>
                <div className="text-lg">
                    {children}</div>
            </CardContent>
        </Card>
    );
}