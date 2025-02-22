"use client";

function Button() {
  return (
    <div className="flex items-center gap-2">
      <button className="rounded-skin bg-skin-primary ring-skin-primary/50 focus:ring-offset-background px-4 py-1.5 font-medium text-white outline-none focus:ring-2 focus:ring-offset-2">
        Submit
      </button>
    </div>
  );
}

export default Button;
