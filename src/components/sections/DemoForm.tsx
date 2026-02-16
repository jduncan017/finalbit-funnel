"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { TextInput, Select } from "~/components/inputs";
import { Button } from "~/components/Button";
import { Wrapper } from "~/components/Wrapper";
import { FadeIn } from "~/components/FadeIn";

const teamSizeOptions = [
  { value: "2-5", label: "2–5 people" },
  { value: "6-10", label: "6–10 people" },
  { value: "11-20", label: "11–20 people" },
  { value: "20+", label: "20+ people" },
];

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // TODO: wire up to webhook / CRM endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="demo" className="px-6">
        <FadeIn>
          <Wrapper
            rounded="lg"
            padding="lg"
            className="mx-auto max-w-lg border border-secondary-300/30 bg-secondary-300/5 text-center"
          >
            <CircleCheck
              className="mx-auto mb-4 h-12 w-12 text-secondary-300"
              strokeWidth={1.5}
            />
            <h3>You&apos;re booked!</h3>
            <p className="mt-2 text-sm text-neutral-200">
              We&apos;ll be in touch within 24 hours to schedule your demo.
            </p>
          </Wrapper>
        </FadeIn>
      </section>
    );
  }

  return (
    <section id="demo" className="px-6">
      <FadeIn>
        <div className="mx-auto max-w-lg">
          <h2 className="mb-2 text-center">Book Your Demo</h2>
          <p className="mb-8 text-center text-neutral-200">
            See how FinalBit can replace your entire tool stack. Takes 30
            seconds.
          </p>
          <Wrapper
            rounded="lg"
            padding="sm"
            className="border border-gray-400/30 bg-gray-400/20"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextInput id="name" label="Full Name" name="name" required />
              <TextInput
                id="email"
                label="Work Email"
                name="email"
                type="email"
                required
              />
              <TextInput
                id="studio"
                label="Studio / Company Name"
                name="studio"
                required
              />
              <Select
                id="teamSize"
                label="Team Size"
                options={teamSizeOptions}
                required
              />
              <div className="pt-2">
                <Button
                  type="submit"
                  size="md"
                  loading={loading}
                  className="w-full"
                >
                  Request Demo
                </Button>
              </div>
            </form>
          </Wrapper>
        </div>
      </FadeIn>
    </section>
  );
}
