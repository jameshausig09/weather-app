import { StoryblokComponent, useStoryblok } from "@storyblok/react";

const GetStoryBlokContent = () => {
  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: "draft" });
  if (!story || !story.content) {
    return null;
  }
  return <StoryblokComponent blok={story.content} />;
};

export default GetStoryBlokContent;
