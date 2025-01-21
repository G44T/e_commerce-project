import CartCount from "./CartCount"

function CartItem({ item }) {

    return (
        <tbody className='flex-colum align-items-center'>
            <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td><CartCount item={item} /></td>
            </tr>
        </tbody>
    )
}

export default CartItem

