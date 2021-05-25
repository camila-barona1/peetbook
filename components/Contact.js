import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={40}
        height={40}
        layout="fixed"
      />
      <p className="font-medium">{name}</p>
      <div className=" bottom-2 left-7 absolute  bg-green-400 h-3 w-3 rounded-full animate-bounce" />
    </div>
  );
}

export default Contact;
