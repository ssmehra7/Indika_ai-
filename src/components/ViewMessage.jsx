import Chat from "./Chat";
import ProjectView from "./ProjectView";

function ViewMessage({ data }) {
  return (
    <div>

    <div className="-z-10">
    <section className="border-b-2 ">
        <div className="text-xl font-semibold mx-4 my-1 py-2">{data.reciever}</div>
      </section>

      <section className="mx-7 overflow-y-auto max-h-60 ">
        <main className="text-lg mb-2 font-semibold">Projects</main>
        <div className="flex gap-1 flex-col relative">
          {data.ProjectList.map((project,index) => (
            <ProjectView title={project.title} status={project.status} key={index} />
          ))}
        </div>
      </section>

      <div className="mx-7 mt-1">
        <Chat />
      </div>
      <div>
    </div>
    </div>
      

      
      
    </div>
  );
}

export default ViewMessage;



