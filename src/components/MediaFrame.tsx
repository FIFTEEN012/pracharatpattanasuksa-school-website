import { ImageIcon } from "lucide-react";

type MediaFrameProps = {
  src: string;
  label: string;
  className?: string;
};

export function MediaFrame({ src, label, className = "" }: MediaFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-md border border-school-line bg-school-light ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/28 text-school-muted">
        <ImageIcon className="mb-2 h-8 w-8" />
        <span className="rounded bg-white/85 px-3 py-1 text-xs font-medium shadow-sm">
          {label}
        </span>
      </div>
    </div>
  );
}
