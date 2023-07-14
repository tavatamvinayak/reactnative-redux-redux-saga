import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add_to_cart, remove_to_cart } from '../redux/Action/AddtoCart'
const Product_Item = (props) => {
  const [IsAdded, setIsAdded] = useState(false)

  // add items
    const item = props.item
    const dispatch = useDispatch()
    const AddtoCartPress = (item)=>{
        dispatch(add_to_cart(item))
    }

    // remove items
    const cartItems = useSelector((state)=>state.reducer)
    useEffect(() => {
    if(cartItems && cartItems.length){
      cartItems.forEach(element => {
        if(element.name===item.name){
          setIsAdded(true)
        }
      });
    } 
    }, [cartItems])
    const RemovetoCartPress=(item)=>{
      dispatch(remove_to_cart(item.name))
      setIsAdded(false)
    }
    
  return (
    <View>
      <Text>vishal</Text>
     {IsAdded ? <Button title='remove to cart' onPress={()=>RemovetoCartPress(item)} />
    :<Button title="add to cart" onPress={()=>AddtoCartPress(item)}/>
    }
    </View>
  )
}

export default Product_Item