import * as S from "./styles";

interface InputProps {
  required: boolean;
  label: string;
  placeholder?: string;
  id: string;
  type: "text" | "tel" | "email" | "password";
}

function Input({ id, label, required, type, placeholder }: InputProps) {
  return (
    <S.FormComposition>
      <S.Label htmlFor={id}>
        {required && <span>*</span>}
        {label}
      </S.Label>
      <input
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
      />
    </S.FormComposition>
  );
}

export default Input;
