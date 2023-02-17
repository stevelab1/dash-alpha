// import React, { useContext } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { SearchContext } from '../context/SearchContext';

// const SearchForm = () => {
//   const { searchInput, setSearchInput } = useContext(SearchContext);

//   const handleChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   return (
//     <Form className="search-form" onSubmit={handleChange}>
//       <Form.Group className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="Enter a word!"
//           value={searchInput}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Search
//       </Button>
//     </Form>
//   );
// };

// export default SearchForm;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { SearchContext } from '../context/SearchContext';

const SearchForm = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput);
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Form className="search-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a word!"
          value={searchInput}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
