import '../styles/List.css'
import React, { useState, useEffect } from "react";
import Card from './Card';

const List = () => {
    const [list, setList] = useState([]);
    const [update, setUpdate] = useState(false)
    

    useEffect(() => {
        fetch('http://localhost:3000/api/user/list')
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setList(data))
        return () => setUpdate(false)
    }, [update])

    return (
        <>
            <div className="Container-List">
                {list.map(list => (
                    <Card key={list.id} id={list.id} username={list.username} email={list.email} phone_number={list.phone_number} update={setUpdate} />
                ))}
            </div>
        </>
    )
}

export default List;
