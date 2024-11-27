'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 60 * 24 * 7, // 7 days
            gcTime: 1000 * 60 * 60 * 24 * 30, // 30 days
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
