"use client";

import { TestList } from "./_components/TestList";
import type { NextPage } from "next";

const TestPage: NextPage = () => {
  return (
    <>
      <TestList key={-1} filters={{ _counter: 1 }} />
      <p>This should be 1</p>
      <TestList key={-2} filters={{ _counter: 2 }} />
      <p>This should be 2, but data gets overriden while loading?</p>
    </>
  );
};

export default TestPage;
