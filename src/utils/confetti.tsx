import SizedConfetti from 'react-confetti';

export function confettiRain() {
  return (
    <SizedConfetti
      run={true}
      recycle={false}
      numberOfPieces={800}
      wind={0.01}
      gravity={0.06}
      initialVelocityX={4}
      initialVelocityY={10}
      opacity={50}
      onConfettiComplete={() => { }}
    />
  )
}