import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./Firebase.config";
import {
  // GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext({});

// import PropTypes from "prop-types";

const auth = getAuth(app);
// import axios from "axios";

//--------------------------------------

const googleProvider = new GoogleAuthProvider();
// const gitHubProvider = new GithubAuthProvider();
//----------------------------

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = UseAxiosPublic();
  //---------------------------------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //----------------------
  const updateUserProfile = (name, photo) => {
    if (user) {
      return updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
    } else {
      // Handle the case when user is null, maybe log an error or return a promise.reject()
      console.error("User is null, unable to update profile");
      return Promise.reject("User is null");
    }
  };
  //--------------------------------

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //----------------------
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //---------------
  // const signInWithGithub = () => {
  //   setLoading(true);
  //   return signInWithPopup(auth, gitHubProvider);
  // };

  //----------------------

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //---------------------------

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser) {
        //get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
        
      } else {
        //do something
        localStorage.removeItem("access-token");
      }
      //  console.log("currenct users", currentUser);
      setLoading(false);

      //token
      // if (currentUser) {
      //   axios
      //     .post("https://wish-kappa.vercel.app/jwt", loggedUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log("token responce", res.data);
      //     });
      // } else {
      //   axios
      //     .post("https://wish-kappa.vercel.app/logout", loggedUser, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res.data);
      //     });
      // }
    });
    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);

  //----------------------------------
  const authInFo = {
    user,
    loading,
    setUser,
    createUser,
    signIn,
    logOut,
    signInWithGoogle,
    // signInWithGithub,
    updateUserProfile,
    auth,
  };

  return (
    <AuthContext.Provider value={authInFo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// AuthProvider.propTypes = {
//   children: PropTypes.node,
// };
