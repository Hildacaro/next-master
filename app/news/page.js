"use client";
import React, { useEffect, useState } from "react";
import Post from "../components/post";
import { fetchNews } from "../lib/data";
import { Fade } from "react-awesome-reveal";

const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNews();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ minHeight: "calc(100vh - 441px)" }}>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-blue-900 text-4xl md:text-5xl mt-7 tracking-tight">
          Nuestras Noticias
        </h2>
      </div>
      <Fade direction={"up"} delay={200} cascade triggerOnce={true}>
        <Post posts={posts} />
      </Fade>
    </div>
  );
};

export default News;
