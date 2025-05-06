'use client';

import { LayoutDebugTool, ClientProvider } from '@realgenoux/layout-debug-tool';

export function ClientDebug({ children }: { children: React.ReactNode }) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (!isDevelopment) {
    return <>{children}</>;
  }

  return (
    <ClientProvider>
      <LayoutDebugTool>{children}</LayoutDebugTool>
    </ClientProvider>
  );
}
