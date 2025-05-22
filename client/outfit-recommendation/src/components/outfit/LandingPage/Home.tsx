import { useEffect, useState } from "react";
import Button from "../../common/Button";
// Import Firebase auth functions
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
interface HomeProps {
  setIsAuthenticated: (auth:boolean) => void
}
const Home: React.FC<HomeProps> = ({setIsAuthenticated}) => {
  const [user, setUser] = useState<any>(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google login failed", error);
    }
setIsAuthenticated(true)
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleBrowse = () => {
    if (user) {
      navigate("/outfit");
    } else {
      handleGoogleLogin();
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/online-shopping-concept_23-2151896838.jpg?semt=ais_hybrid&w=740')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Top bar */}
      <div className="flex justify-end p-4 space-x-4 relative z-10">
        {!user ? (
          <>
            <Button label="Login" variant="outlined" onClick={handleGoogleLogin} />
            <Button label="Register" variant="outlined" onClick={handleGoogleLogin} />
          </>
        ) : (
          <>
            <div className="text-white">{user.displayName}</div>
            <Button label="Logout" variant="outlined" onClick={handleLogout} />
          </>
        )}
      </div>

      {/* Center slogan */}
      <div className="flex justify-center items-center flex-grow text-center px-4 relative z-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow">
          Reimagine Fashion With AI!!
        </h1>
      </div>

      {/* Bottom browse button */}
      <div className="flex justify-center p-6 relative z-10">
        <Button label="Browse Outfits" onClick={handleBrowse} variant="primary" />
      </div>
    </div>
  );
};

export default Home;
