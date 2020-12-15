declare global {
  type ApiResult<T extends (...args: any) => any> = Await<ReturnType<T>>;
  type Await<T> = T extends PromiseLike<infer U> ? U : T
}
export { }