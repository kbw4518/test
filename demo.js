import { createTodo } from "./src/todo.js";

const todos = [
  createTodo("Create a Multica issue"),
  createTodo("Open a GitHub pull request"),
  createTodo("Check the linked PR in Multica"),
];

console.table(todos);
