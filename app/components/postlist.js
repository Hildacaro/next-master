import Link from "next/link";

const PostList = ({
  post,
  aspect = "landscape",
  minimal = false,
  fontSize = "large",
  fontWeight = "normal",
}) => {
  const cx = (...classNames) => classNames.filter(Boolean).join(" ");
  return (
    <>
      <div
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}
      >
        <div
          className={cx(
            " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-10 dark:bg-gray-800"
          )}
        >
          <Link
            className={cx(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                ? "aspect-[5/4]"
                : "aspect-square"
            )}
            href={post.URL}
            target="_blank"
          >
            <img
              className="w-full h-full object-cover"
              src={post.photo}
              alt={post.photo || "Thumbnail"}
            />
          </Link>
        </div>

        <div className={cx(minimal && "flex items-center")}>
          <h2
            className={cx(
              fontSize === "large"
                ? "text-2xl"
                : minimal
                ? "text-3xl"
                : "text-lg",
              fontWeight === "normal"
                ? "line-clamp-2 font-medium  tracking-normal text-black"
                : "font-semibold leading-snug tracking-tight",
              "mt-2 dark:text-white"
            )}
          >
            <Link href={post.URL} target="_blank">
              <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                {post.title}
              </span>
            </Link>
          </h2>

          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <Link href={post.URL} target="_blank">
              <time className="truncate text-sm" dateTime={post.date}>
                {Intl.DateTimeFormat("es").format(new Date(post.date))}
              </time>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
