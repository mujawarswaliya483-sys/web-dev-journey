export default function Header({title,subtitle,message}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{message}</p>
        </div>
    );
}
