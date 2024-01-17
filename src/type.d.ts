export type PDFUrl = {
  url: string;
};

export type CardProps = {
  book: {
    bookID: string;
    bookCover: string;
    bookBehind: string;
  };
};

export type TabsProps = {
  bookMain: {
    bookID: string;
    bookCover: string;
    bookBehind: string;
  }[];
  bookRecommend: {
    bookID: string;
    bookCover: string;
    bookBehind: string;
  }[];
  bookNew: {
    bookID: string;
    bookCover: string;
    bookBehind: string;
  }[];
};
