import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
  return (
    <div className="grid place-items-center pt-5">
      <Image
        src="/images/Imagen1.png"
        height={300}
        width={300}
        objectFit="contain"
      />
      <div className="p-10">
        <h1
          onClick={signIn}
          className="p-4 bg-blue-700 rounded-full text-white text-center cursor-pointer"
        >
          Login with Facebook
        </h1>
      </div>
    </div>
  );
}

export default Login;
