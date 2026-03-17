import { Icon } from "@iconify/react";
import SearchInput from "../../components/search/searchInput";
import CustomInput from "../../components/customInput";
import CustomTable from "../../components/customTable";
const titles = ["SR", "Service", "Price", "Seller Contact", "Action"];
const tableData: React.ReactNode[][] = [
  [
    "Sep 20,2025",
    <>
      <p>Schedule Product Demo</p> <p>Demo</p>
    </>,
    "Meeting",
    <>
      <p>Hussain Imran</p>{" "}
      <p className="px-2 text-white rounded-sm bg-amber-400 w-max ">
        0322-1234567
      </p>
    </>,
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
export default function ServicesList() {
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <p className="w-full text-2xl font-medium md:w-max text-heading">
          Services List
        </p>{" "}
        <div className="w-full md:w-48 2xl:w-70">
          <SearchInput name="Search" placeholder="Search" />
        </div>{" "}
      </div>
      <div className="flex flex-wrap h-auto gap-3 mt-6 overflow-auto">
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="w-full md:w-[calc(30%-6px)] lg:w-[calc(20%-6px)] h-full md:h-[calc(100vh-130px)] overflow-auto bg-white rounded-xl  "
        >
          <div className="p-6">
            <button className="flex items-center font-medium justify-center w-full h-10 gap-3 text-white rounded-lg cursor-pointer bg-primary">
              <Icon icon="material-symbols:add-rounded" className="text-2xl" />{" "}
              New Service
            </button>
          </div>
          <div className="bg-[#F7F7F7] px-6 mb-1.5 py-2 flex items-center justify-between">
            <p className="text-xs 2xl:text-base font-normal text-heading">
              Support
            </p>
          </div>{" "}
          <div className="bg-[#F7F7F7] mb-1.5 px-6 py-2 flex items-center justify-between">
            <p className="text-xs 2xl:text-base font-normal text-heading">
              Connect HRMS
            </p>
          </div>{" "}
          <div className="bg-[#F7F7F7] mb-1.5 px-6 py-2 flex items-center justify-between">
            <p className="text-xs 2xl:text-base font-normal text-heading">
              Indraaj
            </p>
          </div>
          <div className="p-4 space-y-4 ">
            <p className="text-sm text-[#979797] ">Filters</p>
            <CustomInput
              label="Service Purpose"
              placeholder="Select Service Purpose"
            />
            <CustomInput
              label="Service Type"
              placeholder="Select Service Type"
            />
            <CustomInput
              label="Service Sub Type"
              placeholder="Select Service Sub Type"
            />{" "}
            <CustomInput label="Project" placeholder="Select Project" />
            <div className="mt-4 flex items-center gap-1.5">
              <button className="font-medium  w-full h-10 gap-3 text-white rounded-lg cursor-pointer bg-[#E90761]">
                Reset
              </button>{" "}
              <button className="font-medium w-full h-10 gap-3 text-white rounded-lg cursor-pointer bg-[#2DA219]">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[calc(70%-6px)] lg:w-[calc(80%-6px)] bg-[#E5EBF7] h-auto  md:h-[calc(100vh-128px)] rounded-xl p-3 ">
          <p className="text-sm font-medium text-light ">Service List</p>
          <div className="mt-4 flex items-center gap-1.5">
            <button className="font-medium  w-14 h-10 gap-3 text-white rounded-lg cursor-pointer bg-[#2DA219]">
              PDF
            </button>{" "}
            <button className="font-medium w-14 h-10 gap-3 text-white rounded-lg cursor-pointer bg-[#2DA219]">
              Excel
            </button>
          </div>
          <div className="mt-4 2xl:h-[74.5vh] xl:h-[61.5vh] bg-white border rounded-md border-primary">
            <CustomTable titles={titles} data={tableData} />
          </div>
        </div>{" "}
      </div>
    </>
  );
}
