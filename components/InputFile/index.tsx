import { useState } from 'react';

import * as S from './styles';

type Props = {
  name: string;
  type?: string;
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange: (file: Blob | string) => void;
};

function InputFile({
  type = 'file',
  disabled = false,
  readOnly = false,
  name,
  label = 'Select a file',
  onChange,
}: Props) {
  const [fileName, setFileName] = useState(label);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileName(e.target.files[0].name);
      onChange(e.target.files[0]);
    }
  };

  return (
    <S.InputWrapper>
      <S.Label>
        {fileName}
        <S.Input
          type={type}
          name={name}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
        />
      </S.Label>
    </S.InputWrapper>
  );
}

export default InputFile;
