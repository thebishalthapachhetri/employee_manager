import React from 'react';
import { StyleSheet, Text, View ,Image,Linking, Platform, Alert } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card,Button} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


const Profile = (props)=>{

    
    const {_id, name, position, email, phone,salary, picture}= props.route.params.item
 
    const deleteEmployee = ()=>{

        fetch("http://10.0.2.2:3000/delete",{

            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                _id
            })



        })
            .then(res=>res.json())
            .then(deleteEmployee=>{

                Alert.alert(`${deleteEmployee.name} is deleted`)
                props.navigation.navigate("Home")
            })
            .catch(err=>{

                Alert.alert("Something went wrong")
            })

    }



    const openDail=()=>{

        if(Platform.OS === "android"){
            
            Linking.openURL(`tel:${phone}`)

        }

        else{
            Linking.openURL(`telpromt:${phone}`)

        }



    }

    
    return(



        <View style={styles.root}>

            <LinearGradient
            
                colors={["#2980b9","#3498db"]}
                style={{height:"20%"}}
            />

            <View style={{ alignItems:"center"}}>
            <Image
                       
                style={{ width: 140, height: 140, borderRadius: 70, marginTop: -50}}
                source={{ uri: picture }}
            />
            </View>

            <View style={{alignItems:"center", margin:15}}>

                <Title style={{fontSize:25}}>{name}</Title>
                <Text style={styles.myText}>{position}</Text>


            </View>
        

            <Card style={styles.myCard} onPress={()=>{

                Linking.openURL(`mailto:${email}`)
            }}>

                <View style={styles.cardContent}>

                    <MaterialIcons name="email" size={32} color="#3498db"/>
                    <Text style={styles.myText}>{email}</Text>

                </View>

            </Card>
            <Card style={styles.myCard} onPress={()=>openDail()}>

                <View style={styles.cardContent}>

                    <MaterialIcons name="phone" size={32} color="#3498db"/>
                    <Text style={styles.myText}>{phone}</Text>

                </View>

            </Card>
            <Card style={styles.myCard}>

                <View style={styles.cardContent}>

                    <MaterialIcons name="attach-money" size={32} color="#3498db"/>
                    <Text style={styles.myText}>{salary}</Text>

                </View>

            </Card>
            

            <View style={{flexDirection:"row", justifyContent:"space-around", padding:10}}>


                <Button 
                    icon="account-edit"
                    mode="contained"
                    theme={theme}  
                    onPress={() =>{ 

                        props.navigation.navigate("Create",
                         {_id, name, position, email, phone,salary, picture}
                        )
                    
                    }}>
                     Edit
                </Button>
                <Button 
                    icon="delete"
                    mode="contained"
                    theme={theme}  
                    onPress={() => deleteEmployee()}>
                            delete
                </Button>

            </View>
        </View>
    )
}

const theme = {

    colors: {

        primary: "#3498db",
        
        
    }
}


const styles = StyleSheet.create({
    

    root:{

        flex:1


    },

    myCard:{

        margin:5

    },

    cardContent:{

        flexDirection:"row",
        padding:8
    },

    myText:{

        fontSize:16,
        marginTop:3,
        marginLeft:5
    }


    

})

export default Profile