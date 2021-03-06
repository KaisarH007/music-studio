import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCheck} from '@fortawesome/free-solid-svg-icons'
const icon = <FontAwesomeIcon icon={faUser} />
const buttonIcon = <FontAwesomeIcon icon={faCheck} />


const Cart = (props) => {
const artists = props.cartArtist

const totalCostRuducer = (preiviousCost , currentCost)=>preiviousCost + currentCost.slary

const totalCost = artists.reduce(totalCostRuducer  , 0)



    return (
        <div className="text-center">
            <h2 className="fw- text-white">{icon}Total Hired: {artists.length}</h2>
            <h2 className="fw- text-white">Total Cost: ৳ {totalCost}</h2>

              <h2 class="text-danger fw-bold">Hireded Artists</h2>
                
            <ul>
                {
                artists.map(artist=>
                <div class="card bg-danger" style={{"width":"18rem"}}>
            
                <ul class="list-group list-group-flush ">
                
                  <li class="list-group-item ">
                      <div><img style={{height:"60px" ,width:"60px"}} src={artist.img} alt="" />
                      </div>
                      <div className="text-danger fw-bold">{artist.name}</div></li>
                </ul>
               
              </div>)
                }
                 <button className="btn bg-danger text-white mt-2 fw-bold">{buttonIcon}Confirm</button>
            </ul>
        </div>

    );
};

export default Cart;