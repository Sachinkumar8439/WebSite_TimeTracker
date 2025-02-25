# WebSite_TimeTracker


**COMPANY**: CODITECH IT SOLUTIONS

**NAME**: SACHIN KUMAR

**INTERN ID**: CT6WGWQ

**DOMAIN**: FULL STACK WEB DEVELOPMENT

**BATCH DURATION**: January 10th, 2025 to February 25th, 2025.

**MENTOR NAME**: NEELA SANTHOSH KUMAR

# OUTPUTS

---

### **Description**

The **Time Tracker Extension** is a Chrome extension that helps you monitor and analyze the time spent on websites. It enables users to identify productivity patterns, manage time effectively, and stay focused.

---

### **Features**
- **Website Time Tracking:** Logs time spent on individual websites in real-time.
- **Daily Summaries:** Summarizes browsing habits and total time per site.
- **Data Storage:** Stores browsing history securely in MongoDB.
- **User-Friendly Dashboard:** Intuitive interface for viewing and analyzing data.

---

### **Prerequisites**
Ensure you have the following installed:
1. **Node.js** (v14 or above) - [Download Node.js](https://nodejs.org/)
2. **MongoDB** - [Install MongoDB](https://www.mongodb.com/try/download/community)
3. **Git** - [Install Git](https://git-scm.com/)

---

### **Steps to Run Locally**

#### **Step 1: Clone the Repository**
1. Open your terminal/command prompt.
2. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/Sachinkumar8439/WebSite_TimeTracker.git
   ```
3. Navigate to the project directory:
   ```bash
   cd server
   ```

#### **Step 2: Install Dependencies**
1. Install all required dependencies:
   ```bash
   npm install
   ```

#### **Step 3: Configure Environment Variables**
1. Create a `.env` file in the project root directory.
2. Add the following environment variables:
   ```env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   ```
   Replace `your-mongodb-uri` with your MongoDB connection string and `your-secret-key` with a secure string for token signing.

#### **Step 4: Start MongoDB**
1. Ensure MongoDB is running locally:
   ```bash
   mongod
   ```

#### **Step 5: Run the Application**
1. Start the development server:
   ```bash
   node server.js
   ```


---

### **How to Use**
1. Open Chrome and load the extension into developer mode:
   - Go to `chrome://extensions/`.
   - Enable **Developer Mode** in the top-right corner.
   - Click **Load unpacked** and select the extension folder.
2. The extension will appear in your Chrome toolbar.
3. Click the extension icon to view real-time tracking or access the dashboard.

---


### **Future Enhancements**
1. Advanced analytics and visualizations for usage trends.
2. Integration with external tools (e.g., Google Calendar).
3. Exporting data to CSV or PDF for offline use.

---

### **Contact**
For any queries, feedback, or contributions, feel free to reach out:
- **Author:** Sachin Kumar
- **Email:** [sachin39430@gmail.com](mailto:sachin39430@gmail.com)
- **GitHub:** [github.com/Sachinkumar8439](https://github.com/Sachinkumar8439)

