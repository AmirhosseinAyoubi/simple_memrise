import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import style from "./homePage.module.css"
function HomePage() {
    const navigate = useNavigate()
    const BtnHandler = (e) => {
        navigate(`/learning/${e.target.id}`)
    }
    return (
        <Container>
            <div className={style.container}>
            <h3 className={`text-light animate__animated  animate__flipInY ${style.title}`} >Memrise</h3>
                <h3 className={`text-light ${style.choose_level}`} >Choose your level</h3>
                <div className={style.card_container}>
                    <Row className='w-100'>
                        <Col md={4}>
                            <Card onClick={(e) => BtnHandler(e)} className={style.card} id="basic" >
                                Basic/Elementry
                            </Card>
                        </Col>
                        <Col>
                            <Card onClick={(e) => BtnHandler(e)} id="intermediate" className={style.card} >
                                intermediate
                            </Card>
                        </Col>
                        <Col>
                            <Card onClick={(e) => BtnHandler(e)} id="advance" className={style.card} >
                                advance
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div >


        </Container >
    )
}

export default HomePage
