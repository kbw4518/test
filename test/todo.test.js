import test from "node:test";
import assert from "node:assert/strict";
import { createTodo } from "../src/todo.js";

test("creates an incomplete todo", () => {
  assert.deepEqual(createTodo("Review the pull request"), {
    title: "Review the pull request",
    completed: false,
  });
});

test("trims whitespace around a title", () => {
  assert.equal(createTodo("  Run the tests  ").title, "Run the tests");
});

test("rejects an empty or whitespace-only title", () => {
  for (const title of ["", " ", "\t\n"]) {
    assert.throws(() => createTodo(title), /Title is required/);
  }
});
