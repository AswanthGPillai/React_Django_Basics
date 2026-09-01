import React, { lazy, Suspense } from 'react';

const LazyLoading = lazy(() => import('./LazyLoading'));

const SetUp = () => {
  return (
    <div>
      <h1>My Application</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <LazyLoading />
      </Suspense>
    </div>
  );
};

export default SetUp;