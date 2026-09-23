import { cn } from "@/lib/utils";

export function SectionRule({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto h-0 w-24 border-t border-dashed border-foreground/35",
        className
      )}
      aria-hidden
    />
  );
}
