import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';
import cx from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isDark?: boolean;
}

export function Button({ isDark = false, isOutlined = false, ...props }: ButtonProps) {
  return (
    <button 
      className={cx(
        'button', 
        {dark: isDark },
        {outlined: isOutlined},
      )} 
      {...props}
    />
  )
}
