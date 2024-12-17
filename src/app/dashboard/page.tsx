import {
  TrashIcon,
  PlusCircleIcon,
  PencilIcon,
  PaperAirplaneIcon,
  EnvelopeIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import {
  UserCircleIcon,
} from "@heroicons/react/24/solid";
export default function Navbar() {
  return (
    <>
      <nav className="flex items-center m-2 justify-between hover:cursor-pointer ">
        <div className="flex items-center space-x-4 justify-center">
          <a href="">
            <UserCircleIcon className="h-12 w-12 text-black" />
          </a>
          <div className="flex flex-col  items-center justify-center ">
            <h5 className="text-xl">
              Bienvenido,<span className="font-medium"> John</span>
            </h5>
            <div className="flex items-center justify-center gap-1">
              <PlusCircleIcon className="h-4 w-4" />
              <span className="text-sm">john@example.com</span>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <a
            href="/"
            className="relative text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-white after:via-black after:to-white"
          >
            Emails
          </a>
          <a href="/" className="text-gray-500">
            Favorites
          </a>
        </div>
        <div className="flex items-center text-white justify-center h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              href="/"
            />
          </svg>
        </div>
      </nav>
      {/* sidebar */}
      <div className="">
        <nav className="flex flex-col items-center w-16 space-y-5 ml-0 mt-8 size-52 hover:cursor-pointer">
          <div className="">
            <Bars3Icon className="h-4 w-4" />
          </div>
          <div className="p-1 w-8 flex items-center justify-center bg-zinc-400 rounded">
            <EnvelopeIcon className="h-4 w-4" />
          </div>
          <div className="">
            <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
          </div>
          <div className="">
            <PencilIcon className="h-4 w-4" />
          </div>
          <div className=""><PlusCircleIcon className="h-4 w-4"/></div>
          <div className="">
            <TrashIcon className="h-4 w-4" />
          </div>
        </nav>
      </div>
    </>
  );
}
