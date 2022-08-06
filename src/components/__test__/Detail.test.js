import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ItemDetailed from '../Detail';
import store from '../../redux/configureStore';

describe(' Items Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ItemDetailed />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
