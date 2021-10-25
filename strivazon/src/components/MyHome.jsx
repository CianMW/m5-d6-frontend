import { Container, Row, Col } from "react-bootstrap"
import ProductCatalogue from "./ProductCatalogue"

const MyHome = () =>{



    return(
        <>
        <Container>
            <Row>
                <h2>On sale at Strivazon</h2>
            </Row>

            <Row>
                <ProductCatalogue />
            </Row>
        </Container>
        </>
    )
}

export default MyHome