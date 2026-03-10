import AddTaskForm from "@/components/tasks/add-task-form";
import MainCharacterWidget from "@/components/ui/main-character-widget";
import TodoGrid from "@/components/ui/todo-list-grid";
import prisma from "@/lib/db";
import Header from "../components/navigation/header";
import MainBodyGrid from "../components/ui/main-body-grid";

export default async function Home() {
  const tasks = await prisma.task.findMany();
  const character = await prisma.character.findFirst();

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flex justify-center">
        <MainBodyGrid>
          <h1 className="font-bold text-xl">Level up now!</h1>

          <AddTaskForm />

          <TodoGrid tasks={tasks} />
        </MainBodyGrid>
      </main>

      <footer className="w-full mt-auto">
        <MainCharacterWidget character={character} />
      </footer>
    </>
  );
}
