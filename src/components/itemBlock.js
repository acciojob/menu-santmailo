import React from 'react';

const ItemBlock = ({item}) => {
    return (
        <div className='item-block'>
            <div className='img-block'>
                <img src={item.img} />
            </div>
            <div className='content-block'>
                <div>
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