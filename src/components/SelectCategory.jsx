import { useExpenseContext } from '../utils/expenseContext';
const SelectCategory = () => {

    const { state, categories, dispatch } = useExpenseContext();

    const handleChange = (e) => {
        dispatch({ type: 'setCategory', payload: e.target.value });
    }


    return (
        <select name={'select'} value={state.input.category} onChange={handleChange}>
            <option value={''}>Choisir une catégorie</option>
            {categories && 
                categories.map((category, index) => {
                    return <option key={index} value={category}>{category}</option>
            })}
        </select>
    );
};

export default SelectCategory;