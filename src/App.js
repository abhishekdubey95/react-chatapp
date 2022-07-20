import React from 'react'
import { useState } from 'react'
import './App.css';

export default function App() {

  const [name, setName] = useState("");

  const [chats, setChats] = useState([
                                    { name: "user1", message: "message1" },
                                    { name: "Dummy User", message: "message1" }
                                  ]);

  
  const[msg, setMsg] = useState("")

  const sendChat = () => {
    const c = [...chats];
    c.push({name : name ,message : msg});
    setChats(c);
    setMsg("");
  }


  return (
    <div>

      {name ? null : <div>
      <input type="text" placeholder='Enter name to start' onBlur={e=> setName(e.target.value)} /> 
      <button> Login </button> 
    </div> 
    }
    


      <h3> User : {name} </h3>
      <div className="chat-container">

{/* {
     chats.map((c)=>{
        return (
          <div className="container">
          <p className='chatbox'>
            <strong> {c.name} </strong>
            <span> {c.message} </span>
          </p>
        </div>
        )
      })
} */}

{
chats.map(c=> <div className={`container ${c.name === name ? 'me' : ""}`}>
<p className='chatbox'>
  <strong> {c.name} </strong>
  <span> {c.message} </span>
</p>
</div>)
}

        <div className='btm'>
          <input type="text" placeholder='enter your chat' onInput={e=> setMsg(e.target.value)} value={msg} />

          <button onClick={e=> sendChat()}> Send </button>
        </div>

      </div>
    </div>
  )
}




















// import React from 'react'
// import { useState } from 'react'
// import './App.css';

// export default function App() {

//   const [name, setName] = useState("Dummy User");

//   const [chats, setChats] = useState([
//                                     { name: "user1", message: "message1" },
//                                     { name: "Dummy User", message: "message1" }
//                                   ]);

  
//   const[msg, setMsg] = useState("")

//   const sendChat = () => {
//     const c = [...chats];
//     c.push({name : name ,message : msg});
//     setChats(c);
//     setMsg("");
//   }


//   return (
//     <div>

//       {name ? null : <div>
//       <input type="text" placeholder='Enter name to start' onBlur={e=> setName(e.target.value)} />  
//     </div> 
//   }


//       <h3> User : {name} </h3>
//       <div className="chat-container">

// {/* {
//      chats.map((c)=>{
//         return (
//           <div className="container">
//           <p className='chatbox'>
//             <strong> {c.name} </strong>
//             <span> {c.message} </span>
//           </p>
//         </div>
//         )
//       })
// } */}

// {
// chats.map(c=> <div className={`container ${c.name === name ? 'me' : ""}`}>
// <p className='chatbox'>
//   <strong> {c.name} </strong>
//   <span> {c.message} </span>
// </p>
// </div>)
// }

//         <div className='btm'>
//           <input type="text" placeholder='enter your chat' onInput={e=> setMsg(e.target.value)} value={msg} />

//           <button onClick={e=> sendChat()}> Send </button>
//         </div>

//       </div>
//     </div>
//   )
// }
