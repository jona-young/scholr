import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NoProjectGroup from './NoProjectGroup.js';


const ProjectGroup = ({ data }) => {
    // useState for chat responses
    // under the assumption we only receive new messages to the client as an array
    const [ messages, setMessages ] = useState([{}])

    /*
    DELETE AFTER API IMPLEMENTATION
    */
    useEffect(() => {
        setMessages([{id: "11111",
                        name: "Cardi B", 
                        message: "Why don't we all introduce ourselves?",},
                    {id: "22222",
                        name: "DJ Khaled", 
                        message: "WE THE BEST MUSIC",},
                    {id: "22222",
                        name: "Taylor Swift", 
                        message: "It's me, hi. I'm the problem it's me",}])
    },[])

     
    // useEffect connection to backend implementation of Socket.io
    // environment variable points to backend localhost:4000/api
    // may need to provide link without /api on implementation

    // useEffect(() => {
    //     const socket = socketIOClient(process.env.REACT_APP_API)
    //     socket.on("FromAPI", data => {
    //         setMessages([...messages, data])
    //     })
    // },[])

    // Group chat container CSS Grid
    //   Group Chat messages
    //   Send message box and send button
    //   

    return(
        <div className="main-pane project-group">
            <div id="chat-container">
                { messages.map((msg) => (
                    <div>
                        <h5>{ msg.name }</h5>
                        <span>{ msg.message }</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectGroup;