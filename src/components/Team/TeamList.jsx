import React, { useEffect, useState } from "react"

export default function TeamList() {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        const APIURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

        fetch(APIURL)
            .then(res => {
                return res.json()
            })
            .then(res => {
                setUsers(res)
                console.log(res)

                if (res) { console.log('true users REST API') }
                else { console.log('error API') }
            })
    }


    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <h2>React Fetch API Example</h2>
            {users.length > 2 && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )

}
