import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import userEvent from '@testing-library/user-event';




describe("testing dashboard",()=>{
  test('renders learn react link', () => {
    render(<Dashboard />);
    const linkElement = screen.getByText(/dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("clicking the button opens an alert box",()=>{
  const {getByText}= render(<Dashboard/>);
   userEvent.click(getByText('Click me'));

   // Assert
   expect(window.alert).toHaveBeenCalledWith('Button clicked');
  })
})



