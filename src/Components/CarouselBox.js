import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <div className="parallax fImg"/>
                    <Carousel.Caption>
                        <h5><em>"Отличительная характеристика Data Fabric – это активное применение технологий Больших
                            данных и искусственного интеллекта"</em></h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="parallax sImg"/>
                    <Carousel.Caption>
                        <h5><em>"При помощи Data Fabric информацию легче искать, обрабатывать, структурировать и
                            интегрировать с другими информационными системами"</em></h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="parallax tImg"/>
                    <Carousel.Caption>
                        <h5><em>"Архитектура Data Fabric работает в концепции DataOps"</em></h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}