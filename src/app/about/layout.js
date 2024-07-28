import Link from "next/link";
import './about.css'
export default function Layout({ children }) {
    return (
        <div>
            <ul className="about-menu">
                <li>
                    <h4>About Navbar</h4>
                </li>
            <li>
                <Link href="/about">about Main</Link>
            </li>
            <li>
                <Link href="/about/aboutStudent">about Student </Link>
            </li>
            <li>
                <Link href="/about/aboutCollege">about College</Link>
            </li>
            </ul>
            {children}
        </div>
    )
}