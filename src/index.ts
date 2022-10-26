// When extending generic classes, we have three options: can pass on generic type
// parameters, so the derived classes will have the same generic type parameters.
// Alternatively, we can restrict or fix them.

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _object: T[] = [];
  add(obj: T): void {
    this._object.push(obj);
  }
  find(property: keyof T, value: unknown): T | undefined {
    return this._object.find((obj) => obj[property] === value);
  }
}

const store = new Store<Product>();

store.add({ name: "a", price: 1 });

store.find("name", "a");
store.find("price", 1);
store.find("nonExistingProperty", 1);
