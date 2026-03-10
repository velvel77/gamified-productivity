import type { ReactNode } from "react";

type MainBodyGridProps = {
    children: ReactNode;
};

export default function MainBodyGrid({children}: MainBodyGridProps ) {
    return (
        <div className=" border-red-500 border-4 flex flex-col items-center mt-8 space-y-5">
            {children}
        </div>
    )
}