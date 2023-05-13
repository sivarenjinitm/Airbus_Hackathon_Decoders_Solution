const express = require('express');
const mysql = require('mysql');

const app = express();

// Connect to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'new_schema'
});

connection.connect();

// Define a route for the homepage
app.get('/', (req, res) => {
  // Query the database for data
  connection.query('SELECT * FROM parts', (error, results, fields) => {
    if (error) throw error;

    // Render the HTML page with the data
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>My Webpage</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <style>
        /* CSS styling */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f0f0f0;
        }
    
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
    
        header {
          background-color: #333;
          color: #fff;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
    
        header h1 {
          margin: 0;
        }
    
        nav ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
        }
    
        nav li {
          margin-right: 20px;
        }
    
        nav a {
          color: #fff;
          text-decoration: none;
        }
    
        nav a:hover {
          border-bottom: 2px solid #fff;
        }
    
        main {
          padding: 20px;
        }
    
        .dashboard-section {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          margin-bottom: 20px;
        }
    
        .dashboard-option {
          margin-bottom: 10px;
        }
    
        .dashboard-option a {
          display: inline-block;
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }
    
        .dashboard-option a:hover {
          background-color: #666;
        }
    
        .image-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
    
        .image-section img {
          width: 100%;
          max-width: 600px;
          margin-bottom: 20px;
        }
    
        .user-interaction-section {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
        }
    
        .user-interaction-section h2 {
          margin-top: 0;
        }
    
        .styled-form {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px;
        }
    
        .styled-input {
          display: flex;
          flex-direction: column;
        }
    
        .styled-input label {
          margin-bottom: 5px;
          font-weight: bold;
        }
    
        .styled-input input,
        .styled-input textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
    
        .styled-button {
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
    
        .styled-button:hover {
          background-color: #666;
        }
    
        footer {
          background-color: #333;
          color: #fff;
          padding: 20px;
          text-align: center;
        }
    
        .dashboard-overview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 20px;
       .dashboard-overview .overview-item {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
    }
    
    .dashboard-overview .overview-item h3 {
      margin-top: 0;
    }
    
    .dashboard-overview .overview-item p {
      margin: 0;
    }
    
    .dashboard-metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
    
    .dashboard-metrics .metric-item {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
    }
    
    .dashboard-metrics .metric-item h3 {
      margin-top: 0;
    }
    
    .dashboard-metrics .metric-item p {
      margin: 0;
    }
    
    .dashboard-performance {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
    }
    
    .dashboard-performance h2 {
      margin-top: 0;
    }
    
    .dashboard-performance table {
      width: 100%;
      border-collapse: collapse;
    }
    
    .dashboard-performance table th,
    .dashboard-performance table td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ccc;
    }
    
    .dashboard-performance table th {
      font-weight: bold;
    }
    
    .dashboard-performance table td {
      font-size: 14px;
    }
    
    .dashboard-performance table tr:last-child td {
      border-bottom: none;
    }
    
    </style>
        </head>
      <body>
      <div class="container">
  <header>
    <h1>Aircraft Sustainability Platform</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <div class="dashboard-section">
      <h2>Dashboard Options</h2>
      <div class="dashboard-option">
        <a href="#">Recycled Materials</a>
      </div>
      <div class="dashboard-option">
        <a href="#">Environmental Impact</a>
      </div>
      <div class="dashboard-option">
        <a href="#">Performance Metrics</a>
      </div>
    </div>

    <div class="image-section">
      <img src="https://media.npr.org/assets/img/2023/02/14/ap23045440587212-de2549386a09da70d493192f562769505fcf33cf.jpg" alt="Aircraft Image">
    </div>

    <div class="user-interaction-section">
      <h2>User Interaction</h2>
      <form class="styled-form">
        <div class="styled-input">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="styled-input">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="styled-input">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <div class="styled-input">
          <button type="submit" class="styled-button">Submit</button>
        </div>
      </form>
    </div>

    <div class="dashboard-overview">
      <div class="overview-item">
        <h3>Recycled Materials</h3>
        <p>Percentage        <p>Percentage of materials being recycled or repurposed:</p>
        <p>Metals: 60%</p>
        <p>Composites: 40%</p>
        <p>Plastics: 30%</p>
      </div>
      <div class="overview-item">
        <h3>Environmental Impact</h3>
        <p>Metrics showing the positive impact:</p>
        <p>CO2 emissions reduction: 20%</p>
        <p>Water usage reduction: 15%</p>
        <p>Landfill waste reduction: 10%</p>
      </div>
      <div class="overview-item">
        <h3>Performance Metrics</h3>
        <p>Metrics related to efficiency:</p>
        <p>Materials processed correctly: 95%</p>
        <p>Turnaround time for processing materials: 3 days</p>
      </div>
    </div>

    <div class="dashboard-metrics">
      <div class="metric-item">
        <h3>Recycled Materials Chart</h3>
        <p>Chart displaying the breakdown of recycled materials.</p>
      </div>
      <div class="metric-item">
        <h3>CO2 Emissions Reduction Chart</h3>
        <p>Chart displaying the reduction in CO2 emissions over time.</p>
      </div>
    </div>

    <div class="dashboard-performance">
      <h2>Performance Metrics</h2>
      <table>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Materials Processed</td>
          <td>1,000</td>
        </tr>
        <tr>
          <td>Processing Time</td>
          <td>3 days</td>
        </tr>
        <tr>
          <td>Efficiency</td>
          <td>95%</td>
        </tr>
      </table>
    </div>
  </main>

  <footer>
    <p>&copy; 2023 Aircraft Sustainability Platform. All rights reserved.</p>
  </footer>
</div>
        <h1>Inventory</h1>
        <table class="table">
          ${results.map(row => `
            <tr>
              <td>${row.Age}</td>
              <td>${row.Condition}</td>
              <td>${row.Location}</td>
              <!-- Add more columns as needed -->
            </tr>
          `).join('')}
        </table>
      </body>
      </html>
    `);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});