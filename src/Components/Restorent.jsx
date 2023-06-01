 import React, { useState } from 'react';
 import Menu from './MenuApi';
 import MenuCards from './MenuCards';
 import NavBar from './NavBar';
 import './NavBar.css';

 
// console.log(categoryList)
const Restorent = () => {
    const[MenuData, setMenuData] = useState(Menu);
    const filterItem = (category) =>{

        const updatedCard = Menu.filter( (currentElement) =>{
            return currentElement.category === category;
        });
    
        setMenuData(updatedCard);
    }
    return <> 
    {/* <NavBar MenuData = {MenuData}/> */}
    <div className="btn-main">
            <div className="btn-container">
                <button className="btn" onClick={() => setMenuData(Menu)}>all</button>
                <button className="btn"
                onClick={() => filterItem("Breakfast")}>
                Breakfast</button>
                <button className="btn"
                onClick={() => filterItem("Lunch")}>
                    lunch</button>
                <button className="btn"
                onClick={() => filterItem("Dinner")}>
                dinner
                </button>
            </div>
        </div>
    <div className="main-container">
         <MenuCards MenuData = {MenuData} />
        </div>
    </>
}

export default Restorent
