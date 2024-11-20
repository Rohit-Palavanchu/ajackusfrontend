function UserItem({ user, onDelete, onEdit }) {
    return (
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{user.firstName} {user.lastName}</h5>
            <p className="card-text"><strong>Email:</strong> {user.email}</p>
            <p className="card-text"><strong>Department:</strong> {user.department}</p>
            <button className="btn btn-primary me-2" onClick={() => onEdit(user)}>Edit</button>
            <button className="btn btn-danger" onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default UserItem;
  