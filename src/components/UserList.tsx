import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {fetchUsers} from "../store/actionCreator/user";
import {useActions} from "../hooks/useActions";

const UserList = () => {
    const {users, error, loading} = useAppSelector(state => state.users)
    const {fetchUsers} = useActions()
    useEffect(() => {
        fetchUsers()

    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;