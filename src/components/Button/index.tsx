import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variation?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variation = "light", ...props}) => {
  let {className, ...rest} = props;
  
  className = className
    ? `${className} btn btn-${variation}`
    : `btn btn-${variation}`; 

  return (
    <button className={className} {...rest} />
  );
};

export default Button;
