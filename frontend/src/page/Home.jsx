import { useState, useEffect } from "react";
import Spiner from "../components/Spiner";
import axios from 'axios';
import Create from "./Create";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1");
        setData(response.data.todos);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Delete
  const deleteHandle = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <Spiner className="w-full h-full" />;
  }

  return (
    <div className="flex justify-between items-center flex-wrap">
      {/* Create Todo */}
      <Create />
      <span className="w-full h-[3px] bg-slate-500 mt-10"></span>
      {data.map((item) => (
        <div
        key={item._id}
        className="card w-full bg-base-100 card-xs m-5 shadow-lg"
        >
          <div className="card-body">
            <h2 className="card-title text-2xl">{item.title}</h2>{" "}
            <p className="text-md">{item.des}</p>{" "}
            <div className="justify-end card-actions">
              <button
                className="btn btn-error text-white"
                onClick={() => deleteHandle(item._id)}
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
