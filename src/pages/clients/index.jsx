import React, { useEffect, useState } from "react";
import GlobalTable from "../../components/ui/globalTable";
import useClientStore from "../../store/clients";
import { Pagination } from "@mui/material";
const index = () => {
  const { getClient, client, totalCount, deleteClient } = useClientStore();
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });
  const headers = [
    { title: "№", value: "index" },
    { title: "Client name", value: "full_name" },
    { title: "Phone number", value: "phone_number" },
    { title: "Action", value: "action" },
  ];
  console.log(client);
  useEffect(() => {
    getClient(params);
  }, [params]);
  const changePagination = (value) => {
    setParams({ ...params, page: value });
  };
  const deleteData = async (id) => {
    await deleteClient(id, localStorage.getItem("user_id"));
  }
  return (
    <>
      <GlobalTable headers={headers} body={client} noneEdit={false} deleteItem={deleteData} />
      <Pagination
        count={totalCount}
        onChange={(_, value) => changePagination(value)}
      />
    </>
  );
};

export default index;
