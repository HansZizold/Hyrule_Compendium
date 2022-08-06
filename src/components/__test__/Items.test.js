import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Items from '../Items';
import store from '../../redux/configureStore';

describe(' Items Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Items />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
