import moment from 'moment';

// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((firstExpense, secondExpense) => {
        if (sortBy === 'date') {
            return firstExpense.createdAt < secondExpense.createdAt ? 1 : -1;
        } else if(sortBy === 'amount') {
            return firstExpense.amount < secondExpense.amount ? 1 : -1;
        }
    });
};