import React from 'react';

const Cart = (props) => {
const artists = props.cartArtist

const totalCostRuducer = (preiviousCost , currentCost)=>preiviousCost + currentCost.slary

const totalCost = artists.reduce(totalCostRuducer  , 0)



    return (
        <div className="text-center">
            <h2 className="fw- text-white">Total Hired :{artists.length}</h2>
            <h2 className="fw- text-white">Total Cost : {totalCost}</h2>

              <h4 class="text-warning fw-bold">Hireded Artists</h4>
                
            <ul>
                {
                artists.map(artist=>
                <div class="card " style={{"width":"18rem"}}>
            
                <ul class="list-group list-group-flush">
                
                  <li class="list-group-item bg-warning">
                      <div><img style={{height:"50px" ,width:"50px"}} src={artist.img} alt="" />
                      </div>
                      <div>{artist.name}</div></li>
                 
                  
                </ul>
              </div>)
                }
            </ul>
        </div>

    );
};

export default Cart;