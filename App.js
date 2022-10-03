import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useCallback } from 'react'
const App = () => {
  const [name, setName] = useState('')
  const [data, setData] = useState([])
  const [btn, setBtn] = useState("Add")
  const [indexx, setIndexx] = useState()
  const handleData = useCallback(
    () => {
      setData([...data, name])
      setName("")
    }, [data, name],
  )
  // console.log(data);

  const handleDelete = (item) => {
    // setIndex(data.indexOf(item))
    var ind = data.indexOf(item)
    // console.log(item)
    setData(data.filter(index => index !== item))

  }
  // console.log(data);

  const handleUpdate = (item) => {
    setBtn((e) => e.btn = "Update")
    setName(item)
    setIndexx(data.indexOf(item))
  }

  console.log(indexx)

  const Update = useCallback(
    () => {
      // let Update = data
      // Update[indexx] = name
      // setData([...Update])
      data[indexx]=name
      setData([...data])
      setName(name)
      setBtn((e) => e.btn = "Add")
      setName("")
    },
    [setData, setName, name, setBtn],
  )
  
  
  
    //   if (item== indexx) {
    // data.map(item => {
    //     return { ...item, name };
    //   } else {
    //     return item;
    //   }})


    // data[indexx].name=setName()

    // data.map(item=>{
    //   if(item.indexx==indexx){return{...item}}
    // })

    // data.map((item)=>{
    //   if(item.name=indexx){
    //     setName("")
    //   }
    // })

  // const handleGlobalIndex=()=>{
  //   setIndex(()=>{

  //   })
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>CRUD Operation!</Text>
      <TextInput
        placeholder='Enter Text'
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={() => { if (btn == "Add") { handleData() } else { Update() } }}>
        <Text style={styles.text}>{btn}</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity onPress={() => { handleUpdate(item) }}>
              <Text >{item}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bg} onPress={() => { handleDelete(item) }}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  button: {
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  bg: {
    backgroundColor: 'red',
    width: 50,
    height: 25,
  },
  txt:{
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:20,
    fontSize:30,
    color:"blue",
  }
})