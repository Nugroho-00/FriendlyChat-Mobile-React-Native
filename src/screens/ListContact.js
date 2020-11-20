import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Icon, Title } from 'native-base';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';

import Ava from '../assets/images/avatar.png'

export default function ListChat({navigation}) {
  function GoHome() {
    navigation.navigate('Home')
  }
  
  return (
    <Container>
    <Header style={style.header}>     
          <TouchableOpacity onPress={GoHome}>
          <Icon style={style.icon1} name='arrow-left' type="FontAwesome5" />
          </TouchableOpacity>        
          <Body>
            <Text style={style.text}>New Message</Text>
          </Body>
          <Right>
          <TouchableOpacity>
            <Icon style={style.icon2} name='search' />
           </TouchableOpacity>
          <TouchableOpacity>
          <Icon style={style.icon2} name='sort-alpha-up' type="FontAwesome5"/>
          </TouchableOpacity>
          </Right>
        </Header>
      <Content padder>
        <ScrollView vertical>
          {Array(15).fill(
             <List>
             <ListItem>
               <View>
               <Thumbnail style={style.avatar} source={Ava} />
               </View>           
             <Body>
               <Text style={style.name}>Jhon Doe</Text>
               <Text note>Last Seen Yesterday</Text>
             </Body>
           </ListItem>
         </List>
          )}
        </ScrollView>  
      </Content>
      <View style={style.list}>
          <TouchableOpacity onPress={ListChat}>
          <Icon style={style.users} name="user-plus" type="FontAwesome5"/>
          </TouchableOpacity>
      </View>   
  </Container>
  );
}

const style = StyleSheet.create({
  list: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    borderColor: '#0082FF',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: '#0082FF',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  users: {
    fontSize: 35,
    color: 'white',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
  },
  icon1: {
    color: 'white',
    paddingLeft: 5
  },
  icon2: {
    color: 'white',
    paddingRight: 10
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
    paddingLeft: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 50, 
  },
})