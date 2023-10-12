import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';


function Card(props) {
        let dispatch = useDispatchCart();
        let data = useCart()
        const priceRef = useRef();      
        let options =props.options;
        let priceOptions = Object.keys(options);
        const [qty,setQty]  = useState(1)
        const [size,setSize] = useState("")

        const handleAddToCart = async () =>{
            
            let food=[]
            for (const item of data){
                if(item.id === props.foodItem._id){
                    food = item;
                    break;
                }
            }
            // console.log(food);

            if (food != []) {   //sirf quantity p updation chlrh h becoz size medium regular chng hoga to add to cart firse krna h
                if(food.size === size) {
                    await dispatch({ type:"UPDATE" ,id: props.foodItem._id ,price: finalPrice, qty: qty})
                    return
                
                }
                else if(food.size !== size){
                     await dispatch({ type:"ADD" , id:props.foodItem._id , name:props.foodItem.name ,price:finalPrice , qty: qty, size: size })
                     return
            }
            return
        }
            await dispatch({ type:"ADD" , id:props.foodItem._id , name:props.foodItem.name ,price:finalPrice , qty: qty, size: size })
           
    }    
        
        let finalPrice = qty * parseInt(options[size]); //regular pizza k price * by uski quantity

        useEffect(()=>{
            setSize(priceRef.current.value)
        },[])

  return (
    <div >
       <div className="card mt-3" style={{ maxWidth: "18rem" }}>
  <img src={props.foodItem.img} style={{ height: "120px", objectFit: "cover" }} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.foodItem.name}</h5>
    <div className="container">
      <div className="row">
        <div className="col-md-auto">
          <select className="form-select mb-2" onChange={(e) => setQty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}> {i + 1}</option>
              );
            })}
          </select>
        </div>
        <div className="col-md-auto">
          <select className="form-select mb-2" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}  >{data}</option>
              );
            })}
          </select>
        </div>
        <div className="col-md-auto">
          <div className="d-inline f-5">
            ₹{finalPrice}/-
          </div>
        </div>
      </div>
      <hr />
      <button className="btn btn-success justify-center text-black mt-2 addToCart-button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Card