import React from "react";

interface Props {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export const UserItem: React.FC<Props> = ({ name, username, email, phone }) => (
  <tr className="user-table__body-row">
    <td className="user-table__body-cell">{name}</td>
    <td className="user-table__body-cell">{username}</td>
    <td className="user-table__body-cell">{email}</td>
    <td className="user-table__body-cell">{phone}</td>
  </tr>
)