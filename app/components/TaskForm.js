/**
 * Created by Elf on 21.07.2016.
 */
import React, {Component} from 'react';
import {Text,
        TextInput,
        View,
        TouchableHighlight,
        StyleSheet} from 'react-native';

export default class TaskForm extends Component {
    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           onChangeText={this.onChange.bind(this)} />

                <TouchableHighlight style={styles.button}
                                     onPress={this.onAddPress.bind(this)}>
                    <Text style={styles.buttonText}>
                        Add
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={[styles.button, styles.cancelButton]}
                                     onPress={this.props.onCancel}   >
                    <Text style={styles.buttonText}>
                        Cancel
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

    onChange(text) {
        this.task = text;
    }

    onAddPress() {
        this.props.onAdd(this.task);
    }
}

TaskForm.propsTypes = {
    onCancel: React.PropTypes.func.isRequired,
    onAdd: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#f7f7f7'
    },

    input: {
        borderWidth: 1,
        borderColor: '#d7d7d7',
        height: 80,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3,
        fontSize: 24
    },

    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fafafa'
    },

    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05a5d1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cancelButton: {
        backgroundColor: '#666'
    }
});
