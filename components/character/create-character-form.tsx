import { createCharacter } from "@/actions/actions";

export default function CreateCharacterForm() {
    return(
        <form action={createCharacter} className="space-x-2 h-4">
            <label htmlFor="name" className="sr-only">
                Create character
            </label>
            <input
            id="name"
            type="text"
            name="name"
            placeholder="New character"
            className="bg-white px-3 py-1 rounded" />
        <button
        className=""
        type="submit">
            Create Character
        </button>
        </form>
    )
}