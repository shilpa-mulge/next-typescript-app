import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

const cards: Card[] = [
  {
    title: "LinkedIn",
    description: {
      title: "LinkedIn profile",
      name: "Shilpa mulge",
    },
    cta: "https://www.linkedin.com/in/shilpa-mulge-5b271a11a/",
    thumbnail: "/linkedin.png",
  },
  {
    title: "GitHub",
    description: {
      title: "Github Profile",
      name: "Shilpa mulge",
    },
    cta: "https://github.com/shilpa-mulge",
    thumbnail: "/github.png",
  },
  {
    title: "LeetCode",
    description: {
      title: "LeetCode Profile",
      name: "Shilpa mulge",
    },
    cta: "https://leetcode.com/mulgeshilpa/",
    thumbnail: "/leetcode.png",
  },
];

const CardPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  //storing selected card in state variable
  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  return (
    <div className="grid grid-rows-2 gap-5 w-9/12 min-[320px]:h-fit ">
      <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1  ">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card)}
            className="bg-gray-600 rounded-lg shadow-md p-4 m-4 flex flex-col"
          >
            <h2 className="text-xl text-white font-bold">{card.title}</h2>

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
  );
};

export default CardPage;
