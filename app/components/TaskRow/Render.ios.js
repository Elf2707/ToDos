import React from 'react';
import { View,
    Text,
    StyleSheet} from 'react-native';

import Swipeout from 'react-native-swipeout';

export default function render(baseStyles) {
    const buttons = [{
        text: 'Done',
        backgroundColor: '#05a5d1',
        underlayColor: '#273539',
        onPress: this.props.onDone.bind(this, this.props.todo)
    }]

    return (
        <View style={localStyles.container}>
            <Swipeout backgroudColor='#fff'
                      right={buttons}>
                <View style={[baseStyles.container, localStyles.row]}>
                    <Text style={baseStyles.label}>{this.props.todo.task}</Text>
                </View>
            </Swipeout>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 10
    },

    row: {
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0
    }
});