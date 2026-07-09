import type { Metadata } from "next";
import { CalendarDays, Download, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaFrame } from "@/components/MediaFrame";
import { PageHeader } from "@/components/PageHeader";
import { news, schoolInfo } from "@/data/site";

type NewsDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NewsDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);

  if (!item) {
    return {
      title: "ไม่พบข่าวประชาสัมพันธ์",
    };
  }

  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title="รายละเอียดข่าว"
        description={`ข่าวประชาสัมพันธ์จาก${schoolInfo.nameTh}`}
      />
      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="mb-6 inline-flex rounded-md border border-school-line px-4 py-2 text-sm font-medium text-school-purple transition hover:border-school-purple"
        >
          กลับหน้าข่าวทั้งหมด
        </Link>
        <div className="overflow-hidden rounded-md border border-school-line bg-white shadow-sm">
          <MediaFrame
            src={item.image}
            label="รออัปโหลดภาพข่าว"
            className="aspect-[16/8] rounded-none border-0 border-b border-school-line"
          />
          <div className="p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap gap-3 text-sm text-school-muted">
              <span className="flex items-center gap-1">
                <Tag className="h-4 w-4 text-school-purple" />
                {item.category}
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4 text-school-purple" />
                {item.date}
              </span>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-school-ink sm:text-4xl">
              {item.title}
            </h1>
            <div className="mt-6 grid gap-4 text-base leading-8 text-school-muted">
              {item.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {item.attachment && (
              <div className="mt-8 rounded-md bg-school-light p-4">
                <p className="mb-3 font-semibold text-school-ink">เอกสารแนบ</p>
                <span className="inline-flex items-center gap-2 rounded-md border border-school-line bg-white px-4 py-2 text-sm text-school-muted">
                  <Download className="h-4 w-4" />
                  {item.attachment.label}
                </span>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
