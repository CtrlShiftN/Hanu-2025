import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';


export default function App() {
  return  <Provider store={store}>
            <AppNavigation />
          </Provider>
}
