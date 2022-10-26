function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numbers = wrapInArray<string>("1");

class ArrayUtils {
  public static wrapInArray<T>(value: T): T[] {
    return [value];
  }
}

const numbers1 = ArrayUtils.wrapInArray(3);
