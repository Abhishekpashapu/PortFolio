export function CinematicLayer() {
  return (
    <>
      {/* slow ambient light — painted above the page background, below content */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-[12%] h-[34rem] w-[34rem] rounded-full bg-accent/[0.055] blur-[130px]" />
        <div className="absolute -right-32 top-[38%] h-[30rem] w-[30rem] rounded-full bg-violet/[0.05] blur-[140px]" />
        <div className="absolute bottom-[6%] left-[28%] h-[26rem] w-[26rem] rounded-full bg-accent/[0.035] blur-[120px]" />
      </div>

      {/* film treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[6]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.42)_100%)]" />
        <div className="noise absolute inset-0 opacity-[0.05]" />
        <div className="scanlines absolute inset-0 opacity-[0.05]" />
      </div>
    </>
  );
}
