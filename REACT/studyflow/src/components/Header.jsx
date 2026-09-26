export default function Header({title,subtitle,message}){
    return(
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{message}</p>
        </>
    );
}
