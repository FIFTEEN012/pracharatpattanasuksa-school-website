import { Download, FileText } from "lucide-react";
import type { DownloadItem } from "@/data/site";

export function DownloadTable({ items }: { items: DownloadItem[] }) {
  return (
    <div className="overflow-hidden rounded-md border border-school-line bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead className="bg-school-deep text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">ประเภทเอกสาร</th>
              <th className="px-4 py-3 font-semibold">รายการเอกสาร</th>
              <th className="px-4 py-3 font-semibold">วันที่เผยแพร่</th>
              <th className="px-4 py-3 font-semibold">สถานะ</th>
              <th className="px-4 py-3 text-center font-semibold">ดาวน์โหลด</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.title} className="border-t border-school-line">
                <td className="px-4 py-4 text-school-purple">{item.category}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2 font-medium text-school-ink">
                    <FileText className="h-4 w-4 text-school-purple" />
                    {item.title}
                  </div>
                </td>
                <td className="px-4 py-4 text-school-muted">{item.updatedAt}</td>
                <td className="px-4 py-4">
                  <span className="rounded bg-school-light px-2 py-1 text-xs font-medium text-school-muted">
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  {item.fileUrl === "#" ? (
                    <span className="inline-flex items-center justify-center gap-2 rounded-md border border-school-line px-3 py-2 text-xs font-medium text-school-muted">
                      <Download className="h-4 w-4" />
                      รอเพิ่มไฟล์
                    </span>
                  ) : (
                    <a
                      href={item.fileUrl}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-school-purple px-3 py-2 text-xs font-medium text-white transition hover:bg-school-deep"
                    >
                      <Download className="h-4 w-4" />
                      ดาวน์โหลด
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
