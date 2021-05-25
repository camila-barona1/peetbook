import { VideoCameraIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Contact from "./Contact";

const contacts = [
  {
    name: "Moshy",
    src: "/animals/moshy_status.jpg",
  },
  {
    name: "Start",
    src: "/animals/dog.jpg",
  },
  {
    name: "Boss",
    src: "/animals/cat3.jpg",
  },
  {
    name: "Luck",
    src: "/animals/cat2.jpg",
  },
  {
    name: "Kido",
    src: "/animals/cat.jpg",
  },
];

function Wiggets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Amigos</h2>
        <div className="flex space-x-1">
          <VideoCameraIcon className="contactsIcon" />
          <SearchIcon className="contactsIcon" />
          <DotsHorizontalIcon className="contactsIcon" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Wiggets;
