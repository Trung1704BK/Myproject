import React, { useState, useEffect } from 'react';

import axios from '../../api/axios';

function ManageAlbum() {
  const [collection, setCollection] = useState({});
  //

  //

  useEffect(() => {
    getItems();
  }, []);
  //
  const getItems = () => {
    const url = 'collections';
    axios.get(url).then((res) => {
      if (res.status === 200) {
        console.log(res.data.collection);
        setCollection(res.data.collection);
      }
    });
  };
  //

  // Get current posts

  //

  // Change page

  //

  return (
    <div className='container' style={{ marginTop: 100 }}>
      <div className='information_admin'>
        <h1>{collection.title}</h1>
      </div>
    </div>
  );
}

export default ManageAlbum;
