import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Container, Card, Button, CardGroup} from "react-bootstrap";
import YouTube from 'react-youtube';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <div class="row mt-2 mb-2 g-3">
                        <div class="col-12 col-lg-4 d-flex align-items-stretch">
                            <div className="card">
                                <div className="inner">
                                    <img className="card-img-top"
                                         src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                         alt="Card image cap"/>
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title"><b>Data Fabric в современных компаниях: особенности и
                                        преимущества</b></h4>
                                    <p className="card-text">Data Fabric возникла на фоне активного применения
                                        данных крупными предприятиями...</p>
                                    <a href="Innewcompanies" className="btn btn-dark">Читать...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex align-items-stretch">
                            <div className="card">
                                <div className="inner">
                                    <img className="card-img-top"
                                         src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                         alt="Card image cap"/>
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title"><b>Как устроены Data Fabric: Big Data и не только</b>
                                    </h4>
                                    <p className="card-text">На текущий момент Data Fabric – это тренд в области Big
                                        Data и корпоративного ИТ-сектора, а не готовые технологические решения...</p>
                                    <a href="Digitaldataops" className="btn btn-dark">Читать...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex align-items-stretch">
                            <div className="card">
                                <div className="inner">
                                    <img className="card-img-top"
                                         src="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                         alt="Card image cap"/>
                                </div>

                                <div className="card-block">
                                    <h4 className="card-title"><b>О Data Fabric</b></h4>
                                    <p className="card-text">Data Fabric представляет собой цельную
                                        концептуальную
                                        архитектуру
                                        управления информацией с полным и гибким доступом для работы с ней...</p>
                                    <a href="About" className="btn btn-dark">Читать...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <YouTube className="homeVideo" videoId="vQInSPTz7KY"/>
                </Container>
            </>
        )
            ;
    }
}

