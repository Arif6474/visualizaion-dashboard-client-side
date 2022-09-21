import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import "./VisualizationTable.css";
import ModalData from "./ModalData";
const VisualizationTable = () => {
  const [visualizationData, setVisualizationData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [modalData, setModalData] = useState({});
  const getVisualizationData = async () => {
    try {
      const results = await axios.get("https://visualization-dashboard-server-side.vercel.app/data");
      setVisualizationData(results.data);
      setFilteredData(results.data);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: <h1 className="table-header">Country</h1>,
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: <h1 className="table-header">Intensity</h1>,
      selector: (row) => row.intensity,
    },
    {
      name: <h1 className="table-header">Sector</h1>,
      selector: (row) => row.sector,
    },
    {
      name: <h1 className="table-header">Published</h1>,
      selector: (row) => row.published,
      sortable: true,
    },
    {
      name: <h1 className="table-header">Topic</h1>,
      selector: (row) => row.topic,
    },
    {
      name: <h1 className="table-header">End Year</h1>,
      selector: (row) => row.end_year,
    },
    {
      name: <h1 className="table-header">Region</h1>,
      selector: (row) => row.region,
    },
    {
      name: <h1 className="table-header">Start Year</h1>,
      selector: (row) => row.start_year,
    },

    {
      name: <h1 className="table-header">Title</h1>,
      cell: (row) => (
        <div>
          <label
            for="my-modal-4"
            onClick={() => setModalData(row)}
            class="btn btn-outline btn-info btn-xs text-white modal-button"
          >
            Title
          </label>
          {modalData && <ModalData modalData={modalData} />}
        </div>
      ),
    },

    {
      name: <h1 className="table-header">Source</h1>,
      selector: (row) => row.source,
    },
    {
      name: <h1 className="table-header">Pestle</h1>,
      selector: (row) => row.pestle,
    },
    {
      name: <h1 className="table-header">Likelihood</h1>,
      selector: (row) => row.likelihood,
    },
    {
      name: <h1 className="table-header">Relevance</h1>,
      selector: (row) => row.relevance,
    },
  ];
  createTheme(
    "solarized",
    {
      text: {
        primary: "#66E4ED",
        secondary: "#2aa198",
      },
      background: {
        default: "#002b36",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );
  useEffect(() => {
    getVisualizationData();
  }, []);
  useEffect(() => {
    const result = visualizationData.filter((d) => {
      return (
        d.country.toLowerCase().match(search.toLowerCase()) ||
        d.topic.toLowerCase().match(search.toLowerCase()) ||
        d.sector.toLowerCase().match(search.toLowerCase()) ||
        d.region.toLowerCase().match(search.toLowerCase()) ||
        d.source.toLowerCase().match(search.toLowerCase()) ||
        d.pestle.toLowerCase().match(search.toLowerCase())
      );
    });
    console.log(result);
    setFilteredData(result);
  }, [search, visualizationData]);
  return (
    <div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        theme="solarized"
        title={<h1 className="text-white">Visualization Dashboard</h1>}
        fixedHeader
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered input-teal-500 bg-slate-200 text-black max-w-xs"
            placeholder="Search to filter"
          />
        }
        subHeaderAlign="left"
      />
    </div>
  );
};

export default VisualizationTable;
