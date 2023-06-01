 import React, { useState } from 'react';
 import Menu from './MenuApi';
 import MenuCards from './MenuCards';

const Restorent = () => {
    const[MenuData, setMenuData] = useState(Menu);

    return <> 
         <MenuCards MenuData = {MenuData} />
    </>
}

export default Restorent
