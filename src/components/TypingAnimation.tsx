"use client";

import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "Designer", "IT Support"];

export default function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === role) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextChar = isDeleting
          ? role.substring(0, currentText.length - 1)
          : role.substring(0, currentText.length + 1);
        setCurrentText(nextChar);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <span className="text-secondary min-w-[200px] inline-block font-code">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}