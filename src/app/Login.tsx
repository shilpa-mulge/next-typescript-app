"use client";
import { useSession, signIn, signOut } from "next-auth/react";

import { CgProfile } from "react-icons/cg";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
interface description {
  title: string;
  name: string;
}
interface Card {
  title: string;
  description: description;
  cta: string;
  thumbnail: string;
}
export const Login: React.FC = () => {
  //get session from nextAuth
  const { data: session } = useSession();
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  //useSession uses React Context
  //if the user exists show a sign Out button and their information
  //storing selected card in state variable
  const cards: Card[] = [
    {
      title: "LinkedIn",
      description: {
        title: "LinkedIn profile",
        name: `${session?.user?.name}`,
      },
      cta: "",
      thumbnail: "/linkedin.png",
    },
    {
      title: "GitHub",
      description: {
        title: "Github Profile",
        name: `${session?.user?.name}`,
      },
      cta: "",
      thumbnail: "/github.png",
    },
    {
      title: "LeetCode",
      description: {
        title: "LeetCode Profile",
        name: `${session?.user?.name}`,
      },
      cta: "",
      thumbnail: "/leetcode.png",
    },
  ];
  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  if (session) {
    return (
      <>
        <div className="h-screen min-[320px]:h-fit w-full">
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
            {/* cards details*/}

            <div className="grid grid-rows-2 gap-5 w-9/12 min-[320px]:h-fit ">
              <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1  ">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    onClick={() => handleCardClick(card)}
                    className="bg-gray-600 rounded-lg shadow-md p-4 m-4 flex flex-col"
                  >
                    <h2 className="text-xl text-white font-bold">
                      {card.title}
                    </h2>

                    <Image
                      src={card.thumbnail}
                      alt={`Thumbnail for ${card.title}`}
                      width={300}
                      height={100}
                    />

                    <Link href={card.cta}>
                      <button className="bg-green-900 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md  mt-3 ">
                        Learn More
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
              {/*    Selected card will be displayed */}
              <div className="text-center mt-11 border">
                {selectedCard && (
                  <div className="p-4 shadow-lg  mt-14 ">
                    <h2 className="text-5xl ">{selectedCard.title}</h2>
                    <hr />
                    <h1 className=" font-semibold mt-2">
                      {selectedCard.description.name}
                    </h1>
                    <p className="mt-4">{selectedCard.description.title}</p>

                    <Image
                      src={selectedCard.thumbnail}
                      alt={`Thumbnail for ${selectedCard.title}`}
                      width={100}
                      height={100}
                    />
                    <Link href={selectedCard.cta}>
                      <button className="bg-green-900 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md ">
                        Learn More
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/*  userProfile */}
            <div className=" w-1/4 bg-slate-400 p-5 min-[320px]:w-fit ">
              <div className="flex justify-center">
                <CgProfile size={100} center />
              </div>

              <h1 className="text-center mt-5"> {session.user?.name}</h1>
              <hr />
              <h6 className=" font-bold mt-4">Profile:</h6>
              <p>Email: {session.user?.email}</p>
              <p>{`Phone Number:${session.user?.name} phone`}</p>
              <p>{`Adress: ${session.user?.name} adress`}</p>
              <p>{`District:${session.user?.name} district `}</p>
              <p>{`State: ${session.user?.name} state`}</p>
            </div>
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
