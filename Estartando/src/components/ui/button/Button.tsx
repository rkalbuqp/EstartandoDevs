export interface ButtonProps {
    label: string
    hasIcon?: boolean
    ariaLabel?: string
    disabled?: boolean
    className?: string
    onClick?: () => void
    
}
const Button = ({ label, onClick, ariaLabel, disabled, className }: ButtonProps) => {

    return (
        <>
        <button onClick={onClick} aria-label={ariaLabel} disabled={disabled} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>
            {label}
        </button>
        </>
    )
}


export default Button