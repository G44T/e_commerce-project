import { use, useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"

import ItemDetail from "./ItemDetail"

function ItemDetailsContainer() {

    const [itemDetails, setItemDetails] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/G44T/productos/Productos?id=${id}`)
            .then(res => res.json())
            .then(res => setItemDetails(res[0]))
    }, [id])

    return (
        <>
            <br />
            <br />
            <ItemDetail itemDetail={itemDetails}/>
        </>
    )
}

export default ItemDetailsContainer