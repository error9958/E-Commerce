const InitialState = {
  list: [],
};

export function CartItemReducer(state = InitialState, action) {
  let newList;
  let index;
  switch (action.type) {
    case "BUYED_NEW_ITEM":
      return { list: [...state.list, action.payload] };
    case "INCREMENT_QUANTITY":
      index = state.list.findIndex((data) => data.id == action.payload);
      newList = [...state.list];
      newList[index].quantity++;
      return { list: newList };
    case "DECREMENT_QUANTITY":
      index = state.list.findIndex((data) => data.id == action.payload);
      newList = [...state.list];
      newList[index].quantity--;
      return { list: newList };
    case "REMOVE_ITEM":
      const newState = state.list.filter((obj) => {
        return !(obj.id === action.payload);
      });

      return { list: newState };
    case "TOGGLE_CHECK":
      index = state.list.findIndex((obj) => obj.id === action.payload);
      newList = [...state.list];
      newList[index].checked = !newList[index].checked;
      return { list: newList };
    case "REMOVE_SELECTED":
      newList = state.list.filter((e) => !e.checked);
      return { list: newList };

    default:
      return state;
  }
}
