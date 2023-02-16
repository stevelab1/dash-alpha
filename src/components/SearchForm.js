import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Form className="search-form" onSubmit={handleSearch}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a word!"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;