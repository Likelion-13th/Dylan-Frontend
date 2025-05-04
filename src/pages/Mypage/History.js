import React from "react";
import creed from '../../assets/items/creed.png'
import deep from '../../assets/items/deep.png'
import ae from '../../assets/items/ae.png'

const History = () => {
    const onCancel = () => {
        // API 호출
        alert("취소")
    }
    return (
        <div className="history-container-wrap">
            <div className="history-title">나의 쇼핑 내역</div>
            <div className="history-container">
                <table className="history-table" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>주문 일자</th>
                            <th>상품 정보</th>
                            <th>수량</th>
                            <th>구매 금액</th>
                            <th>상태</th>
                            <th>주문 취소</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2025-05-02</td>
                            <td>
                                <div className="history-item">
                                    <div className="history-item-image-container">
                                        <img className="history-item-image" src={creed} alt="creed" />
                                    </div>
                                    <div className="history-item-explain">
                                        <div className="history-item-name">
                                            크리드 어벤투스
                                        </div>
                                        <div className="history-item-comment">
                                            상남자들의 향수
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td>309,000원</td>
                            <td>배송중</td>
                            <td>
                                <div className="history-cancel">
                                    <div 
                                        className="history-cancel-button"
                                        onClick={onCancel}>
                                            취소
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2025-03-11</td>
                            <td>
                                <div className="history-item">
                                    <div className="history-item-image-container">
                                        <img className="history-item-image" src={deep} alt="deep" />
                                    </div>
                                    <div className="history-item-explain">
                                        <div className="history-item-name">
                                            딥디크 오르페옹
                                        </div>
                                        <div className="history-item-comment">
                                            중성적인 향수
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td>289,000원</td>
                            <td>주문취소</td>
                            <td>
                                <div className="history-cancel">
                                    <div 
                                        className="history-cancel-button"
                                        onClick={onCancel}>
                                            취소
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2025-01-01</td>
                            <td>
                                <div className="history-item">
                                    <div className="history-item-image-container">
                                        <img className="history-item-image" src={ae} alt="ae" />
                                    </div>
                                    <div className="history-item-explain">
                                        <div className="history-item-name">
                                            이솝 휠
                                        </div>
                                        <div className="history-item-comment">
                                            지속시간이 좀 짧음..
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>1</td>
                            <td>145,000원</td>
                            <td>배송완료</td>
                            <td>
                                <div className="history-cancel">
                                    <div 
                                        className="history-cancel-button"
                                        onClick={onCancel}>
                                            취소
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History