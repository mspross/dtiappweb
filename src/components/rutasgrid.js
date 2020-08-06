import React from 'react';
import RutasItem from './rutasitem';
import Spinner from './spinner';

const RutasGrid = ({ items, isLoading, handleDestinos }) => {
    if(isLoading || !items ){
        return( <Spinner /> );
    }else{
        return(
            <div className="rutas-container">
                <section className="rutas-cardss">
                    {items.map(item =>( <RutasItem key={item._id} obj={item} id={item._id} handleDestinos={handleDestinos}/> ))}
                </section>
            </div>
        );
    }
}
export default RutasGrid;
