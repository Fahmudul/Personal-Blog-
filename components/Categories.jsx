import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="[&>div]:flex [&>div]:gap-2 [&>div]:p-1 mt-3  [&>div]:justify-between">
      <div className="hover:text-secondary">
        <Link href={"Art"}>Art </Link>
        <span>(2)</span>
      </div>
      <div className="hover:text-secondary">
        <Link href={"Photography"}>Photography </Link>
        <span>(2)</span>
      </div>
      <div className="hover:text-secondary">
        <Link href={"Travel"}>Travel </Link>
        <span>(2)</span>
      </div>
      <div className="hover:text-secondary">
        <Link href={"Food"}>Food </Link>
        <span>(2)</span>
      </div>
      <div className="hover:text-secondary">
        <Link href={"Music"}>Music </Link>
        <span>(2)</span>
      </div>
      <div className="hover:text-secondary">
        <Link href={"Lifestyle"}>Lifestyle </Link>
        <span>(2)</span>
      </div>
      <div className="hover:text-secondary">
        <Link href={"Technology"}>Technology </Link>
        <span>(2)</span>
      </div>
      <div className="hover:text-secondary">
        <Link href={"Science"}>Science </Link>
        <span>(2)</span>
      </div>
    </div>
  );
};

export default Categories;
