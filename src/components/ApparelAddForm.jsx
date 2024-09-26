/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

const ApparelAddForm = () => {
  const { user, isAuthenticated, label } = useContext(Context);
  const [itemName, setItemName] = useState("");
  const [catogory, setCatogory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [dateP, setDateP] = useState();
  const [houseNo, setHouseNo] = useState(user.houseNo);
  const [street, setStreet] = useState(user.street);
  const [city, setCity] = useState(user.city);
  const [pincode, setPincode] = useState(user.pincode);
  const [label_, setLable_] = useState(label);

  useEffect(() => {
    setHouseNo(user.houseNo);
    setStreet(user.street);
    setCity(user.city);
    setPincode(user.pincode);
    setLable_(label);
  }, [user, isAuthenticated, label]);

  // console.log(label.toLowerCase())
  const updateAddress = () => {
    console.log(user);
    try {
      axios
        .put(
          `https://rp-apparel-backend-1.onrender.com/api/user/updateAddress/${user._id}`,
          {
            houseNo,
            street,
            city,
            pincode,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          toast.success(response.data.message);
        });
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(itemName, catogory, quantity, dateP);
    try {
      await axios
        .post(
          `https://rp-apparel-backend-1.onrender.com/api/apparel/${label.toLowerCase()}`,
          {
            itemName,
            catogory,
            quantity,
            pickupDate: dateP,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
        });
    } catch (error) {
      toast.error(
        error.response?.data?.message
      );
    }
  };

  const addMore = (e) => {
    e.preventDefault();
    setItemName("");
    setCatogory("");
    setQuantity("");
    setDateP();
  };

  return (
    <div className="apparel-container container">
      <div className="signup-box">
        <h1>{label_}</h1>
        <form className="apparel-form" action="">
          <div className="dateP-container">
            <div className="date-inst">
              <h4>Pickup Date</h4>
            </div>
            <input
              type="date"
              className="datep"
              value={dateP}
              onChange={(e) => setDateP(e.target.value)}
            />
          </div>

          <div className="address-container">
            <h4>Pickup Address</h4>
            <div className="displayOld">
              <input
                type="text"
                placeholder="H-no"
                value={houseNo}
                onChange={(e) => setHouseNo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="adrs-btns">
              <button type="button" onClick={updateAddress}>
                Update
              </button>
            </div>
          </div>

          <h4>Add Items</h4>
          <div className="itemsList">
            <div className="itemList-1">
              <div className="itemName">
                <input
                  type="text"
                  placeholder="shirts, pants, t-shirts"
                  value={itemName}
                  onChange={(e) => {
                    setItemName(e.target.value);
                  }}
                />
              </div>
              <div className="catogory">
                <select
                  name="catogory"
                  value={catogory}
                  onChange={(e) => {
                    setCatogory(e.target.value);
                  }}
                >
                  <option>Select catogory</option>
                  <option value="Kids">Kids</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Unisex">Unisex</option>
                </select>
              </div>
              <div className="quantity">
                <input
                  type="text"
                  min={1}
                  placeholder="No of items"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="list-sbtn">
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>

          <div className="itemList-2">
            <button className="add-btn" onClick={addMore}>
              Add more items
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApparelAddForm;
