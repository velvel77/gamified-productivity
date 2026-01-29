import type { ReactNode } from "react";

type MainBodyGridProps = {
    children: ReactNode;
};

export default function MainBodyGrid({children}: MainBodyGridProps ) {
    return (
        <div className="main-body-grid">
            {children}
        </div>
    )
}