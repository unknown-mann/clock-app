export type ClockType = {
    [key: string]: string,
};

export type QuoteType = {
    [key: string]: string
};

export type StateType = {
    clock: ClockType,
    quote: QuoteType,
    status: 'idle' | 'loading' | 'succeeded' | 'rejected',
    error: string | null
};