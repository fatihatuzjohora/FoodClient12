import { useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const SocialLogin = () => {
  const { signInWithGoogle } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate=useNavigate()


  const handelGogleSignIn = () => {
    signInWithGoogle().then((result) => {
      // console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post('/users',userInfo)
      .then(res=>{
       // console.log(res.data);
        navigate('/')
      })
    });
  };

  return (
    <div className="p-4">
      <div className="divider"></div>

      <div>
        <button onClick={handelGogleSignIn} className="btn">
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
