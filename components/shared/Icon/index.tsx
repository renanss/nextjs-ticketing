interface IconProps {
  href: string;
  size: string | number;
  text?: string;
}

export const Icon = ({ href, size = 100, text }: IconProps) => {
  const sizeValue = typeof size === 'string' ? size : `${size}`;
  
  return (
    <svg className={href} width={sizeValue} height={sizeValue}>
      <use href={`#${href}`} />
      {text && (
        <text x="50" y="65" fontSize="2.7rem" textAnchor="middle" fill="#fff">
          {text}
        </text>
      )}
    </svg>
  );
}; 