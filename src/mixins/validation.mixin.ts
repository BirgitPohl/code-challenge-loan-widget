type Constructor<T = {}> = new (...args: any[]) => T;

// function IsNumber<TBase extends Constructor>(Base: TBase) {
//   return class extends Base {
//     typeof value === 'number' ? true : false;
//   };
// }

export function Validate<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    public isNumber(value: any): boolean {
      return typeof value === 'number' ? true : false;
    }
  };
}
