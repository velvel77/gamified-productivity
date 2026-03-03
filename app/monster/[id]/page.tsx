import data from "../../data/monster.json";

export default async function MonsterPage({params}:PageProps<"/monster/[id]">){
    const { id } = await params;
    const monster = data.find((monster)=> monster.id === Number(id));
    return <div>Monster {monster?.type}</div>
}