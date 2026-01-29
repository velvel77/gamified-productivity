import Header  from "../components/header";
import MainBodyGrid from "../components/ui/main-body-grid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="site-main">
        <MainBodyGrid>
          <span className="site-main__text">Tired of being underleveled?</span>

          <h1 className="site-main__heading">Level up now!</h1>

          <Link href="/monster" className="site-main__button">
            <span className="site-main__text">Find monster</span>
          </Link>

        </MainBodyGrid>
      </main>

    </>
  );
}
