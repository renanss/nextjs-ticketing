const IconSelected = ({ size, number }: { size: number; number: number }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <g fill="var(--accent, #fd6d8e)">
      <circle cx="50" cy="50" r="50"></circle>
      <text x="50" y="65" fontSize="2.7rem" textAnchor="middle" fill="#fff">
        {number}
      </text>
    </g>
  </svg>
);

export default IconSelected;
