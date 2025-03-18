'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  isExternal?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & ButtonProps
>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    onClick,
    disabled = false,
    children,
    ...props 
  }) => {
    // Matrix effect on hover
    const [isHovered, setIsHovered] = useState(false);
    
    // Generate random matrix code on hover
    useEffect(() => {
      if (isHovered) {
        const matrixChars = '01';
        const chars = Array.from(
          { length: 20 }, 
          () => matrixChars[Math.floor(Math.random() * matrixChars.length)]
        );
        
        const interval = setInterval(() => {
          // Update matrix characters
        }, 100);
        
        return () => clearInterval(interval);
      }
    }, [isHovered]);

    // Base styles
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900';
    
    // Size styles
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };
    
    // Variant styles
    const variantStyles = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
      outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-gray-800',
      ghost: 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-800'
    };
    
    // Width styles
    const widthStyles = props.fullWidth ? 'w-full' : '';
    
    // Combine all styles
    const buttonStyles = `${baseStyles} ${sizeStyles[size as keyof typeof sizeStyles]} ${variantStyles[variant as keyof typeof variantStyles]} ${widthStyles} ${className || ''}`;
    
    // Animation properties
    const motionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 }
    };

    // If an href is provided, render as a link
    if (props.href) {
      if (props.isExternal) {
        return (
          <motion.a
            href={props.href}
            className={buttonStyles}
            target="_blank"
            rel="noopener noreferrer"
            {...motionProps}
          >
            {children}
          </motion.a>
        );
      }
      
      return (
        <Link href={props.href} passHref legacyBehavior>
          <motion.a className={buttonStyles} {...motionProps}>
            {children}
          </motion.a>
        </Link>
      );
    }
    
    // Otherwise, render as a button
    return (
      <motion.button 
        className={buttonStyles} 
        onClick={onClick}
        disabled={disabled}
        {...motionProps} 
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 