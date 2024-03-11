export default function Label({
  children,
  htmlFor,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="text-lg font-bold">
      {" "}
      {children}
    </label>
  );
}
