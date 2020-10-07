import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {AuthContext} from "../components/context";


export const LoginScreen = ({ navigation }) => {

    const [isLoading,setIsLoading] = useState(true);
    const { signIn } = React.useContext(AuthContext);

    // loading test
    useEffect(()=> {
        setTimeout(() => { // request here
            setIsLoading(false);
        },2000);
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
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <Text>test login</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
