import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as Keychain from 'react-native-keychain';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://api.pocketflow.co.uk/v1/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            
            if (response.ok) {
                // Securely store JWT auth token in device Keystore / Keychain
                await Keychain.setGenericPassword('JWT_TOKEN', data.token);
                navigation.replace('Dashboard');
            } else {
                Alert.alert('Authentication Failed', data.message);
            }
        } catch (error) {
            Alert.alert('Network Error', 'Unable to connect to PocketFlow secure servers.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Email Address" value={email} onChangeText={setEmail} autoCapitalize="none" />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Secure Login" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 }
});