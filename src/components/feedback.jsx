import { FaRegUser } from "react-icons/fa";
import { useDataContext } from "../utils/data.context";

export default function Feedback() {
  const { pageInfo } = useDataContext();
  const { title, reviews } = pageInfo?.feedbacks;
  return (
    <section className="flex flex-col w-full py-3">
      <h2 className=" mb-8">{title}</h2>
      <div className="grid grid-cols-1 gap-8">
        {reviews.map(({ id, name, feedback, avatar }, index) => (
          <div key={id}>
            <div  className="flex justify-end w-full">
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
              <div className="flex flex-col items-end text-right mr-4">
                <strong className="text text-lg mb-2 w-full">{name}</strong>
                <p className="text-light">{feedback}</p>
              </div>
            </div>
            {index !== reviews.length - 1 && <hr className="opacity-30" />}
          </div>
        ))}
      </div>
    </section>
  );
}
