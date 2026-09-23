import { SplineScene } from "@/components/ui/splite";

export function SplineHero() {
  return (
    <div className="spline-vintage-frame p-3 md:p-4">
      <div className="relative h-full min-h-[380px] w-full spline-vintage-tint">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
