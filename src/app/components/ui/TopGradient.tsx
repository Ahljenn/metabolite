interface TopGradientProps {
  fromColor: string;
  toColor: string;
}

export function TopGradient({ fromColor, toColor }: TopGradientProps) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-96 bg-gradient-to-br ${fromColor} ${toColor} rounded-md filter blur-3xl opacity-30 -z-50`}
    />
  );
}
