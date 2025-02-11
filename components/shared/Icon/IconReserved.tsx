const IconReserved = ({ size }: { size: number }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <g fill="#f2f2f2">
      <circle cx="50" cy="50" r="50"></circle>
      <g fill="#000" opacity="0.2">
        <circle cx="50" cy="42" r="15"></circle>
        <circle cx="50" cy="110" r="40"></circle>
      </g>
    </g>
  </svg>
);

export default IconReserved;
