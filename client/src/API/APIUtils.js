// send POST request to backend api to store record
export const fetchPOST = async (apiRoute, form) => {
    const data = await fetch(process.env.REACT_APP_API + apiRoute, {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    })

    const json = await data.json();

    if (json.errors)
    {
        return json.errors;
    }

    return json;
}

// send GET request to backend api to gather records
export const fetchGET = async (apiRoute) => {
    const data = await fetch(process.env.REACT_APP_API + apiRoute, {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if (json.errors)
    {
        return json.errors;
    }

    return json;
}

// send GET request to backend api to gather single record
export const fetchGETByID = async (apiRoute) => {
    const data = await fetch(process.env.REACT_APP_API + apiRoute, {
        credentials: 'include',
        method: 'GET',
        headers: {'Content-Type': 'application/json',}
    })

    const json = await data.json();

    if (json.errors)
    {
        return json.errors;
    }

    return json;
}

// send PUT request to backend api to update single record
export const fetchPUT = async (apiRoute, form) => {
    const data = await fetch(process.env.REACT_APP_API + apiRoute, {
        credentials: 'include',
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    })

    const json = await data.json();

    if (json.errors)
    {
        return json.errors;
    }

    return json;
}

// send DELETE request to backend api to delete single record
export const fetchDELETE = async (apiRoute, id) => {
    const data = await fetch(process.env.REACT_APP_API + apiRoute + "/" + id, {
        credentials: 'include',
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })

    const json = await data.json();

    if (json.errors)
    {
        return json.errors;
    }

    return json;
}

// send GET reques to pull all members