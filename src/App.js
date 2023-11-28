import { useState } from "react";
import SideMenu from "./components/SideMenu/SideMenu";
import SignInForm from "./components/LogInForm/SignInForm";
import Users from "./components/UdersWindow/Users";
import Posts from "./components/PostsWindow/Posts";
import RegisterForm from "./components/UdersWindow/RegisterForm";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleMenuItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <div className="text-xl text-white bg-[#141414] w-screen h-screen font-body">
      {/* <SignInForm onSignIn={handleSignIn} />

      <div className="flex">
        <SideMenu onItemClick={handleMenuItemClick} />
        {selectedItem === "register" && <RegisterForm />}
        {selectedItem === "users" && <Users />}
        {selectedItem === "posts" && <Posts />}
      </div>
    </div> */}

      <div>
        {isSignedIn ? (
          <div className="flex">
            <SideMenu onItemClick={handleMenuItemClick} />
            {selectedItem === "register" && <RegisterForm />}
            {selectedItem === "users" && <Users />}
            {selectedItem === "posts" && <Posts />}
          </div>
        ) : (
          <SignInForm onSignIn={handleSignIn} />
        )}
      </div>
    </div>
  );
}

export default App;
