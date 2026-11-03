// Generates a minimal, valid placeholder resume PDF at public/resume.pdf.
// Replace that file with your real resume before publishing.
// Run: node scripts/generate-resume.mjs

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

const lines = [
  { font: "F1", size: 30, text: "ABHI", gap: 34 },
  {
    font: "F2",
    size: 13,
    text: "Electronics & Communication Engineer",
    gap: 26,
  },
  {
    font: "F2",
    size: 11,
    text: "Software | Embedded Systems | IoT | Applied AI",
    gap: 44,
  },
  {
    font: "F1",
    size: 13,
    text: "THIS IS A PLACEHOLDER RESUME",
    gap: 22,
  },
  {
    font: "F2",
    size: 11,
    text: "Replace public/resume.pdf with your real resume before deploying.",
    gap: 18,
  },
  {
    font: "F2",
    size: 11,
    text: "The download button already points at /resume.pdf.",
    gap: 40,
  },
  { font: "F1", size: 12, text: "CONTACT", gap: 20 },
  {
    font: "F2",
    size: 11,
    text: "Email: pashapuabhi.8475@gmail.com",
    gap: 18,
  },
  { font: "F2", size: 11, text: "Phone: 9666608448", gap: 18 },
  { font: "F2", size: 11, text: "Location: India", gap: 40 },
  { font: "F1", size: 12, text: "WHAT TO PUT HERE", gap: 20 },
  {
    font: "F2",
    size: 11,
    text: "Education, verified certifications, projects and links.",
    gap: 18,
  },
  {
    font: "F2",
    size: 11,
    text: "Keep every claim accurate and verifiable.",
    gap: 18,
  },
];

let y = 780;
let content = "";

for (const line of lines) {
  content += "BT\n";
  content += `/${line.font} ${line.size} Tf\n`;
  content += "1 0 0 1 72 " + y + " Tm\n";
  content += `(${escapePdf(line.text)}) Tj\n`;
  content += "ET\n";
  y -= line.gap;
}

content += "0.4 w 0.35 0.42 0.6 RG\n";
content += "72 720 m 523 720 l S\n";

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>",
  `<< /Length ${Buffer.byteLength(content, "ascii")} >>\nstream\n${content}endstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [];

objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "ascii"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefStart = Buffer.byteLength(pdf, "ascii");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (const offset of offsets) {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
pdf += `startxref\n${xrefStart}\n%%EOF\n`;

writeFileSync(join(root, "public", "resume.pdf"), pdf, "ascii");
console.log("Wrote public/resume.pdf");
