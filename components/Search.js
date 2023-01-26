import React, { useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState()
    return (
        <div>
            <input
                type="text"
                placeholder="Search data"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
        </div>
    )
}

export default Search