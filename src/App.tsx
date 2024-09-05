import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import UserTable from './components/UserTable';
import store from './store';
import { ToggleTheme } from './components/ToggleTheme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ToggleTheme />
        <h1 className='App__title'>User Management Table</h1>
        <UserTable />
      </div>
    </Provider>
  );
};

export default App;

