import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import quizReducer from '../../store/quizReducer';
import ThemesList from './ThemesList';
import { render, screen } from '@testing-library/react';

const renderWithRedux = (
    component,
    { store = createStore(combineReducers({quiz: quizReducer,})) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store
    };
};

describe('redux testing', () => {
    beforeEach(() => {
        renderWithRedux(<ThemesList />);
    })
    test('render without errors', () => {
        expect(screen.getByRole('heading').textContent).toBe('Обирай тему');
    });
    test('render list with 8 themas', () => {
        expect(screen.getAllByRole('listitem').length).toBe(8);
    });
});