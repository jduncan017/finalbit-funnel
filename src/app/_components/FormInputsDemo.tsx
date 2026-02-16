"use client";

import { useState } from "react";
import {
  Checkbox,
  MultiSelect,
  Radio,
  Select,
  Textarea,
  TextInput,
  Toggle,
} from "~/components/inputs";

const fruitOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "dragonfruit", label: "Dragonfruit" },
  { value: "elderberry", label: "Elderberry", disabled: true },
];

const planOptions = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "enterprise", label: "Enterprise" },
];

export function FormInputsDemo() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFruit, setSelectedFruit] = useState<string>("");
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const [plan, setPlan] = useState<string>("");
  const [agreed, setAgreed] = useState(false);
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* TextInput - normal */}
        <TextInput
          id="demo-name"
          label="Full Name"
          placeholder="John Doe"
          value={text}
          onChange={(e) => setText(e.target.value)}
          helperText="Enter your full legal name"
        />

        {/* TextInput - error */}
        <TextInput
          id="demo-email"
          label="Email"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error="Please enter a valid email address"
          required
        />

        {/* TextInput - disabled */}
        <TextInput
          id="demo-disabled"
          label="Read Only"
          value="Cannot edit this"
          disabled
        />

        {/* TextInput - password */}
        <TextInput
          id="demo-password"
          label="Password"
          type="password"
          placeholder="Enter password"
          helperText="Must be at least 8 characters"
        />
      </div>

      {/* Textarea - normal */}
      <Textarea
        id="demo-message"
        label="Message"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        helperText="Max 500 characters"
      />

      {/* Textarea - error */}
      <Textarea
        id="demo-message-error"
        label="Bio"
        placeholder="Tell us about yourself..."
        error="Bio is required"
        required
        rows={3}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Select - normal */}
        <Select
          id="demo-fruit"
          label="Favorite Fruit"
          options={fruitOptions}
          value={selectedFruit}
          onValueChange={setSelectedFruit}
          placeholder="Pick a fruit"
          helperText="Choose your favorite"
        />

        {/* Select - error */}
        <Select
          id="demo-fruit-error"
          label="Required Fruit"
          options={fruitOptions}
          placeholder="Pick a fruit"
          error="Selection is required"
          required
        />
      </div>

      {/* MultiSelect - normal */}
      <MultiSelect
        id="demo-fruits"
        label="Select Fruits"
        options={fruitOptions}
        value={selectedFruits}
        onValueChange={setSelectedFruits}
        placeholder="Pick up to 3 fruits"
        max={3}
        helperText="Select up to 3 options"
      />

      {/* MultiSelect - error */}
      <MultiSelect
        id="demo-fruits-error"
        label="Required Fruits"
        options={fruitOptions}
        value={[]}
        error="Please select at least one fruit"
        required
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Radio - vertical */}
        <Radio
          id="demo-plan"
          label="Plan"
          options={planOptions}
          value={plan}
          onValueChange={setPlan}
          helperText="Choose your subscription plan"
        />

        {/* Radio - horizontal with error */}
        <Radio
          id="demo-plan-error"
          label="Required Plan"
          options={planOptions}
          layout="horizontal"
          error="Please select a plan"
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Checkbox - normal */}
        <Checkbox
          id="demo-agree"
          label="I agree to the terms and conditions"
          checked={agreed}
          onCheckedChange={setAgreed}
          helperText="You must agree to continue"
        />

        {/* Checkbox - error */}
        <Checkbox
          id="demo-agree-error"
          label="Accept privacy policy"
          error="You must accept the privacy policy"
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Toggle - normal */}
        <Toggle
          id="demo-notifications"
          label="Enable notifications"
          checked={notifications}
          onCheckedChange={setNotifications}
          helperText="Receive email notifications"
        />

        {/* Toggle - error */}
        <Toggle
          id="demo-notifications-error"
          label="Required toggle"
          error="This setting is required"
          required
        />
      </div>
    </div>
  );
}
