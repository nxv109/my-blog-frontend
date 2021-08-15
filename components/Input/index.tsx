import * as S from './styles';

type Props = {
  type?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  type = 'text',
  value = '',
  disabled = false,
  readOnly = false,
  placeholder = '',
  name,
  onChange,
}: Props) {
  if (value)
    return (
      <S.Input
        type={type}
        value={value}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={onChange}
      />
    );

  return (
    <S.Input
      type={type}
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
