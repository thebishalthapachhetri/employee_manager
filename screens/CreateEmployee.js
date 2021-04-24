import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const CreateEmployee = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)



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
                value={email}
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
            icon="upload" 
            mode="contained" 
            theme={theme}
            onPress={() => setModal(true)}>
                Upload
            </Button>


            <Button 
            style={styles.inputStyle}
            icon="content-save" 
            mode="contained" 
            theme={theme}
            onPress={() => console.log("saved")}>
                Save
            </Button>

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
                    onPress={() => console.log("pressed")}>
                        Camera
                    </Button>

                    <Button 
                    icon="image-area" 
                    mode="contained" 
                    theme={theme}
                    onPress={() => console.log("pressed")}>
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