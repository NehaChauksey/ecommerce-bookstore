const header = []

export const headerTitle = (state = header, action) => {
    switch (action.type) {
        case "CART": return action.payload
        case "MY_ORDERS": return action.payload
        // case "TITLE": return action.payload
        default: return state;
    }
}