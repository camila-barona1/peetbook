import { useRouter } from "next/router";
function Friends() {
  const router = useRouter();
  return (
    <div>
      <h1>sass</h1>
      <button type="button" onClick={() => router.push("/")}>
        back
      </button>
    </div>
  );
}

export default Friends;
