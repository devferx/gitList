import "./search-input.css";

interface SearchInputProps {
  searchRepository: (query: string) => void;
}

export const SearchInput = ({ searchRepository }: SearchInputProps) => {
  const handleInputSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    searchRepository(ev.target.value);
  };

  return (
    <input
      className="search-input"
      type="search"
      placeholder="Find a repository"
      onChange={handleInputSearch}
    />
  );
};
