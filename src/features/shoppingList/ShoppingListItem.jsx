const ShoppingListItem = ({ itemName, qty, checked, id }) => {
  return (
    <div className={`shopping-list-item ${checked ? "checked" : ""}`}>
      <span>{itemName}</span>
      <span>{qty}</span>
    </div>
  );
};

export default ShoppingListItem;
