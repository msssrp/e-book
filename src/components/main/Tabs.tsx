"use client";
import React from "react";
import { Tabs as NextUITabs, Tab, Card, CardBody } from "@nextui-org/react";
import Cards from "./Cards";
import { TabsProps } from "@/type";
const CustomTabs: React.FC<TabsProps> = ({
  bookMain,
  bookRecommend,
  bookNew,
}) => {
  const [selected, setSelected] = React.useState("");
  return (
    <div className="w-full flex flex-col ">
      <NextUITabs
        variant={"underlined"}
        color="primary"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={(key: any) => setSelected(key)}
        className=""
        classNames={{
          tabList:
            "sm:gap-4 gap-0 w-full relative p-0 sm:border-b flex-col sm:flex-row",
          cursor: "w-full bg-[#952124] ",
          tab: "max-w-fit px-0 h-12 ",
          tabContent:
            "group-data-[selected=true]:text-[#952124] px-2 px-2 sm:px-4",
          panel: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        }}>
        <Tab key="book_list" title="รายการหนังสือ">
          {bookMain.map((book, index) => (
            <Cards book={book} key={index} />
          ))}
        </Tab>
        <Tab key="book_recom" title="หนังสือแนะนำ">
          {bookRecommend.map((book, index) => (
            <Cards book={book} key={index} />
          ))}
        </Tab>
        <Tab key="book_new" title="หนังสือใหม่">
          {bookNew.map((book, index) => (
            <Cards book={book} key={index} />
          ))}
        </Tab>
      </NextUITabs>
    </div>
  );
};

export default CustomTabs;
