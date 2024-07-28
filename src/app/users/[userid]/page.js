const getUsers = async (id) => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data;
}

const page = async({params}) => {
console.log(params)
const user = await getUsers(params.userid);
console.log(user);
  return (
    <div>page</div>
  )
}

export default page