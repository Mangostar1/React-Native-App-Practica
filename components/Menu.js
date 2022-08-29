import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Modal } from 'react-native';

import Clock from './Clock';
import Counter from './Counter';

import menuIcon from './img/icon-menu.png'
import closeImg from './img/close.png'

export default function Menu(props) {
    const [viewMenu, setViewMenu] = useState(false);

    const [item, setItem] = useState(0);

    const view = () => {
        setViewMenu(true);
    }
    const close = () => {
        setViewMenu(false);
    }

    const item1 = () => {
        setItem(0);
    }
    const item2 = () => {
        setItem(1);
    }

    return (
        <View>
            <TouchableOpacity onPress={view}>
                <Image source={menuIcon}/>

                { viewMenu === true ?

                    <Modal
                        transparent={true}
                        animationType="fade"
                    >   
                        <View style={styles.modalMenu}>
                            <TouchableOpacity onPress={close} style={styles.closeBtn}>
                                <Image source={closeImg} />
                            </TouchableOpacity>
                            <Button title="Contador" onPress={item1} />
                            <Button title="Capturador" onPress={item2} />
                        </View>
                    </Modal>

                : null }

            </TouchableOpacity>
            { item === 0 ? <Counter /> : <Clock /> }
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    modalMenu: {
        width:'85%',
        height: '100%',
        backgroundColor: '#F6F6F6',
    }, closeBtn: {
        marginLeft: '84%'
    }
});