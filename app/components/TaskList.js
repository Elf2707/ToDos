import React, {Component} from 'react';
import {StyleSheet,
    View,
    ListView,
    TouchableHighlight,
    Text,
    Switch} from 'react-native';

import TaskRow from './TaskRow/TaskRow';


export default class TaskList extends Component {
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        const dataSource = ds.cloneWithRows(props.todos);

        this.state = {
            dataSource
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toggleRow}>
                    <Switch style={styles.switch}
                            value={this.props.filter !== 'pending'}
                            onValueChange={this.props.onFilterToggle}/>
                    <Text style={styles.toggleText}>
                        Showing {this.props.todos.length} {this.props.filter} todo(s)
                    </Text>
                </View>

                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow.bind(this)}
                          enableEmptySections={true}/>

                <TouchableHighlight style={styles.button}
                                    onPress={this.props.onAddStarted}>
                    <Text style={styles.buttonText}>Add One</Text>
                </TouchableHighlight>
            </View>
        );
    }

    renderRow(todo) {
        return (
            <TaskRow todo={todo}
                     onDone={this.props.onDone}   />
        )
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);

        this.setState({dataSource});
    }
}

TaskList.propTypes = {
    filter: React.PropTypes.string.isRequired,
    onAddStarted: React.PropTypes.func.isRequired,
    onDone: React.PropTypes.func.isRequired,
    onFilterToggle: React.PropTypes.func.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#f7f7f7',
        flex: 1,
        justifyContent: 'flex-start'
    },

    button: {
        height: 60,
        borderColor: '#05a5d1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fafafa',
        fontSize: 20,
        fontWeight: '600'
    },

    toggleRow: {
        flexDirection: 'row',
        padding: 10
    },

    switch: {

    },

    toggleText: {
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 3
    }
});