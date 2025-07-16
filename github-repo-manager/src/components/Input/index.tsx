interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: InputProps) => {
  return (
    <div style={{ border: '1px solid #FAFAFA' }} className="rounded-full h-20 w-80 m-20 bg-gray-800 flex items-center justify-center text-white ">
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search for a repository"
      />
    </div>
  )
}


export default Input;
