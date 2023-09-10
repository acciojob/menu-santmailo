import React,{useState} from 'react';
import ItemBlock from './itemBlock';

const App = ({dishes}) => {
    const [menuItem, setMenuItem] = useState(dishes);
    const items = menuItem.map((item)=> {
        return <ItemBlock key={item.id} item = {item} alt="image not fount 404"/>
    });


    return (
        <div>
            <h1>Our Menu</h1>
            {items}
        </div>
    )
}

export default App;
