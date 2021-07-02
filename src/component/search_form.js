import React, { useState } from 'react'

const SearchForm = ({fetchPhotos}) => {

    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPhotos(id);
    }

    const isValid = () => {
        return id === "" ? false : true
    }

    const handleChange = (e) => {
        setId(e.target.value);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="id" value={id} autoComplete="off"/>
            <button disabled={!isValid()}>Get Album Photos By Id</button>
        </form>
    )
}

export default SearchForm;