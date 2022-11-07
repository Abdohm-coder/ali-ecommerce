import { BiChevronsDown } from "react-icons/bi";
export default function ReadMore() {
  return (
    <div className=" w-full flex flex-col items-center justify-center mb-3">
      <strong className="text-xs text-light text-center w-full">
        إقرأ المزيد
      </strong>
      <div className="moveUpDownAnimation text-light">
        <BiChevronsDown size={30} />
      </div>
    </div>
  );
}
