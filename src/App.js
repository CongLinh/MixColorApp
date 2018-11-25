/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Dimensions, View, StatusBar, Slider, TextInput } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const { width } = Dimensions.get('window');
console.log(getStatusBarHeight());

class PickerColor extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <View style={styles.onePickerColor}>
                <Text style={styles.rgbTittle}>{this.props.title}</Text>
                <Slider
                    style={styles.slider}
                    maximumValue={255}
                    minimumValue={0}
                    value={this.state.value}
                    onValueChange={(val) => {
                        this.props.whenChanged(val);
                    }}
                    step={1}
                />
                <TextInput style={styles.textInput} value={`${this.props.value}`} />
            </View>
        );
    }
}

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <View style={styles.header}>
                    <Text style={styles.navTitle}>HOME</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: width - 60, height: 400 }}>
                        <View style={{ flex: 1, justifyContent: 'space-around' }}>
                            <PickerColor title="R" value={this.state.red} whenChanged={(val) => { 
                                console.log({...this.state, red: val});
                                this.setState({...this.state, red: val});
                            }}/>
                            <PickerColor title="G" value={this.state.green} whenChanged={(val) => {
                                const newState = {...this.state, green: val}
                                console.log(newState);
                                this.setState(newState);
                            }}/>
                            <PickerColor title="B" value={this.state.blue} whenChanged={(val) => {
                                const newState = {...this.state, blue: val}
                                console.log(newState);
                                this.setState(newState);
                            }}/>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                width: 150,
                                height: 150,
                                backgroundColor: `rgb( ${this.state.red}, ${this.state.green}, ${this.state.blue} )`,
                                borderRadius: 75
                            }}></View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        width,
        height: 90,
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    navTitle: {
        fontFamily: 'Avenir',
        color: 'black',
        fontSize: 20,
        paddingTop: Platform.select({
            ios: 40,
            android: 0
        })
    },
    onePickerColor: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
    rgbTittle: { fontSize: 16, fontFamily: 'Avenir' },
    slider: { width: 200 },
    textInput: {
        width: 50,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center'
    },
    showColor: {
        width: 150,
        height: 150,
        backgroundColor: 'red',
        borderRadius: 75
    }
});
