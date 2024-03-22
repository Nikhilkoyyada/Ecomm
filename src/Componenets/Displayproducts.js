import React from 'react';
import { useFilterContext } from '../Context/Filtercontext';
import Gridview from './Gridview';
import Listview from './Listview';

const Displayproducts = () => {

    const { filter_products, grid_view } = useFilterContext();

    if (grid_view === true) {
        return <Gridview products={filter_products} />;
    } else if (grid_view === false) {
        return <Listview products={filter_products} />;
    } else {
       
        return null;
    }
};

export default Displayproducts;
