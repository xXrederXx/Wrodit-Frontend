
export default function Button({ children, secondary, danger, onClick, ...props }) {

    return (
        <button onClick={onClick} {...props}>
            {children}
        </button>
    )
}
