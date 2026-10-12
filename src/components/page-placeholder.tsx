export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-2 text-muted">{description}</p>
    </div>
  );
}
