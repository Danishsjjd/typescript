interface Product {
  name: string;
  price: number;
}

interface Customer {
  id: number;
}

type ReadOnly<T> = {
  readonly [k in keyof T]: T[k];
};

const readCustomer: ReadOnly<Customer> = {
  id: 3,
};

const readProduct: ReadOnly<Product> = {
  name: "str",
  price: 3,
};
