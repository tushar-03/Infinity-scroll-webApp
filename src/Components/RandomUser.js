import { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'

function RandomUser(pagenumber) {

    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [users, setusers] = useState([]);




    useEffect(() => {
        setLoading(true);
        setError(false);
        axios({
            method: 'GET',
            url: 'https://randomuser.me/api/?&page=1&results=50&seed=abc',
            params: { page: pagenumber }

        }).then(res => {
            setusers(previoususers => {
                return [...previoususers, ...res.data.results.map(b => b.name.first)]
            })
            setLoading(false)

        }).catch(e => setError(true))
    }, [pagenumber])


    return { Loading, error, users }
}

export default RandomUser
