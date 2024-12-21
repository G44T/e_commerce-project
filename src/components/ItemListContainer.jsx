import { useState, useEffect } from 'react';
import { useParams } from 'react-router'

import ItemList from './ItemList';

function ItemListContainer() {

    const [items, setItems] = useState([])
    const { category } = useParams();

    useEffect(() => {

        console.log(category)

        if (!category) {
            fetch(`https://my-json-server.typicode.com/G44T/productos/Productos`)
            .then(res => res.json())
            .then(res => setItems(res))
        } else {
            fetch(`https://my-json-server.typicode.com/G44T/productos/Productos?category=${category}`)
                .then(res => res.json())
                .then(res => setItems(res))
        }

        console.log(items)
    }, [category]);

    return (
        <>
            <br />
            <br />
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer