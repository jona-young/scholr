import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NoProjectGroup from './NoProjectGroup.js';
import ProjectGroup from './ProjectGroup.js';


const LoadProjectGroup = ({ data }) => {
    const [ renderPage, setRenderPage ] = useState()
    

    // useState for individual project group data
    useEffect(() => {
        // if (data == null)
        // {
        //     setRenderPage(<NoProjectGroup />)
        // }
        // else
        // {
        //     setRenderPage(<ProjectGroup/>)
        // }
        setRenderPage(<ProjectGroup data={data} />)

    },[])


    // 1. Chat Page, side pane quick links for calendar, deliverables, etc


    // Connection to socket.io


    return(
        <>
            { renderPage }
        </>
    )
}

export default LoadProjectGroup;