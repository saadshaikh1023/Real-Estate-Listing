"use client";

import { Property } from "../types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(property.id));
  }, [property.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter((id: number) => id !== property.id);
    } else {
      newFavorites = [...favorites, property.id];
    }
    
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={property.thumbnail}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-2xl font-bold text-primary">${property.price}</p>
        <p className="text-muted-foreground">{property.category}</p>
        <p className="line-clamp-2 text-sm mt-2">{property.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        <Button variant="outline" onClick={toggleFavorite}>
          <Heart className={`h-4 w-4 mr-2 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          {isFavorite ? "Favorited" : "Add to Favorites"}
        </Button>
      </CardFooter>
    </Card>
  );
}