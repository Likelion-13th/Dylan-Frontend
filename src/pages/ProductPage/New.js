    import React, { useState } from "react";
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
    import ProductCard from "./ProductCard";
    import "../../styles/ProductPage.css"
    import PayModal from "../../component/PayModal";
    import Banner from "./Banner";

    const New = () => {
        const products = [
                        { id: 1, isNew: true, name: "딥디크 오르페옹", brand: "딥디크", price: 250000, imagePath: deep },
                        { id: 2, isNew: true, name: "크리드 어벤투스", brand: "크리드", price: 430000, imagePath: creed },
                        { id: 3, isNew: true, name: "몽블랑 익스플로러", brand: "몽블랑", price: 50800, imagePath: mong },
                        { id: 4, isNew: true, name: "이솝 휠", brand: "이솝", price: 105400, imagePath: ae },
                        { id: 5, isNew: true, name: "에이딕트 멜로우", brand: "다이소", price: 3900, imagePath: daiso },
                        { id: 6, isNew: true, name: "러쉬 우디", brand: "썸유", price: 74900, imagePath: ssum },
                        { id: 7, isNew: true, name: "카멜리아", brand: "샤넬", price: 124900, imagePath: cha },
                        { id: 8, isNew: true, name: "스탠다드 뷰티", brand: "무신사", price: 54900, imagePath: musin },
                        { id: 9, isNew: true, name: "바이레도 블랑쉬", brand: "바이레도", price: 113000, imagePath: by },
                        { id: 10, isNew: true, name: "스파이시 머스크", brand: "디올트", price: 64600, imagePath: di },
                    ]

    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isModalOpen, setModalOpen] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCardClick = (product) => {
        setSelectedProduct(product)
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setSelectedProduct(null)
        setModalOpen(false)
    }
    
    return (
        <div>
            <Banner title="New" imagePath={"/banner_New.png"} />
            <div className="product-container">
                <div className="product-grid">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product}
                        onClick={() => handleCardClick(product)} />
                    ))}
                </div>
            </div>
            {isModalOpen && (
                <PayModal product={selectedProduct} onClose={handleCloseModal} />
            )}

            <div className="paging">
                {currentPage > 1 && (
                    <button className="fill"
                    onClick={() => handlePageChange(currentPage-1)}>
                    Prev
                    </button>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                    <button className={`fill ${pageNumber === currentPage ? "active" : ""}`}
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                    )
                )}
                {currentPage < totalPages && (
                    <button className="fill"
                    onClick={() => handlePageChange(currentPage+1)}>
                    Next
                    </button>
                )}
            </div>
            
        <br /><br />
        </div>
    )
}

export default New;