import { useEffect, useState } from 'react';
import { fetchGET } from '../API/APIUtils.js';
import ErrorPage from '../Components/ErrorPage.js';
import ListPGTable from './ListPGTable.js';

const ListPG = () => {
    // useState for project groups
    const [ groups, setGroups ] = useState([])
    const [ renderPage, setRenderPage ] = useState()

    /*---
    DELETE AFTER API LINKS SETUP ON THE BACKEND
    ---- */
    useEffect(() => {
        setGroups([{id: "11111",
                  name: "projgroup 1", 
                  course: "FPOP101",
                  members: ["Cardi B", "Nicki Minaj", "Lizzo", "Aerosmith"]},
                {id: "22222",
                  name: "projgroup 2", 
                  course: "VIBE420",
                  members: ["DJ Khaled", "Sean Paul", "Kahlid", "Bon Jovi"]},
                {id: "33333",
                  name: "projgroup 3", 
                  course: "SAD777",
                  members: ["Billie Eilish", "Lewis Capaldi", "Sam Smith", "Marshmallo"]},])
    }, [])

    useEffect(() => {
      if (groups.length > 0)
      {
        setRenderPage(<ListPGTable data={ groups } />)
      }
      else
      {
        setRenderPage(<ErrorPage />)
      }
    },[])



    // // useEffect API call for project groups
    // useEffect(()=> {
    //     fetchGET('project-groups')
    //     .then((result)=> {
    //         if (result.length == 0)
    //         {
    //             setRenderPage(<ErrorPage />)
    //         }
    //         else
    //         {
    //             setGroups(result)
    //             setRenderPage(<ListPGTable data={result} />)

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

export default ListPG;