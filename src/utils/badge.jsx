export default function Badge({ text, color = "badge-dark", bg = "badge-light" }) {
  return (
    <span className={`dark:text-${color} text-dark dark:bg-${bg} bg-${color}/60 px-2 py-0.5 rounded-md`}>
      {text}
    </span>
  );
}
