import React, { useEffect, useState } from 'react';
import '../styles/UserTable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setFilter } from '../store/usersSlice';
import { RootState, AppDispatch } from '../store';
import { Loader } from './Loader';
import { FilterParameter } from '../types/filterParameter';
import { UserItem } from './UserItem';

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, loading, error } = useSelector((state: RootState) => state.users);

  const [filterText, setFilterText] = useState('');
  const [filterParameter, setFilterParameter] = useState<FilterParameter>('name');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
    dispatch(setFilter({ parameter: filterParameter, value: e.target.value }));
  };

  const handleParameterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedParameter = e.target.value as FilterParameter;
    setFilterParameter(selectedParameter);
    dispatch(setFilter({ parameter: selectedParameter, value: filterText }));
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}

      <div className="user-filter">
        <select
          className="user-filter__select"
          value={filterParameter}
          onChange={handleParameterChange}
        >
          <option value="name">Name</option>
          <option value="username">Username</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>

        <input
          className="user-filter__input"
          type="text"
          placeholder={`Filter by ${filterParameter}`}
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>

      <table className="user-table">
        <thead className="user-table__header">
          <tr>
            <th className="user-table__header-cell">Name</th>
            <th className="user-table__header-cell">Username</th>
            <th className="user-table__header-cell">Email</th>
            <th className="user-table__header-cell">Phone</th>
          </tr>
        </thead>
        <tbody className="user-table__body">
          {filteredUsers.map((user) => (
            <UserItem
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
