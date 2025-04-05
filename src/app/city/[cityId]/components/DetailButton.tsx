"use client";

import GreenButton from "@/app/components/ui/GreenButton";
import ModalContent from "@/app/components/ui/ModalContent";
import React, { useState } from "react";
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
      {showModal ? <ModalContent onClose={() => setShowModal(!showModal)} /> : null}
    </div>
  );
}
