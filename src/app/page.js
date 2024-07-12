"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const blog = async () => {
    const resp = await fetch("/api/getAllBlogs");
    const data = await resp.json();
    setBlogs(data);
  };

  useEffect(() => {
    try {
      blog();
    } catch (error) {
      console.log(error);
      return [];
    }
  }, []);
  console.log(blogs);
  return (
    <main className="container mx-auto">
      <Navbar />
    </main>
  );
}
