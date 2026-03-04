import Header from "../components/header";
import MainBodyGrid from "../components/ui/main-body-grid";
import Link from "next/link";
import prisma from "@/lib/db";



export default async function Home() {

  const tasks = await prisma.task.findMany();

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="site-main">
        <MainBodyGrid>
          <span className="site-main__text">Tired of being underleveled?</span>

          <h1 className="site-main__heading">Level up now!</h1>

          <p>Test: {JSON.stringify(tasks)}</p>

          <Link href="/monster" className="site-main__button">
            <span className="site-main__text">Find monster</span>
          </Link>

        </MainBodyGrid>
      </main>

    </>
  );
}
