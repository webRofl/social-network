import { render, screen } from '@testing-library/react';
import React from 'react';
import StatusComponent from './StatusComponent';
import store from 'redux';

describe('Status Component', () => {
  it('render Status Component', () => {
    render(<StatusComponent />);
    const spanText = store.getState().profilePage.status
      ? store.getState().profilePage.status
      : 'click for create your first status';
    expect(screen.getByText(spanText)).toBeInTheDocument();
  });
});
