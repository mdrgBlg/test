import usersAxios from "../axios/usersAxios";



const Users = () => {

    const data = usersAxios();
    console.log(data);

    return(
        <div>Users</div>
    )
    

}

export default Users;