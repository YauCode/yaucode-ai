import Image from "next/image";


interface EmptyProps {
    label: string;
}

export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72">
                <Image src="/no_chat.png" fill alt="Empty" />
            </div>
            <p className="text-muted-foreground text-sm text-center mt-5">
                {label}
            </p>
        </div>
    );
};