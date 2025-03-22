"use client";
import React from "react";
import WorkflowButton from "./_components/workflow-button";
import Workflows from "./_components/workflow";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";

interface Zap {
  id: string;
  triggerId: string;
  userId: number;
  actions: {
    id: string;
    zapId: string;
    actionId: string;
    sortingOrder: number;
    type: {
      id: string;
      name: string;
      image: string;
    };
  }[];
  trigger: {
    id: string;
    zapId: string;
    triggerId: string;
    type: {
      id: string;
      name: string;
      image: string;
    };
  };
}

const Page: React.FC<Zap> = ({}) => {
  // const [loading, setLoading] = useState(true);
  // const [zaps, setZaps] = useState<Zap[]>([]);

  // useEffect(() => {
  //   axios
  //     .get(`${BACKEND_URL}/api/v1/zap`, {
  //       headers: {
  //         Authorization: localStorage.getItem("token"),
  //       },
  //     })
  //     .then((res) => {
  //       setZaps(res.data.zaps);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="flex flex-col relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between">
        Workflows
        <WorkflowButton />
      </h1>
      <Workflows
        name={"workflow one"}
        description={"123"}
        id={"123"}
        publish={null}
      />
    </div>
  );
};

export default Page;
