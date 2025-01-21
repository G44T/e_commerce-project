import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import { getItemsID } from "../firebase/db"

function ItemDetailsContainer() {

    const [itemDetails, setItemDetails] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getItemsID(id)
            .then(res => setItemDetails(res[0]))            
    }, [id])

    return (
        <>
            <br />
            <br />
            <ItemDetail itemDetail={itemDetails} />
        </>
    )
}

export default ItemDetailsContainer