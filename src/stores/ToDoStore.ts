import { action, computed, makeAutoObservable, observable } from 'mobx';

interface ToDoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

class ToDoStore {
  todos: ToDoItem[] = [];
  constructor() {
    makeAutoObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
      toggleToDo: action,
      completedTodos: computed,
    });
  }

  addTodo(title: string, description: string) {
    this.todos.push({
      id: this.todos.length,
      title: title,
      description: description,
      completed: false,
    });
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleToDo(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }

  get completedTodos() {
    return this.todos.filter((todo) => todo.completed).length;
  }
}
