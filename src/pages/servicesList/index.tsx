import { Icon } from "@iconify/react";
import SearchInput from "../../components/search/searchInput";
import CustomInput from "../../components/customInput";
import CustomTable from "../../components/customTable";
import { useState } from "react";
import CustomSelect from "../../components/select";
import DatePicker from "../../components/datePicker";
const titles = ["SR", "Service", "Price", "Seller Contact", "Action"];

const StatusOption = ["Approved", "Pending", "In-Progress"];
export default function ServicesList() {
  const [openModal, setOpenModal] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  const [editingServicesList, seteditingServicesList] = useState<any | null>(
    null,
  );
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
          onClick={() => {
            setOpenModal(true);
          }}
          icon="tabler:edit"
          className="text-xl cursor-pointer text-primary"
        />
        <Icon
          onClick={() => {
            setDeleteModel(true);
          }}
          icon="mingcute:delete-line"
          className="text-xl cursor-pointer text-[#E90761]"
        />
      </div>,
    ],
  ];
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
          className="w-full md:w-[calc(25%-6px)] 2xl:w-[calc(20%-6px)] h-full md:h-[calc(100vh-130px)] overflow-auto bg-white rounded-xl  "
        >
          <div className="p-6">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="flex items-center font-medium justify-center w-full h-10 gap-3 text-white rounded-lg cursor-pointer bg-primary"
            >
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
              height="40px"
              label="Service Purpose"
              placeholder="Select Service Purpose"
            />
            <CustomInput
              height="40px"
              label="Service Type"
              placeholder="Select Service Type"
            />
            <CustomInput
              height="40px"
              label="Service Sub Type"
              placeholder="Select Service Sub Type"
            />{" "}
            <CustomInput
              height="40px"
              label="Project"
              placeholder="Select Project"
            />
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
        <div className="w-full md:w-[calc(75%-6px)] 2xl:w-[calc(80%-6px)] bg-[#E5EBF7] h-auto  md:h-[calc(100vh-128px)] rounded-xl p-3 ">
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
      {openModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70">
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="w-full max-w-4xl overflow-auto bg-white rounded-xl"
          >
            <div className="flex items-center justify-between bg-[#E5EBF7] xl:px-6 px-4 py-4">
              <p className="text-[24px] text-heading capitalize leading-[100%] font-normal">
                {editingServicesList ? "Edit Service" : "Create Service"}
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
                <CustomInput placeholder="Enter SR" label="SR" />
                <CustomInput
                  label="SR"
                  placeholder="Enter the SR"
                  onChange={(val) =>
                    seteditingServicesList(
                      (prev: any) => prev && { ...prev, SR: val },
                    )
                  }
                />
                <CustomInput
                  label="Phone No."
                  placeholder="Enter Phone Number"
                  onChange={(val) =>
                    seteditingServicesList(
                      (prev: any) => prev && { ...prev, phone: val },
                    )
                  }
                />
                <CustomInput
                  onChange={(val) =>
                    seteditingServicesList(
                      (prev: any) => prev && { ...prev, reason: val },
                    )
                  }
                  placeholder="Enter Reason"
                  label="Reason"
                />
                <CustomInput
                  placeholder="Enter Source"
                  label="Source"
                  onChange={(val) =>
                    seteditingServicesList(
                      (prev: any) => prev && { ...prev, source: val },
                    )
                  }
                />
                <CustomInput
                  placeholder="Enter City"
                  label="City"
                  onChange={(val) =>
                    seteditingServicesList(
                      (prev: any) => prev && { ...prev, city: val },
                    )
                  }
                />
                <DatePicker />
                <CustomInput
                  placeholder="Enter Remarks"
                  label="Remarks"
                  onChange={(val) =>
                    seteditingServicesList(
                      (prev: any) => prev && { ...prev, remarks: val },
                    )
                  }
                />
                <CustomSelect
                  label="Status"
                  placeholder="Select the Status"
                  options={StatusOption}
                  onChange={(val) =>
                    seteditingServicesList(
                      (prev: any) => prev && { ...prev, status: val },
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
                    console.log("Save Service", editingServicesList);
                    setOpenModal(false);
                  }}
                >
                  {editingServicesList ? "Update Service" : "Create Service"}
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
              <p className="text-base text-heading">Delete Services List</p>
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
                Are you sure to delete this Services List?
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
