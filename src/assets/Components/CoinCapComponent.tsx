import React, { useState, useEffect } from "react";
import "./CoinCapComponent.css"; // Import CSS file
import { Button } from '@mui/material';
import AddAssetModal from './Modals/Add';

interface Asset {
  _id: string;
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  changePercent24Hr: string;
}

const CoinCapComponent: React.FC = () => {
  const [items, setItems] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/items");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setItems(data.data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const addItem = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          /* new item data */
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add item");
      }
      fetchData();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const updateItem = async (id: string, updatedData: any) => {
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error("Failed to update item");
      }
      fetchData();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      fetchData();
    } catch (error: any) {
      setError(error.message);
    }
  };

  if (loading) return <div className="container">Loading...</div>;
  if (error)
    return <div className="container error-message">Error: {error}</div>;

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleAddAsset = (asset: Asset) => {
      // Handle adding asset logic here
      console.log('Adding asset:', asset);
    };

  return (
    <>
      <div className="container">
        <h1>CRUD Crypto Assets</h1>
        <button onClick={handleOpen}>Add</button>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price (USD)</th>
                <th>Change (24h)</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <td>{item.rank}</td>
                  <td>{item.name}</td>
                  <td>{item.symbol}</td>
                  <td>${parseFloat(item.priceUsd).toFixed(2)}</td>
                  <td>{parseFloat(item.changePercent24Hr).toFixed(2)}%</td>
                  <td>
                    <button onClick={handleOpen}>Update</button>
                  </td>
                  <td>
                    <button onClick={() => deleteItem(item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddAssetModal open={open} onClose={handleClose} onAddAsset={handleAddAsset} />

    </>
  );
};

export default CoinCapComponent;
