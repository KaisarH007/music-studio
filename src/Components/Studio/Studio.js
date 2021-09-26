import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import Cart from '../Cart/Cart';

const Studio = () => {
const [artists,setArtist] = useState([]);
const [cartArtist,setCartArtist] = useState([])

const handleAddArtist =(artist)=>{
// console.log(artist.name)
    const newArtist = [...cartArtist,artist];
    setCartArtist(newArtist);

}

useEffect(()=>{
    fetch('./singersData.JSON')
    .then(res=>res.json())
    .then(data=>setArtist(data))
},[])



    return (
        <div className="row mx-auto mt-4">

            <div className="col-md-9">
                <div className="row g-4">
                {artists.map(artist=>
                <Artist 
                key = {artist.id}
                artist={artist}
                handleAddArtist={handleAddArtist}
                ></Artist>)}
                </div>
                
            </div>
            <div className="col-md-3">
                <Cart
                cartArtist={cartArtist}></Cart>
            </div>
        </div>
    );
};

export default Studio;