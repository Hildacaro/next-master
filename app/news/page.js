"use client";
import React, { useEffect, useState } from "react";
import Post from "../components/post";
import { fetchNews } from '../lib/data';

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
    <div>
      <div className="flex flex-col items-center">
      <h2 className="font-bold text-5xl mt-5 tracking-tight">
					Noticias
				</h2>
        </div>
      <Post posts={posts}/>
    </div>
  );
}

export default News;