import { useEffect, useState } from "react";
import SearchInput from "../../components/search/searchInput";
import { Icon } from "@iconify/react";
import CustomTable from "../../components/customTable";

export default function Todos() {
  const titles = [
    "Date",
    "Title",
    "Type",
    "Priority",
    "Assigned To",
    "Completion",
    "Lead Details",
    "Service Details",
    "Contact Details",
    "Last Activity",
    "Action",
  ];

  const tableData: React.ReactNode[][] = [
    [
      "Sep 20,2025",
      <>
        <p className="px-2 text-white rounded-sm bg-amber-400 w-max ">
          Follow-up
        </p>
        <p>Schedule Product Demo</p>
      </>,
      "Meeting",
      "High",
      <>
        <p>Misbah </p>
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
      "-",
      "New task created at 17-feb-2026",
      <Icon
        icon="bi:three-dots-vertical"
        className="text-base cursor-pointer text-primary"
      />,
    ],
  ];

  useEffect(() => {
    document.title = "Todos — Property CRM";
    window.scroll(0, 0);
  });
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="w-full text-2xl font-medium md:w-max text-heading">
          Todo’s List
        </p>
        <div className="w-full md:w-60">
          <SearchInput
            placeholder="Search"
            name="Search"
            // onChange={(val: any) => setSearchText(val)}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 mt-4 text-heading">
        <div className="flex items-center gap-2 px-3 py-2 border rounded-md border-primary item-center">
          <p className="text-sm leading-[100%]">Last 7 Days</p>
          <div className="flex items-center justify-center w-5 h-5 text-white rounded-md bg-primary">
            <p className="text-[10px] ">76</p>
          </div>
        </div>{" "}
        <div className="flex items-center gap-2 px-3 py-2 border rounded-md border-primary item-center">
          <p className="text-sm leading-[100%]">Over Due</p>
          <div className="flex items-center justify-center w-5 h-5 text-white rounded-md bg-primary">
            <p className="text-[10px] ">76</p>
          </div>
        </div>{" "}
        <div className="flex items-center gap-2 px-3 py-2 border rounded-md border-primary item-center">
          <p className="text-sm leading-[100%]">Today</p>
          <div className="flex items-center justify-center w-5 h-5 text-white rounded-md bg-primary">
            <p className="text-[10px] ">76</p>
          </div>
        </div>{" "}
        <div className="flex items-center gap-2 px-3 py-2 border rounded-md border-primary item-center">
          <p className="text-sm leading-[100%]">Upcoming</p>
          <div className="flex items-center justify-center w-5 h-5 text-white rounded-md bg-primary">
            <p className="text-[10px] ">76</p>
          </div>
        </div>{" "}
        <div className="flex items-center gap-2 px-3 py-2 border rounded-md border-primary item-center">
          <p className="text-sm leading-[100%]">All</p>
          <div className="flex items-center justify-center w-5 h-5 text-white rounded-md bg-primary">
            <p className="text-[10px] ">76</p>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-[#E5EBF7] w-full rounded-xl p-3">
        <p className="text-sm font-medium text-light leading-[100%]">
          Todo’s List
        </p>
        <div className="w-full mt-4 h-auto 2xl:h-[76vh] xl:h-[64.5vh] bg-white rounded-lg border border-primary">
          <CustomTable
            titles={titles}
            data={tableData}
            handleGoToDetail={(row) => console.log("Row clicked:", row)}
          />
        </div>
      </div>
    </>
  );
}
