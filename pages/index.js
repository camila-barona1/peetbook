import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Wiggets from "../components/Wiggets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
    <meta httpEquiv="etag" content="2efdc27c8967f14e2c829e601f7a1228" />
        <meta property="og:title" content="South Jersey Aerial Photograpahy" />
    <meta property="fb:app_id" content="1015003798605559" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.sjap.online/" />
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
        <title>Petbook</title>
      </Head>
      {/* Header */}
      <Header></Header>
      <main className="flex">
        {/*Sidebar*/}
        <Sidebar />
        {/*Feed*/}
        <Feed posts={posts} />
        {/*Widgets*/}
        <Wiggets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
