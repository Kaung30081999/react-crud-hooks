import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Profile Picture</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Gender</th>
                    <th>Date of birth</th>
                    <th>What is your SEAKers Hub URL?</th>
                    <th>Bio</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, username,profilepic, country,state, city, gender, dob, url, bio} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{profilepic}</td>
                                <td>{country}</td>
                                <td>{state}</td>
                                <td>{city}</td>
                                <td>{gender}</td>
                                <td>{dob}</td>
                                <td>{url}</td>
                                <td>{bio}</td>
                                <td>
                                    <button onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default UserTable;