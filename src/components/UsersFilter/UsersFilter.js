import { useSelector, useDispatch} from 'react-redux';
import { getUsersFilter } from 'redux/selectors';
import { setUsersFilter } from 'redux/filterSlice';
import { usersFilters } from 'redux/constants';
import styles from './UsersFilter.module.css';


export const UsersFilter = () => {

  const dispatch = useDispatch();

let filter = useSelector(getUsersFilter);

  const handleSelectChange = event => {
    switch (event.target.selectedIndex) {
      case 0:
        filter = usersFilters.all;
        break;
      case 1:
        filter = usersFilters.follow;
        break;
      case 2:
        filter = usersFilters.followings;
        break;
        default:
          throw new Error("Filter value is out of range!!");
    }
    dispatch(setUsersFilter(filter));
  }


  return (
    <div>
      <select className={styles.filterSelect} id="users" onChange={handleSelectChange}>
        <option
          selected={filter === usersFilters.all}
          value="all" 
        >
          All
        </option>
        <option
        selected={filter === usersFilters.follow}
          value="follow"
        >
          Follow
        </option>
        <option
        selected={filter === usersFilters.followings}
          value="following"
        >
          Following
        </option>
      </select>
    </div>
  );
};
