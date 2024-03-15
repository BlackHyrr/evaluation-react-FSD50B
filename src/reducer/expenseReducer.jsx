let id = 0;

export const initialState = {
    input: {
        title: '',
        amount: '',
        category: ''
    },
    expenses: [],
    errorMessage: ''
}

const expenseReducer = (state, action) => {

    switch(action.type) {

        case 'changeValue':
            return {
                ...state,
                input: action.payload,
                errorMessage: ''
            }

        case 'setTitle':
            return { ...state, input: { ...state.input, title: action.payload } };

        case 'setAmount':
            return { ...state, input: { ...state.input, amount: action.payload } };

        case 'setCategory':
            return { ...state, input: { ...state.input, category: action.payload } };

        case 'addExpense':
            const newExpense = {
                id: id++,
                title: state.input.title,
                amount: state.input.amount,
                category: state.input.category
            };
            return {
                ...state,
                input: {
                    title: '',
                    amount: '',
                    category: ''
                },
                expenses: [...state.expenses, newExpense],
                errorMessage: ''
            }

        case 'error':
            return {
                ...state,
                errorMessage: action.payload
            }

        case 'removeExpense':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }

        default:
            return state;
    }
}

export default expenseReducer