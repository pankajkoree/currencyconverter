export const DropDown = ({
  id,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm xl:text-xl"
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      
    </select>
  );
};
