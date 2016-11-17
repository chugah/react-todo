import React, { Component } from 'react';

class AddTodo extends Component {
	handleSubmit(e) {
		e.preventDefault();
		var todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value = '';
			this.props.onAddTodo(todoText);
		} else {
			this.refs.todoText.focus();
		}
	}
	render() {
		return (
			<div className="container__footer">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="todoText" placeholder="What do you need to do?"/>
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		)
	}
}

export default AddTodo;
