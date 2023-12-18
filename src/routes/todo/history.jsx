import { faCircleCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export default function TodoHistory() {
  const history = useSelector((state) => state.history.tasks);

  function transStatus(status) {
    switch (status) {
      case 1:
        return <div className="text-green-500">Done</div>;
      case 2:
        return <div className="text-red-500">Deleted</div>;
    }
  }

  return (
    <div className="w-full flex justify-center p-3 h-screen">
      <div className="bg-[var(--color2)] rounded-lg p-3 gap-3 flex flex-col w-full max-w-screen-md">
        <div className="text-2xl font-bold mb-2 flex gap-2">
          <div>History</div>
        </div>
        <div className="flex overflow-y-auto overflow-x-hidden flex-col gap-2 flex-1 pr-[5px] mr-[-5px]">
          {history.map((task) => (
            <div
              key={task.id}
              className="bg-[var(--color1)] p-2 px-3 rounded-md font-bold flex gap-2"
            >
              <div className="flex-1">{task.text}</div>
              <div>{new Date(task.date).toLocaleString()}</div>
              {transStatus(task.status)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
