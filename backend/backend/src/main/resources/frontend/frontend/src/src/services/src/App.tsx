import React, { useEffect, useState } from 'react';
import { healthCheck } from './services/api';

function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Checking...');

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await healthCheck();
        setBackendStatus(response.data);
      } catch (error) {
        setBackendStatus('Backend connection failed');
      }
    };
    checkBackend();
  }, []);

  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Your Project Name</h1>
      </header>
      <main className="container mx-auto p-4">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <strong>Backend Status:</strong> {backendStatus}
        </div>
      </main>
    </div>
  );
}

export default App;
