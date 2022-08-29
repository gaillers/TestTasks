import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { getUsers } from "../../api/endPoints"
import  ShowMoreButton from "../../components/Buttons.jsx"

export default function TeamList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers((paramUsers) => setUsers(paramUsers))
    }, [])

    return (
        <UserCard>
            {users.length > 0 && (
                <UserCardWrap>
                    {users?.map(user => (
                        <UserCardItem key={user.id}>
                            <UserCardContent>
                                <UserCardPhoto src={user.photo} alt="photo" />
                                <UserCardName>{user.name}</UserCardName>
                                <UserCardInfo>
                                    <p>{user.position}</p>
                                    <p>{user.email}</p>
                                    <p>{user.phone}</p>
                                </UserCardInfo>
                            </UserCardContent>
                        </UserCardItem>
                    ))}
                </UserCardWrap>
            )}

            <ShowMoreButton class={'btn-ShowMore'} buttonTitle={'Show more'}/>
        </UserCard>
    )
}

const UserCard = styled.div`

.btn-ShowMore {
    max-width: 120px;
}
`

const UserCardWrap = styled.div`
display: flex;
justify-content: center;
flex-flow: wrap;
gap: 30px;
margin: 50px 0;
`

const UserCardItem = styled.div`
max-width: 370px;
width: 100%;
padding: 20px;
text-align: center;
background: #fff;
border-radius: 16px;

 @media (max-width: 1200px) {
    
 }
`
const UserCardContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`
const UserCardPhoto = styled.img`
width: 70px;
height: 70px;
border-radius: 50px;
`
const UserCardName = styled.h4`
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
`
const UserCardInfo = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;

 p {
    font-family: 'Nunito';
 }
`