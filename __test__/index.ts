export function debounce(fn: () => any, ...params: any[]) {
  return function (...args: any[]) {
    const self = this
    fn.call(self, ...params)
    // eslint-disable-next-line no-console
    console.log(args)
  }
}
