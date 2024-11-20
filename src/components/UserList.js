import { useEffect, useState } from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import UserForm from './UserForm';

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://ajackusbackend.onrender.com/users');
      setUsers(response.data);
    } catch (error) {
      alert('Error fetching users');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ajackusbackend.onrender.com/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      alert('Error deleting user');
    }
  };

  const handleSave = async (user) => {
    try {
      if (user.id) {
        await axios.put(`https://ajackusbackend.onrender.com/${user.id}`, user);
      } else {
        const response = await axios.post('https://ajackusbackend.onrender.com/users', user);
        setUsers([...users, response.data]);
      }
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      alert('Error saving user');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <UserForm user={editingUser} onSave={handleSave} />
      <div className="row">
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onEdit={setEditingUser}
          />
        ))}
      </div>
    </div>
  );
}

export default UserList;
