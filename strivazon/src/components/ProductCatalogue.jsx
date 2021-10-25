import { Component } from "react";
import CatalogueItem from "./CatalogueItem";
import { Row, Col } from "react-bootstrap";


class ProductCatalogue extends Component {
    state = {
        products : [],
    }

    fetchData = async () =>{

        const response = await fetch('http://localhost:3001/products')
         const data = await response.json()
           console.log(data)
         await this.setState({products : data});
      }
      componentDidMount = () =>{
        this.fetchData()
        console.log(this.state.products)
      }
      render() {
        return (
          <Row>
            {this.state.products ? (<>
              {this.state.products.map((prod) => 
              <Col md={4} style={{ marginBottom: 50 }}>
                <CatalogueItem key={prod.title} {...prod} />
              </Col>)}
              </>) : (<></>)  }
          </Row>
    
              )
          }
      }
export default ProductCatalogue
