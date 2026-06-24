import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockProducts from '../data/mockProducts.json';
import '../globals.css';

const Search = () => {
    const [query, setQuery] = useState('');

    const q = query.trim().toLowerCase();

    const results = mockProducts.filter((p: any) => {
        if (!q) return true; // show all when empty
        const name = p.name?.toString().toLowerCase() || '';
        const desc = p.description?.toString().toLowerCase() || '';
        const category = p.category?.toString().toLowerCase() || '';
        const price = p.price?.toString().toLowerCase() || '';
        return (
            name.includes(q) ||
            desc.includes(q) ||
            category.includes(q) ||
            price.includes(q)
        );
    });

    const navigate = useNavigate();

    return (
        <div className="layout-wrapper">
            <div className="search-container">
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button className="back-button" onClick={() => navigate(-1)}>
                        ← Go back
                    </button>
                </div>

                <input
                    className="search-input"
                    placeholder="Search products by name, description, category, or price..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <div className="product-grid">
                    {results.map((prod: any) => (
                        <div key={prod.id} className="product-card">
                            <img src={prod.image} alt={prod.name} />
                            <div className="product-name">{prod.name}</div>
                            <div className="product-price">{prod.price}</div>
                            <div className="product-desc">{prod.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;