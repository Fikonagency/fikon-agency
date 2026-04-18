/**
 * Renders the reusable SVG clipPath definitions used to mask portraits
 * and decorative shapes into a fig silhouette. Include once per page.
 */
export default function FigClip() {
  return (
    <svg
      aria-hidden
      width="0"
      height="0"
      style={{ position: 'absolute', width: 0, height: 0 }}
    >
      <defs>
        <clipPath id="fig-clip" clipPathUnits="objectBoundingBox">
          <path
            d="
              M 0.515 0.010
              C 0.555 0.030 0.585 0.075 0.585 0.130
              C 0.585 0.160 0.575 0.185 0.560 0.205
              C 0.770 0.250 0.955 0.460 0.955 0.685
              C 0.955 0.860 0.810 0.985 0.560 0.985
              C 0.240 0.985 0.045 0.850 0.045 0.660
              C 0.045 0.440 0.235 0.240 0.445 0.198
              C 0.425 0.180 0.415 0.152 0.415 0.128
              C 0.415 0.070 0.450 0.025 0.490 0.010
              C 0.500 0.005 0.505 0.005 0.515 0.010 Z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
