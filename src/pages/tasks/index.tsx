import { useEffect, useState } from "react";
import SearchInput from "../../components/search/searchInput";
import CustomTable from "../../components/customTable";

import { Icon } from "@iconify/react";

const queryList = [
  { name: "All Task", count: 76 },
  { name: "Todo", count: 32 },
  { name: "In-progress", count: 18 },
  { name: "Hold", count: 99 },
  { name: "Follow-up", count: 91 },
  { name: "No-Response", count: 91 },
  { name: "Completed", count: 91 },
];

export default function Tasks() {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    document.title = "Tasks — Property CRM";
    window.scroll(0, 0);
  });
  const titles = [
    "Date",
    "Title",
    "Type",
    "Status",
    "Priority",
    "Assigned To/Source",
    "Completion",
    "Lead Details",
    "Service Details",
    "Action",
  ];

  const tableData: React.ReactNode[][] = [
    [
      "Sep 20,2025",
      "Schedule Product Demo",
      "Meeting",
      "Follow Up",
      "High",

      <>
        <p>Misbah</p>
        <p className="text-light">17-Feb-2026</p>
      </>,

      <p className="text-[#E90761]">Pending</p>,
      <>
        <p>Wajahat Khan</p>
        <p className="text-light">
          Lead # <span className="text-primary">4675</span>
        </p>
      </>,
      "Property CRM",
      <div className="flex items-center gap-2">
        <Icon
          icon="tabler:edit"
          className="text-xl cursor-pointer text-primary"
        />
        <Icon
          icon="mingcute:delete-line"
          className="text-xl cursor-pointer text-[#E90761]"
        />
      </div>,
    ],
  ];
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="w-full text-2xl font-medium md:w-max text-heading">
          Tasks
        </p>{" "}
        <div className="w-full md:w-60">
          <SearchInput
            placeholder="Search"
            name="Search"
            onChange={(val: any) => setSearchText(val)}
          />
        </div>
      </div>{" "}
      <div className="flex flex-wrap h-auto gap-3 mt-4 overflow-auto">
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="w-full md:w-[calc(20%-6px)] h-full md:h-[calc(100vh-120px)] overflow-auto bg-white rounded-xl  "
        >
          <div className="p-6">
            <button className="flex items-center font-medium justify-center w-full h-10 gap-3 text-white rounded-lg cursor-pointer bg-primary">
              <Icon icon="material-symbols:add-rounded" className="text-2xl" />{" "}
              New Task
            </button>
          </div>
          <div className="space-y-0.5">
            {queryList.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-[#F7F7F7] px-6 py-2 flex items-center justify-between"
              >
                <p className="text-xs font-light 2xl:text-sm text-heading">
                  {item.name}
                </p>
                <div className="h-4 w-4 2xl:w-6 2xl:h-6 rounded-xs bg-[#E5EBF7] flex justify-center items-center ">
                  <p className="text-[10px] 2xl:text-sm font-light text-primary">
                    {item.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6">
            <button className="w-full font-medium h-10 cursor-pointer text-white rounded-lg bg-[#E90761]">
              Reset
            </button>
          </div>
        </div>
        <div className="w-full md:w-[calc(80%-6px)] bg-[#E5EBF7] h-auto  md:h-[calc(100vh-120px)] rounded-xl p-3 ">
          <p className="text-sm font-medium text-light ">Task List</p>
          <div className="mt-4 bg-white  2xl:h-[81vh] xl:h-[71.5vh] border rounded-md border-primary">
            <CustomTable titles={titles} data={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
}
