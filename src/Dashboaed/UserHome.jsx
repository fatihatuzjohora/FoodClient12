import UseAuth from "../Hooks/UseAuth";


const UserHome = () => {
    const { user } = UseAuth();
    return (
        <div>
                  <div>
        <h2>Hi,Welcome</h2>
        {user?.displayName ? user?.displayName : "Back"}
      </div>
        </div>
    );
};

export default UserHome;