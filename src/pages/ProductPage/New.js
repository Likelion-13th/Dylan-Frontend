    import React from "react";
    import banner from '../../assets/banner/Banner.png'
    import ae from '../../assets/items/ae.png'
    import by from '../../assets/items/by.png'
    import cha from '../../assets/items/cha.png'
    import creed from '../../assets/items/creed.png'
    import daiso from '../../assets/items/daiso.png'
    import deep from '../../assets/items/deep.png'
    import di from '../../assets/items/di.png'
    import mong from '../../assets/items/mong.png'
    import musin from '../../assets/items/musin.png'
    import ssum from '../../assets/items/ssum.png'
    import '../../styles/New.css'

    const New = () => {
        return (
            <div>
                <img className="new-banner" src={banner} alt="Banner" /> 
                <section>
                <div className="container">
                    <div className="row row-cols-2 row-cols-md-5 g-4 mt-5">
                    {[
                        { name: "딥디크 오르페옹", brand: "딥디크", price: "250,000원", img: deep },
                        { name: "크리드 어벤투스", brand: "크리드", price: "430,000원", img: creed },
                        { name: "몽블랑 익스플로러", brand: "몽블랑", price: "50,800원", img: mong },
                        { name: "이솝 휠", brand: "이솝", price: "105,400원", img: ae },
                        { name: "에이딕트 멜로우", brand: "다이소", price: "3,900원", img: daiso },
                        { name: "러쉬 우디", brand: "썸유", price: "74,900원", img: ssum },
                        { name: "카멜리아", brand: "샤넬", price: "124,900원", img: cha },
                        { name: "스탠다드 뷰티", brand: "무신사", price: "54,900원", img: musin },
                        { name: "바이레도 블랑쉬", brand: "바이레도", price: "113,000원", img: by },
                        { name: "스파이시 머스크", brand: "디올트", price: "64,600원", img: di },
                    ].map((item, idx) => (
                        <div className="col" key={idx}>
                            <div className="card h-100 border-0 shadow-sm">
                                <img src={item.img} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h6 className="fw-bold mb-1">{item.name}</h6>
                                    <p className="text-muted small mb-1">{item.brand}</p>
                                    <p className="fw-semibold text-dark">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
                </section>

                <nav className="d-flex justify-content-center mt-5 mb-5">
                    <ul className="pagination">
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }

    export default New;