import { View, Text, SafeAreaView ,Button } from 'react-native'
import React from 'react'
import Product_Item from '../components/Product_Item'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
const Products =[
    {
        id:1,
        name:"t-shirt"
        ,price:536
    },
    {
        id:2,
        name:"t-shirt1"
        ,price:245
    },
    {
        id:3,
        name:"t-shirt2"
        ,price:345
    }
]
  return (
    <SafeAreaView>
        <Header/>
       <Button title="userList" onPress={()=>navigation.navigate('userList')}/>
        <View>
            {
                Products.map((item)=><Product_Item item={item} key={item.id} />)
            }
        </View>
    </SafeAreaView>
  )
}

export default Home