import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { AsyncStorage } from 'react-native';


export const ProfileScreen = ({ navigation }) => {

    const [isLoading,setIsLoading] = useState(true);
    const [userDetails, setUserDetails] = useState({});


    function handleSignOut() {
        AsyncStorage.removeItem('@app:session'); //delete token
    }

    // loading test
    useEffect(()=> {

        setTimeout(() => { // request here to get user details from the server
            setIsLoading(false);
        },2000);

        const user = AsyncStorage.getItem('user');
        const userJSON = JSON.parse(user);

        setUserDetails(userJSON);
    }, []);


    if(isLoading) {
        return (
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                <StatusBar style="dark" />
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
            <SafeAreaView>
                <StatusBar style="dark" />
                <Text>Your Email: {userDetails.email}</Text>
            </SafeAreaView>
    );
}
