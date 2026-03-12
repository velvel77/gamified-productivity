import { createCharacter } from "@/actions/actions";

export default function CreateCharacterForm() {
    return(
        <div className="flex p-5 justify-center">
            <form action={createCharacter } className="flex justify-center space-x-2">
                <label htmlFor="name" className="sr-only">
                    Create character
                </label>
                <input
                id="name"
                type="text"
                name="name"
                placeholder="New character"
                className="max-w-3/5 bg-white px-3 py-1 rounded" />
                <button
                className="bg-white px-3 py-1 text-black rounded-lg"
                type="submit">
                    Create
                </button>
            </form>
        </div>
    )
}