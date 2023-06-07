import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { selectUsers, selectFilteredUsers } from 'redux/selectors';

import { UserCard } from './UserCard/UserCard';
import styles from './UsersList.module.css';

export const UsersList = () => {
  const dispatch = useDispatch();
  const [visibleUsersCount, setVisibleUsersCount] = useState(3);

  const { isLoading, error, fetchedData } = useSelector(selectUsers);
  const getVisibleUsers = useSelector(selectFilteredUsers);

  useEffect(() => {
    if (!fetchedData) {
      dispatch(fetchUsers());
    }
  }, [dispatch, fetchedData]);

  const handleLoadMore = () => {
    setVisibleUsersCount(prevCount => prevCount + 3);
  };

  const visibleUsers = getVisibleUsers.slice(0, visibleUsersCount);

  return (
    <>
    <div className={styles.userList}>
      {isLoading && <p>Loading users...</p>}
      {error && (
        <p>
          <strong>We've got this error: </strong>
          {error}
        </p>
      )}
      {visibleUsers.length > 0 &&
        visibleUsers.map(user => (
          <UserCard
            key={user.id}
            id={user.id}
            tweets={user.tweets}
            followers={user.followers}
            avatar={user.avatar}
            status={user.status}
          />
        ))}
      
    </div>
    <div>
    {getVisibleUsers.length > visibleUsersCount && (
      <button className={styles.loadMoreButton} onClick={handleLoadMore}>Load more</button>
    )}
    </div>
    </>
  );
};
