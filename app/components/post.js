import PostList from "./postlist";

const Post = ({ posts }) => {

  return (
    <>
      <div className="px-8 mx-auto xl:px-8 max-w-screen-2xl py-5 lg:py-8">
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {posts.map((post) => (
            <PostList key={post._id} post={post} aspect="custom" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
