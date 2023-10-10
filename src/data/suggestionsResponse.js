export class IngredientsResponse {
  constructor(id = 0, itemName, qty, unit) {
    this.id = id;
    this.itemName = itemName;
    this.qty = qty;
    this.checked = false;
    this.unit = unit;
  }

  static map(data) {
    if (!data) return {};

    const ingredients = [];

    data.extendedIngredients.map(({ id, nameClean, amount, unit }) => {
      const existingIngredient = ingredients.find(
        (ingredient) => ingredient.id === id
      );
      if (existingIngredient) {
        console.warn("found ", nameClean);
        return;
      }
      ingredients.push(new IngredientsResponse(id, nameClean, amount, unit));
    });

    return ingredients;
  }
}
