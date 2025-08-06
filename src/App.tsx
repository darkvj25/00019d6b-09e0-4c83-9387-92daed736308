import React from 'react';

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center">Welcome to Your POS System</h1>
        <p className="text-center mt-4 text-muted-foreground">
          Your project is now ready for development!
        </p>
      </div>
    </div>
  );
}

export default App;