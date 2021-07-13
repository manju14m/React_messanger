import React from 'react'



const Card = ({user}) =>{

    return(
        <>
        {user.firstName}
        </>
        
    )
}




export default function Contacts({users}) {
    return (
        <div>
            {
                users.map(user =>(                                
               <Card
                    key ={user.uid}
                    user={user}
                    // chat ={initChat}
                />
            ))
            }
        </div>
    )
}
