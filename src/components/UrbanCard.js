import React, { useContext } from "react";
import { Card, Alert, Container } from "react-bootstrap";
import { SearchContext } from "../context/SearchContext";
import UrbanAPI from '../components/UrbanAPI';


function UrbanCard({ searchError }) {
    const { apiStatus } = useContext(SearchContext);


if (searchError) {
    // If there is a search error, display the error message in a yellow alert
    return (
        <Alert variant="warning" className="mt-3">
            {searchError}
        </Alert>
    );
} else if (Object.keys(apiStatus).length === 0) {
    // If there is no data yet, display a message to the user in a blue alert
    return (
<section></section>
    );
} else if (apiStatus.success === false) {
    // If the API call was not successful, display an error message in a red alert
    return (
        <Alert variant="danger" className="mt-3">
            No results for your search. Please try another word.
        </Alert>
    );
} else {
    // Otherwise, display the word breakdown
    return (


        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Urban-dictionary definition</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                        {`#urban`}
                    </Card.Text>
                    <Card.Link href="#">Read more</Card.Link>

                </Card.Body>
            </Card>
        </Container >
    )
}
}

export default UrbanCard;

