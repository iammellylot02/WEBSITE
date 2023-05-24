// db.js

const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'booking',
});

// Helper function to execute SQL queries
function executeQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Insert form data into the room table
async function insertRoom(formData) {
  const query = 'INSERT INTO room (id,name, address, phoneNum, email, date, check_in, check_out) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const params = [
    formData.name,
    formData.address,
    formData.phoneNum,
    formData.email,
    formData.date,
    formData.check_in,
    formData.check_out,
  ];

  try {
    const result = await executeQuery(query, params);
    return result.insertId; // Return the inserted row ID if needed
  } catch (error) {
    throw error;
  }
}

// Insert form data into the venue table
async function insertVenue(formData) {
  const query = 'INSERT INTO venue (id,name, address, phoneNumber, email, date) VALUES (?, ?, ?, ?, ?)';
  const params = [
    formData.name,
    formData.address,
    formData.phoneNumber,
    formData.email,
    formData.date,
  ];

  try {
    const result = await executeQuery(query, params);
    return result.insertId; // Return the inserted row ID if needed
  } catch (error) {
    throw error;
  }
}

// Insert form data into the food table
async function insertFood(formData) {
  const query = 'INSERT INTO food (name, address, phoneNumber, email, menuName, quantity) VALUES (?, ?, ?, ?, ?, ?)';
  const params = [
    formData.name,
    formData.address,
    formData.phoneNumber,
    formData.email,
    formData.menuName,
    formData.quantity,
  ];

  try {
    const result = await executeQuery(query, params);
    return result.insertId; // Return the inserted row ID if needed
  } catch (error) {
    throw error;
  }
}

// Insert form data into the pool table
async function insertPool(formData) {
  const query = 'INSERT INTO pool (name, address, phoneNumber, email) VALUES (?, ?, ?, ?)';
  const params = [
    formData.name,
    formData.address,
    formData.phoneNumber,
    formData.email,
  ];

  try {
    const result = await executeQuery(query, params);
    return result.insertId; // Return the inserted row ID if needed
  } catch (error) {
    throw error;
  }
}

module.exports = {
  insertRoom,
  insertVenue,
  insertFood,
  insertPool,
};
