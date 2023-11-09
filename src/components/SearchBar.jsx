import React, { useContext } from 'react'
import { ContextDetails } from '../context/context'

const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useContext(ContextDetails)
    return (
        <div className='search-container'>
            <div class="form-group">
                <input type="text"
                    class="form-control"
                    aria-describedby="search"
                    placeholder="Find equipment by search "
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <button className='search-btn' disabled={searchQuery ? true : false}>Search</button>
        </div>
    )
}

export default SearchBar
