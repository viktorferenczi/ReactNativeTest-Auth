import React from 'react';
import Navigator from "./src/navigations/Navigator";
import { AsyncStorage } from 'react-native';


export default function App(factory, deps) {

    const authContext = React.useMemo(() => ({
        signIn: () => {
            AsyncStorage.setItem('@app:session', "tokenExample123");
        },
        signOut: () => {
            AsyncStorage.removeItem('@app:session');
        },
        signUp: () => {

        },

    }), deps);

    return(
       <Navigator authContext={authContext}/>
    );
}
