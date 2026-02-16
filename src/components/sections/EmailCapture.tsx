"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { Button } from "~/components/Button";
import { Wrapper } from "~/components/Wrapper";

export function EmailCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // TODO: wire up to webhook / CRM endpoint, then redirect to FinalBit signup
    await new Promise((resolve) => setTimeout(resolve, 800));

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="signup" className="px-6">
        <Wrapper rounded="lg" padding="lg" className="mx-auto max-w-md border border-secondary-300/30 bg-secondary-300/5 text-center">
          <CircleCheck className="mx-auto mb-4 h-12 w-12 text-secondary-300" strokeWidth={1.5} />
          <h3>You&apos;re in!</h3>
          <p className="mt-2 text-sm text-neutral-200">
            Check your inbox — we&apos;ll send you a link to get started.
          </p>
        </Wrapper>
      </section>
    );
  }

  return (
    <section id="signup" className="px-6">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-2">Ready to Try It?</h2>
        <p className="mb-8 text-neutral-200">
          Enter your email and start creating in minutes.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="flex-1 rounded-[8px] border border-gray-400/30 bg-gray-400/30 px-4 py-3 text-base text-white placeholder:text-neutral-300 focus:border-primary-300 focus:ring-2 focus:ring-primary-200 focus:outline-none"
          />
          <Button type="submit" size="md" loading={loading}>
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
}
