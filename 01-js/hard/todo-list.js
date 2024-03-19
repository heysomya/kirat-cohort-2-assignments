/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoArray = [];
  }

  add(todo) {
    this.todoArray.push(todo);
  }

  remove(idx) {
    if (idx < this.todoArray.length) {
      this.todoArray = this.todoArray.filter((todo, index) => index != idx);
    }
  }

  update(idx, updatedTodo) {
    if (idx < this.todoArray.length) {
      this.todoArray = this.todoArray.map((todo, index) =>
        index === idx ? updatedTodo : todo
      );
    }
  }

  getAll() {
    return this.todoArray;
  }

  get(idx) {
    if (idx < this.todoArray.length) {
      const ele = this.todoArray[idx];
      return ele;
    }
    return null;
  }

  clear() {
    this.todoArray = [];
  }
}

module.exports = Todo;
