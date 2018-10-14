import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: '-1'
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '110',
        description: 'Car Instalment',
        note: '',
        amount: 35000,
        createdAt: moment().subtract(3, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
    const note = 'Adding some notes';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: { note }
    }
    const state = expensesReducers(expenses, action);
    expect(state[0].note).toBe(note);
});

test('should not edit expense if expense not found', () => {
    const note = 'Adding some notes';
    const updates = { note }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-10',
        updates
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

