import React from 'react';
import * as S from './styles';

type Props = {
  value?: string;
  placeholder: string;
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = React.forwardRef(
  (
    {
      value = '',
      placeholder = '',
      name,
      disabled = false,
      readOnly = false,
      onChange,
    }: Props,
    ref: any,
  ) => {
    if (value) {
      return (
        <S.Textarea
          rows={6}
          name={name}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={onChange}
        />
      );
    }
    return (
      <S.Textarea
        rows={6}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
      />
    );
  },
);

export default Textarea;
