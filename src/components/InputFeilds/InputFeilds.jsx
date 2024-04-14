/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react"



export const InputFeild = ({ value, onChange, onClick , className, disabled, label, placeholder, min, name}) => {
    return <div className={className}>
        <Input variant="static"
            label={label}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onClick={onClick}
            placeholder={placeholder}
            min={min ?min : 0}
            name={name}
        />
    </div>
}