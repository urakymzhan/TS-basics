import { DeleteTodoAction, FetchTodosAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

// more readble rather than keep all in actions file
export type Action = DeleteTodoAction | FetchTodosAction;
