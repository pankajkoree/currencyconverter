export const Dropdown = ({ id, className, value, onChange, options = [] }) => {
  return (
    <select id={id} className={className} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
