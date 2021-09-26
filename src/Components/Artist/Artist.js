import React from 'react';
import'./Artist.css';
import logo from '../../image/icon.png'


const Artist = (props) => {
    // console.log(props)
    const {name,born,country,img,occupation,slary} = props.artist
    return (
        <div className="col-md-4">
           
           <div class="card h-100 card-bg tex-black rounded">
      <img style={{height:"150px" ,width:"150px"}} src={img} class="card-img-top rounded-circle  rounded mx-auto d-block p-2 " alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center fw-bold">{name}</h5>
        <div class="card-text">
            <h5>Occupation : <small>{occupation}</small></h5>
            <h5>Age: <small>{born}</small></h5>
            <h5>Nationality: <small>{country}</small></h5>
            <h5>Salary: ৳ <small>{slary}</small></h5>
            <div className="d-flex">
                <div>
                <button onClick={()=>props.handleAddArtist(props.artist)} type="button" class="btn text-white bg-danger me-4 mt-2">Click to Hired</button>
                </div>
               <div>
                <img style={{height:"50px" ,width:"120px"}} src={logo} alt="Logo" />
               </div>
            </div>

        </div>
      </div>
    </div>
           </div>
       
    );
};

export default Artist;