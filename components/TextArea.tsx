type InputTextProps = {
    value: string,
    placeholder?: string,
    label: string,
    onChange: (e:any) => void,
    rows?: number,
    cols?: number
}

export default function InputText(props:InputTextProps){
    return(
        <div className="flex flex-col gap-2">  
            <label>{props.label}</label>
            <textarea
                value={props.value}
                placeholder={props.placeholder}
                className="border border-gray-300 p-2 rounded-md"
                onChange={props.onChange}
                rows={props.rows || 5}
                cols={props.cols || 20}
            />
        </div>
    )
}