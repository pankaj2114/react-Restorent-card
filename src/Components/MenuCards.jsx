import React from 'react'

const MenuCards = ({ MenuData }) => {

    return( 
   <>
        {MenuData.map(() => {
            return (
            <>
                <div className="card-container">
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtitle">1</span>
                            <span className="card-author subtitle">Break Fast</span>
                            <h2 className='card-title'>Maggi</h2>
                            <span className="card-discription subtitle">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Saepe, voluptatibus!lorem10 Lorem, ipsum dolor sit
                                amet consectetur adipisicing elit. Explicabo, nulla.
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Qui, excepturi?
                            </span>
                            <div className="card-read">Read</div>
                        </div>
                        <img src="" alt="Item Image" className='card-media' />
                        <span className='card-tag subtitle'>Order Now</span>
                    </div>
                </div>
            </>
            );
        })}
    </>
    )
}
export default MenuCards
