import React,{useState} from 'react';
import ItemBlock from './itemBlock';

const App = ({dishes}) => {
    const [menuItem, setMenuItem] = useState(dishes);
    const items = menuItem.map((item)=> {
        return <ItemBlock key={item.id} item = {item} />
    });

    const handleMenuChange = (items) => {
        setMenuItem(items);
    }


    const handleClick = (e) => {
        const val = e.target.value;
        if(val=='breakfast'){
            const tempitems = dishes.filter((item)=>{
                return item.category==="breakfast";
            })
            handleMenuChange(tempitems);
            return;
        }
        
        else if(val=='lunch'){
            const tempitems = dishes.filter((item)=>{
                return item.category==="lunch";
            })
            handleMenuChange(tempitems);
            return;
        }
        
        else if(val=='shakes'){
            const tempitems = dishes.filter((item)=>{
                return item.category==="shakes";
            })
            handleMenuChange(tempitems);
            return;
        }
        
        
        else{
            handleMenuChange(dishes);
            return;
        }

    }

    return (
        <div className='app'>
            <h1>Our Menu</h1>
            <div className='button-blocks'>
                <button onClick={handleClick} value="all">All</button>
                <button onClick={handleClick} value="breakfast">Breakfast</button>
                <button onClick={handleClick} value="lunch">Lunch</button>
                <button onClick={handleClick} value="shakes">Shakes  </button>
            </div>

            <div className='items-block'>
                {items} 
            </div>
        </div>
    )
}

export default App;
