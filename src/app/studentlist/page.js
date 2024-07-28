import Link from "next/link";

export default function StudentList() {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentlist/ganesh" >Ganesh</Link>
                </li>
                <li>
                    <Link href="/studentlist/shiv" >Shiv</Link>
                </li>
                <li>
                    <Link href="/studentlist/madhav" >Madhav</Link>
                </li>
                <li>
                    <Link href="/studentlist/raj" >Raj</Link>
                </li>
            </ul>
        </div>
    )
}