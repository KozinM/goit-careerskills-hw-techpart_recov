import { useNavigate } from "react-router-dom";
import { UsersFilter } from '../UsersFilter/UsersFilter';
import { UsersList } from '../UsersList/UsersList';

const styles = {
  wrapper: {
    fontFamily: 'sansSerif',
    display: 'flex',
    flexDirection: 'column',
    width: '300',
    marginLeft: '50',
  },
  btn: {
    display: 'block',
    margin: '20px auto',
    backgroundColor: '#471ca9',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export const Tweets = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  
  }
  return (
    <div className={styles.wrapper}>
      <h1>User/Tweets</h1>
      <button color="primary" className={styles.btn}
            onClick={routeChange}
              >
              Back
            </button>
      <UsersFilter />
      <UsersList />
    </div>
  );
};
