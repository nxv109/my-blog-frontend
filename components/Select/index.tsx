import * as S from './styles';

type Props = {
  values: Record<string, any>;
  name: string;
  disabled?: boolean;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({
  disabled = false,
  name,
  values,
  defaultValue = '',
  onChange,
}: Props) {
  return (
    <S.Select defaultValue={defaultValue} name={name} disabled={disabled} onChange={onChange}>
      <option value="">Please select one</option>
      {values.map((value: Record<string, any>) => (
        <option key={value._id} value={value._id}>
          {value.name}
        </option>
      ))}
    </S.Select>
  );
}

export default Select;
