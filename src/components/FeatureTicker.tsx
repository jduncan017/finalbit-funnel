"use client";

import { type ReactNode } from "react";
import { IconBubble } from "~/components/IconBubble";
import { Wrapper } from "~/components/Wrapper";

interface Feature {
  icon: ReactNode;
  label: string;
  description: string;
}

interface FeatureTickerProps {
  features: Feature[];
}

export function FeatureTicker({ features }: FeatureTickerProps) {
  const doubled = [...features, ...features];

  return (
    <div className="overflow-hidden border border-gray-300/20 bg-black/40 py-6 backdrop-blur-lg">
      <div className="animate-ticker flex w-max gap-4 hover:[animation-play-state:paused]">
        {doubled.map((f, i) => (
          <Wrapper
            key={`${f.label}-${i}`}
            rounded="sm"
            className="flex shrink-0 items-center gap-3 border border-neutral-200/10 bg-black/10"
          >
            <IconBubble size="sm">{f.icon}</IconBubble>
            <div>
              <p className="text-sm font-medium text-white">{f.label}</p>
              <p className="text-xs text-neutral-200">{f.description}</p>
            </div>
          </Wrapper>
        ))}
      </div>
    </div>
  );
}
