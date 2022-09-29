import React from 'react'


const BARO = [
    { id: 1, menu: "50주년 기념 홈페이지", link: '/' },
    { id: 2, menu: "IT 서비스", link: '/' },
    { id: 3, menu: "개설교과목 조회", link: '/' },
    { id: 4, menu: "국제학생증", link: '/' },
    { id: 5, menu: "기록포털", link: '/' },
    { id: 6, menu: "도서관", link: '/' },
    { id: 7, menu: "메일시스템", link: '/' },
    { id: 8, menu: "문화행사", link: '/' },
    { id: 9, menu: "새내기 과정학부", link: '/' },
    { id: 10, menu: "생활관", link: '/' },
    { id: 11, menu: "셔틀버스", link: '/' },
    { id: 12, menu: "식단", link: '/' },
    { id: 13, menu: "입학", link: '/' },
    { id: 14, menu: "의료·복지시설", link: '/' },
    { id: 15, menu: "조직안내", link: '/' },
    { id: 16, menu: "캠퍼스맵", link: '/' },
    { id: 17, menu: "포털", link: '/' },
    { id: 18, menu: "학사정보", link: '/' },
    { id: 19, menu: "학생상담", link: '/' },
    { id: 20, menu: "학생자치기구", link: '/' },
    { id: 21, menu: "동아리", link: '/' },

]


const Menu = () => {
    return (
        <section className='Menu'>
            <div className="inner">
                {
                    BARO.map(yo => {
                        return (
                            <div>{yo.icon}{yo.menu}</div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Menu;