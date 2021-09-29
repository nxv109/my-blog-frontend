import React from 'react';
import * as S from './styles';

type Props = {
  type?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  name: string;
  size?: string;
  style?: Record<string, any>;
  isControlled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.ChangeEvent<any>) => void;
};

const Input = React.forwardRef(
  (
    {
      type = 'text',
      value = '',
      disabled = false,
      readOnly = false,
      isControlled = false,
      placeholder = '',
      size = 'normal',
      name,
      style,
      onChange,
      onKeyDown,
    }: Props,
    ref: any,
  ) => {
    if (isControlled) {
      return (
        <S.Input
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          $size={size}
          ref={ref}
          style={style}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      );
    }

    return (
      <S.Input
        type={type}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        $size={size}
        ref={ref}
        style={style}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    );
  },
);

export default Input;
