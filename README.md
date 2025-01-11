
# Mental Health Tracker Platform - Backend API

## Project Overview

This is the backend API for the **Mental Health Tracker Platform**. The platform helps users track their mental well-being by allowing them to log moods, journal entries, receive feedback, and engage with peer support groups. The backend is built using Node.js, Express, and MongoDB.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication via JSON Web Tokens
- **Bcrypt**: Password hashing for secure storage

## Setup Instructions

### Prerequisites

1. **Node.js** - [Install Node.js](https://nodejs.org/)
2. **MongoDB** - [Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mental-health-tracker-backend.git
   ```

2. Navigate to the project folder:
   ```bash
   cd mental-health-tracker-backend
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and set the following environment variables:
   ```
   DB_URI=mongodb://localhost:27017/mental_health_tracker
   JWT_SECRET=your_jwt_secret
   ```

5. Run the development server:
   ```bash
   npm start
   ```

### API Endpoints

#### **1. User Authentication**

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

#### **2. Mood Log**

- **POST /api/moodlog**: Log a user's mood.
- **GET /api/moodlog**: Get a list of mood logs for the user.

#### **3. Journal Entries**

- **POST /api/journal**: Create a journal entry.
- **GET /api/journal**: Get a list of journal entries for the user.

#### **4. Feedback Generation**

- **POST /api/feedback**: Generate feedback based on the user's mood and journal entries.

#### **5. Peer Support Groups**

- **POST /api/groups**: Create a new peer support group.
- **GET /api/groups**: View all peer support groups.
- **POST /api/groups/:groupId/posts**: Create a post in a group.
- **GET /api/groups/:groupId/posts**: View posts in a peer support group.

### Database Schema

#### **User Schema**
```javascript
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
```

#### **MoodLog Schema**
```javascript
const MoodLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    mood: { type: String, enum: ['Happy', 'Sad', 'Anxious', 'Angry', 'Calm'], required: true },
    energyLevel: { type: Number, min: 1, max: 10 }
});
```

#### **Journal Schema**
```javascript
const JournalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    journalText: { type: String, required: true },
    tags: { type: [String] },
    moodLogId: { type: mongoose.Schema.Types.ObjectId, ref: 'MoodLog' }
});
```

#### **Feedback Schema**
```javascript
const FeedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tips: { type: String },
    moodTrend: { type: String }
});
```

#### **PeerSupportGroup Schema**
```javascript
const PeerSupportGroupSchema = new mongoose.Schema({
    groupName: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    posts: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }]
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.