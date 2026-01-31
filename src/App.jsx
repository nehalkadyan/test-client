import axios from "axios"
import { useEffect, useState } from "react"


function App() {

  const [user, setUser] = useState(null);

  console.log("user : ", user)

   useEffect(() => {
    const fetchUser = async()=> {
      const res = await axios.get("http://localhost:4000/test");

      setUser(res.data);
    }

    fetchUser()
   }, [])  

  return (
    <>
      <h1>Hello from MERN Frontend</h1>
      <h4>{user?.user.name}</h4>
    </>
  )
}

export default App
