import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Variants from './Variants';

const mockFn = jest.fn();
const testProps = {
    name: 'test',
    variants: ['1', '2', '3', '4'],
    setAnswer: mockFn
};

describe('render tests', () => {
    let radioList; 
    beforeEach(() => {
        render(<Variants
            name={testProps.name}
            variants={testProps.variants}
            setAnswer={testProps.setAnswer}
        />);
        radioList = screen.getAllByRole('radio');
    });
    test('render rigth number of variants', () => {
        expect(radioList.length).toBe(4);
    });
    test('render correct variants', () => {
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('4')).toBeInTheDocument();
    });
    test('function setAnswer calls when user check answer', () => {
        userEvent.click(radioList[0]);
        expect(mockFn).toBeCalled();
    });
});