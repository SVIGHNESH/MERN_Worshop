import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

function Table({ users, setData, setEditId, setDel_id }) {
    const [p_data, setP_data] = useState({});

    // Send paginated data from Pagination
    const send_data = (data) => {
        setP_data(data);
    };

    // Edit handler: set data and editId in parent
    const edit = (user_id) => {
        const user = users.find((user) => user.id === user_id);
        if (user) {
            setData({ email: user.email, name: user.name });
            setEditId(user.id);
        }
    };

    // Delete handler: call parent delete
    const delet = (id) => {
        setDel_id(id);
    };

    return (
        <div>
            {p_data["users_data"] && (
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {p_data["users_data"].map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>
                                    <button onClick={() => edit(user.id)}>Edit</button>
                                    <button onClick={() => delet(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination users={users} send_data={send_data} />
        </div>
    );
}

export default Table