import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card,Button} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


const Profile = ()=>{

    return(

        <View style={styles.root}>

            <LinearGradient
            
                colors={["#2980b9","#3498db"]}
                style={{height:"20%"}}
            />

            <View style={{ alignItems:"center"}}>
            <Image
                       
                style={{ width: 140, height: 140, borderRadius: 70, marginTop: -50}}
                source={{ uri: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }}
            />
            </View>

            <View style={{alignItems:"center", margin:15}}>

                <Title>Bishal Thapa</Title>
                <Text style={styles.myText}>Web Developer</Text>


            </View>

            <Card style={styles.myCard}>

                <View style={styles.cardContent}>

                    <MaterialIcons name="email" size={32} color="#3498db"/>
                    <Text style={styles.myText}>bishal.com</Text>

                </View>

            </Card>
            <Card style={styles.myCard}>

                <View style={styles.cardContent}>

                    <MaterialIcons name="phone" size={32} color="#3498db"/>
                    <Text style={styles.myText}>0406258574</Text>

                </View>

            </Card>
            <Card style={styles.myCard}>

                <View style={styles.cardContent}>

                    <MaterialIcons name="attach-money" size={32} color="#3498db"/>
                    <Text style={styles.myText}>80k per annum</Text>

                </View>

            </Card>
            

            <View style={{flexDirection:"row", justifyContent:"space-around", padding:10}}>


                <Button 
                    icon="account-edit"
                    mode="contained"
                    theme={theme}  
                    onPress={() => console.log("pressed")}>
                            Edit
                </Button>
                <Button 
                    icon="delete"
                    mode="contained"
                    theme={theme}  
                    onPress={() => console.log("pressed")}>
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

        fontSize:18,
        marginTop:3,
        marginLeft:5
    }


    

})

export default Profile