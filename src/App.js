import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios
      .get('https://barca-backend.onrender.com/api/all') // Replace with live API when needed
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;

    let valA = a[sortField];
    let valB = b[sortField];

    if (sortField === 'createdAt') {
      valA = new Date(valA);
      valB = new Date(valB);
    }

    if (typeof valA === 'string') {
      return sortOrder === 'asc'
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return sortOrder === 'asc' ? valA - valB : valB - valA;
  });

  const renderSortIcon = (field) => {
    if (sortField !== field) return '⇅';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        PhonePe Dashboard
      </h1>
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('First_Name')}>
                Name {renderSortIcon('First_Name')}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('Camp')}>
                Camp {renderSortIcon('Camp')}
              </th>
              <th className="px-4 py-2">DOB</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">School</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Guardian</th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('paymentStatus')}>
                Payment {renderSortIcon('paymentStatus')}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('amount')}>
                Amount {renderSortIcon('amount')}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('createdAt')}>
                Date {renderSortIcon('createdAt')}
              </th>
              <th className="px-4 py-2">merchantOrderId</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {sortedData.map((entry, index) => (
              <tr key={entry._id}>
                <td className="px-4 py-2 whitespace-nowrap">{index + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {entry.First_Name} {entry.Last_Name}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{entry.Camp}</td>
                <td className="px-4 py-2 whitespace-nowrap">{entry.DOB}</td>
                <td className="px-4 py-2 whitespace-nowrap">{entry.Field_Position}</td>
                <td className="px-4 py-2 whitespace-nowrap">{entry.School}</td>
                <td className="px-4 py-2 whitespace-nowrap">{entry.Phone}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {entry.Guardian_FN} {entry.Guardian_LN}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{entry.paymentStatus}</td>
                <td className="px-4 py-2 whitespace-nowrap">₹{entry.amount}</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-600">
                  {new Date(entry.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500 break-all">
                  {entry.merchantOrderId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
