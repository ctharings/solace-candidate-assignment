"use client";

import { Suspense } from "react";
import AdvocatesList from "./AdvocatesList";
import Loading from "./Loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <AdvocatesList />
    </Suspense>
  );
}
