import { FaRegUser } from "react-icons/fa";
const data = [
  {
    id: "1",
    name: "Fatma, Boumerdes",
    avatar: null,
    feedback:
      "اليوم 60 ليلة من استعمالي لنابوفا , خليني نكون صريحة طولت باه والفت بيها لكن غير توالفها مابدلوهاش ,أكثر حاجا عجبتني القماش لي مخدومة بيها تاع صيف يعطيك واحد الاحساس تاع البرود في الراسو الرقبة ننصحكم بيها لبنات",
  },
  {
    id: "2",
    name: "Rachid, Tizi Ouzou",
    avatar: null,
    feedback:
      "j'en ai commandé 2 avec 20% de réduction et ils ont été livrés en 48h L'oreiller le plus confortable de tous les temps",
  },
  {
    id: "3",
    name: "Hanan, Alger",
    avatar: null,
    feedback: "Très confortable avec bonus de réduction des allergies",
  },
  {
    id: "4",
    name: "Melina, Bedjaia",
    avatar: null,
    feedback:
      "J'adore ! dima noudh sbah b les douleurs au cou et aux épaules. J'utilise mon oreiller depuis quelques semaines maintenant et je n'ai plus de douleurs ! Le meilleur oreiller que j'ai eu !",
  },
  {
    id: "5",
    name: "Farid, Batna",
    avatar: null,
    feedback:
      "Il garde ma tête plus fraîche tt la nuit et me fournit le soutien parfait",
  },
];
export default function Feedback() {
  return (
    <section className="flex flex-col w-full py-3">
      <h2 className="text-2xl text text-right mb-8">
        ماذا قال زبائننا عن منتجاتنا؟
      </h2>
      <div className="grid grid-cols-1 gap-8">
        {data.map(({ id, name, feedback, avatar }, index) => (
          <>
            <div className="flex justify-end w-full space-x-8">
              <div className="flex flex-col items-end text-right">
                <strong className="text text-lg mb-2">{name}</strong>
                <p className="text-light">{feedback}</p>
              </div>
              <span>
                {avatar ? (
                  <img
                    src={avatar}
                    alt={name}
                    className="object-cover w-16 h-16 rounded-full"
                  />
                ) : (
                  <div className="p-2 rounded-full dark:bg-btn-light bg-btn-dark w-14 h-14 flex items-center justify-center">
                    <FaRegUser size={22} className="text-white" />
                  </div>
                )}
              </span>
            </div>
            {index !== data.length - 1 && <hr className="opacity-30" />}
          </>
        ))}
      </div>
    </section>
  );
}
