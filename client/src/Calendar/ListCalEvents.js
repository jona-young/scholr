import { useEffect, useState } from 'react';
import { fetchGET } from '../API/APIUtils.js';
import ErrorPage from '../Components/ErrorPage.js';
import ListCalEventsTable from './ListCalEventsTable';

const ListCalEvents = () => {
    // useState for project groups
    const [ events, setEvents ] = useState([])
    const [ renderPage, setRenderPage ] = useState()

    /*---
    DELETE AFTER API LINKS SETUP ON THE BACKEND
    ---- */
    useEffect(() => {
        setEvents([{id: "11111",
                  event: "projgroup 1", 
                  date: "FPOP101",
                  time: "FPOP101",
                  description: "FPOP101"},
                {id: "22222",
                  event: "projgroup 1", 
                  date: "FPOP101",
                  time: "FPOP101",
                  description: "FPOP101"},
                {id: "33333",
                  event: "projgroup 1", 
                  date: "FPOP101",
                  time: "FPOP101",
                  description: "FPOP101"}])
    }, [])

    useEffect(() => {
      if (events.length > 0)
      {
        setRenderPage(<ListCalEventsTable data={ events } />)
      }
      else
      {
        setRenderPage(<ErrorPage />)
      }
    },[])



    // // useEffect API call for project groups HAVE TO CHANGE BASED ON INDIVIDUAL DATES
    // // BASED OFF ID, REFACTOR TO ALLOW THIS
    // useEffect(()=> {
    //     fetchGET('calendar-events')
    //     .then((result)=> {
    //         if (result.length == 0)
    //         {
    //             setRenderPage(<ErrorPage />)
    //         }
    //         else
    //         {
    //             setGroups(result)
    //             setRenderPage(<ListCalEventsTable data={events} />)

    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err)

    //         //remove after you receive api links
    //         setRenderPage(<ListPGTable data={ groups } />)

    //     })
    // },[])

    return (
        <div className="main-pane list-page">
            { renderPage }
        </div>
    )
}

export default ListCalEvents;