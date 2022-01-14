import React from 'react';

const index = ({usersDetails}) => {
    
    return (
        <div>
            this is users page:{usersDetails.length}
            {
                usersDetails.map(user=>
                <div key={user.id}>
                   <p>{user.name}</p> 
                   <p>{user.email}</p> 
                    
                </div>
                
                )
            }
        </div>
    );
};

export default index;

export async function getStaticProps(){
    const res=await fetch('http://jsonplaceholder.typicode.com/users');
    const usersDetails=await res.json();
return{
    props:{
        usersDetails
    }
}
}