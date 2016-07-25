/**
 * Created by Elf on 20.07.2016.
 */
import React, {Component} from 'react';
import {Navigator} from 'react-native';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import store from './store/todoStore';

export default class ToDos extends Component {
    constructor(props, ctx) {
        super(props, ctx);

        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState());
        })
    }

    onAddStarted() {
        this.nav.push({
            name: 'taskform'
        });
    }

    renderScene(router, nav) {
        switch (router.name) {
            case 'taskform':
                return <TaskForm onCancel={this.onCancel.bind(this)}
                                 onAdd={this.onAdd.bind(this)}   />;
            default:
                return (
                    <TaskList todos={this.getFilteredTodos()}
                              filter={this.state.filter}
                              onAddStarted={this.onAddStarted.bind(this)}
                              onDone={this.onDone}
                              onFilterToggle={this.onFilterToggle.bind(this)}  />
                );
        }
    }

    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    render() {
        return (
            <Navigator
                configureScene={this.configureScene}
                initialRoute={{name: 'taskllist', index: 0}}
                ref={(nav)=>{
                            this.nav = nav;
                       }}
                renderScene={this.renderScene.bind(this)}/>
        );
    }

    getFilteredTodos(){
        return this.state.todos.filter((todo) => {
           if(this.state.filter === 'pending'){
               return !todo.done
           } else {
               return todo.done
           }
        });
    }

    onCancel() {
        this.nav.pop();
    }

    onAdd(task) {
        store.dispatch({
            type: 'ADD_TODO',
            task
        });

        this.nav.pop();
    }

    onDone(todo) {
        store.dispatch({
            type: 'MARK_DONE',
            todo
        });
    }

    onFilterToggle() {
        store.dispatch({
            type: 'TOGGLE_FILTER'
        })
    }
}