import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import error from "../assets/error.svg";

export default function Error() {
  return (
    <section className="mt-8 layout">
      <img src={error} alt="error" />
      <h1 className="text mb-2 text-center text-xl">
        أوبس، حدثت مشكلة ما، رجاء عودو الى الرئيسية
      </h1>
      <Link to={ROUTES.HOME}>
        <button className="btn">العودة إلى الرئيسية</button>
      </Link>
    </section>
  );
}
