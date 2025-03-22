"use client";
import React, { useEffect, useRef } from "react";
import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";
import "@uploadcare/react-uploader/core.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lr-config": any;
      "lr-file-uploader-regular": any;
      "lr-upload-ctx-provider": any;
    }
  }
}

type Props = {
  onUpload: (url: string) => Promise<void>;
};

LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef(null);

  useEffect(() => {
    const handleUpload = async (e: any) => {
      try {
        const fileUrl = e.detail.cdnUrl;
        await onUpload(fileUrl);
        router.refresh();
      } catch (error) {
        console.error("Error during file upload:", error);
      }
    };

    const ctxProviderElement = ctxProviderRef.current;
    if (ctxProviderElement) {
      ctxProviderElement.addEventListener("file-upload-success", handleUpload);
    }

    return () => {
      if (ctxProviderElement) {
        ctxProviderElement.removeEventListener(
          "file-upload-success",
          handleUpload
        );
      }
    };
  }, [onUpload, router]);

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="a9428ff5ff90ae7a64eb"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  );
};

export default UploadCareButton;
