import { demoRides } from "../demoData";

export default function Admin() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Dispatch Dashboard</h2>
      <p>Today’s Scheduled Rides</p>

      <table style={{ width: "100%", marginTop: 20, borderCollapse: 
"collapse" }}>
        <thead>
          <tr>
            <th align="left">Client</th>
            <th align="left">Pickup</th>
            <th align="left">Dropoff</th>
            <th align="left">Time</th>
            <th align="left">Driver</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {demoRides.map((ride) => (
            <tr key={ride.id}>
              <td>{ride.client}</td>
              <td>{ride.pickup}</td>
              <td>{ride.dropoff}</td>
              <td>{ride.time}</td>
              <td>{ride.driver}</td>
              <td>{ride.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

