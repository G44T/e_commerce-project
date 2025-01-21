import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router'

import ItemList from './ItemList';
import { getItemsAll, getItemsCategory } from '../firebase/db';

function ItemListContainer() {

    const [items, setItems] = useState([])
    const { category } = useParams();

    useEffect(() => {

        if (!category) {
            getItemsAll()
                .then(res => setItems(res))

        } else {
            getItemsCategory(category)
                .then(res => setItems(res))

        }
    }, [category]);

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer