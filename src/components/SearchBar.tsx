
import { Search, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const SearchBar = () => {
  return (
    <div className="flex w-full max-w-3xl gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input 
          placeholder="Search JDM cars..." 
          className="pl-9 pr-4"
        />
      </div>
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input 
          placeholder="Location..." 
          className="pl-9 pr-4"
        />
      </div>
      <Button className="bg-primary hover:bg-primary/90">
        Search
      </Button>
    </div>
  );
};
