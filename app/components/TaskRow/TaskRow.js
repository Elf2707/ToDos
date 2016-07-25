/**
 * Created by Elf on 20.07.2016.
 */
import React, {Component} from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableHighlight} from 'react-native';

import Render from './Render';

export default class TaskRow extends Component {
    constructor(props, ctx){
        super(props, ctx);
    }

    render() {
        return Render.bind(this)(styles);
    }

    onDonePressed(todo) {
        this.props.onDone(todo);
    }
}

TaskRow.propsTypes = {
    onDone: React.PropTypes.func.isRequired,
    todo: React.PropTypes.shape({
        task: React.PropTypes.string.isRequired,
        done: React.PropTypes.bool.isRequired
    }).isRequired
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e7e7e7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },

    label: {
        fontSize: 20,
        fontWeight: '300'
    },

    doneButton: {
        borderRadius: 5,
        backgroundColor: '#eaeaea',
        padding: 5
    }
});