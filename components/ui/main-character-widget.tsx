import type { Character } from "@/types/character";

type CharacterProps = {
    character: Character | null;
};

export default function MainCharacterWidget({ character }: CharacterProps) {
    if (!character) {
        return(
            <div className="p-5 bg-background w-full">
                <span className="text-black">Create your character!</span>
            </div>
            )
    }
    
    return(
        <div className="p-5 bg-background">
            <span className="">Health:</span> {character.health}
        </div>
    )
}