import Image from "next/image";

function HeaderIcon({ Icon, src, active }) {
  return (
    <div className="flex items-center cursor-pointer md:px-9 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-3 active:border-indigo-500 ">
      {Icon && (
        <Icon
          className={`h-5 text-center text-gray-500 sm:h-6 mx-auto group-hover:text-indigo-500 ${
            active && "text-indigo-500"
          }`}
        />
      )}
      {src && (
        <Image
          className={`h-5 text-center text-gray-500 sm:h-6 mx-auto group-hover:text-indigo-500 ${
            active && "active:hover:bg-gray-100"
          }`}
          src={src}
          width={35}
          height={35}
          layout="fixed"
        />
      )}
    </div>
  );
}

export default HeaderIcon;
