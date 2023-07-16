import './MyInput.css';
export default function MyInput({type,name,placeholder,value,onChange}){

    return(
        <div className="group">
        <input autoComplete='off' id="myInput" type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
        <label id="myInput-label">{placeholder}</label>
        </div>
    )
}