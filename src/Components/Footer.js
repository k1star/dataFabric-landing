import React from "react";

const Footer = () => (
    <div className="footer">
        <div className="container text-left">
            <div className="row">
                <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                    <h5><b>МАДИ</b></h5>
                    <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "70px", color: "yellow"}}/>
                    <p className="text-left">Данный сайт является проектом курсовой работы студентов
                        Московского
                        автомобильно-дорожного государственного технического университета.</p>
                </div>
                <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                    <h5><b>ВЫПОЛНИЛИ</b></h5>
                    <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "150px", color: "yellow"}}/>
                    <div className="text-left lgN">
                        <p>Захаров Кирилл Александрович</p>
                        <p>Попов Андрей Александрович</p>
                        <p>Григорьев Данила Андреевич</p>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mt-5 mt-lg-0">
                    <h5><b>КОНТАКТЫ</b></h5>
                    <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "120px", color: "yellow"}}/>
                    <div className="text-left lgN">
                        <p>
                            <i className="fa fa-home mr-3"/> Ленинградский просп., 64, Москва, Россия
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-3"/> info@madi.ru
                        </p>
                        <p>
                            <i className="fa fa-phone mr-3"/> +7 (499) 346-01-68 (доб. 1500)
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 col-lg-4 mt-5 mt-lg-0"></div>
                <div className="col-12 col-lg-4 mt-lg-0 text-lg-start text-center">
                    ©{new Date().getFullYear()} Copyright: <a className="aFooter"
                                                              href="https://data-fabric.test-handyhost.ru/"> DATAFABRIC </a>
                </div>
                <div className="col-12 col-lg-4 mt-5 mt-lg-0"></div>
            </div>
        </div>
    </div>
);

export default Footer;