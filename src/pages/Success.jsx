import { Link } from "react-router-dom";
import successImg from "../assets/success.svg";
import { useDataContext } from "../utils/data.context";
import { ROUTES } from "../utils/routes";
import Error from "./error";

function Success() {
  const { order } = useDataContext();
  return order?.permission !== ROUTES.SUCCESS ? (
    <Error />
  ) : (
    <section className="max-w-screen-sm mx-auto pt-10">
      <div className="flex flex-col items-center justify-center">
        <img
          src={successImg}
          alt="success img"
          className="object-cover max-w-[280px] mb-8 h-auto"
        />
        {/* <strong className="max-w-[260px] mx-auto text-lg text-purple-500 opacity-70">
          شكرا لكم لتعاملكم معنا 💜
        </strong> */}
        <h1 className="text-4xl text font-bold mb-2">لقد تم تأكيد طلبيتكم</h1>
        <p className="max-w-[260px] mx-auto mb-8 text-light">
          سيتم توصيل طلبيتك في أقربب وقت سعيدون بالتعامل معك 💜
        </p>
        <Link to={ROUTES.HOME}>
          <button className="btn">العودة للرئيسية</button>
        </Link>
      </div>
    </section>
  );
}

export default Success;
