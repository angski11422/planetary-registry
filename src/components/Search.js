import React from "react"

function Search({ search, onSearch}) {
    return (
        <div>
            <input 
                type="text" 
                onChange={(e) => onSearch(e.target.value)} 
                placeholder="Search..."
                value={search}
            />
                
        </div>
    );
}

export default Search;