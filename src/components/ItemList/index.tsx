interface ItemProps {
  title: string;
  description: string;
}

export default function ItemList({ title, description }: ItemProps) {
  return (
    <div className="my-5 mx-auto max-w-2xl">
      <strong className="block text-2xl text-black mb-2)">{title}</strong>
      <p className="text-xs text-black mb-5 leading-relaxed">{description}</p>
      <hr className="border-gray-200" />
    </div>
  );
}
