import React, { useState } from 'react';
import './App.css';
import SearchForm from './component/search_form';

function App() {

  const [id, setId] = useState(null);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async(id) => {
    setId(id);
    try {
      const data = await fetch(`https://morning-headland-84299.herokuapp.com/api/${id}`);
      const result = await data.json();
      setPhotos(result);
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <React.Fragment>
      <SearchForm fetchPhotos={fetchPhotos}/>
      <div className="content">
       {photos.length > 0 && photos.map((photo, key) => {
         return <div className="photo-container" key={key}>
           <img src={photo.thumbnailUrl} alt="thumbnail"/>
           <h4>{photo.title}</h4>
         </div>
       })
       }
       </div>
       {
         id && photos.length === 0 && <div className="no-content">Loading...</div>
       }
       {
         id === "" && photos.length === 0 && <div className="no-content">Enter id to get photos</div>
       }
    </React.Fragment>

  );
}

export default App;
