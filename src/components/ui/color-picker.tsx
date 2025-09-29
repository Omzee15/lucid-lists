import React from 'react';
import { COLOR_OPTIONS, COLORS } from '@/types';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  onChange,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {COLOR_OPTIONS.map((color) => (
        <button
          key={color.value}
          type="button"
          onClick={() => onChange(color.value)}
          className={`
            ${sizeClasses[size]} rounded-full border-2 transition-all duration-200 hover:scale-110
            ${value === color.value 
              ? 'border-gray-900 shadow-lg ring-2 ring-gray-300' 
              : 'border-gray-300 hover:border-gray-400'
            }
          `}
          style={{ backgroundColor: color.value }}
          title={color.name}
          aria-label={`Select ${color.name} color`}
        >
          {value === color.value && (
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <div className={`
                w-2 h-2 rounded-full
                ${color.value === COLORS.WHITE ? 'bg-gray-800' : 'bg-white'}
              `} />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

interface ColorIndicatorProps {
  color: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ColorIndicator({ color, size = 'md', className }: ColorIndicatorProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4', 
    lg: 'w-6 h-6'
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full border-2 border-white shadow-sm ${className || ''}`}
      style={{ backgroundColor: color }}
      aria-label={`Color: ${color}`}
    />
  );
}