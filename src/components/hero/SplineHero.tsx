import { SplineScene } from "@/components/ui/splite";

export function SplineHero() {
  return (
    <div className="relative h-full min-h-[380px] w-full spline-vintage-tint">
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="h-full w-full"
      />
    </div>
  );
}
