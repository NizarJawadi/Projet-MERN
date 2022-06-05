import { useCart } from "react-use-cart"; 
import Plus from '@mui/icons-material/AddAlarm'; 
import Minus from '@mui/icons-material/RemoveCircle'; 
import Delete from '@mui/icons-material/Delete'; 
import Grid from '@mui/material/Grid'; 
export default function Cart({item}) { 
const { 
 updateItemQuantity, 
 removeItem, 
 } = useCart(); 
 
return ( 
 
 
<Grid item xs={5}>
 <img
 alt={item.nomfilm}
 style={{margin: "0 auto", maxHeight: "100px"}} 
 src={"images/"+item.imageF} className="img-fluid dblock"/>
 <h5>{item.nomfilm}</h5>
 <p>Prix: {item.prixF} </p>
 
 
 <p>Qté: {}</p>
 
 <button 
 onClick={() => { 

 updateItemQuantity(item._id, item.quantity + 1); 

 }
}
 >
 <Plus color="success" />
 </button>
 {
 item.quantity > 1 && 
 <button 
onClick={() =>
 updateItemQuantity(item._id, item.quantity - 1) 
 }
 >
 <Minus color="warning" />
 </button>
 }
 {
 item.quantity === 1 && 
 <button 
 onClick={() => removeItem(item._id)}
 >
 <Delete color="error" />
 </button>
 }
 <hr /> 
 </Grid> 
 
 
 ); 
} 