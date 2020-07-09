import { combineReducers } from "redux";
import { Todo } from "../actions";
import { todosReducer } from "./todos";

// this will catch inappropriate values in our store state and is aligned with reducer return value
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
