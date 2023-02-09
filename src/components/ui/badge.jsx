export default function Badge({ text }) {
  return (
    <>
      {text === "" ? (
        <></>
      ) : (
        <span
          className={`dark:text-badge-dark w-fit text-dark dark:bg-badge-light bg-badge-dark/60 px-2 py-0.5 rounded-md text-sm`}>
          {text}
        </span>
      )}
    </>
  );
}
