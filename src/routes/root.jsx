import {
  faCircleCheck,
  faCircleXmark,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faClockRotateLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dropTask } from "../slices/todoSlice";
import { AnimatePresence, motion } from "framer-motion";
import { addHistoryTask } from "../slices/historySlice";

export default function Root() {
  const tasks = useSelector((state) => state.todo.tasks);
  const historyTasks = useSelector((state) => state.history.tasks);
  const dispatch = useDispatch();

  function updateTask(task, status) {
    dispatch(addHistoryTask({ text: task.text, status: status }));
    dispatch(dropTask(task.id));
  }

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 p-5 gap-5 h-screen grid-rows-3 text-[var(--text1)] w-full max-w-screen-md">
        {/* <div className="bg-[var(--color2)] col-span-2 row-span-2 rounded-lg p-3">
        <div className="text-2xl font-bold">Grades</div>
      </div> */}
        <div className="bg-[var(--color2)] col-span-2 row-span-2 rounded-lg p-3">
          <div className="text-2xl font-bold mb-2 flex gap-2">
            <div>Tasks</div>
            <div className="flex-1"></div>
            <Link
              to={"/todo/history"}
              className="rounded-md text-base p-1 px-3 cursor-pointer flex items-center gap-1 bg-[var(--color1)]"
            >
              <FontAwesomeIcon icon={faClockRotateLeft} />
            </Link>
            <Link
              to={"/todo/add"}
              className="rounded-md text-base p-1 px-3 cursor-pointer flex items-center gap-1 bg-[var(--color1)]"
            >
              <span>Add</span>
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
          <div className="flex overflow-y-auto overflow-x-hidden flex-col gap-2">
            <AnimatePresence>
              {tasks.map((task) => (
                <motion.div
                  exit={{ opacity: 0 }}
                  key={task.id}
                  className="bg-[var(--color1)] rounded-md font-bold"
                >
                  <div className="flex gap-2 px-3 items-center">
                    <Link
                      to={"/todo/tasks/" + task.id}
                      className="flex-1 h-full py-2"
                    >
                      {task.text}
                    </Link>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-green-500 h-6 w-4 text-center cursor-pointer"
                      onClick={() => updateTask(task, 1)}
                    />
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="text-red-500 h-6 w-4 text-center cursor-pointer"
                      onClick={() => updateTask(task, 2)}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* <div className="bg-[var(--color2)] col-span-2 rounded-lg">
        <div>Grades Graph</div>
      </div> */}
        <div className="flex bg-[var(--color2)] rounded-lg gap-5 flex-col items-center text-6xl justify-center font-bold">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="text-7xl text-red-600"
          />
          <div>{tasks.length}</div>
        </div>
        <div className="flex bg-[var(--color2)] gap-5 flex-col items-center text-6xl justify-center font-bold rounded-lg">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-7xl text-green-600"
          />
          <div>{historyTasks.filter((t) => t.status == 1).length}</div>
        </div>
      </div>
    </div>
  );
}
