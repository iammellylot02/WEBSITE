import React, { useState } from 'react';
import './booking.css';
import Category from "./category";

const Booking = () => {
  const [items, setItems] = useState(Category);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    date: "",
    checkInTime: "",
    checkOutTime: "",
    menuName: "",
    quantity: "",
    venueRate: "",
  });

  const handleBookNow = () => {
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form data and hide the form
    setFormData({
      name: "",
      address: "",
      phoneNumber: "",
      email: "",
      date: "",
      checkInTime: "",
      checkOutTime: "",
      menuName: "",
      quantity: "",
      venueRate: "",
    });
    setShowForm(false);
  };

  const getRoomOptions = () => {
    const roomOptions = items
      .filter((item) => item.category === 'Room')
      .map((item) => item.name);
    return roomOptions;
  };

  const getVenueOptions = () => {
    const venueOptions = items
      .filter((item) => item.category === 'Venue')
      .map((item) => item.name);
    return venueOptions;
  };

  const getMenuOptions = () => {
    const menuOptions = items
      .filter((item) => item.category === 'Food')
      .map((item) => item.name);
    return menuOptions;
  };

  return (
    <div>
      <h4 className="category text-center main-heading">Book Now!</h4>
      <hr />

      <div className="category-tabs container">
        <div className="category-tab d-flex justify-content-around">
          <button className="btn btn-warning" onClick={() => setItems(Category.filter(item => item.category === 'Room'))}>Rooms</button>
          <button className="btn btn-warning" onClick={() => setItems(Category.filter(item => item.category === 'Venue'))}>Venue</button>
          <button className="btn btn-warning" onClick={() => setItems(Category.filter(item => item.category === 'Food'))}>Food</button>
          <button className="btn btn-warning" onClick={() => setItems(Category.filter(item => item.category === 'Pool'))}>Pool</button>
        </div>
      </div>

      <div className="category-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, image, name, description, price, category } = elem;

                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                    <div className="row item-inside">
                      {/* Images */}
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt={name} className="img-fluid" />
                      </div>
                      {/* Description */}
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>
                        <div className="room-price-divide d-flex justify-content-between">
                          <p>Price: {price}</p>
                          <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="container mt-5">
          <h3>Booking Form</h3>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} required />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleFormChange} required />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleFormChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} required />

            {items[0].category === 'Room' && (
              <>
                <label htmlFor="room">Room:</label>
                <select id="room" name="room" value={formData.room} onChange={handleFormChange} required>
                  <option value="">Select Room</option>
                  {getRoomOptions().map((room) => (
                    <option key={room} value={room}>{room}</option>
                  ))}
                </select>

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleFormChange} required />

                <label htmlFor="checkInTime">Check-in Time:</label>
                <input type="time" id="checkInTime" name="checkInTime" value={formData.checkInTime} onChange={handleFormChange} required />

                <label htmlFor="checkOutTime">Check-out Time:</label>
                <input type="time" id="checkOutTime" name="checkOutTime" value={formData.checkOutTime} onChange={handleFormChange} required />
              </>
            )}

            {items[0].category === 'Venue' && (
              <>
                <label htmlFor="venue">Venue:</label>
                <select id="venue" name="venue" value={formData.venue} onChange={handleFormChange} required>
                  <option value="">Select Venue</option>
                  {getVenueOptions().map((venue) => (
                    <option key={venue} value={venue}>{venue}</option>
                  ))}
                </select>


                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleFormChange} required />
              </>
            )}

            {items[0].category === 'Food' && (
              <>
                <label htmlFor="menu">Menu:</label>
                <select id="menu" name="menu" value={formData.menu} onChange={handleFormChange} required>
                  <option value="">Select Menu</option>
                  {getMenuOptions().map((menu) => (
                    <option key={menu} value={menu}>{menu}</option>
                  ))}
                </select>

                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleFormChange} required />
              </>
            )}

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Booking;
