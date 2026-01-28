import Image from "next/image";
import Header  from "../components/header";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="site-main">
        <section>
          <span>Tired of being underleveled?</span>

          <h1>Level up now!</h1>
        </section>
      </main>

    </>
  );
}
