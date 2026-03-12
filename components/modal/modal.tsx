"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
    title: string,
    onClose: () => void,
    onOk: () => void,
    children: React.ReactNode,
}

export default function Dialog({title, onClose, onOk, children }: Props): React.ReactElement | null {

    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get('showDialog')
    
    useEffect(() => {
        if(showDialog === 'y') {
            dialogRef.current?.show()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
    }

    const clickOk = () => {
        onOk()
        closeDialog()
    }

    const dialog = showDialog === 'y'
        ? (
            <dialog ref={dialogRef} className="backdrop:bg-gray-800/50">
                <div>
                    <header>
                        <h1>{title}</h1>
                        <button
                        type="button"
                        onClick={closeDialog}
                        >x</button>
                    </header>
                    <section>
                        {children}
                        <div>
                            <button
                            type="submit"
                            onClick={clickOk}
                            >Create</button>
                        </div>
                    </section>
                </div>
            </dialog>
        ) : null

    return dialog
}