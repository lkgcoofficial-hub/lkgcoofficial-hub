'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string;
  iconName?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
  showCompanyName?: boolean;
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/LKG_Co_Logo-1777466274773.png',
  iconName = 'SparklesIcon',
  size = 80,
  className = '',
  onClick,
  showCompanyName = true,
}: AppLogoProps) {
  const containerClassName = useMemo(() => {
    const classes = [
      'flex',
      'items-center',
      'shrink-0',
    ];

    if (onClick) {
      classes.push(
        'cursor-pointer',
        'transition-opacity',
        'duration-200',
        'hover:opacity-90'
      );
    }

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div className={containerClassName} onClick={onClick}>
      {/* LKG Logo Mark */}
      {src ? (
        <AppImage
          src={src}
          alt="LKG & Company"
          width={size}
          height={size}
          className="h-16 w-16 shrink-0 object-contain sm:h-[68px] sm:w-[68px]"
          priority
          unoptimized={src.endsWith('.svg')}
        />
      ) : (
        <AppIcon
          name={iconName}
          size={size}
          className="h-16 w-16 shrink-0 sm:h-[68px] sm:w-[68px]"
        />
      )}

      {/* LKG & Company */}
      {showCompanyName && (
        <span className="ml-2.5 whitespace-nowrap text-[20px] font-semibold tracking-[-0.035em] sm:text-[21px]">
          <span className="text-[#29253A]">LKG</span>
          <span className="text-[#D4AF37]"> &amp; </span>
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#8E7CC3] to-[#D4AF37] bg-clip-text text-transparent">
            Company
          </span>
        </span>
      )}
    </div>
  );
});

export default AppLogo;
