import React from 'react';

const userDynamicId = ({user}) => {
    const {id,name,email,phone}=user;
    return (
        <div>
            <h3>{id} </h3>
            <h3>Name:{name} </h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default userDynamicId;



// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const users = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = users.map((user) => ({
      params: { id: user.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  

  // This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
  
    // Pass post data to the page via props
    return { props: { user } }
  }