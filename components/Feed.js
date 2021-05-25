import InputBox from "./InputBox";
import Post from "./Post";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed({ posts }) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:mex-w-lg lg:max-w-2xl">
        {/**Stories */}
        {/* <h1>hello</h1> */}
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;
