// Select.tsx
import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ onChange, ...rest }) => {
  return <select onChange={onChange} {...rest} />;
};

export default Select;
