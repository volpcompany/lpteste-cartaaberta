import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            GRAHAM
          </div>
          <div className="text-sm text-graham-gray font-medium">
            INVESTIMENTOS
          </div>
        </div>
        
        <Button variant="hero" size="sm">
          Garantir Vaga
        </Button>
      </div>
    </header>
  );
};

export default Header;