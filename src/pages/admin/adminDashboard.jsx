import axios from "axios";
import { useEffect, useState } from "react";
import {
  MdDashboard,
  MdInventory,
  MdShoppingCart,
  MdAttachMoney,
  MdPerson2,
  MdPerson3,
} from "react-icons/md";
import Loader from "../../components/loader";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    revenue: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Fetch products & orders (parallel)
        const [productsRes, ordersRes] = await Promise.all([
          axios.get(
            import.meta.env.VITE_BACKEND_URL + "/api/products"
          ),
          axios.get(
            import.meta.env.VITE_BACKEND_URL + "/api/orders/1/1000",
            { headers }
          ),
        ]);

        const orders = ordersRes.data.orders;

        const totalRevenue = orders.reduce(
          (sum, order) => sum + order.total,
          0
        );

        setStats({
          products: productsRes.data.length,
          orders: orders.length,
          revenue: totalRevenue,
        });

        setLoading(false);
      } catch (error) {
        console.error("Dashboard load failed:", error);
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold flex items-center gap-3 mb-6">
        <MdDashboard /> Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Products"
          value={stats.products}
          icon={<MdInventory />}
          color="bg-green-500"
        />

        <StatCard
          title="Total Orders"
          value={stats.orders}
          icon={<MdShoppingCart />}
          color="bg-purple-500"
        />

        <StatCard
          title="Total Revenue"
          value={`Rs. ${stats.revenue.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}`}
          icon={<MdAttachMoney />}
          color="bg-orange-500"
        />

        <StatCard
          title="Total Users not now??"
          value={<h1>Not Calculated</h1>}
          icon={<MdPerson3 />}
          color="bg-yellow-500"
        />
      </div>
    </div>
  );
}

/* ---------------- Stat Card ---------------- */

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center hover:scale-105 transition-all">
      <div>
        <p className="text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold mt-1">{value}</h2>
      </div>
      <div className={`${color} text-white p-4 rounded-xl text-3xl`}>
        {icon}
      </div>
    </div>
  );
}
