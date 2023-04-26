    export const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
    };

    export const isInCart = (state, id) => {
        const result =!!state.selecteditems.find(item => item.id === id);
        return result;
    }
    
    export const quantityCount = (state, id) => {
        const index = state.selecteditems.findIndex(item => item.id === id);
        if (index === -1) {
            return false;
        } else {
            return state.selecteditems[index].quantity;
        }
    }
    


