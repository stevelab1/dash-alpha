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
    } else {
        return (
            // <Card>
            //     <Card.Body>
            //         <Card.Title>Urban-dictionary definition</Card.Title>

            //         <Card.Text>
            //             UrbanAPI.getElementbyClassName('urban')
            //         </Card.Text>
            //         <Card.Link href=" `https://www.urbandictionary.com/define.php?term=${searchInput}`">Learn more</Card.Link>

            //     </Card.Body>
            // </Card>
        )
    }
};

export default UrbanCard;




            //             <Container>
            //                 <Card style={{ width: '18rem' }}>
            //                     <Card.Body>
            //                         <Card.Title>Urban-dictionary definition</Card.Title>
            //                         {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            //                         <Card.Text>

            //                         </Card.Text>
            //                         <Card.Link href="">Read more</Card.Link>

            //                     </Card.Body>
            //                 </Card>
            //             </Container >
            //         )
            //     }
            // }
