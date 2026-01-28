import Link from "next/link";
import menu from "../app/data/menu.json";



export default function Header() {
    return (
        <header className="site-header">
            <div className="site-header__wrapper">
                <span>Img</span>
                <span>Logo</span>
            </div>


            <ul className = "site-header__menu">
                {
                    menu.map((item, index) => <li key={index}><Link className="site-header__link" href={item.href}>{item.title}</Link></li>)
                }
            </ul>


            <section className="site-header__login">
                <span>Button</span>
            </section>
      </header>
    )
}