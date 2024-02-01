import React, { MouseEvent } from 'react';
import classNames from 'classnames';

import './style.css'; // Import your button styles

type ButtonProps = {
  onClick: () => void;
  theme?: 'default' | 'rounded';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  children?:React.ReactNode
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  theme = 'default',
  size = 'medium',
  disabled = false,
  className,
}) => {
  const buttonClasses = classNames(
    'button',
    `theme-${theme}`,
    `size-${size}`,
    { disabled },
    className
  );


  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
