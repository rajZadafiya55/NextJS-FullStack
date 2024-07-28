import Link from "next/link";
import './../style.css'
import DeletUser from "../util/DeletUser";
const getUsers = async () => {
    let data = await fetch('http://localhost:3000/api/users');
    data = await data.json();
    return data;
}
const Page = async () => {
    const users = await getUsers();
    console.log(users);
    return (
        <div>
            <h1>User List</h1>
            {
                users.map((item,index) => {
                    return (
                        <div key={index} className="input-item">
                            <span><Link href={`users/${item.id}`}>{item.name}</Link></span>&emsp;&emsp;&emsp;
                            <span><Link href={`users/${item.id}/update`}>Edit</Link></span>&emsp;&emsp;&emsp;
                            <DeletUser id={item.id}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Page;