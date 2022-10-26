interface Users {
  username: string;
}

interface Product {
  title: string;
}

interface Results<T> {
  data: T | null;
  error: string | null;
  endPoint: string;
}

function fetch<T>(endPoint: string): Results<T> {
  return { data: null, error: null, endPoint };
}

const results = fetch<Product>("users");
