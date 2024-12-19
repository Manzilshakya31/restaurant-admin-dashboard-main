import { render, screen } from '@testing-library/react';
import React from 'react';
import AppPrimaryButton from './index';

describe('AppPrimaryButton', () => {
  it('renders button with default label "Submit"', () => {
    render(<AppPrimaryButton />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});
