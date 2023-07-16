import './Reference.css';
export default function Reference({name,refposition,reforganization,phone,email}){
    return(
        <div className="reference-container">
        <p className="reference-name">{name}</p>
        <p className="reference-company"> {refposition}, {reforganization}</p>
        <p className="reference-phone"> {phone?'Phone:':''} <span>{phone}</span> </p>
        <p className="reference-email"> {email?'Email:':''} <span>{email}</span> </p>
      
        </div>
    );
}