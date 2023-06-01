import React from 'react'
import './Restorent.css';
const MenuCards = ({ MenuData }) => {

    return( 
   <>
        {MenuData.map((props) => {
            return (
            <>
                
                <div className="card-container" key = {props.id}>
                    <div className="card">
                        <div className="card-body">
                            {/* <span className="card-number card-circle subtitle">{props.id}</span>  */}
                            <span className="card-author subtitle">{props.category}</span>
                            <h2 className='card-title'>{props.name}</h2>
                            <div className="card-discription subtitle">{props.description}<span className="card-read">Read</span>
                            </div>
                            
                        </div>
                        <img src={props.image} alt="Item Image" className='card-media' />
                        <button className='card-tag subtitle'>Order Now</button>
                    </div>
                </div>
              
            </>
            );
        })}
    </>
    )
}
export default MenuCards
