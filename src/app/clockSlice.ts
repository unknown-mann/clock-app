import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { StateType, ClockType, QuoteType } from "./Types";

export const fetchTimeZone = createAsyncThunk<ClockType, undefined, { rejectValue: string }>(
    'clock/getTimeZone', async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://worldtimeapi.org/api/ip')
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
);

export const fetchQuote = createAsyncThunk<QuoteType, undefined, { rejectValue: string }>(
    'clock/fetchQuote', async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://api.quotable.io/random')
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState: StateType = {
    clock: {},
    quote: {},
    status: 'idle',
    error: null
}

const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTimeZone.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTimeZone.fulfilled, (state, action) => {
                state.clock = action.payload
                state.status = 'succeeded'
            })
            .addCase(fetchQuote.fulfilled, (state, action) => {
                state.quote = action.payload
            })
            .addMatcher(isEror, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.status = 'rejected'
            })
    }
})

const isEror = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}

export default clockSlice.reducer