import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  betAmount: 0,
  profitOnWin: 0,
  targetMultiplier: 0,
  winChance: 0,
  betList: [],
  drawn: 1,
  drawnStatus: false,
  drawnList: [],
};

export const betSlice = createSlice({
  name: "bet",
  initialState,
  reducers: {
    setBet: (state, action) => {
      state.betAmount = parseFloat(action.payload.betAmount);
      state.profitOnWin = parseFloat(action.payload.profitOnWin);
      state.targetMultiplier = parseFloat(action.payload.targetMultiplier);
      state.winChance = parseFloat(action.payload.winChance);

      state.betList.unshift(action.payload);
    },
    setDrawn: (state, action) => {
      state.drawn = parseFloat(action.payload.drawn);
      state.drawnStatus = action.payload.drawnStatus;
      if (state.drawnList.length >= 5) {
        state.drawnList.shift();
      }
      state.drawnList.push({
        drawn: parseFloat(action.payload.drawn),
        drawnStatus: action.payload.drawnStatus,
      });
    },
  },
});

export const { setBet, setDrawn } = betSlice.actions;

export default betSlice.reducer;
