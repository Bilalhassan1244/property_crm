import { useEffect, useState } from "react";
import SearchInput from "../../components/search/searchInput";
import CustomTable from "../../components/customTable";

import { Icon } from "@iconify/react";
import CustomInput from "../../components/customInput";
import CustomSelect from "../../components/select";
import DatePicker from "../../components/datePicker";

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
  // const [searchText, setSearchText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  const [editingTask, setEditingTask] = useState<any | null>(null);
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
          onClick={() => {
            setEditingTask(null);
            setOpenModal(true);
          }}
        />
        <Icon
          icon="mingcute:delete-line"
          className="text-xl cursor-pointer text-[#E90761]"
          onClick={() => setDeleteModel(true)}
        />
      </div>,
    ],
  ];
  const StatusOption = ["Approved", "Pending", "In-Progress"];
  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="w-full text-2xl font-medium md:w-max text-heading">
            Tasks
          </p>{" "}
          <div className="w-full md:w-60">
            <SearchInput
              placeholder="Search"
              name="Search"
              // onChange={(val: any) => setSearchText(val)}
            />
          </div>
        </div>{" "}
        <div className="flex flex-wrap h-auto gap-3 mt-4 overflow-auto">
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="w-full h-full md:w-[calc(25%-6px)] 2xl:w-[calc(20%-6px)] overflow-auto bg-white rounded-xl  "
          >
            <div className="p-6">
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
                className="flex items-center font-medium justify-center w-full h-10 gap-3 text-white rounded-lg cursor-pointer bg-primary"
              >
                <Icon
                  icon="material-symbols:add-rounded"
                  className="text-2xl"
                />{" "}
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
          <div className="w-full md:w-[calc(75%-6px)] 2xl:w-[calc(80%-6px)] bg-[#E5EBF7] h-auto  md:h-[calc(100vh-120px)] rounded-xl p-3 ">
            <p className="text-sm font-medium text-light ">Task List</p>
            <div className="mt-4 bg-white  2xl:h-[81vh] xl:h-[71.5vh] border rounded-md border-primary">
              <CustomTable titles={titles} data={tableData} />
            </div>
          </div>
        </div>
      </div>{" "}
      {openModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70">
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="w-full max-w-4xl overflow-auto bg-white rounded-xl"
          >
            <div className="flex items-center justify-between bg-[#E5EBF7] xl:px-6 px-4 py-4">
              <p className="text-[24px] text-heading capitalize leading-[100%] font-normal">
                {editingTask ? "Edit Task" : "Create Task"}
              </p>

              <div className="h-8 group w-8 p-1 rounded-full  hover:shadow-[rgba(99,99,99,0.25)_0px_4px_12px_2px] flex items-center justify-center">
                <div className="p-2 rounded-full cursor-pointer group-hover:bg-white">
                  <Icon
                    icon="ic:twotone-close"
                    className="text-xl cursor-pointer text-primary"
                    onClick={() => setOpenModal(false)}
                  />
                </div>
              </div>
            </div>
            <form className="flex flex-col gap-3 p-6 space-y-3">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <CustomInput
                  label="Title"
                  placeholder="Enter the Title"
                  onChange={(val) =>
                    setEditingTask(
                      (prev: any) => prev && { ...prev, title: val },
                    )
                  }
                />
                <CustomInput
                  label="Type"
                  placeholder="Enter Type"
                  onChange={(val) =>
                    setEditingTask(
                      (prev: any) => prev && { ...prev, type: val },
                    )
                  }
                />
                <CustomInput
                  onChange={(val) =>
                    setEditingTask(
                      (prev: any) => prev && { ...prev, reason: val },
                    )
                  }
                  placeholder="Enter Status"
                  label="Status"
                />
                <CustomInput
                  placeholder="Enter Priority"
                  label="Priority"
                  onChange={(val) =>
                    setEditingTask(
                      (prev: any) => prev && { ...prev, priority: val },
                    )
                  }
                />
                <CustomInput
                  placeholder="Enter Source"
                  label="Source"
                  onChange={(val) =>
                    setEditingTask(
                      (prev: any) => prev && { ...prev, source: val },
                    )
                  }
                />
                <CustomInput
                  placeholder="Enter Completion"
                  label="Completion"
                  onChange={(val) =>
                    setEditingTask(
                      (prev: any) => prev && { ...prev, completion: val },
                    )
                  }
                />
                <CustomSelect
                  label="Lead Details"
                  placeholder="Select the Lead Details"
                  options={StatusOption}
                  onChange={(val) =>
                    setEditingTask(
                      (prev: any) => prev && { ...prev, status: val },
                    )
                  }
                />{" "}
                <CustomInput
                  placeholder="Enter Service Details"
                  label="Service Details"
                  onChange={(val) =>
                    setEditingTask(
                      (prev: any) => prev && { ...prev, serviceDetails: val },
                    )
                  }
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="h-13.75 md:w-25 w-full bg-[#F2FAFD] text-heading rounded-md gap-3 cursor-pointer flex justify-center items-center"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-13.75 md:w-50 w-full bg-primary text-white rounded-md gap-3 cursor-pointer flex justify-center items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Save Task", editingTask);
                    setOpenModal(false);
                  }}
                >
                  {editingTask ? "Update Task" : "Create Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deleteModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative h-auto mx-5 overflow-x-auto bg-white shadow-xl rounded-xl xl:mx-0 w-125">
            <div className="bg-[#E90761]/10 p-4">
              <p className="text-base text-heading">Delete Task</p>
            </div>

            <div className="flex justify-center my-6">
              <div className="flex justify-center items-center bg-[#E90761]/10 h-w-30 w-w-30 rounded-full">
                <div className="flex justify-center items-center  bg-[#E90761] h-20 w-20 rounded-full">
                  <Icon
                    icon="mingcute:delete-line"
                    className="text-4xl text-white"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="mt-5 text-base font-normal text-heading">
                Are you sure to delete this Task?
              </p>
              <p className="mb-6 text-[#7D7D7D]/40">
                Once you delete it will not restored
              </p>
            </div>
            <div className="flex justify-end gap-4 p-4 mt-5">
              <button
                onClick={() => setDeleteModel(false)}
                className="px-7 h-12 py-2 cursor-pointer font-medium bg-[#FDE6EF] rounded-md"
              >
                Cancel
              </button>
              <button
                // onClick={handleDelete}
                className="px-7 h-12 py-2 bg-[#E90761] cursor-pointer font-medium text-white rounded-md"
              >
                {/* {isloadingDelete ? <Spin indicator={antIcon} /> : "Delete"} */}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
