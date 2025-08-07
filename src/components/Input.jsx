export const Input = ({ className, id, type, value, onChange }) => {
  return (
    <div>
      <input
        className={className}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
