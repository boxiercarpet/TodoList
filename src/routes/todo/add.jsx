import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../slices/todoSlice";
import { redirect, useNavigate } from "react-router-dom";

export default function TodoAdd() {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(data) {
    dispatch(addTask(data.content));
    navigate("/");
  }

  return (
    <div className="flex justify-center p-5">
      <div className="bg-[var(--color2)] col-span-2 row-span-2 rounded-lg p-3 gap-3 flex flex-col items-center">
        <div className="text-2xl font-bold">Add Task</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <input
            className="w-[400px] p-1 px-2 rounded-md bg-[var(--color1)] outline-none font-bold"
            placeholder="Content"
            autoFocus
            {...register("content", { required: true })}
          />
          <input
            type="submit"
            value="Add"
            className="p-1 px-2 bg-[var(--color3)] rounded-md font-bold"
          />
        </form>
      </div>
    </div>
  );
}
