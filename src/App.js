import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  // ! this causes an infinite loop because with every request the component re-renders
  // fetch("https://jsonplaceholder.typicode.com/posts/1")
  //   .then((response) => response.json())
  //   .then((data) => setPosts(data))
  //   .then((json) => console.log(json));

  // todo FETCH METHOD
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  //     .catch((err) => console.log(err));
  // }, []);

  /*  const getDataUsers = async()=>{
    // fetch() ==> send requests
    await fetch('https://jsonplaceholder.typicode.com/users')
    //to handle Errors==> .then() .catch()
    .then(res=> res.json())
    .then(parsedData=> setUsers(parsedData))
    .catch(err=> console.log(err))
  } */

  /* const getDataUsers = async ()=>{
      try{
        //send Request
          const users = await fetch('https://jsonplaceholder.typicode.com/users')
          const parsedData = await users.json()
          setUsers(parsedData)
      }
      catch(err){
        console.log(err);
      }
  } */

  //todo AXIOS
  const getPosts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        {posts.map((el, key) => {
          return (
            <tbody key={key}>
              {/* {JSON.stringify(el)} */}
              {/* or we can simply use this: */}
              <tr>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.body}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
