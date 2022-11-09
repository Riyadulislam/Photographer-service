import React from 'react';
import Usestitle from '../../../Hooks/Usestitle';

const Blog = () => {
    Usestitle('Blog')
    return (
    <div className='w-3/6 mx-auto'>
        <h1 className='text-2xl font-bold'>Difference between SQL and NoSQL</h1>
        <p>Sql:RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have 
        fixed or static or predefined schema.These databases are not suited for hierarchical
         data storage.
         NOSQL:Non-relational or distributed database system.They have dynamic schema
         These databases are best suited for hierarchical data storage.
         These databases are not so good for complex queries
         </p>
        <h1 className='text-2xl font-bold'>What is JWT, and how does it work?</h1>
        <p>JWT, or JSON Web Token , is an open standard used to share security information
             between two parties — a client and a server. Each JWT contains encoded JSON objects,
              including a set of claims. JWTs are signed using a cryptographic algorithm to
               ensure that the claims cannot be altered after the token is issued</p>
        <h1 className='text-2xl font-bold'>What is the difference between javascript and NodeJS?</h1>
        <p>JavaScript is a proper high-level programming language used to create web scripts
             whereas Node.js is a run time environment built on google’s v8 engine. JavaScript 
             is executed in the browser whereas using Node.js gives us the ability to execute 
             JavaScript outside 
            the browser</p>
        <h1 className='text-2xl font-bold'>How does NodeJS handle multiple requests at the same time?</h1>
        <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests
        and places them into EventQueue. NodeJS is built with the concept of event-driven
         architecture. NodeJS has its own EventLoop which is an infinite loop that receivesrequests and processes them</p>
    </div>
    );
};

export default Blog;