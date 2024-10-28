import eventsData from "../../../public/data/events.json";
import { Events } from "@/types/events";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface EventsState {
  events: Events;
  loading: string | null;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  loading: null,
  error: null,
};

export const fetchEvents = createAsyncThunk<Events>(
  "events/fetchEvents",
  async (_, thunkAPI) => {
    try {
      if (!eventsData || eventsData.length === 0) {
        return thunkAPI.rejectWithValue("No employee data found.");
      }
      return eventsData as Events;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : "Error by fetching Events",
      );
    }
  },
);

const EventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.loading = null;
      state.error = action.payload as string;
    });
  },
});

export default EventsSlice.reducer;
