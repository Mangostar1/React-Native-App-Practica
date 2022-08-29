import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

function Time(props) {
    const [dateCapture, setDateCapture] = useState(new Date().toLocaleTimeString());
    return (
        <Text style={styleClock.textCatch}>{dateCapture}</Text>
    )
}

export default function Clock(props) {
    const [clock, setClock] = useState(new Date().toLocaleTimeString());
    
    const [capture, setCapture] = useState(0);
    let timer;

    useEffect(() => {
        setInterval(() => {
            timer = setClock(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    })

    const stop = () => {
        setCapture(capture + 1);
    }
    const clear = () => {
        setCapture(0);
    }


    return (
        <View>
            <View style={styleClock.view}>
                <Text style={styleClock.textClock}>{clock}</Text>
            </View>
            <View>
                <Button title="Catch" onPress={stop} />
                <Button title="Clear" onPress={clear} />
                {capture > 0 ? 
                    <Time />
                    :  null}
            </View>
        </View>
    );
}

const styleClock = StyleSheet.create({
    view: {
        backgroundColor: '#FFA76A',
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop: 0
    },
    textClock: {
        fontSize: 30,
        textAlign: 'center',
    }, textCatch: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#FFE9DA'
    }
})