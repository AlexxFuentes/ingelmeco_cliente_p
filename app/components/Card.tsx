import Image from "next/image";
interface CardProps {
  backgroundColor: string;
  imageSrc: string;
  textColor: string;
  title: string;
  description: string;
}
const Card: React.FC<CardProps> = ({
  backgroundColor,
  imageSrc,
  textColor,
  title,
  description,
}) => {

  const cardStyle = {
    backgroundColor: backgroundColor,
  }

  const titleStyle = {
    color: textColor,
  };

  const descriptionStyle = {
    color: textColor,
  };

  return (
    <div style={cardStyle} className="box-shadow-card ">
      <div className="flex justify-center my-9">
        <Image
          className="w-20 h-20"
          src={imageSrc}
          width={900}
          height={100}
          alt={`INGELMECO - ${title}`}
        />
      </div>
      <h2 style={titleStyle} className="text-2xl font-bold mb-2 px-4">
        {title}
      </h2>
      <p style={descriptionStyle} className="text-lg px-4 pb-8">
        {description}
      </p>
    </div>
  );
};

export default Card;
