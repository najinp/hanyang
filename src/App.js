import './App.css'
import React from 'react'
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import { Routes, Route } from 'react-router-dom';
import Sub01 from './components/Sub01';
import Sub02 from './components/Sub02';
import Sub03 from './components/Sub03';
import Sub04 from './components/Sub04';
import Sub05 from './components/Sub05';
import Sub06 from './components/Sub06';
import Sub07 from './components/Sub07';





const App = () => {
  const RORO = [
    { id: 0, tit: "KAIST", des: "우리는 인류의 행복과 번영을 위해 교육하고 연구하며 혁신을 이어갑니다. KAIST는 깊이 있는 이론과 응용력을 갖춘 과학기술 인재를 양성하고 과학기술 혁신을 위한 기초연구, 융복합연구를 수행합니다. 산학연 협업을 통해 새로운 가치창출에 기여했으며 국가 경제발전을 이끌어왔습니다. 우리의 교육, 연구, 혁신은 대한민국의 경제발전과 과학계의 지경을 세계로 더욱 넓혀갈 것입니다.", link: "/sub01" },
    { id: 1, tit: "입학안내", des: "과학기술분야에 전문성을 갖추고, 지식탐구가 즐거운 자기주도적 학생 새로운 길을 개척하려는 열정과 도전의지를 가진 학생 높은 윤리의식과 협력 정신으로 국가와 사회, 인류에 기여하려는 학생을 선발하고자 합니다.", link: "/sub02" },
    { id: 2, tit: "교육", des: "따뜻한 가슴을 가진 과학도가 세상을 바꿉니다. 배우고 체득하여 온전하게 자신의 것으로 만든 지식은 새로운 가치 창출의 밑바탕이 됩니다. 이를 위해, 학습자 중심의 창의적인 교수학습방법을 적극 활용합니다. 자연과학, 응용공학, 생명과학, 인문사회, 기술경영을 아우르는 5개 단과대학에 소속된 7개 학부 · 27개 학과 · 43개 프로그램 · 7개 부전공을 운영해 수월성과 창의성을 고루 갖춘 인재를 양성합니다.", link: "/sub03" },
    { id: 3, tit: "연구", des: "KAIST 연구 개발 역사는 대한민국 과학기술 혁신의 역사입니다. KAIST의 기초 및 응용 연구는 한국의 산업화와 과학기술 발전을 이끌었고 세계 시장을 선도하는 정보통신산업의 토대가 되었습니다.", link: "/sub04" },
    { id: 4, tit: "대학생활", des: "KAIST라는 물리적, 정서적 울타리가 주는 안정감 속에서 구성원들은 보고 듣고 경험할 수 있는 많은 것을 누립니다. 다양성이 더 좋은 세상을 만들 수 있다는 믿음 아래 학생들은 국적, 인종, 성별의 구분 없이 활동하며 서로의 다른 모습을 통해 생각의 경계를 넓혀갑니다. 우리는 연구와 학업에 집중할 수 있는 환경을 제공하기 위해 노력합니다. 그러나 더 큰 목적은 모든 구성원의 삶을 응원하는 공간을 만들어가는 것입니다.", link: "/sub05" },

  ];


  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<MainVisual content={RORO} />} />
        <Route path='/sub01' element={<Sub01 content={RORO} />} />
        <Route path='/sub02' element={<Sub02 content={RORO} />} />
        <Route path='/sub03' element={<Sub03 content={RORO} />} />
        <Route path='/sub04' element={<Sub04 content={RORO} />} />
        <Route path='/sub05' element={<Sub05 content={RORO} />} />
        <Route path='/sub06' element={<Sub06 />} />
        <Route path='/sub07' element={<Sub07 />} />
      </Routes>
    </Wrapper >
  )
}

export default App;