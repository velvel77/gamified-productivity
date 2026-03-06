import type { ReactNode } from "react";

type MainBodyGridProps = {
    children: ReactNode;
};

export default function MainBodyGrid({children}: MainBodyGridProps ) {
    return (
        <div className="flex flex-col items-center mt-4 space-y-4">
            {children}
        </div>
    )
}