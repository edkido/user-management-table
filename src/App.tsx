import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import UserTable from './components/UserTable';
import store from './store';
import { ToggleTheme } from './components/ToggleTheme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="table">
        <ToggleTheme />
        <h1 className='table__title'>User Management Table</h1>
        <UserTable />
      </div>
    </Provider>
  );
};

export default App;

