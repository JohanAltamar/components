import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variation?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
}

const Button: React.FC<ButtonProps> = ({ variation = "light", ...rest}) => {
  let className: string  = rest.className || '';
  className = `${className} btn btn-${variation}`; 

  return (
    <button className={className} {...rest} />
  );
};

export default Button;
