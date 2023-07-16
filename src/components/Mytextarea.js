import './Mytextarea.css';
export default function mytextarea({type,name,placeholder,value,onChange}){

    return(
        <div className="group">
        <textarea id="myTextArea" type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} data-gramm="false"/>
        <label id="myTextArea-label">{placeholder}</label>
        </div>
    )
}