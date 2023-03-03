import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorPage from '../Components/ErrorPage.js';
import GanttChart from './GanttChart.js';


const LoadGanttChart = ({ data }) => {
    const [ renderPage, setRenderPage ] = useState()

    // useState for individual project group data
    useEffect(() => {
        // if (data == null)
        // {
        //     setRenderPage(<NoProjectGroup />)
        // }
        // else
        // {
        //     setRenderPage(<GanttChart/>)
        // }
        setRenderPage(<GanttChart data={data} />)

    },[])


    // 1. Chat Page, side pane quick links for calendar, deliverables, etc


    // Connection to socket.io


    return(
        <>
            { renderPage }
        </>
    )
}

export default LoadGanttChart;