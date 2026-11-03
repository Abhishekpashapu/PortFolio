import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  LayoutTemplate,
  Network,
  Server,
  Shield,
  Wrench,
} from "lucide-react";
import type { IconKey } from "@/lib/data";
import type { LucideIcon } from "lucide-react";

const map: Record<IconKey, LucideIcon> = {
  code: Code2,
  server: Server,
  database: Database,
  layout: LayoutTemplate,
  cpu: Cpu,
  network: Network,
  brain: Brain,
  shield: Shield,
  wrench: Wrench,
  cloud: Cloud,
};

export function DomainIcon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  const Icon = map[name] ?? Code2;
  return <Icon className={className} aria-hidden="true" />;
}
