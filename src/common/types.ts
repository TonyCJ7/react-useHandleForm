export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type ActionWithoutPayload<T> = {
  type: T;
};

export type Keys<O> = keyof O;

export type IndexFromObjectKeys<O, T> = {
  [key in Keys<O>]?: T;
};
