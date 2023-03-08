import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newProducts } from '../redux/actions/productAction';
import Button from 'react-bootstrap/Button';


const Addproduct = () => {
    const [inputs,setInputs]=useState({title:"",description:"",price:"",category:"",quantity:"",imageUrl:""})
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInputs({...inputs , [e.target.name]:e.target.value})
    }



  return (
    <div>
      <input className='inputs' name='title'placeholder='nom de produit' type="text" onChange={handleChange}/>
           <input name='description' type="text" placeholder='quantite' onChange={handleChange}/>
            <input name='price' type="text" placeholder='prix' onChange={handleChange}/>
            <input name='category' type="text" placeholder='description' onChange={handleChange}/>
            
            <input name='imageUrl' type="text" placeholder='image url' onChange={handleChange}/>
   
       <button className='btn-primary' onClick={()=> dispatch(newProducts(inputs))}>add produit</button>
       

    </div>
    
  )
}

export default Addproduct
