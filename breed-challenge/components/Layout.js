import React from "react";
import style from "../components/layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  let breeds = [
    "affenpinscher",
    "boxer",
    "cotondetulear",
    "havanese",
    "malamute",
    "pug",
  ];
  return (
    <div className="container">
      <nav className={style.nav}>
        <ul className={style.navList}>
          <Link href={`/`}>
            <a>
              <li className={style.navItem}>HOME</li>
            </a>
          </Link>
          {breeds.map((breed) => (
            <Link key={breed} href={`/breeds/[breed]`} as={`/breeds/${breed}`}>
              <a>
                <li className={style.navItem}>{breed.toUpperCase()}</li>
              </a>
            </Link>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
      <footer className={style.footer}>
        <span>Random Cuteness &bull; 2020</span>
      </footer>
    </div>
  );
}
