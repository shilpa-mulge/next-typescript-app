import { DefaultSession } from "next-auth";
import { CgProfile } from "react-icons/cg";

const Profile = ({ user }: { user: DefaultSession["user"] }) => {
  return (
    <div className=" w-1/4 bg-slate-400 p-5 min-[320px]:w-fit ">
      <div className="flex justify-center">
        <CgProfile size={100} center />
      </div>

      <h1 className="text-center mt-5"> {user?.name}</h1>
      <hr />
      <h6 className=" font-bold mt-4">Profile:</h6>
      <p>Email: {user?.email}</p>
      <p>Phone Number:8605592943</p>
      <p>Adress: Gyndore&apos;s House Chitta Wadi</p>
      <p>District: Bidar</p>
      <p>State: karnataka</p>
    </div>
  );
};

export default Profile;
