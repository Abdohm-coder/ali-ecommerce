const Description = ({ title, details, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {title && (
        <h1 className="text-xl font-black text-pink-500 mb-2">{title}</h1>
      )}
      {details && <p className="text-base text-dark">{details}</p>}
    </div>
  );
};

export default Description;
