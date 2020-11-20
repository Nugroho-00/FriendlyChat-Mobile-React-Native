import React from 'react';
import { Header, Container, Content, Body, Icon, Title, List, ListItem, Thumbnail, Text} from 'native-base';
import { StyleSheet, TouchableOpacity, View, ScrollView} from 'react-native'

import Ava from '../assets/images/avatar.png'

export default function Home({navigation}) {
  function Chat() {
    navigation.navigate('ChatPage')
  }

  return (
    <Container style={style.container}>
      <Header style={style.header}>
        <View style={style.menu}>
        <TouchableOpacity>
          <Icon style={style.icon} name="bars" type="FontAwesome5"/>
        </TouchableOpacity>
        </View>      
        <Body>
          <Text style={style.title}>Telegram</Text>
        </Body>
        <View style={style.search}>
        <TouchableOpacity>
          <Icon style={style.icon} name="search" type="FontAwesome5"/>
        </TouchableOpacity>
        </View>    
      </Header>
      <Content padder>
        <ScrollView>
          {Array(10).fill(        
            <List>       
            <ListItem>       
              <View>
                <Thumbnail style={style.avatar} source={Ava} />
                </View>          
                <Body>
                  <TouchableOpacity onPress={Chat}>
                  <Text style={style.name}>Jhon Doe</Text>
                  </TouchableOpacity>     
                  <Text note>halo apa kabar ?</Text>
                  </Body>
                  <View style={style.time}>
                  <Text note>3:02 Pm</Text>
                  </View>                 
              </ListItem>               
            </List>
          )}      
        </ScrollView>    
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'black'
  },
  icon: {
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  menu:{
    marginTop: 15,
    marginLeft: 5,
    marginRight: 20,
    alignItems: 'center',
  },
  search: {
    marginTop: 15,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50, 
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    marginBottom: 15,
  }
})