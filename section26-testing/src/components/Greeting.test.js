import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        render(<Greeting/>);

        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if button was NOT clicked', () => {
        render(<Greeting/>);

        const paragraph = screen.getByText("It's good to see you!");
        expect(paragraph).toBeInTheDocument();

        const paragraph2 = screen.queryByText("Changed!");
        expect(paragraph2).not.toBeInTheDocument();
    });

    test('render "Change Text!" if the button was clicked', () => {
        render(<Greeting/>);

        const button = screen.getByRole('button');
        userEvent.click(button);

        const paragraph = screen.getByText("Changed!");
        expect(paragraph).toBeInTheDocument();

        const paragraph2 = screen.queryByText("It's good to see you!");
        expect(paragraph2).not.toBeInTheDocument();
    });

    test('renders good to see you if button was NOT clicked', () => {
        render(<Greeting/>);

        const button = screen.getByRole('button');
        userEvent.click(button);
        userEvent.click(button);

        const paragraph = screen.getByText("It's good to see you!");
        expect(paragraph).toBeInTheDocument();
    });
});