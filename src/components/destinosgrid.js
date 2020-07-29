import React from 'react';
import DestinosItem from './destinositem';
import Spinner from './spinner';

const DestinosGrid = ({ items, isLoading }) => {
    if(isLoading || !items ){
        return( <Spinner /> );
    }else{
        return(
            <div className="container">
                <section className="cardss">
                    {items.map(item =>( <DestinosItem key={item._id} obj={item} id={item._id}/> ))}
                </section>
            </div>
        );
    }
}
export default DestinosGrid;
