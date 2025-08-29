"use client";

import React from "react";

type Option = { value: string; label: string };

interface FormFieldProps {
  label: string;
  type?: string;
  as?: "input" | "textarea" | "select";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  options?: Option[]; // only needed for select
}

export default function FormField({
  label,
  type = "text",
  as = "input",
  value,
  onChange,
  placeholder,
  options = [], // ✅ default empty array
}: FormFieldProps) {
  const baseClass =
    "w-full px-3 py-2 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400";

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-200">{label}</label>

      {as === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClass}
        />
      ) : as === "select" ? (
        <select
          value={value}
          onChange={onChange}
          className={baseClass + " text-black"} // select me white text ka issue avoid karne ke liye
        >
          <option value="">Select...</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
}
