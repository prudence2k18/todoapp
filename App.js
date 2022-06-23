import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const InfoText = styled.Text`
  color: red;
  font-style: italic;
  font-size: 42px;
`;

export default function App() {
  const [todos,setTodos] = useState([
    {item: 'play football',key:'1'},
    {item: 'read a book',key:'2'},
    {item: 'cook for a family',key:'3'},
    {item: 'do React Native projrct',key:'4'},
    {item: 'learn to play guitar',key:'5'},
    {item: 'call dad and mom',key:'6'},
    {item: 'Transfer to electrician',key:'7'},
    {item: 'Transfer to mom',key:'8'},
    {item: 'Transfer to dad',key:'9'},
  ]);
  return (
    <>
    <SafeAreaView>
      <View style={styles.AD}>
        <InfoText>My Everyday Task</InfoText>
        <ScrollView>
        {
        todos.map((todo) => {
          return <Text style={styles.todotext}>{todo.item}</Text>
        }) 
      }
        </ScrollView>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  AD: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 
  },
  todotext: {
    backgroundColor: 'skyblue',
    paddingVertical:24,
    marginHorizontal:10,
    marginVertical:10,
    marginHorizontal:10,
    borderWidth:1,
    borderColor:'blue',
    borderRadius:10,

  }
});

// import * as React from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import Constants from 'expo-constants';


// // or any pure javascript modules available in npm
// import { Card, Title, Paragraph, Button as Btn } from 'react-native-paper';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Card>
//         <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//         <Title>The React Native Abuja Conference</Title>
//         <Paragraph>
//           This is tech packed conference for JavaScript and React Native
//         </Paragraph>
//         <Btn mode="contained" color="black" style={{marginBottom:5}}> Get Details</Btn>
//         <Button title="Register Today" color="red"/>
//       </Card>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
// });

