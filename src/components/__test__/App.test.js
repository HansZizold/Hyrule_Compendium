import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../../App';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom';

function renderWithProviders(
  ui,
  {
    storetest = store,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) { // eslint-disable-line
    return <Provider store={storetest}>{children}</Provider>;
  }
  return { storetest, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

test('At first load "Choose a Category" should be present', async () => {
  renderWithProviders(<App />);
  expect(screen.getByText('Choose a Category')).toBeInTheDocument();
});

describe(' App Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
