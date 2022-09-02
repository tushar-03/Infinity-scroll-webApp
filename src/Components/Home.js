import React, { useState } from 'react'
import { useRef } from 'react';
import { useCallback } from 'react';
import RandomUser from './RandomUser'
import Card from './Card';

function Home() {

    const [pagenumber, setpagenumber] = useState(1);
    const {
        Loading,
        error,
        users
    } = RandomUser(pagenumber);
    const observer = useRef();
    const lastuserelementref = useCallback(node => {
        if (Loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setpagenumber(prevpagenumber => prevpagenumber + 1)
            }
        })
        if (node) observer.current.observe(node)

    }, [Loading]
    );

    return (
        <div className=''>
            <div>
                {users.map((user, index) => {
                    if (users.length === index + 1) { return <div className='mt-5 mb-5 ml-80 mr-72 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4' ref={lastuserelementref} key={user}><Card name={user} /></div> }

                    else { return <div className='mt-5 mb-5 ml-80 mr-72 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4' key={user}><Card name={user} /></div> }


                }
                )}  <div>{Loading && '..Loading'}</div>
                <div>{error && '..Error'}</div> </div>

        </div>
    )
}

export default Home
