"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  categories: string[];
}

export default function SearchFilters({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  category,
  setCategory,
  categories,
}: SearchFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <Input
        placeholder="Search properties..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="md:w-1/3"
      />
      <Select defaultValue={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="md:w-1/4">
          <SelectValue placeholder="Sort by..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
          <SelectItem value="title">Name</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue={category} onValueChange={setCategory}>
        <SelectTrigger className="md:w-1/4">
          <SelectValue placeholder="Filter by category..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}