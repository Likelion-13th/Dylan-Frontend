import React from "react";

const Perfume = () => {
    return (
        <div className="min-vh-100 bg-black text-white d-flex flex-column align-items-center justify-content-center py-5 px-3">
            <div className="bg-gradient border border-light rounded-5 p-5 text-center shadow-lg position-relative" style={{ maxWidth: '700px', width: '100%' }}>
                <img 
                    src="https://images.unsplash.com/photo-1600185365483-26efc6fbc2ec?auto=format&fit=crop&w=900&q=80"
                    alt="Perfume Showcase"
                    className="img-fluid rounded-4 mb-4 shadow-sm"
                />
                <h1 className="display-4 fw-bold text-uppercase text-light mb-3">
                    야 너두 사장될 수 있어!
                </h1>
                <p className="lead text-secondary mb-4">
                    멋쟁이 사자처럼 13기와 함께 향기로운 브랜드를 시작하세요.
                </p>
                <p className="text-muted fst-italic mb-4">
                    진짜 향수는 아니지만, 당신의 향기를 담은 아이디어는 진짜니까.
                </p>
                <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill shadow-sm">
                    지금 시작하기
                </button>
            </div>
        </div>
    )
}

export default Perfume;
