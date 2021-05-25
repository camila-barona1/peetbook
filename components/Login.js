import { signIn } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";

function Login() {
  return (
    <div className="grid place-items-center pt-5">
    <Head>
        <title>Petbook</title>
        <meta httpEquiv="etag" content="2efdc27c8967f14e2c829e601f7a1228" />
    <meta property="fb:app_id" content="1015003798605559" />
        <meta property="og:title" content="South Jersey Aerial Photograpahy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peetbook.vercel.app/" />
        <meta
          property="og:image"
          content="https://static.wixstatic.com/media/56a444_9273e80a60684dc8b38e56025059f356%7Emv2_d_3200_1800_s_2.png"
        />
        <meta
          property="og:site_name"
          content="South Jersey Aerial Photograpahy"
        />
        <meta
          property="og:description"
          content="South Jersey Aerial Photography is South Jersey's premier aerial photography and aerial videography company. Fully licensed and insured. Contact us today!"
        />
        <meta
          className="SKYPE_TOOLBAR"
          content="SKYPE_TOOLBAR_PARSER_COMPATIBLE"
        />
      </Head>

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
