import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card,FAB } from 'react-native-paper'

const Home = ({navigation}) => {


    const data = [

        { id:"1", name: "bishal",position: "web dev", email:"bishal@gmail.com", salary:"80K per annum", phone:"0405080545",picture:"https://images.unsplash.com/photo-1552607676-17f088307dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=781&q=80"   },
        { id: "2", name: "rambo",position: "front dev", email:"rambo@gmail.com", salary:"50K per annum", phone:"0405080545",picture:"https://images.unsplash.com/photo-1552607676-17f088307dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=781&q=80"   },
        { id: "3", name: "jackey",position: "back dev", email:"jackey@gmail.com", salary:"60K per annum", phone:"0405080545",picture:"https://images.unsplash.com/photo-1552607676-17f088307dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=781&q=80"   },
        { id: "4", name: "samsun",position: "manager", email:"samsun@gmail.com", salary:"100K per annum", phone:"0405080545",picture:"https://images.unsplash.com/photo-1552607676-17f088307dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=781&q=80"   }
               
    ]

    const renderList = ((item) => {

        return (

            <Card 
             style={styles.mycard}
             onPress={()=>navigation.navigate("Profile",{item})}
             >
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: "https://images.unsplash.com/photo-1552607676-17f088307dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=781&q=80" }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.position}</Text>
                    </View>


                </View>

            </Card>
        )

    })

    return (

        <View style={{flex:1}}>
            <FlatList

                data={data}
                renderItem={({ item }) => {

                    return renderList(item)
                }}
                keyExtractor={item => item.id}

            />


            <FAB onPress={()=>navigation.navigate("Create")}
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors:{accent:"#3498db",primary:"white"}}}
                
            />

        </View>


    )
}

const styles = StyleSheet.create({


    mycard: {

        margin: 5,

    },

    cardView: {
        flexDirection: "row",
        padding: 6

    },
    text: {

        fontSize: 18
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }



})

export default Home