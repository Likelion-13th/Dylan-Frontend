import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css"
import PayModal from "../../component/PayModal";

const Diffuser = () => {
    const products = [
        {
            id: 1,
            name: "디퓨저",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_1.png",
            isNew: false,
        },
        {
            id: 2,
            name: "디퓨저`",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_2.png",
            isNew: false,
        },
        {
            id: 3,
            name: "디퓨저",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_3.png",
            isNew: false,
        },
        {
            id: 4,
            name: "디퓨저",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_4.png",
            isNew: false,
        },
        {
            id: 5,
            name: "디퓨저",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/diffuser_5.png",
            isNew: false,
        },
    ]

    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isModalOpen, setModalOpen] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15; // 페이지당 15개 상품 표시

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
            <Banner title="Diffuser" imagePath={"/banner_diffuser.jpg"} />
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

export default Diffuser;
