import { Link, useLocation } from "react-router-dom";

export default function TabButton() {
  const location = useLocation();

  return (
    <div className="flex w-full justify-around">
      {router.map((route) => (
        <Link key={route.to} to={route.to}>
          <button
            className={
              "px-3 py-1 " +
              (location.pathname === route.to && "!bg-gray-400 text-white")
            }
          >
            {route.text}
          </button>
        </Link>
      ))}
    </div>
  );
}

const router: { to: string; text: string }[] = [
  { to: "/reducer", text: "Reducer TODO List" },
  { to: "/reducer-with-context", text: "Reducer with ContextAPI TODO List" },
  { to: "/rtk", text: "Redux ToolKit TODO List" },
];
