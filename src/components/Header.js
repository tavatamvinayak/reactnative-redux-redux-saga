import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import {useSelector} from 'react-redux'

const Header = () => {
    const  cartData = useSelector(state =>state.reducer )
    const [cartItem, setCartItem] = useState(0);
    useEffect(() => {
        setCartItem(cartData.length);
    }, [cartData])
    return (
    <View>
      <Text>{cartItem}</Text>
    </View>
  )
}

export default Header