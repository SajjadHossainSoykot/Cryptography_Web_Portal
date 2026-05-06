export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="crypto-glow crypto-glow-one" />
      <div className="crypto-glow crypto-glow-two" />
      <div className="crypto-glow crypto-glow-three" />

      <div className="crypto-grid" />

      <div className="crypto-symbols">
        <span>RSA</span>
        <span>SHA</span>
        <span>AES</span>
        <span>KEY</span>
        <span>MOD</span>
        <span>0101</span>
        <span>LOCK</span>
        <span>DH</span>
      </div>
    </div>
  );
}