"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSent(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("กรุณากรอกชื่อ อีเมล และข้อความให้ครบถ้วน");
      return;
    }
    setSent(true);
    setForm(initialState);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-md border border-school-line bg-white p-5 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-school-ink">
          ชื่อ
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="rounded-md border border-school-line px-3 py-2 text-sm font-normal outline-none transition focus:border-school-purple focus:ring-2 focus:ring-school-purple/15"
            placeholder="กรอกชื่อผู้ติดต่อ"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-school-ink">
          อีเมล
          <input
            value={form.email}
            type="email"
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-md border border-school-line px-3 py-2 text-sm font-normal outline-none transition focus:border-school-purple focus:ring-2 focus:ring-school-purple/15"
            placeholder="example@email.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-school-ink sm:col-span-2">
          เบอร์โทร
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="rounded-md border border-school-line px-3 py-2 text-sm font-normal outline-none transition focus:border-school-purple focus:ring-2 focus:ring-school-purple/15"
            placeholder="รอเพิ่มข้อมูล / กรอกเบอร์ติดต่อกลับ"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-school-ink sm:col-span-2">
          ข้อความ
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={5}
            className="rounded-md border border-school-line px-3 py-2 text-sm font-normal outline-none transition focus:border-school-purple focus:ring-2 focus:ring-school-purple/15"
            placeholder="พิมพ์ข้อความที่ต้องการติดต่อโรงเรียน"
          />
        </label>
      </div>
      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}
      {sent && (
        <p className="mt-4 rounded-md bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
          ส่งข้อความตัวอย่างสำเร็จ รอเชื่อมต่อระบบส่งข้อความจริง
        </p>
      )}
      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-school-purple px-4 py-3 text-sm font-semibold text-white transition hover:bg-school-deep sm:w-auto"
      >
        <Send className="h-4 w-4" />
        ส่งข้อความ
      </button>
    </form>
  );
}
