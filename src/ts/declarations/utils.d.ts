type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type N<T> = T | null;
type U<T> = T | undefined;
type None = null | undefined;
type ValueOf<T> = T[keyof T];
type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
