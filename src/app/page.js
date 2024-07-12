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
    blog();
  }, []);

  return (
    <main className="container mx-auto">
      <Navbar />
    </main>
  );
}
