"use client";
import Workflowform from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-model";
import { Button } from "@/components/ui/button";
import { useBilling } from "@/providers/biling-provider";
import { useModal } from "@/providers/model-provider";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal();
  const { credits } = useBilling();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks.">
        <Workflowform />
      </CustomModal>
    );
    console.log(setOpen(true));
    console.log("clicked once...");
  };

  return (
    <Button
      size={"icon"}
      onClick={handleClick}
      {...(credits !== "0"
        ? {
            onClick: handleClick,
          }
        : {
            disabled: true,
          })}
    >
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
