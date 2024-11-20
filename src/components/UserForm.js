import { useState, useEffect } from 'react';

function UserForm({ user, onSave }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ firstName: '', lastName: '', email: '', department: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="form-control"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="form-control"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="department"
          placeholder="Department"
          className="form-control"
          value={formData.department}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success">
        {user ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
}

export default UserForm;
