import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Moshy",
    src: "/animals/moshy_status.jpg",
    profile: "/animals/moshy.jpg",
  },
  {
    name: "Start",
    src: "/animals/dog.jpg",
    profile: "/animals/dog_status.jpg",
  },
  {
    name: "Boss",
    src: "/animals/cat3.jpg",
    profile: "/animals/cat3_status.jpg",
  },
  {
    name: "Luck",
    src: "/animals/cat2.jpg",
    profile: "/animals/cat2_status.jpg",
  },
  {
    name: "Kido",
    src: "/animals/cat.jpg",
    profile: "/animals/cat_status.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
