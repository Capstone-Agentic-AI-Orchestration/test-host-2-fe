export interface AppProps {
  title?: string;
}

export function App({ title = 'test-host-2-fe' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
