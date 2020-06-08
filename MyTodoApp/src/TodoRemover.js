import React, { Component } from 'react';


export  class TodoRemover extends Component {
    removeItem(e) {
        this.props.removeTodo(todoItems);
    }
    render() {
        return(
            <ul>
                { this.props.todoItems.map((todoItems) => {
                    return <li onClick={() => { this.removeItem(todoItems)}} key={todoItems}>{ todoItems }</li>
                })}
            </ul>
        );
    }
}