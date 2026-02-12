interface ItemProps {
  title: string;
  description: string;
  url: string;
}

export default function ItemList({ title, description, url }: ItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block my-5 mx-auto max-w-2xl group transition-all"
    >
      <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors border border-transparent hover:border-gray-200">
        <strong className="block text-2xl text-black mb-2 group-hover:text-blue-600">
          {title}
        </strong>
        <p className="text-xs text-black mb-5 leading-relaxed">
          {description || "Sem descrição disponível."}
        </p>
        <hr className="border-gray-200" />
      </div>
    </a>
  );
}
