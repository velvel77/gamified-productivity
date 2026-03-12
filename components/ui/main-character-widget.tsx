import { deleteCharacter } from "@/actions/actions";
import type { Character } from "@/types/character";
import CreateCharacterForm from "../character/create-character-form";

type CharacterProps = {
  character: Character | null;
};

export default function MainCharacterWidget({ character }: CharacterProps) {
  if (!character) {
    return (
      <div className="flex flex-col justify-center items-center p-5 bg-background w-full">
        <span className="text-black">Create your character!</span>
        <CreateCharacterForm />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between p-5 bg-background">
        <div>
            <span className="text-white"></span>
        </div>
        <section className="flex flex-col justify-center items-center">
            <div className="flex gap-4">
                <span className="text-white">Lv: {character.level}</span>
                <span className="text-white">Exp: {character.exp}/50</span>
            </div>
            <span className="text-white">Health: {character.health}</span>
        </section>
        <div>
            <form action={deleteCharacter}>
                <input type="hidden" name="id" value={character.id} />
                <button
                    className="bg-white hover:bg-pink-500 rounded-xl cursor-pointer p-1.5"
                    type="submit"
                    aria-label="Delete character"
                >X</button>
            </form>
        </div>
    </div>
  );
}
