import { ThemeToggle } from "../../components/ThemeToggle";

export const Home = () => {
  // We want min height of page is entire screen
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggling */}
      <ThemeToggle />
      {/* Background Effects  */}
      {/* Nav Bar */}
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
};
