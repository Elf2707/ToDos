/**
 * Created by Elf on 24.07.2016.
 */
import {createStore} from 'redux';

const defaultState = {
    todos: [{
        task: 'Initial todo in store',
        done: false
    }],
    filter: 'pending'
};

function todoStore( state = defaultState, action){
    switch(action.type){
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: state.todos.concat([{
                    task: action.task,
                    done: false
                }])
            });

        case 'MARK_DONE':
            const todos = state.todos.map((todo) => {
                if( todo === action.todo ){
                    todo.done = true;
                }

                return todo;
            });

            return Object.assign({}, state, {todos});

        case 'TOGGLE_FILTER':
            const filter = (state.filter === 'pending')? 'done':'pending';
            return Object.assign({}, state, {
                filter
            });

        default:
            return state
    }
}

export default createStore(todoStore);