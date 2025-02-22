"use client";

export default function InputText() {
  return (
    <div className="relative">
      <label className="mb-1 block text-sm" htmlFor="username">
        Username
      </label>
      <input
        id="username"
        type="text"
        className="block w-full rounded-lg border px-3 py-2 outline-hidden"
      />
      <small>Lorem ipsum dolor sit.</small>
    </div>
  );
}
