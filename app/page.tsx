import Header from "../components/header";
import MainBodyGrid from "../components/ui/main-body-grid";
import Link from "next/link";
import prisma from "@/lib/db";
import { addTask } from "@/actions/actions";




export default async function Home() {

  const tasks = await prisma.task.findMany();

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flex justify-center">
        <MainBodyGrid>
          <span className="">Tired of being underleveled?</span>

          <h1 className="">Level up now!</h1>

          {/* <p>Test: {JSON.stringify(tasks)}</p> */}



          <ul className="mt-6">
            {tasks.map((task) => 

            )}
          </ul>

        </MainBodyGrid>
      </main>

    </>
  );
}
