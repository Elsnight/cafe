export type MaybePromise<T> = T | Promise<T>;

export interface PricingSource<TConfig> {
  getConfig(): MaybePromise<TConfig>;
}

export interface CartStorage<TItem> {
  read(): TItem[];
  write(items: TItem[]): void;
  clear(): void;
}

export interface OrderSubmitter<TPayload> {
  submit(payload: TPayload): MaybePromise<void>;
}

