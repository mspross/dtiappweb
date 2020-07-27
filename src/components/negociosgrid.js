import React from 'react';
import NegociosItem from './negociositem';
import Spinner from './spinner';

const NegociosGrid = ({ items, isLoading }) => {
    if(isLoading || !items ){
        return( <Spinner /> );
    }else{
        return(
            <div className="container">
                <section className="cardss">
                    {items.map(item =>( <NegociosItem key={item._id} obj={item} id={item._id}/> ))}
                </section>
            </div>
        );
    }
}
export default NegociosGrid;
