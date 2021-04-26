import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal,Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';



const CreateEmployee = ({navigation,route}) => {



    const getDetails = (type)=>{

        if(route.params){
            switch(type){
                case "name":
                    return route.params.name

                case "phone":
                    return route.params.phone
                
                case "position":
                    return route.params.position
                
                case "email":
                    return route.params.email
                
                case "salary":
                    return route.params.salary

                case "picture":
                    return route.params.picture
            }

        }

        return ""
    }
    
    const [name, setName] = useState(getDetails("name"))
    const [position, setPosition] = useState(getDetails("position"))
    const [phone, setPhone] = useState(getDetails("phone"))
    const [email, setEmail] = useState(getDetails("email"))
    const [salary, setSalary] = useState(getDetails("salary"))
    const [picture, setPicture] = useState(getDetails("picture"))
    const [modal, setModal] = useState(false)
    


    const submitData = ()=>{


        fetch("http://10.0.2.2:3000/send-data",{


            method:"post",
            headers:{

                'Content-type': 'application/json'

            },
            body:JSON.stringify({

                name,
                position,
                email,
                phone,
                salary,
                picture


            })
            
        })
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`Employee ${data.name} is created.`)
            navigation.navigate("Home")

        })
        .catch(err=>{

            Alert.alert("Something went wrong")
        })

    }

    const updateData = ()=>{


        fetch("http://10.0.2.2:3000/update",{


            method:"post",
            headers:{

                'Content-type': 'application/json'

            },
            body:JSON.stringify({

                _id:route.params._id,
                name,
                position,
                email,
                phone,
                salary,
                picture


            })
            
        })
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`Employee ${data.name} is updated.`)
            navigation.navigate("Home")

        })
        .catch(err=>{

            Alert.alert("Something went wrong")
        })


    }



    const pickFromGallery = async ()=>{

        const {granted} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
        if(granted){

           let data= await ImagePicker.launchImageLibraryAsync({ 
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5

            
            
            })

            if(!data.cancelled){

                let newfile ={ 
                    uri:data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`
                }
                handleUpload(newfile)
            }

        }else{

            Alert.alert("Permission is required to upload the picture of an employee")


        }


    }


    const pickFromCamera =async()=>{

        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){

           let data= await ImagePicker.launchCameraAsync({
                
                
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5

            
            
            })

            if(!data.cancelled){

                let newfile ={ 
                    uri:data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name:`test.${data.uri.split(".")[1]}`
                }
                handleUpload(newfile)
            }

        }else{

            Alert.alert("Permission is required to upload the picture of an employee")


        }


    }


    const handleUpload =(image)=>{

        const data =new FormData()
        data.append('file',image)
        data.append('upload_preset','employeemanager')
        data.append("cloud_name", "aitcrossplatform")

        fetch("https://api.cloudinary.com/v1_1/aitcrossplatform/image/upload",{

            method:"post",
            body:data
        }).then(res=>res.json()).
        then(data=>{

            
            setPicture(data.url)
            setModal(false)
        })
        .catch(err=>{

            Alert.alert("Something went wrong")
        })

    }

    return (




        <View style={styles.root}>

            
            <TextInput
                label='Name'
                style={styles.inputStyle}
                value={name}
                mode="outlined"
                theme={theme}
                onChangeText={text => setName(text)}
            />
            <TextInput
                label='Position'
                style={styles.inputStyle}
                value={position}
                mode="outlined"
                theme={theme}
                onChangeText={text => setPosition(text)}
            />
            <TextInput
                label='Email'
                style={styles.inputStyle}
                value={email}
                mode="outlined"
                theme={theme}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label='Phone'
                style={styles.inputStyle}
                value={phone}
                mode="outlined"
                keyboardType="number-pad"
                theme={theme}
                onChangeText={text => setPhone(text)}
            />
            <TextInput
                label='Salary'
                style={styles.inputStyle}
                value={salary}
                mode="outlined"
                theme={theme}
                onChangeText={text => setSalary(text)}
            />


            <Button 
            style={styles.inputStyle}
            icon={picture==""?"upload":"check"}
            mode="contained" 
            theme={theme}
            onPress={() => setModal(true)}>
                Upload
            </Button>

            
            {route.params?
            
            <Button 
            style={styles.inputStyle}
            icon="content-save" 
            mode="contained" 
            theme={theme}
            onPress={() => updateData()}>
                Update
            </Button>
            
            
            :
            
            <Button 
            style={styles.inputStyle}
            icon="content-save" 
            mode="contained" 
            theme={theme}
            onPress={() => submitData()}>
                Save
            </Button>
            
            }

            

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={()=>{
                    setModal(false)
                }}
            >

                <View style={styles.modalView}>
                <View style={styles.modalButtonView}>
                    <Button 
                    icon="camera" 
                    mode="contained" 
                    theme={theme}
                    onPress={() => pickFromCamera()}>
                        Camera
                    </Button>

                    <Button 
                    icon="image-area" 
                    mode="contained" 
                    theme={theme}
                    onPress={() => pickFromGallery()}>
                        Gallery
                    </Button>

                </View>


                <Button 
                icon="close-outline"
                theme={theme}  
                onPress={() => setModal(false)}>
                        cancel
                    </Button>

                </View>

            </Modal>
           

        </View>



    )

}

const theme = {

    colors: {

        primary: "#3498db"
    }
}
const styles = StyleSheet.create({

    root: {

        flex: 1


    },

    inputStyle: {

        margin: 5
    },

    modalButtonView:{

        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },

    modalView:{

        position:"absolute",
        bottom:2,
        width:"100%"


    }


})

export default CreateEmployee