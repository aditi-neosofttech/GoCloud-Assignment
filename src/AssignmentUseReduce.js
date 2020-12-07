import logo from './logo.svg';
import './App.css';
import React, {useRef,useReducer } from 'react';

const AssignmentUseReduce = () =>{
    const nameOfItem = "";
    const quanOfItem = "";
    const totalItems = [];
    const inputRefname = React.useRef(null);
    const inputRefquantity = React.useRef(null);
    const [product, setProduct] = useReducer(nameReducer, []);
  
  const [quantity, setQuantity] = useReducer(quantityReducer, 0)

function nameReducer(state, action) {
    switch(action.type) {
        case 'add':
          return [...state, action.name];
        case 'delete':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if(productIndex < 0) {
              return state;
            }
            //remove item 
            const obj = [...state];
            obj.splice(productIndex, 1)
            return obj
          case 'duplicate':
            const dupIndex = state.findIndex(item => item.name === action.product.name);
            if(dupIndex < 0) {
              return state;
            }
            const dupObj = [...state];
            dupObj.push(dupIndex, 1)
            return dupObj
        default:
          return state;
      }
}
function quantityReducer(state, quantity) {
    return state + quantity;
  }
  function removeProduct(product) {
    const { name, quantity } = product;
    setProduct({ name, type: 'delete' });
    setQuantity({ quantity, type: 'delete' });
  }

  function duplicateQuantity(product){
    const { name, quantity } = product;
    setProduct({ name, type: 'duplicate' });
    setQuantity({ quantity, type: 'duplicate' });
  }

  function add(product) {
    const { name, quantity } = product;
    setProduct ({name, type: 'add'});
    setQuantity({ quantity, type: 'add' });
  }
  function handleChangeofProduct(){
    var nameOfProduct = inputRefname.current.value;
    totalItems.push(nameOfProduct)
    setProduct(nameOfProduct);
   
  }
  function handleChangeofQuantity(){
    var quantityOfProduct = inputRefquantity.current.value;
    totalItems.push(quantityOfProduct)
    setQuantity(quantityOfProduct);
  }
  const products = [
    {
     
      name: 'aaa',
     quantity :5
    },
    {
     
      name: 'bbb',
      quantity :52
    },
    {
    
      name: 'ccc',
      quantity :8
    }
  ];
  
    return(
        <div>
            <label for="pname"> New Product:</label><br></br>
  <input type="text" id="pname" onChange={handleChangeofProduct} ref={inputRefname}  required></input><br></br>
  <label for="quan">Quantity:</label><br></br>
  <input type="number" id="quantity" name="quantity" min="1" max="10" required onChange={handleChangeofQuantity} ref={inputRefquantity}></input><br></br>
  <button onClick={() => add(product)}>Add</button>
    {/* <div>Product NAME:{product} quantity :{quantity}</div>
       
       <button onClick={handleDelete}>Delete</button>
       <button onClick={handleDuplicate}>Duplicate</button> */}
        <div>
        {totalItems.map(product => (
          <div key={product.name}>
            <div className="product">
              <span >{product.quantity}</span>
            </div>
            
            <button onClick={() => removeProduct(product)}>Remove</button>
            <button onClick={() => duplicateQuantity(product)}>Duplicate </button>
          </div>
        ))}
        </div>
        </div>
    )
}
export default AssignmentUseReduce;
