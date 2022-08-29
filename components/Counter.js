import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Counter(props) {
    const [counter, setCounter] = useState(0);
    
    const add = () => {
        setCounter(counter + 1);
    }
    const rest = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }
    return(
        <View>
            <Text style={styles.Cuenta}>{counter}</Text>
            <View style={styles.btnContent}>
                <TouchableOpacity
                    style={styles.btnTest}
                    onPress={rest}
                >
                    <Text style={styles.textBtn}>Resta</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnTest}
                    onPress={reset}
                >
                    <Text style={styles.textBtn}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnTest}
                    onPress={add}
                >
                    <Text style={styles.textBtn}>Suma</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Cuenta: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#96E8FF',
        paddingVertical: 1,
        paddingHorizontal: 15,
    }, btnContent: {
        flexDirection: "row",
    }, btnTest: {
        paddingHorizontal: '11.6%',
        paddingVertical: 10,
        backgroundColor: '#841584',
    }, textBtn: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    }
});