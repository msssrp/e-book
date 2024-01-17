import { CardBody, Card, Image } from "@nextui-org/react";
import React from "react";
import { CardProps } from "@/type";
import Link from "next/link";
const Cards: React.FC<CardProps> = ({ book }) => {
  return (
    <Card className="h-[450px] w-[300px]">
      <Link href={`books/${book.bookID}`}>
        <Image isZoomed className="h-full w-full" src={book.bookCover} />
      </Link>
    </Card>
  );
};

export default Cards;
