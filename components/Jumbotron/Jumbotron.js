import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Jumbotron() {
  const router = useRouter();

  return (
    <div className="jumbotron p-5">
      <div className="container">
        <h1 className="display-4">Cat World</h1>
        <p className="lead">Find your next best friend</p>
        <hr className="my-4" />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" href="/cats" role="button">
            Start Looking
          </Link>
        </p>
      </div>
    </div>
  );
}
