import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/button.js'; 
import { fetchPOST } from '../API/APIUtils.js';
import GroupChat from '../GroupChat/GroupChat.js';

const ProjectGroup = ({ data }) => {
    // useState for chat responses
    // under the assumption we only receive new messages to the client as an array
    const [ chat, setChat ] = useState([{}])
    const [ userReply, setUserReply ] = useState("")

    // update state function of form
    const updateState = (e) => {
        const value = e.target.value;
        setUserReply(value)
    }

    /*
    DELETE AFTER API IMPLEMENTATION
    */
    useEffect(() => {
        setChat([{id: "11111",
                        name: "Cardi B", 
                        message: "Why don't we all introduce ourselves?",},
                    {id: "22222",
                        name: "DJ Khaled", 
                        message: "WE THE BEST MUSIC",},
                    {id: "22222",
                        name: "Taylor Swift", 
                        message: "It's me, hi. I'm the problem it's me",}])
    },[])

    const fetchDummyPOST = () => {
        setChat([...chat,{id:'4242424',
                            name: "J Money",
                            message: userReply}])
    }

     
    // useEffect connection to backend implementation of Socket.io
    // environment variable points to backend localhost:4000/api
    // may need to provide link without /api on implementation

 

    // Group chat container CSS Grid
    //   Group Chat messages
    //   Send message box and send button
    //   

    return(
        <div className="main-pane content-pane">
            <GroupChat chat={ chat } />
            <div>
            <input type="text" 
                    onChange={ updateState }
                    placeholder="Type your message..."></input>
            <Button name={"Create Project Group"} 
                    buttonFunction={fetchDummyPOST} />
            </div>
        </div>
    )
}

export default ProjectGroup;