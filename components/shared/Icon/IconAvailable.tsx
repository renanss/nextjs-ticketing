const IconAvailable = ({ size, number }: { size: number; number: number }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <g fill="#2dcff8">
      <circle cx="50" cy="50" r="50"></circle>
			{number < 1 ? (
      <circle cx="50" cy="50" r="4" fill="#fff"></circle>
			) : (
				<text x="50" y="65" fontSize="2.7rem" textAnchor="middle" fill="#fff">
					{number}
				</text>
			)}
    </g>
  </svg>
);

export default IconAvailable;
