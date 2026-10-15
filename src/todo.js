export function createTodo(title) {
  const value = title.trim();
  if (!value) {
    throw new Error("Title is required");
  }

  return { title: value, completed: false };
}
