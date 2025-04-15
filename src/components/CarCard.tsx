
import { MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";

interface CarCardProps {
  image: string;
  name: string;
  price: number;
  year: number;
  mileage: string;
  location: string;
}

export const CarCard = ({ image, name, price, year, mileage, location }: CarCardProps) => {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-2xl font-bold text-primary">${price.toLocaleString()}</p>
        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{year}</span>
          <span>{mileage}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">
        <MapPin className="mr-1 h-4 w-4" />
        {location}
      </CardFooter>
    </Card>
  );
};
