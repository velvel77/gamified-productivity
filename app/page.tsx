import AddTaskForm from "@/components/tasks/add-task-form";
import TodoGrid from "@/components/ui/todo-list-grid";
import prisma from "@/lib/db";
import Header from "../components/header";
import MainBodyGrid from "../components/ui/main-body-grid";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flex justify-center">
        <MainBodyGrid>
          {/* <span className="italic">Tired of being underleveled?</span> */}

          <h1 className="font-bold text-xl">Level up now!</h1>

          <AddTaskForm />

          <TodoGrid tasks={tasks} />
        </MainBodyGrid>
      </main>
    </>
  );
}
