import { useState, useEffect } from "react";
import DeviceForm from "./DeviceForm";

export default function TimerDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [devices, setDevices] = useState([]);
  const ESP32_BASE = "http://192.168.4.1"; // ESP32 IP or Dswitch.local

  // Fetch devices from ESP32
  useEffect(() => {
    fetch(`${ESP32_BASE}/devices`)
      .then((res) => res.json())
      .then((data) => setDevices(data))
      .catch(console.error);
  }, []);

  // Function to add device (passed to DeviceForm)
  const addDevice = async (device) => {
    try {
      const res = await fetch(`${ESP32_BASE}/devices`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(device),
      });
      if (res.ok) {
        setDevices((prev) => [...prev, device]);
        setShowForm(false); // hide form after adding
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-center bg-emerald-500 h-16 w-full">
        <h1 className="text-xl md:text-2xl text-white font-bold">
          Timer Dashboard
        </h1>
      </div>

      {/* Add Device Card */}
      <div
        className="bg-white rounded-xl shadow-lg p-8 w-80 md:w-96 flex items-center justify-center cursor-pointer hover:shadow-2xl transition"
        onClick={() => setShowForm(!showForm)}
      >
        <h1 className="text-xl md:text-2xl font-bold text-emerald-500">
          Add Device
        </h1>
      </div>

      {/* Form Card */}
      {showForm && <DeviceForm addDevice={addDevice} />}

      {/* List of Added Devices */}
      <div className="flex flex-col gap-2 w-80 md:w-96">
        <div className="flex text-xl font-bold text-emerald-600">Added Devices</div>
        {devices.map((d, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow flex justify-between"
          >
            <span>{d.name}</span>
            <span>{d.time}</span>
            <span>Pin {d.pin}</span>
          </div>
        ))}
      </div>
    </div>
  );
}