import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card,FAB } from 'react-native-paper'

const Home = () => {


    const data = [

        { id: 1, name: "bishal", position: "web dev" },
        { id: 2, name: "shyam", position: "web dev" },
        { id: 3, name: "hari", position: "web dev" },
        { id: 4, name: "gita", position: "web dev" },
        { id: 5, name: "sita", position: "web dev" },
        { id: 6, name: "sita", position: "web dev" },
        { id: 7, name: "sita", position: "web dev" },
        { id: 8, name: "sita", position: "web dev" },
        { id: 9, name: "sita", position: "web dev" },
        { id: 10, name: "sita", position: "web dev" },
        { id: 11, name: "sita", position: "web dev" },
        { id: 12, name: "ramita", position: "web dev" },
        { id: 13, name: "ramita", position: "web dev" },
        { id: 14, name: "ramita", position: "web dev" },
        { id: 15, name: "ramita", position: "web dev" },
        { id: 16, name: "ramita", position: "web dev" },
        { id: 17, name: "ramita", position: "web dev" },
        { id: 18, name: "ramita", position: "web dev" },
        { id: 19, name: "ramita", position: "web dev" },
        { id: 20, name: "ramita", position: "web dev" },
        { id: 21, name: "ramita", position: "web dev" },
    ]

    const renderList = ((item) => {

        return (

            <Card style={styles.mycard}>
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

        <View>
            <FlatList

                data={data}
                renderItem={({ item }) => {

                    return renderList(item)
                }}
                keyExtractor={item => `${item.id}`}

            />


            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors:{accent:"#3498db"}}}
                onPress={() => console.log('Pressed')}
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