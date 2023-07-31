"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Profile from "./Components/user/page";
import CardPage from "./Components/Card/page";
export const Login: React.FC = () => {
  //get session from nextAuth
  const { data: session } = useSession();

  //useSession uses React Context
  //if the user exists show a sign Out button and their information
  if (session) {
    return (
      <>
        <div className="h-screen min-[320px]:h-fit w-fit">
          <div className="bg-gray-800 py-4 px-6 flex justify-between items-center ">
            <div className="text-white font-bold text-xl">WELCOME</div>
            <div>
              <span className="text-white mr-4">{session?.user?.name}</span>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between min-[320px]:h-fit ">
            <CardPage />
            <Profile user={session?.user} />
          </div>
        </div>
      </>
    );
  } else {
    //show a sign in button
    return (
      <>
        <div className="flex items-center justify-center">
          <div className="p-8 border rounded-md shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Sign in via Google</h2>
            <button
              type="button"
              onClick={() => signIn("google")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md "
            >
              SignIn
            </button>
          </div>
        </div>
      </>
    );
  }
};
