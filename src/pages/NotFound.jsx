export const NotFound = () => {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-primary text-6xl font-bold">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="cosmic-button">
        Back to home
      </a>
    </main>
  );
};
