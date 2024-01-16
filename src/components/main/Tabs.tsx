"use client";
import React from "react";
import { Tabs as NextUITabs, Tab} from "@nextui-org/react";

const CustomTabs = () => {
  const [selected, setSelected] = React.useState("");
  return (
    <div className="w-full flex flex-col ">
      <NextUITabs
        variant={"underlined"}
        color="primary" 
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        className=""
        classNames={{
          tabList: "sm:gap-4 gap-0 w-full relative p-0 sm:border-b flex-col sm:flex-row",
          cursor: "w-full bg-[#952124] ",
          tab: "max-w-fit px-0 h-12 ",
          tabContent: "group-data-[selected=true]:text-[#952124] px-2 px-2 sm:px-4"
        }}
        
      > 
        <Tab key="book_list" title="รายการหนังสือ">
          <p className="p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Tab>
        <Tab key="book_recom" title="หนังสือแนะนำ">
          <p className="p-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </Tab>
        <Tab key="book_new" title="หนังสือใหม่">
          <p className="p-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </Tab>
      </NextUITabs>
    </div>
  );
};

export default CustomTabs;
