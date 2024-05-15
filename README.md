# Products Frontend

#### Frontend https://products-frontend-neon.vercel.app/

## Run Locally

While the backend server is running, proceed with the frontend setup:

### 1. Clone the project

```bash
  git clone https://github.com/0x0raman/Products-Frontend.git
```

### 2. Navigate to the frontend directory (Products-Frontend)

```bash
  cd Products-Frontend-main
```

### 3. Install frontend dependencies

```bash
  npm install
```

### 4. To run locally one slight change is also needed to be done
#### Modify the api.js file located at /src/services/api.js to just the below code

```bash
  import axios from 'axios';
  const API_URL = 'http://localhost:5000/api/';
  const api = axios.create({
    baseURL: API_URL,
  });
  export default api;
```

### 5. Start the frontend server

```bash
  npm start
```
