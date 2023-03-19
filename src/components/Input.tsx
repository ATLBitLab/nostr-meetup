const Input = ({
  label,
  name,
  placeholder,
  register,
}: {
  label: string;
  name: string;
  placeholder?: string;
  register: Function;
}) => {
  return (
    <div>
      <p>{label}</p>
      <input
        type="text"
        autoComplete="off"
        placeholder={placeholder || undefined}
        className={`focus:shadow-outline w-full min-w-[20ch] resize-none appearance-none rounded border border-gray-500 bg-stone-700 py-2 px-3 leading-tight text-white shadow placeholder:italic focus:border-primary focus:bg-slate-900 focus:outline-none`}
        {...register(name)}
      />
    </div>
  );
};

export default Input;
