import React from "react";
import { Box, C, Cyl, Ground, Human, proj } from "./iso";

/**
 * Launch pad — the hero illustration. A chunky toy rocket on a pad, a gantry
 * tower behind it, pumpkins for October, one tiny human for scale.
 *
 * Painter's order: smaller (x + y) is further from the camera, so it draws first.
 */

function Pumpkin({ x, y, r = 6 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <Cyl x={x} y={y} z={0} r={r} h={r * 1.1} c={C.orange} />
      <Box x={x - 0.9} y={y - 0.9} z={r * 1.1} w={1.8} d={1.8} h={2.6} c={C.ink} />
    </g>
  );
}

export default function Rocket({ className }: { className?: string }) {
  const cx = 30;
  const cy = 30;
  const base = 6; // pad height
  const bodyH = 50;
  const [wx, wy] = proj(cx + 6.4, cy + 6.4, base + 38);

  return (
    <svg
      className={className}
      viewBox="-66 -80 150 150"
      role="img"
      aria-label="An isometric toy rocket on a launch pad beside a gantry tower, with pumpkins and a tiny person for scale"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <Ground x0={-20} x1={90} y0={-20} y1={90} step={22} opacity={0.18} />

      {/* ---------- gantry tower (off to the -x side, behind the rocket) ---------- */}
      <Box x={-6} y={24} z={0} w={12} d={12} h={base} c={C.ink} top="#2C2926" front="#181615" side="#0B0A0A" />
      <Box x={-3} y={27} z={base} w={6} d={6} h={76} c={C.grey} />
      {[16, 32, 48, 64].map((z) => (
        <Box key={z} x={-4} y={26} z={base + z} w={8} d={8} h={2} c={C.ink} />
      ))}
      <Box x={4} y={28} z={base + 56} w={17} d={4} h={2.6} c={C.ink} />
      <Box x={4} y={28} z={base + 30} w={17} d={4} h={2.6} c={C.ink} />

      {/* ---------- pad ---------- */}
      <Box x={8} y={8} z={0} w={44} d={44} h={base} c={C.ink} top="#2C2926" front="#181615" side="#0B0A0A" />
      <Box x={12} y={12} z={base} w={36} d={36} h={1} c={C.marigold} />

      {/* back fins */}
      <Box x={cx - 2} y={cy - 17} z={base + 1} w={4} d={9} h={16} c={C.orange} />
      <Box x={cx - 17} y={cy - 2} z={base + 1} w={9} d={4} h={16} c={C.orange} />

      {/* ---------- rocket body ---------- */}
      <Cyl x={cx} y={cy} z={base + 1} r={9} h={bodyH} c={C.cream} />
      <Cyl x={cx} y={cy} z={base + 1} r={9.2} h={6} c={C.ink} />
      <Cyl x={cx} y={cy} z={base + 28} r={9.2} h={4} c={C.pink} />
      {/* porthole */}
      <ellipse cx={wx} cy={wy} rx={3.4} ry={3.9} fill={C.teal.m} stroke="#000" strokeWidth={1.2} />
      <ellipse cx={wx - 0.8} cy={wy - 1} rx={1.1} ry={1.3} fill={C.teal.l} />

      {/* nose cone, stepped like a toy */}
      <Cyl x={cx} y={cy} z={base + 1 + bodyH} r={7.6} h={6} c={C.orange} />
      <Cyl x={cx} y={cy} z={base + 7 + bodyH} r={5.6} h={6} c={C.orange} />
      <Cyl x={cx} y={cy} z={base + 13 + bodyH} r={3.4} h={5} c={C.orange} />
      <Cyl x={cx} y={cy} z={base + 18 + bodyH} r={1.4} h={4} c={C.ink} />

      {/* front fins */}
      <Box x={cx - 2} y={cy + 8} z={base + 1} w={4} d={9} h={16} c={C.orange} />
      <Box x={cx + 8} y={cy - 2} z={base + 1} w={9} d={4} h={16} c={C.orange} />

      {/* open-source cubes drifting up */}
      <Box x={52} y={-6} z={70} w={7} d={7} h={7} c={C.teal} />
      <Box x={60} y={6} z={52} w={5} d={5} h={5} c={C.pink} />
      <Box x={-10} y={46} z={62} w={6} d={6} h={6} c={C.marigold} />

      {/* ---------- foreground ---------- */}
      <Pumpkin x={60} y={48} r={7} />
      <Pumpkin x={70} y={38} r={4.6} />
      <Pumpkin x={12} y={66} r={5} />
      <Human x={52} y={64} shirt={C.pink} pants={C.ink} variant={1} />
    </svg>
  );
}
