export function wallet(state, action) {
    switch (action.type) {
        case "WALLET":
            return { ...state, wallet: action.payload };
        default:
            return state;
    }
  }