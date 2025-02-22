"use client";

export default function InputText() {
  return (
    <div className="relative space-y-2">
      <label className="block text-sm" htmlFor="username">
        Username
      </label>
      <input
        id="username"
        type="text"
        className="border-skin-border focus:ring-offset-background rounded-skin ring-skin-primary/30 focus:border-skin-primary/80 block w-full border px-3 py-2 outline-hidden transition-all duration-200 ease-in focus:ring-2 focus:ring-offset-2"
      />
      <small className="text-skin-muted">Lorem ipsum dolor sit.</small>
    </div>
  );
}
