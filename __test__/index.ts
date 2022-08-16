export function debounce(fn: Function, ...params: any[]) {
  return function (this: any, ...args: any[]) {
    const self = this
    fn.call(self, ...params)
    // eslint-disable-next-line no-console
    console.log(args)
  }
}
