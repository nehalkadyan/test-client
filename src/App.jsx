import axios from "axios"
import { useEffect, useState } from "react"


function App() {

  const [user, setUser] = useState(null);

  console.log("user : ", user)

   useEffect(() => {
    const fetchUser = async()=> {
      const res = await axios.get("https://test-server-a6lg8n4x2-nehal-kadyans-projects.vercel.app/test");

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
