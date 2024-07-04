import GlobalTable from "../../components/ui/globalTable";
import { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import { BasicModal } from "@modal";
import useOrderStore from "../../store/order.js";
import Notification from "@notification";

const index = () => {
  const { getOrders, data, isLoading, deleteOrder, totalCount } =
    useOrderStore();

  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });

  const deleteItem = async (id) => {
    const response = await deleteOrder(id);
    if (response.status === 200) {
      Notification({
        title: "Buyurtma muvaffaqiyatli o'chirildi",
        type: "success",
      });
    }
  };

  useEffect(() => {
    getOrders(params);
  }, [params, getOrders]);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    const pageNumber = page ? parseInt(page) : 1;
    setParams((prevParams) => ({
      ...prevParams,
      page: pageNumber,
    }));
  }, [location.search]);

  const changePage = (value) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: value,
    }));
  };

  const headers = [
    { title: "№", value: "index" },
    { title: "Mijoz ismi", value: "client_name" },
    { title: "Xizmat nomi", value: "service_name" },
    { title: "Buyurma narxi", value: "price" },
    { title: "Buyurtma miqdori", value: "amount" },
    { title: "Buyurtma statusi", value: "status" },
    { title: "", value: "action" },
  ];

  return (
    <div>
      <div className="py-3 flex justify-between items-center">
        <div className="w-96">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "400",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Qidiruv"
              inputProps={{ "aria-label": "Search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        {/* <BasicModal /> */}
      </div>
      <GlobalTable
        headers={headers}
        body={data}
        isLoading={isLoading}
        editItem={() => {}}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default index;
