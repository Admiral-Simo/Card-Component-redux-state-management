import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    card: [],
    loading: true,
  },
  reducers: {
    setCard: (state, action) => {
      state.card = action.payload;
    },
    changeLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    clearCard: (state) => {
      state.card = [];
    },
    removeItemById: (state, action) => {
      state.card = state.card.filter((item) => item.id !== action.payload);
    },
    increaseAmountById: (state, payload) => {
      state.card = state.card.map((item) => {
        const { amount, id } = item;
        if (id === payload.payload) {
          return { ...item, amount: amount + 1 };
        } else {
          return item;
        }
      });
    },
    decreaseAmountById: (state, payload) => {
      state.card = state.card.map((item) => {
        const { amount, id } = item;
        if (id === payload.payload) {
          return { ...item, amount: amount - 1 };
        } else {
          return item;
        }
      });
    },
  },
});

export const {
  setCard,
  changeLoadingState,
  removeItemById,
  increaseAmountById,
  decreaseAmountById,
  clearCard,
} = cardSlice.actions;

export const selectCard = (state) => state.card.card;
export const selectLoading = (state) => state.card.loading;
export const selectAmount = (state) =>
  state.card.card.reduce((total, acc) => total + acc.amount, 0);
export const selectTotal = (state) =>
  state.card.card.reduce((total, acc) => {
    return total + parseFloat(acc.price) * acc.amount;
  }, 0).toFixed(2);

export default cardSlice.reducer;
