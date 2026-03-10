import Link from "next/link";
import menu from "../app/data/menu.json";

export default function Header() {
    return (
        <header className="site-header items-center">
            <div className="site-header__wrapper">
                <span className="font-bold text-white wrap-break-word">Kill the Task!</span>
            </div>


            {/* <ul className = "site-header__menu">
                {
                    menu.map((item, index) => <li key={index}><Link className="site-header__link" href={item.href}>{item.title}</Link></li>)
                }
            </ul> */}


            <section className="bg-white p-3 rounded-xl">
                <span>Tasks</span>
            </section>
      </header>
    )
}