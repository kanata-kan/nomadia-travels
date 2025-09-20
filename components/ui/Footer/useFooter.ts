// components/ui/Footer/useFooter.ts
import { useState } from "react";

export function useFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("err");
      setTimeout(() => setStatus(null), 2400);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStatus("ok");
      setEmail("");
      setTimeout(() => setStatus(null), 2400);
    }, 900);
  };

  return { email, setEmail, status, submitting, handleSubmit };
}
