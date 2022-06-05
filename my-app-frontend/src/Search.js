import React from 'react'

function Search(props){
    return(
        <div className="searchbar">
            <input type="text" name="search" placeholder="search" value={props.value} onChange={(event) => props.setSearchBar(event.target.value)}></input>
         
        </div>
    )
}

export default Search