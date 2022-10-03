import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useCallback } from 'react'
const App = () => {
  const [name, setName] = useState('')
  const [data, setData] = useState([])
  const [btn, setBtn] = useState("Add")

  const handleData = useCallback(
    () => {
      setData([...data, name])
      setName("")
      // if (btn == "Update") {
      //   setBtn()
      // }
    }, [data, name],
  )
  // console.log(data);

  const handleDelete = (item) => {
    // setIndex(data.indexOf(item))
    var ind = data.indexOf(item)
    console.log(item)
    setData(data.filter(index => index !== item))

  }
  console.log(data);

  const handleUpdate = (item) => {
    setBtn((e) => e.btn = "Update")
    setName(item)
  }
  const FunUpdate = () => {
    console.log("Update function is run")
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter Text'
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={() =>{if(btn = "Add"){handleData()} else{FunUpdate()}}}>
        <Text style={styles.text}>{btn}</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity onPress={() => { handleUpdate(item) }}>
              <Text>{item}</Text>
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
    width: 80,
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
  }
})