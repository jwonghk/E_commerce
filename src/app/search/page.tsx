'use client';
import MockProduct from "../../data/mockProducts.json";
import React from "react";
import MockData from "../../data/mockProducts.json";
import { useState } from "react";
import Image from "next/image";



function SearchPage() {
    const [query, searchQuery] = useState('');

    const filtered  = query.trim() ? 
                     MockData.filter((prod) => prod.name.toLowerCase().includes(query.toLowerCase())) : [];
    

    return (
        
        <div style={{ textAlign : 'center', fontSize : "1rem",  padding: '4rem', marginBottom: '52rem', border: '1px solid black'}}>
            <h1>  Search </h1> 
            <input type="text"  value = {query}
            onChange = { e => searchQuery(e.target.value)} placeholder="Search ..."  
            />
            <ul>
                {filtered.map( item => (
                    <li key = {item.id} style={{margin : '1rem 1rem'}}>

                        <div style = {{display : 'flex' , alignItems : 'center',
                             justifyContent: 'flex-start',    gap : '4rem',     border: '1px solid #ccc',
                             padding: '1rem',
                            borderRadius: '8px'}}>

                        
                        <span style={{ fontSize: '1.2rem' }}>{item.name}</span>
                        <Image
                            src = {item.image}
                            alt = {item.name}
                            width = {100}
                            height = {100}
                        />
                    
                        </div>
                    </li>
                )            
            )}
            </ul>
        </div>
    )
};

export default SearchPage;