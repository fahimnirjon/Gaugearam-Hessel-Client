import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BsCashCoin } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdBorderColor, MdMenuBook } from "react-icons/md";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <p className="text-3xl">
        Hi, Welcome {user?.displayName ? user.displayName : "Back"}
      </p>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
          <BsCashCoin className="font-bold text-2xl"></BsCashCoin>
          </div>
          <div className="stat-value">${stats.revenue}</div>
          <div className="stat-title">Revenue</div>
        </div>
           
        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          <MdBorderColor className="text-3xl"/>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
          <MdMenuBook className="text-3xl" />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
