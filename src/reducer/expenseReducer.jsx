import { v4 as uuidv4 } from 'uuid';

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

        case 'setTitle':
            return { ...state, input: { ...state.input, title: action.payload } };

        case 'setAmount':
            return { ...state, input: { ...state.input, amount: action.payload } };

        case 'setCategory':
            return { ...state, input: { ...state.input, category: action.payload } };

        case 'addExpense':
            if(isNaN(parseFloat(state.input.amount))) {
                return {
                    ...state,
                    errorMessage: 'Le montant doit être un nombre.'
                }
            }
            const newExpense = {
                id: uuidv4(),
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