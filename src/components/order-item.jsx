export default function OrderItem({ label, text, discount = false }) {
  return (
    <>
      <div className="grid grid-cols-2 pt-6 pb-4">
        <strong className="text-light text-right">{label}</strong>
        <strong className="text text-left">{text}</strong>
      </div>
      <hr className="opacity-30" />
    </>
  );
}
