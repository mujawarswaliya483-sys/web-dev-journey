import StatCard from "./StatCard";
export default function Dashboard({heading,paragraph}){
    return(
        <>
        <h1>{heading}</h1>
        <p>{paragraph}</p>

        
      <StatCard
      title="Today's Tasks"
      value="5"
      />
      <br></br>
      <StatCard
      title="Completed"
      value="2"
      />
      <br></br>
      <StatCard
      title="Study Time"
      value="45min"
      />
        </>
    );
}