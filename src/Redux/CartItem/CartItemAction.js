export function IncrementQuantity(itemId) {
  return { type: "INCREMENT_QUANTITY", payload: itemId };
}
export function DecrementQuantity(itemId) {
  return { type: "DECREMENT_QUANTITY", payload: itemId };
}

export function BuyedNewItem(item) {
  return { type: "BUYED_NEW_ITEM", payload: item };
}

export function RemoveItem(itemId) {
  return { type: "REMOVE_ITEM", payload: itemId };
}
export function ToggleCheck(itemId) {
  return { type: "TOGGLE_CHECK", payload: itemId };
}

export function RemoveSelected() {
  return { type: "REMOVE_SELECTED" };
}
