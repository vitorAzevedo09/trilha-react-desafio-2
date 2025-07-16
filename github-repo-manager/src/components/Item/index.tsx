interface ItemProps {
  name: string;
  description: string;
  url: string;
  onRemove: () => void;
}

export const Item = ({ name, description, url, onRemove }: ItemProps) => {
  return (
    <div className="w-80 align-center mt-20">
      <h3 className="text-[32px] text-[#FAFAFA] ">{name}</h3>
      <p className="text-[16px] text-[#FAFAFA60] mb-5">{description}</p>
      <a href={url} className="text-[#0000FF] " target="_blank" rel="noopener noreferrer">Ver Repositório</a>
      <button onClick={onRemove} className="text-[#FF0000] bg-transparent border-none cursor-pointer ml-4">Remover</button>
      <hr className="text-[#FAFAFA60] mt-2" />
    </div>
  )
}

export default Item;
