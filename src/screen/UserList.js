import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from '../redux/Action/AddtoCart'

const UserList = () => {
    const dispatch = useDispatch()
    const userList = useSelector(state=>state.reducer)
    useEffect(() => {
    dispatch(getUserList())
    }, [])
    // console.warn(userList)
    const users = userList[0].users
    console.warn(users)
  return (
    <View>
      {
        userList.length ?  users.map((e,i)=><Text key={i}>{e.firstName}</Text>) : <Text>Loading</Text>  
        
           }
          
    </View>
  )
}

export default UserList