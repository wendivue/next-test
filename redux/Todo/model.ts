type TodoData = {
  text: string;
};

interface Action<T extends string> {
  type: T;
}

interface ActionPayload<T extends string, Y> extends Action<T> {
  payload: Y;
}

type SetTodoData = ActionPayload<'ADD_TODO', string>;
type RemoveTodoData = ActionPayload<'REMOVE_TODO', number>;
type AddState = Array<TodoData>;
type ActionsTodo = SetTodoData | RemoveTodoData;

export type { TodoData, Action, SetTodoData, AddState, RemoveTodoData, ActionsTodo, ActionPayload };
