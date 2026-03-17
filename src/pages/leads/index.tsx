import { useEffect, useState } from "react";
import SearchInput from "../../components/search/searchInput";
import CustomTable from "../../components/customTable";
import { Checkbox } from "antd";
import { Icon } from "@iconify/react";

const queryList = [
  { name: "Query List", count: 76 },
  { name: "Contracted", count: 32 },
  { name: "DEMO Planed", count: 18 },
  { name: "Follow-up", count: 99 },
  { name: "Proposal Shared", count: 91 },
  { name: "Client Meet-up", count: 91 },
  { name: "Win", count: 91 },
  { name: "Rejected", count: 91 },
  { name: "Hold by Clinet", count: 91 },
  { name: "Awaited for Client Feedback", count: 91 },
  { name: "Archive", count: 91 },
  { name: "Price issue", count: 91 },
  { name: "No Response", count: 91 },
  { name: "Interested", count: 91 },
];

export default function Leads() {
  const [searchText, setSearchText] = useState("");
  // const [openModal, setOpenModal] = useState(false);
  // const [deleteModel, setDeleteModel] = useState(false);
  // const [editingQuery, setEditingQuery] = useState<any>(null);
  useEffect(() => {
    document.title = "Leads — Property CRM";
    window.scroll(0, 0);
  });
  const titles = [
    <div className="flex items-center gap-2">
      <Checkbox />
      <p>Serial #</p>
    </div>,
    "Lead Number",
    "Stage",
    "Contact Name",
    "Tag/Status",
    "Project/Source",
    "Assigned To",
    "Remarks",
    "Action",
  ];

  const tableData: React.ReactNode[][] = [
    [
      <div className="flex items-center gap-2">
        <Checkbox />
        <p>001108</p>
      </div>,

      <>
        <p>001015</p>
        <p>Sep 20,2025</p>
      </>,

      "Contracted",

      <>
        <p>Usman Asif</p>
        <div className="flex items-center gap-2 text-[#2DA219]">
          <Icon icon="mdi:phone" />
          <p>0322-1234567</p>
        </div>
      </>,

      "-",
      "Zameen CRM - Facebook Ad",
      "Hafsa",
      "-",

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
          Leads
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
              New Lead
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
            <button className="w-full h-10 font-medium cursor-pointer text-white rounded-lg bg-[#E90761]">
              Reset
            </button>
          </div>
        </div>
        <div className="w-full md:w-[calc(80%-6px)] bg-[#E5EBF7] h-auto  md:h-[calc(100vh-120px)] rounded-xl p-3 ">
          <p className="text-sm font-medium text-light ">Leads List</p>
          <div className="mt-4 bg-white border 2xl:h-[81vh] xl:h-[71.5vh] rounded-md border-primary">
            <CustomTable titles={titles} data={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
}
