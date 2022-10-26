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
}

// Pass on the generic type parameter
class CompressedStore<T> extends Store<T> {
  compress() {}
}

// restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._object.find(({ name: id }) => id === name);
  }
}
// fix the generic type parameter
class ProductsStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
