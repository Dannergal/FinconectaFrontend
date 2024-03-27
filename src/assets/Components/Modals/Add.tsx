import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Button, Modal, TextField, Theme, createStyles } from '@mui/material';

interface AddAssetModalProps {
  open: boolean;
  onClose: () => void;
  onAddAsset: (asset: Asset) => void; // Callback function to handle adding asset
}

interface Asset {
    _id: string;
    id: string;
    rank: string;
    symbol: string;
    name: string;
    priceUsd: string;
    changePercent24Hr: string;
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
  })
);

const AddAssetModal: React.FC<AddAssetModalProps> = ({ open, onClose, onAddAsset }) => {
  const classes = useStyles();
  const [assetData, setAssetData] = useState<Asset>({
    _id: '',
    id: '',
    rank: '',
    symbol: '',
    name: '',
    priceUsd: '',
    changePercent24Hr: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAssetData(prevState => ({
      ...prevState,
      [name]: name === 'quantity' || name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Pass the new asset data to the parent component
    onAddAsset(assetData);
    onClose(); // Close modal after submission
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.paper}>
        <h2 id="add-asset-modal">Add Asset</h2>
        <form onSubmit={handleSubmit} id="add-asset-form">
          <TextField
            label="Asset Name"
            name="name"
            value={assetData.id}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Quantity"
            name="quantity"
            type="number"
            value={assetData.rank}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={assetData.symbol}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Asset
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default AddAssetModal;
