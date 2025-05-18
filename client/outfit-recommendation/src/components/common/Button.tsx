interface ButtonProps {
label : string;
onClick?: ()=>void;
variant?: 'outlined' | 'primary' 
}
const Button:React.FC<ButtonProps> = ({label, onClick, variant='primary'}) =>{
     const baseStyles = 'px-4 py-2 rounded-lg transition font-medium text-sm sm:text-base';
  const primary = 'bg-pink-600 text-white rounded-lg hover:bg-pink-700';
  const outlined = 'bg-transparent text-white border border-white hover:bg-white hover:text-black';
return (
 <button
      onClick={onClick}
      className={`${baseStyles} ${variant === 'outlined' ? outlined : primary}`}
    >
      {label}
    </button>
)
}
export default Button