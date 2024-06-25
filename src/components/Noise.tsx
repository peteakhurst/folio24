function Noise() {
  return (
    <svg viewBox='0 0 243 243'>
      <filter id='noiseFilter'>
        <feTurbulence type='franctalNoise' baseFrequency='2.3'></feTurbulence>
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
  );
}

export default Noise;
