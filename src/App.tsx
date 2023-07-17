import Users from "./usersScreen/Users"


function App() {
  const data = Users();

  
  console.log(data);


  return (
    <div>
      <ul>
          {
            data.map(item => (
              <li>
                <span>Ime: </span>{item.name}<span> E mail: </span>{item.email}<span> Username: </span>{item.username} <span> Phone: </span>{item.phone}
              </li>
            ))
          }
        </ul>
      
    </div>
  )
}

export default App
