import { faCircleCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifyTask } from "../../slices/todoSlice";

export default function TodoTask() {
  const { handleSubmit, register } = useForm();
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const task = useSelector((state) =>
    state.todo.tasks.find((t) => t.id == params.id)
  );

  function onSubmit(data) {
    dispatch(modifyTask({ id: task.id, text: data.content }));
    navigate("/");
  }

  return (
    <div className="w-full flex justify-center p-3 h-screen">
      <div className="bg-[var(--color2)] rounded-lg p-3 gap-3 flex flex-col w-full max-w-[400px] h-fit">
        <div className="text-2xl font-bold text-center">Task</div>
        {task ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <input
              defaultValue={task.text}
              className="p-1 px-2 rounded-md bg-[var(--color1)] outline-none font-bold"
              placeholder="Content"
              autoFocus
              {...register("content", { required: true })}
            />
            <input
              type="submit"
              value="Modify"
              className="p-1 px-2 bg-[var(--color3)] rounded-md font-bold cursor-pointer"
            />
          </form>
        ) : (
          <div className="text-center text-gray-200 mb-2">Task no found</div>
        )}
        {/* <div className="flex overflow-y-auto overflow-x-hidden flex-col gap-2 flex-1 pr-[5px] mr-[-5px]">
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
        </div> */}
      </div>
    </div>
  );
}
