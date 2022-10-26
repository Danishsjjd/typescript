// class 2
// * the problem generic is solving is to set type during declaration so we don't have to repeat class or use union operator

// class 3
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
// most of the time we don't have to explicitly write generic types
const pair = new KeyValuePair<number, string>(1, "2");
