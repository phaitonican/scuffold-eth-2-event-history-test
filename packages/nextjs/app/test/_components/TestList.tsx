"use client";

import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

type TestListProps = {
  filters: any;
};

export const TestList = ({ filters }: TestListProps) => {
  const { data: testCreatedEvents } = useScaffoldEventHistory({
    contractName: "TestContract",
    eventName: "TestCreated",
    fromBlock: 0n,
    watch: true,
    filters: filters,
  });

  return testCreatedEvents?.map(event => {
    return <p key={event.args?.[0]}>Counter: {event.args?.[0].toString()}</p>;
  });
};
