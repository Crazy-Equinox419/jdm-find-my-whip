
import { SearchBar } from "@/components/SearchBar";
import { CarCard } from "@/components/CarCard";

const SAMPLE_CARS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=800&auto=format&fit=crop&q=60",
    name: "Nissan Skyline GT-R R34",
    price: 85000,
    year: 1999,
    mileage: "78,000 km",
    location: "Los Angeles, CA"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=800&auto=format&fit=crop&q=60",
    name: "Toyota Supra MK4",
    price: 75000,
    year: 1995,
    mileage: "92,000 km",
    location: "Miami, FL"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1603385826272-afd4d3487880?w=800&auto=format&fit=crop&q=60",
    name: "Mazda RX-7 FD",
    price: 45000,
    year: 1993,
    mileage: "105,000 km",
    location: "Seattle, WA"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center bg-secondary px-4">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=2070&auto=format&fit=crop&q=80"
            alt="JDM cars background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            Find Your Dream JDM Car
          </h1>
          <p className="max-w-2xl text-lg text-gray-300">
            Discover affordable Japanese classics near you. From Skylines to Supras, find your perfect ride.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Cars Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Available JDM Cars</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_CARS.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
