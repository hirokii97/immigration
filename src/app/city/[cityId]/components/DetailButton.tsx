"use client";

import GreenButton from "@/app/components/ui/GreenButton";
import ModalContent from "@/app/components/ui/ModalContent";
import React, { useState } from "react";
import { createPortal } from "react-dom";
type Props = { text: string };

export default function DetailButton(props: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { text } = props;
  return (
    <div
      className="w-full flex items-center justify-center"
      onClick={() => setShowModal(!showModal)}
    >
      <GreenButton text={text} />
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(!showModal)} />,
          document.body
        )}
    </div>
  );
}
