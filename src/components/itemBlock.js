import React from 'react';
import '../styles/App.css'


const ItemBlock = ({item}) => {
    return (
        <div className='item-block'>
            <div className='img-block'>
                <img src={item.img} />
            </div>
            <div className='content-block'>
                <div className='title-block'>
                    <p className='title'>{item.title}</p>
                    <p className='price'>{item.price}</p>
                </div>
                <div>
                    <p className='desc'>{item.desc}</p>
                </div>
            </div>
        </div>  
    )
}

export default ItemBlock;