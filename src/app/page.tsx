import Carousel from "@/components/main/Carousel";
import Search from "./(component)/Search";
import Tabs from "@/components/main/Tabs";

export default function Home() {
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
                <Tabs/>
              </div>
            </div>
            <div className="h-[500px]">hey</div>
            <div className="h-[500px]">hey</div>
            <div className="h-[500px]">hey</div>
          </div>
        </div>
      </div>
    </div>
  );
}
