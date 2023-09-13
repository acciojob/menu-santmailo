import React,{useState} from 'react';
import ItemBlock from './itemBlock';

const App = ({dishes}) => {
    const [menuItem, setMenuItem] = useState(dishes);
    const [currentTab, setCurrentTab] = useState({breakfast: true, lunch: true, shakes: true});


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
            setCurrentTab({breakfast: true, lunch: false, shakes: false});
            return;
        }
        
        else if(val=='lunch'){
            const tempitems = dishes.filter((item)=>{
                return item.category==="lunch";
            })
            handleMenuChange(tempitems);
            setCurrentTab({breakfast: false, lunch: true, shakes: false});
            return;
        }
        
        else if(val=='shakes'){
            const tempitems = dishes.filter((item)=>{
                return item.category==="shakes";
            })
            handleMenuChange(tempitems);
            setCurrentTab({breakfast: false, lunch: false, shakes: true});
            return;
        }
        
        
        else{
            handleMenuChange(dishes);
            setCurrentTab({breakfast: true, lunch: true, shakes: true});
            return;
        }

    }

    return (
        <div id='main'>
            <h1>Our Menu</h1>
            <div className='button-blocks'>
                <button onClick={handleClick} value="all">All</button>
                 {currentTab.breakfast && <button id="filter-btn-1" onClick={handleClick} value="breakfast" data-test-id="menu-item-breakfast">Breakfast</button>}
                 {currentTab.lunch && <button id="filter-btn-2"onClick={handleClick} value="lunch" data-test-id="menu-item-lunch">Lunch</button>}
                 {currentTab.shakes && <button id="filter-btn-3" onClick={handleClick} value="shakes" data-test-id="menu-item-shakes">Shakes  </button>}
            </div>

            <div className='items-block'>
                {items} 
            </div>
        </div>
    )
}

export default App;
