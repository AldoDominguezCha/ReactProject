import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('Verify message in greeting component', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
    
        // Assert
         const helloWorldElement = screen.getByText('Hello, world!', { exact: true });
         expect(helloWorldElement).toBeInTheDocument();
    });

    test('Verify initial message with default state', () => {
        // Arrange
        render(<Greeting />);
        // Act
        // Assert
        const defaultMessage = screen.getByText('good to see you', { exact: false });
        expect(defaultMessage).toBeInTheDocument();
    });

    test('Verify new message after button click and state change', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonELement = screen.getByRole('button');
        userEvent.click(buttonELement);
        // Assert
        const newMessage = screen.getByText('Changed!', { exact: false });
        expect(newMessage).toBeInTheDocument();
    });

    test('Verify no original message after button click and state change', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByText('change text', { exact: false });
        expect(buttonElement).toBeInTheDocument();
        userEvent.click(buttonElement);
        // Assert
        const defaultMessage = screen.queryByText('good to see you', { exact: false });
        expect(defaultMessage).toBeNull();
    }); 
});

