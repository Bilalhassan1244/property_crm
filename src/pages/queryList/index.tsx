import { useEffect, useState } from "react";
import SearchInput from "../../components/search/searchInput";
import SearchSelect from "../../components/search/searchSelect";
import { Icon } from "@iconify/react";
import CustomTable from "../../components/customTable";
import { Checkbox } from "antd";
import CustomInput from "../../components/customInput";
import DatePicker from "../../components/datePicker";
import CustomSelect from "../../components/select";
import QueryUpload from "../../components/queryUpload";

interface QueryRow {
  serial: string;
  date: string;
  project: string;
  contactName: string;
  phone: string;
  reason: string;
  source: string;
  city: string;
  remarks: string;
  status: string;
  id: number;
}
const StatusOption = ["Approved", "Pending", "In-Progress"];

export default function QueryList() {
  const [queries, setQueries] = useState<QueryRow[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openUpload, setOPenUpload] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  const [editingQuery, setEditingQuery] = useState<QueryRow | null>(null);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Query List — Property CRM";
    window.scrollTo(0, 0);
    fetchQueries();
  }, []);

  const closeModel = () => {
    setOPenUpload(false);
  };
  const fetchQueries = async () => {
    setLoading(true);
    try {
      const res = [
        {
          id: 1,
          serial: "001108",
          date: "Sep 20,2025",
          project: "Spring Apartments JT",
          contactName: "Atif Iqbal",
          phone: "0322-1234567",
          reason: "N/A",
          source: "Website",
          city: "Lahore",
          remarks: "to store data",
          status: "Pending",
        },
      ];
      setQueries(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const filteredQueries = queries.filter((q) => {
    return (
      (searchText
        ? Object.values(q).some((val) =>
            String(val).toLowerCase().includes(searchText.toLowerCase()),
          )
        : true) && (filterStatus ? q.status === filterStatus : true)
    );
  });
  const titles = [
    <div className="flex items-center gap-2">
      <Checkbox />
      <p>Serial #</p>
    </div>,
    "Date",
    "Project",
    "Contact Name",
    "Phone",
    "Reason",
    "Source",
    "City",
    "Remarks",
    "Status",
    "Action",
  ];
  const tableData: React.ReactNode[][] = filteredQueries.map((row) => [
    <div className="flex items-center gap-2">
      <Checkbox />
      <p>{row.serial}</p>
    </div>,
    row.date,
    row.project,
    row.contactName,
    row.phone,
    row.reason,
    row.source,
    row.city,
    row.remarks,
    row.status,
    <div className="flex items-center gap-2">
      <Icon
        icon="tabler:edit"
        className="text-xl cursor-pointer text-primary"
        onClick={() => {
          setEditingQuery(row);
          setOpenModal(true);
        }}
      />
      <Icon
        icon="mingcute:delete-line"
        className="text-xl cursor-pointer text-[#E90761]"
        onClick={() => setDeleteModel(true)}
      />
    </div>,
  ]);

  const handleDelete = async (id: number) => {
    setQueries((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center w-full gap-3 md:w-auto">
          <p className="w-full text-2xl leading-[100%] font-medium md:w-max text-heading">
            Update Queries Status
          </p>
          <div className="w-full md:w-48">
            <SearchSelect
              placeholder="Set Status"
              options={StatusOption}
              onChange={(val) => setFilterStatus(val)}
            />
          </div>
        </div>
        <div className="w-full md:w-60">
          <SearchInput
            placeholder="Search"
            name="Search"
            onChange={(val: any) => setSearchText(val)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-4 mt-4">
        <div className="flex flex-wrap items-center w-full gap-4 md:w-auto">
          <button className="flex items-center justify-center w-10 h-10 gap-2 text-white rounded-md cursor-pointer bg-[#E90761]">
            <Icon icon="material-symbols:delete-outline" className="text-2xl" />
          </button>
          <button
            onClick={() => {
              setOPenUpload(true);
            }}
            className="flex items-center justify-center h-10 gap-2 font-medium bg-white rounded-md cursor-pointer text-heading w-80 md:w-41"
          >
            Update Excel
          </button>{" "}
          <button className="flex items-center justify-center font-medium h-10 gap-2 text-white rounded-md cursor-pointer md:w-16 min-w-25 w-auto bg-[#21B209]">
            PDF
          </button>{" "}
          <button className="flex items-center justify-center font-medium h-10 gap-2 text-white rounded-md cursor-pointer md:w-16 w-auto min-w-25 bg-[#21B209]">
            Excel
          </button>{" "}
          <button className="flex items-center justify-center font-medium h-10 gap-2 text-white rounded-md cursor-pointer md:w-16 w-auto min-w-25 bg-[#21B209]">
            Copy
          </button>
        </div>
        <button
          onClick={() => {
            setEditingQuery(null);
            setOpenModal(true);
          }}
          className="flex items-center justify-center w-full h-10 gap-2 font-medium text-white rounded-md cursor-pointer md:w-40 bg-primary"
        >
          <Icon icon="material-symbols:add-rounded" className="text-xl" />
          <p className="text-base font-medium">Add New</p>
        </button>
      </div>

      <div className="mt-4 bg-[#E5EBF7] w-full rounded-xl p-3">
        <p className="text-sm font-medium text-light leading-[100%]">
          Query List
        </p>
        <div className="w-full mt-4 h-auto  md:h-[calc(100vh-230px)] bg-white rounded-lg border border-primary">
          <CustomTable
            titles={titles}
            data={tableData}
            isFetching={loading}
            handleGoToDetail={(row) => console.log("Row clicked:", row)}
          />
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70">
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="w-full max-w-4xl overflow-auto bg-white rounded-xl"
          >
            <div className="flex items-center justify-between bg-[#E5EBF7] xl:px-6 px-4 py-4">
              <p className="text-[24px] text-heading capitalize leading-[100%] font-normal">
                {editingQuery ? "Edit Query" : "Create Query"}
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
                <CustomInput placeholder="Enter Project Name" label="Project" />
                <CustomInput
                  label="Contact Name"
                  placeholder="Enter the Name"
                  onChange={(val) =>
                    setEditingQuery(
                      (prev: any) => prev && { ...prev, contactName: val },
                    )
                  }
                />
                <CustomInput
                  label="Phone No."
                  placeholder="Enter Phone Number"
                  onChange={(val) =>
                    setEditingQuery(
                      (prev: any) => prev && { ...prev, phone: val },
                    )
                  }
                />
                <CustomInput
                  onChange={(val) =>
                    setEditingQuery(
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
                    setEditingQuery(
                      (prev: any) => prev && { ...prev, source: val },
                    )
                  }
                />
                <CustomInput
                  placeholder="Enter City"
                  label="City"
                  onChange={(val) =>
                    setEditingQuery(
                      (prev: any) => prev && { ...prev, city: val },
                    )
                  }
                />
                <DatePicker />
                <CustomInput
                  placeholder="Enter Remarks"
                  label="Remarks"
                  onChange={(val) =>
                    setEditingQuery(
                      (prev: any) => prev && { ...prev, remarks: val },
                    )
                  }
                />
                <CustomSelect
                  label="Status"
                  placeholder="Select the Status"
                  options={StatusOption}
                  onChange={(val) =>
                    setEditingQuery(
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
                    console.log("Save query", editingQuery);
                    setOpenModal(false);
                  }}
                >
                  {editingQuery ? "Update Query" : "Create Query"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative h-auto mx-5 overflow-x-auto bg-white shadow-xl rounded-xl xl:mx-0 w-125">
            <div className="bg-[#E90761]/10 p-4">
              <p className="text-base text-heading">Delete Queries</p>
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
                Are you sure to delete this queries?
              </p>
              <p className="mb-6 text-[#7D7D7D]/40">
                Once you delete it will not restored
              </p>
            </div>
            <div className="flex justify-end gap-4 p-4 mt-5">
              <button
                onClick={() => setDeleteModel(false)}
                className="px-7 h-12 py-2 font-medium bg-[#FDE6EF] rounded-md"
              >
                Cancel
              </button>
              <button
                // onClick={handleDelete}
                className="px-7 h-12 py-2 bg-[#E90761] font-medium text-white rounded-md"
              >
                {/* {isloadingDelete ? <Spin indicator={antIcon} /> : "Delete"} */}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {openUpload && (
        <div>
          <QueryUpload closeModle={closeModel} />
        </div>
      )}
    </>
  );
}
