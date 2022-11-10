
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")
  const [id, setId] = useState("")
  const [postId, setPostId] = useState("")
  function saveUser()
  {
    console.log({name,email,id,postId,body})
    let data={name,email,id,postId,body}



    fetch("http://localhost:8001/comments",{
      method:'POST',
      headers:{'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*"},
      body:JSON.stringify(data)
      
      }).then((result)=>{
        console.log("result",result);
      }) 
      
  }







  useEffect(() => {
  
    fetch("http://localhost:8001/comments").then((result)=>{
      result.json().then((resp)=>{
      console.warn("result",resp);
      setData(resp);

      })
    })
    
  }, [])
  
console.log(data)
  return (
    <div className="App">
      <h1>Api call to get the id,email,name</h1>
      <table border="1" className="tab">
        <tr className='head'>
          <td >ID</td>
          <td>NAME</td>
          
          <td>EMAIL</td>
        
        </tr>
        {
          data.map((item)=>
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
        
          <td>{item.email}</td>
        
        </tr>
          )
        }
      </table>
      <h1>To post data in API </h1>
      <input type="text" placeholder='Name'   value={name} onChange={(e)=>{setName(e.target.value)}} name="name"></input><br /><br />
      <input type="text" placeholder='Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"></input><br /><br />
      <input type="text" placeholder='Mobile'  value={body} onChange={(e)=>{setBody(e.target.value)}} name="body"></input><br /><br />
      <input type="text" placeholder='ID'  value={id} onChange={(e)=>{setId(e.target.value)}} name="id"></input><br /><br />
      <input type="text" placeholder='PostID'  value={postId} onChange={(e)=>{setPostId(e.target.value)}} name="postId"></input><br /><br />
      <button className="but" type="button" onClick={saveUser}>Save the user</button>
      <br/>
      <br/>
    </div>
  );
}

export default App;
