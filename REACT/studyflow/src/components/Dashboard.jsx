import StatCard from "./StatCard";
export default function Dashboard({heading,paragraph,tasks}){
    const totalTasks = tasks.length;

const completedTasks = tasks.filter(
    (task) => task.completed
).length;
const pendingTasks = totalTasks - completedTasks;
    return(
        <>
        <h1>{heading}</h1>
        <p>{paragraph}</p>

        
      <StatCard
      title="Today's Tasks"
      value={totalTasks}
      />
      <br></br>
      <StatCard
      title="Completed"
      value={completedTasks}
      />
      <br></br>
      <StatCard
      title="Pending"
      value={pendingTasks}
      />
      <StatCard
      title="Study Time"
      value="45min"
      />
        </>
    );
}