export function Marquee({ items }: { items: string[] }) {
  const group = (
    <ul className="flex shrink-0 items-center">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.2em] text-white/45"
        >
          <span className="h-1 w-1 rounded-full bg-accent/70" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee-mask overflow-hidden border-y border-white/5 py-4">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {group}
        <div aria-hidden="true" className="flex">
          {group}
        </div>
      </div>
    </div>
  );
}
