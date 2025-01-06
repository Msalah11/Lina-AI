import React from 'react'

type MenuLogoProps = {
  onClick(): void
}

export const MenuLogo = ({ onClick }: MenuLogoProps) => {
  return (
    <svg
      onClick={onClick}
      width="30"
      height="30"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10C20 7.79086 21.7909 6 24 6H86C88.2091 6 90 7.79086 90 10V30C90 32.2091 88.2091 34 86 34H30V86C30 88.2091 28.2091 90 26 90H24C21.7909 90 20 88.2091 20 86V10Z"
        fill="#4f46e5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 34H86C88.2091 34 90 35.7909 90 38V86C90 88.2091 88.2091 90 86 90H30V34Z"
        fill="#f5f5f5"
      />
    </svg>
  )
}
