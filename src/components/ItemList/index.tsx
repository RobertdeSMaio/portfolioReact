import "./styles.css";

interface ItemProps {
  title: string;
  description: string;
}

export default function ItemList({ title, description }: ItemProps) {
  return (
    <div className="item-list">
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </div>
  );
}
