/**
 * Created by InspireUI on 18/02/2017.
 *
 * @format
 */
import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import Scrolcomponent from './src/Componnent/scrolcomponent/Scrolcomponent';
import {strings} from './src/locales/i18n';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'k', 'l', 'm', 'n', 'o', 'q', 'h', 'j', 's', 'x', 'z', 'u', 'y', 'w', 'r', 'p', 'v']
    this.pics=[
   {id:'1',name:'a',pic:require('./src/assest/g1.png')},
   {id:'2',name:'b',pic:require('./src/assest/g1.png')},
   {id:'3',name: 'c',pic:require('./src/assest/g1.png')},
   {id:'4',name: 'd',pic:require('./src/assest/g1.png')},
   {id:'5',name: 'e',pic:require('./src/assest/g1.png')},
   {id:'6',name: 'f',pic:require('./src/assest/g1.png')},
   {id:'7',name: 'g',pic:require('./src/assest/g1.png')},
   {id:'8',name: 'k',pic:require('./src/assest/g1.png')},
   {id:'9',name: 'l',pic:require('./src/assest/g1.png')},
   {id:'10',name: 'm',pic:require('./src/assest/g1.png')},
   {id:'11',name: 'n',pic:require('./src/assest/g1.png')},
   {id:'12',name: 'o',pic:require('./src/assest/g1.png')},
   {id:'13',name:'q',pic:require('./src/assest/g1.png')},
   {id:'14',name:'h',pic:require('./src/assest/g1.png')},
   {id:'15',name: 'j',pic:require('./src/assest/g1.png')},
   {id:'16',name: 's',pic:require('./src/assest/g1.png')},
   {id:'17',name: 'x',pic:require('./src/assest/g1.png')},
   {id:'18',name: 'z',pic:require('./src/assest/g1.png')},
   {id:'19',name: 'u',pic:require('./src/assest/g1.png')},
   {id:'20',name: 'y',pic:require('./src/assest/g1.png')},
   {id:'21',name: 'w',pic:require('./src/assest/g1.png')},
   {id:'22',name: 'r',pic:require('./src/assest/g1.png')},
   {id:'23',name: 'p',pic:require('./src/assest/g1.png')},
   {id:'24',name: 'v',pic:require('./src/assest/g1.png')},

   ]
    this.state = {
      stype:3,
      hor:false,
      text:'2'
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
    
        <Scrolcomponent
        stype={this.state.stype}
        mdata={this.pics}
        hor={this.state.hor}
        colss={this.state.text}
        />
        <View style={{backgroundColor:'white',width:'100%',height:60,justifyContent:'space-between',alignItems:'center',
        flexDirection:'row'
        }}>
       
         <TouchableOpacity style={styles.btn}
         onPress={()=>this.setState({stype:1,hor:false})} 
         >
         <Text  style={{color:'white'}}>{strings("makegrid")}</Text>
         </TouchableOpacity> 
        
         <TouchableOpacity style={styles.btn}
         onPress={()=>this.setState({stype:2,hor:false})} 
         >
         <Text  style={{color:'white'}}>{strings("column")}</Text>
         </TouchableOpacity>   
         <TouchableOpacity style={styles.btn}
         onPress={()=>this.setState({stype:3,hor:true})} 
         >
         <Text  style={{color:'white'}}>{strings("arrow")}</Text>
         </TouchableOpacity> 
       
            </View>
            <View style={{backgroundColor:'white',width:'100%',height:50,justifyContent:'space-between',alignItems:'center',
            flexDirection:'row'
            }}>
            <TouchableOpacity style={styles.btn}
            onPress={()=>this.setState({})} 
            >
            <Text  style={{color:'white'}}>{strings("Aseccendin")}</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.btn}
           
            >
            <Text  style={{color:'white'}}>{strings("language")}</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.btn}
            onPress={()=>this.setState({})} 
            >
            <Text  style={{color:'white'}}>{strings("descnding")}</Text>
            </TouchableOpacity> 
            </View>
      </View>
    );
  }
}

export default App;


const styles = StyleSheet.create({
btn:{
  backgroundColor:'blue',
  width:85,
  height:30,
  marginLeft:10,
  //borderRadius:15,
  justifyContent:'center',
  alignItems:'center'
},



})
