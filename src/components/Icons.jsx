export const Arrow = ({ className, handle }) => {
  return (
    <button className={`arrow ${className}`} onClick={handle}>
      <svg
        width="90"
        height="63"
        viewBox="0 0 47 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.5946 2C63.0568 20.3955 36.5243 22.3528 21.3317 31.0214M2 17.0107H43.0109"
          stroke="#ffffffc7"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export const CloseIcon = ({ handle }) => {
  return (
    <button className="close" onClick={handle}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.78182 3C16.1266 15.0434 7.14364 16.3248 2 22M17.1967 22C7.27983 9.95663 13.868 7.6752 18 2"
          stroke="#ffffffc7"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span>Go Back</span>
    </button>
  );
};
