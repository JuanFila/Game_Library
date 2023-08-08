export default function TextInput({value, setValue, label, idRef}) {
  return (
    <div>
      <label htmlFor={idRef}>{label}</label>
      <input
        type="text"
        name={idRef}
        id={idRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
