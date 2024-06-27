import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  

  const fetchData = async () => {
    const apiUrl = process.env.BACKEND_SVC_SERVICE_HOST;
    console.log(apiUrl);
    try {
      const response = await fetch('http://mmk:8080/hello');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setError(null); // Clear any previous errors
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          <h2>Data from localhost:8080:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;