import Carousel from "@/components/main/Carousel";
import Search from "./(component)/Search";
import Tabs from "@/components/main/Tabs";

export default function Home() {
  const bookCover = [
    {
      bookID: "1",
      bookCover:
        "https://d2qp0siotla746.cloudfront.net/img/use-cases/ebook/template_0.jpg",
      bookBehind: "a",
    },
    {
      bookID: "2",
      bookCover:
        "https://marketplace.canva.com/EAFbWl4xunQ/2/0/1024w/canva-neutral-minimalist-aesthetic-finance-basics-for-women-guide-ebook-cover-NLo1dMhwsSw.jpg",
      bookBehind: "a",
    },
  ];
  const bookCover2 = [
    {
      bookID: "3",
      bookCover:
        "https://d2qp0siotla746.cloudfront.net/img/use-cases/ebook/template_0.jpg",
      bookBehind: "a",
    },
    {
      bookID: "4",
      bookCover:
        "https://marketplace.canva.com/EAFbWl4xunQ/2/0/1024w/canva-neutral-minimalist-aesthetic-finance-basics-for-women-guide-ebook-cover-NLo1dMhwsSw.jpg",
      bookBehind: "a",
    },
  ];

  const bookCover3 = [
    {
      bookID: "5",
      bookCover:
        "https://d2qp0siotla746.cloudfront.net/img/use-cases/ebook/template_0.jpg",
      bookBehind: "a",
    },
    {
      bookID: "6",
      bookCover:
        "https://marketplace.canva.com/EAFbWl4xunQ/2/0/1024w/canva-neutral-minimalist-aesthetic-finance-basics-for-women-guide-ebook-cover-NLo1dMhwsSw.jpg",
      bookBehind: "a",
    },
  ];

  return (
    <div>
      <Carousel />
      <div className="container mx-auto mt-5">
        <div className="grid grid-flow-row sm:grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 ">
          <div className=" sm:col-span-1 flex flex-col">
            <Search />
            <div className="p-4 border text-center mt-[35px]">1</div>
            <div className="p-4 border text-center">2</div>
            <div className="p-4 border text-center">3</div>
            <div className="p-4 border text-center">4</div>
            <div className="p-4 border text-center">5</div>
          </div>

          <div className="sm:col-span-2 md:col-span-3 flex flex-col items-center justify-center overflow-y-auto">
            <div className="w-full">
              <div>
                <Tabs
                  bookMain={bookCover}
                  bookRecommend={bookCover2}
                  bookNew={bookCover3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
