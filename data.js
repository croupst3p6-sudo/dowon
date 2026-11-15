/**
 * =========================================================================
 * ⚙️ 도원시스템 홈페이지 통합 데이터 관리 파일 (data.js) ⚙️
 * =========================================================================
 * 
 * 도원시스템의 최신 제품, 단종/중고 기기, 부품, 시공사례, 에러코드 진단 DB 및
 * 자주 묻는 질문(FAQ), 고객 후기 데이터가 포함되어 있습니다.
 * =========================================================================
 */

// -------------------------------------------------------------------------
// 1. 판매 및 취급 제품 목록 (신품 / 중고기기 / 순정부품 및 PCB)
// -------------------------------------------------------------------------
const PRODUCTS = [
    // [1] 신규 시스템에어컨
    {
        id: "p1",
        category: "new",
        categoryName: "신품 시스템에어컨",
        name: "삼성 무풍 시스템에어컨 4Way",
        type: "천장형 4Way",
        desc: "직바람 없이 은은하고 쾌적한 15,000여 개 마이크로홀 냉방. 병원, 카페, 고급 아파트 인기 모델.",
        specs: ["에너지 소비효율 1등급", "무풍 지능 냉방", "PM 1.0 공기청정 필터킷"],
        price: "견적 상담 문의",
        badge: "베스트셀러",
        image: "samsung-windfree.png"
    },
    {
        id: "p2",
        category: "new",
        categoryName: "신품 시스템에어컨",
        name: "LG 휘센 듀얼베인 4Way",
        type: "천장형 4Way 프리미엄",
        desc: "두 개의 날개(듀얼베인)로 바닥부터 천장까지 정밀 기류 제어. 6가지 맞춤 공간 기류.",
        specs: ["인버터 절전 압축기", "인체감지 센서 절전", "고온 자동 살균"],
        price: "견적 상담 문의",
        badge: "추천 모델",
        image: "lg1.jpg"
    },
    {
        id: "p3",
        category: "new",
        categoryName: "신품 시스템에어컨",
        name: "삼성 360 원형 시스템에어컨",
        type: "원형 카세트 360",
        desc: "사각지대 없는 360도 전방향 기류로 공간 전체를 균일하게 냉난방. 트렌디한 인테리어 완성.",
        specs: ["사각지대 제로 기류", "부스터 팬 기술", "원형/사각 판넬 선택 가능"],
        price: "견적 상담 문의",
        badge: "디자인 특화",
        image: "samsung-360.png"
    },
    {
        id: "p4",
        category: "new",
        categoryName: "신품 시스템에어컨",
        name: "LG 휘센 1Way 시스템에어컨",
        type: "천장형 1Way",
        desc: "낮은 천장고에도 슬림하게 매립 가능. 아파트 각 방 및 소형 오피스, 오피스텔 최적화 모델.",
        specs: ["슬림 컴팩트 설계", "초저소음 운전", "자동 건조 기능"],
        price: "견적 상담 문의",
        badge: "주거형 1위",
        image: "lg3.jpg"
    },
    {
        id: "p5",
        category: "new",
        categoryName: "신품 시스템에어컨",
        name: "LG 대형 상업용 스탠드 냉난방기",
        type: "상업용 인버터 스탠드",
        desc: "최대 20m 롱파워 기류로 넓고 깊은 대형 식당, 공장, 강당을 빠르게 냉난방합니다.",
        specs: ["강력 롱파워 바람", "고효율 스크롤 압축기", "상업용 내구성 강화"],
        price: "견적 상담 문의",
        badge: "상업용 베스트",
        image: "lg2.jpg"
    },
    {
        id: "p6",
        category: "new",
        categoryName: "신품 시스템에어컨",
        name: "LG 원형 360 시스템에어컨",
        type: "라운드 카세트",
        desc: "감각적인 라운드 디자인과 정밀한 냉난방 성능으로 고급 갤러리 및 로비에 안성맞춤.",
        specs: ["곡면 기류 토출", "프리미엄 세라믹 화이트", "스마트 씽큐 연동"],
        price: "견적 상담 문의",
        badge: "인테리어",
        image: "LG4.jpg"
    }
];

// -------------------------------------------------------------------------
// 2. 시공 및 수리 사례 목록 (PORTFOLIO_ITEMS)
// ※ 사진 교체 방법: images/portfolio/ 폴더 안의 case-1.jpg ~ case-6.jpg 파일을
//    같은 이름으로 덮어쓰시면 코드 수정 없이 홈페이지 사진이 바로 바뀝니다.
// -------------------------------------------------------------------------
const PORTFOLIO_ITEMS = [
    {
        id: "c1",
        categoryKey: "leak",
        category: "냉매누설 내압수리",
        shortLabel: "냉매누설 내압수리현장",
        title: "냉매누설 내압수리현장",
        location: "수도권 현장",
        date: "2026-10-18",
        desc: "질소 내압 테스트 및 미세 냉매 누설 정밀 탐지 후 배관 용접 및 보온 마감 수리 완료.",
        image: "portfolio/case-1-1.jpg",
        photos: [
            "portfolio/case-1-1.jpg",
            "portfolio/case-1-2.jpg",
            "portfolio/case-1-3.jpg",
            "portfolio/case-1-4.jpg",
            "portfolio/case-1-5.jpg",
            "portfolio/case-1-6.jpg",
            "portfolio/case-1-7.jpg",
            "portfolio/case-1-8.jpg",
            "portfolio/case-1-9.jpg"
        ],
        tags: ["LG Multi V", "CH21", "인버터콤프", "당일수리"]
    },
    {
        id: "c2",
        categoryKey: "leak",
        category: "결로·누수 해결",
        shortLabel: "시스템에어컨 결로누수 해결 현장",
        title: "시스템에어컨 결로누수 해결 현장",
        location: "수도권 현장",
        date: "2026-10-05",
        desc: "천장 매립 배관 보온재 손상 및 결로 누수 구간 정밀 점검 후 보온재 재시공 및 완벽 마감 완료.",
        image: "portfolio/case-2-1.jpg",
        photos: [
            "portfolio/case-2-1.jpg",
            "portfolio/case-2-2.jpg",
            "portfolio/case-2-3.jpg",
            "portfolio/case-2-4.jpg",
            "portfolio/case-2-5.jpg",
            "portfolio/case-2-6.jpg",
            "portfolio/case-2-7.jpg",
            "portfolio/case-2-8.jpg",
            "portfolio/case-2-9.jpg"
        ],
        tags: ["삼성 DVM4", "단종모델", "E464해결", "비용90%절감"]
    },
    {
        id: "c3",
        categoryKey: "pcb",
        category: "단종 콤프 · PCB 수리",
        shortLabel: "제조사 단종 인버터 컴프레셔 PCB수리현장",
        title: "제조사 단종 인버터 컴프레셔 PCB수리현장",
        location: "수도권 현장",
        date: "2026-09-22",
        desc: "제조사 부품 단종 모델의 인버터 콤프레셔 교체 및 순정·재생 PCB 기판 수리로 완벽 복구 완료.",
        image: "portfolio/case-3-1.jpg",
        photos: [
            "portfolio/case-3-1.jpg",
            "portfolio/case-3-2.jpg",
            "portfolio/case-3-3.jpg",
            "portfolio/case-3-4.jpg",
            "portfolio/case-3-5.jpg",
            "portfolio/case-3-6.jpg"
        ],
        tags: ["신규설치", "원형360", "인테리어배관", "공조설계"]
    },
    {
        id: "c4",
        categoryKey: "leak",
        category: "미세 냉매 누설 탐지",
        shortLabel: "eev냉매누설 수리현장",
        title: "eev냉매누설 수리현장",
        location: "서울시 강남구 대치동",
        date: "2026-09-11",
        desc: "매년 가스를 충전해도 1~2주 만에 찬바람이 안 나오던 현장. 전자 누설 탐지기 및 형광액 정밀 진단으로 천장 U트랩 미세 크랙 발견 후 산소 용접 및 기밀 테스트 완료.",
        image: "portfolio/case-4-1.jpg",
        photos: [
            "portfolio/case-4-1.jpg",
            "portfolio/case-4-2.jpg",
            "portfolio/case-4-3.jpg",
            "portfolio/case-4-4.jpg"
        ],
        tags: ["미세누설", "가스완충", "질소기밀검사", "배관복구"]
    },
    {
        id: "c5",
        categoryKey: "comp",
        category: "시스템에어컨 완전분해세척",
        shortLabel: "완전분해세척 현장",
        title: "완전분해세척 현장",
        location: "서울시 서초구 반포동",
        date: "2026-08-30",
        desc: "인근 주민 소음 민원으로 식당 영업 중단 위기. 실외기 베어링 파손 팬모터를 야간 긴급 출동하여 저소음 순정 BLDC 모터로 교체하고 방진 패드 보강.",
        image: "portfolio/case-5-1.jpg",
        photos: [
            "portfolio/case-5-1.jpg",
            "portfolio/case-5-2.jpg",
            "portfolio/case-5-3.jpg",
            "portfolio/case-5-4.jpg",
            "portfolio/case-5-5.jpg",
            "portfolio/case-5-6.jpg",
            "portfolio/case-5-7.jpg",
            "portfolio/case-5-8.jpg",
            "portfolio/case-5-9.jpg",
            "portfolio/case-5-10.jpg",
            "portfolio/case-5-11.jpg",
            "portfolio/case-5-12.jpg",
            "portfolio/case-5-13.jpg"
        ],
        tags: ["야간긴급출동", "소음해결", "BLDC팬모터", "민원해결"]
    },
    {
        id: "c6",
        categoryKey: "pcb",
        category: "삼성 단종 PCB 수리",
        shortLabel: "삼성시스템에어컨 단종제품수리 현장",
        title: "삼성시스템에어컨 단종제품수리 현장",
        location: "경기도 파주시 운정동",
        date: "2026-08-14",
        desc: "거실 1대 + 안방 1대 + 침실 2대 총 4대 구성. 도배 마감 손상 없이 천장 타공 최소화 기술로 깔끔하게 1일 완공 및 당일 시운전 완료.",
        image: "portfolio/case-6-1.jpg",
        photos: [
            "portfolio/case-6-1.jpg",
            "portfolio/case-6-2.jpg",
            "portfolio/case-6-3.jpg",
            "portfolio/case-6-4.jpg",
            "portfolio/case-6-5.jpg",
            "portfolio/case-6-6.jpg",
            "portfolio/case-6-7.jpg"
        ],
        tags: ["단종제품수리", "삼성시스템에어컨", "PCB수리", "기판교체"]
    },
    {
        id: "c7",
        categoryKey: "pcb",
        category: "야간 긴급 출동 수리",
        shortLabel: "LG시스템 에어컨 야간긴급출동 현장",
        title: "LG시스템 에어컨 야간긴급출동 현장",
        location: "경기도 성남시 분당구",
        date: "2026-08-05",
        desc: "야간 인버터 PCB 및 EMI 보드 이상으로 실외기 가동 중단 발생. 긴급 출동하여 불량 기판 교체 및 정상 가동 복구 완료.",
        image: "portfolio/case-7-1.jpg",
        photos: [
            "portfolio/case-7-1.jpg",
            "portfolio/case-7-2.jpg",
            "portfolio/case-7-3.jpg",
            "portfolio/case-7-4.jpg",
            "portfolio/case-7-5.jpg"
        ],
        tags: ["야간긴급출동", "LG시스템에어컨", "인버터PCB", "긴급복구"]
    },
    {
        id: "c8",
        categoryKey: "comp",
        category: "삼성 시스템에어컨 수리",
        shortLabel: "삼성 시스템에어컨 수리 현장",
        title: "삼성 시스템에어컨 수리 현장",
        location: "서울시 송파구 문정동",
        date: "2026-07-22",
        desc: "삼성 DVM S 실외기 인버터 PCB 및 콤프레셔 이상 정밀 진단 후 부품 교체 및 시운전 정상화 완료.",
        image: "portfolio/case-8-1.jpg",
        photos: [
            "portfolio/case-8-1.jpg",
            "portfolio/case-8-2.jpg",
            "portfolio/case-8-3.jpg",
            "portfolio/case-8-4.jpg",
            "portfolio/case-8-5.jpg",
            "portfolio/case-8-6.jpg",
            "portfolio/case-8-7.jpg",
            "portfolio/case-8-8.jpg",
            "portfolio/case-8-9.jpg",
            "portfolio/case-8-10.jpg",
            "portfolio/case-8-11.jpg",
            "portfolio/case-8-12.jpg"
        ],
        tags: ["삼성시스템에어컨", "인버터PCB", "콤프교체", "수리현장"]
    },
    {
        id: "c9",
        categoryKey: "pcb",
        category: "LG 싱글 에어컨 수리",
        shortLabel: "LG싱글 에어컨수리 현장",
        title: "LG싱글 에어컨수리 현장",
        location: "경기도 용인시 수지구",
        date: "2026-07-10",
        desc: "상업용 LG 싱글 에어컨 실외기 인버터 PCB 불량 진단 후 기판 탈거·교체 및 정상 가동 테스트 완료.",
        image: "portfolio/case-9-1.jpg",
        photos: [
            "portfolio/case-9-1.jpg",
            "portfolio/case-9-2.jpg",
            "portfolio/case-9-3.jpg",
            "portfolio/case-9-4.jpg",
            "portfolio/case-9-5.jpg"
        ],
        tags: ["LG싱글에어컨", "실외기PCB", "기판교체", "상업용수리"]
    },
    {
        id: "c10",
        categoryKey: "pcb",
        category: "LG 구형 시스템에어컨 수리",
        shortLabel: "LG 구형 시스템에어컨 수리현장",
        title: "LG 구형 시스템에어컨 수리현장",
        location: "서울시 영등포구 여의도동",
        date: "2026-06-28",
        desc: "LG 구형 멀티V 실외기 인버터 컨트롤 박스 및 노이즈 필터·휴즈·기판 정밀 수리 및 정상 운전 복구 완료.",
        image: "portfolio/case-10-1.jpg",
        photos: [
            "portfolio/case-10-1.jpg",
            "portfolio/case-10-2.jpg",
            "portfolio/case-10-3.jpg",
            "portfolio/case-10-4.jpg",
            "portfolio/case-10-5.jpg",
            "portfolio/case-10-6.jpg",
            "portfolio/case-10-7.jpg",
            "portfolio/case-10-8.jpg",
            "portfolio/case-10-9.jpg"
        ],
        tags: ["LG구형시스템", "멀티V수리", "컨트롤박스", "기판수리"]
    },
    {
        id: "c11",
        categoryKey: "pcb",
        category: "인버터 보드 소손 복구",
        shortLabel: "LG인버터 보드 화재현장",
        title: "LG인버터 보드 화재현장",
        location: "경기도 고양시 일산동구",
        date: "2026-06-15",
        desc: "실외기 인버터 보드 및 단자대 소손·그을음 발생 현장. 소손 부품 및 배선 일체 교체 후 안전 점검 및 정상 운전 복구 완료.",
        image: "portfolio/case-11-1.jpg",
        photos: [
            "portfolio/case-11-1.jpg",
            "portfolio/case-11-2.jpg",
            "portfolio/case-11-3.jpg",
            "portfolio/case-11-4.jpg",
            "portfolio/case-11-5.jpg"
        ],
        tags: ["LG인버터보드", "화재소손복구", "단자대교체", "긴급수리"]
    },
    {
        id: "c12",
        categoryKey: "pcb",
        category: "오피스텔 시스템에어컨 수리",
        shortLabel: "오피스텔 시스템에어컨 수리현장",
        title: "오피스텔 시스템에어컨 수리현장",
        location: "서울시 마포구 상암동",
        date: "2026-06-02",
        desc: "오피스텔 실외기 인버터 보드 및 대용량 퓨즈 이상 정밀 점검 후 신품 기판 교체 및 정상 가동 확인 완료.",
        image: "portfolio/case-12-1.jpg",
        photos: [
            "portfolio/case-12-1.jpg",
            "portfolio/case-12-2.jpg",
            "portfolio/case-12-3.jpg",
            "portfolio/case-12-4.jpg"
        ],
        tags: ["오피스텔수리", "시스템에어컨", "인버터PCB", "시운전완료"]
    }
];

// -------------------------------------------------------------------------
// 3. LG / 삼성 에어컨 주요 에러코드 자가진단 데이터 (ERROR_CODES)
// -------------------------------------------------------------------------
const ERROR_CODES = [
    {
        brand: "LG",
        code: "CH05",
        name: "실내외기 통신 이상",
        symptom: "에어컨 바람이 나오지 않고 실외기가 돌지 않음",
        cause: "실내기와 실외기 간의 전원선/통신선 단선, 단락 또는 통신 기판(PCB) 불량",
        solution: "전원 차단기를 5분간 내렸다가 올려보세요. 지속될 경우 메인 통신 보드 점검 및 배선 점검이 필요합니다.",
        urgency: "출장점검 요망"
    },
    {
        brand: "LG",
        code: "CH21",
        name: "인버터 압축기(콤프) 과전류",
        symptom: "가동 후 3~5분 뒤 실외기 차단기가 떨어지거나 멈춤",
        cause: "인버터 압축기 내부 고착, 절연 파괴, 또는 인버터 IPM 파워 모듈 파손",
        solution: "압축기 코일 저항 측정 및 IPM 단락 점검이 필요합니다. 콤프레셔 파손 방지를 위해 가동을 즉시 중단하세요.",
        urgency: "긴급수리 권장"
    },
    {
        brand: "LG",
        code: "CH32",
        name: "압축기 토출 온도 과승",
        symptom: "찬바람이 약해지다가 정지하며 에러 깜빡임",
        cause: "냉매(가스) 누설로 인한 충전량 부족 또는 전자팽창밸브(EEV) 막힘",
        solution: "냉매 누설 부위를 탐지하여 용접 후 정량 가스 주입이 필수적입니다.",
        urgency: "출장점검 요망"
    },
    {
        brand: "LG",
        code: "CH53",
        name: "실내기 통신 이상 (신호 미수신)",
        symptom: "중앙 제어기 또는 벽면 리모컨 조작 불가",
        cause: "실내기 마이컴 회로 전원 불량 또는 통신 선로 접속 불량",
        solution: "실내기 필터 청소 후에도 발생 시 실내기 PCB 기판 전압 체크가 필요합니다.",
        urgency: "출장점검 요망"
    },
    {
        brand: "LG",
        code: "CH67",
        name: "실외기 팬모터 구동 이상",
        symptom: "실외기 팬이 돌지 않거나 끼익거리는 소음 발생",
        cause: "팬모터 내부 홀센서 고장, 모터 베어링 고착 또는 팬 PCB 드라이버 불량",
        solution: "팬 모터 또는 모터 드라이버 기판 교체가 필요합니다.",
        urgency: "긴급수리 권장"
    },
    {
        brand: "삼성",
        code: "E101 / E102",
        name: "실내외기간 통신 에러",
        symptom: "동작 표시등이 깜빡이며 실외기가 전혀 반응하지 않음",
        cause: "통신선 오결선, 노이즈 유입, 또는 실내/실외기 통신 IC 회로 손상",
        solution: "차단기를 리셋한 후 재가동해 보세요. 해결되지 않으면 통신 파트 기판 수리가 필요합니다.",
        urgency: "출장점검 요망"
    },
    {
        brand: "삼성",
        code: "E201 / E203",
        name: "실내기 대수 불일치 / 통신 미설정",
        symptom: "설치 직후 또는 보드 교체 후 전 기기 정지",
        cause: "실외기 옵션 코드 미입력, 어드레스 자동 설정 오류, 실내기 전원 꺼짐",
        solution: "실외기 메인보드 딥스위치 및 로터리스위치 어드레스 재설정이 필요합니다.",
        urgency: "전문엔지니어 필수"
    },
    {
        brand: "삼성",
        code: "E464",
        name: "인버터 압축기 IPM 과전류 에러",
        symptom: "실외기 콤프가 돌려고 웅- 소리가 나다가 차단기 떨어짐",
        cause: "인버터 전력 반도체(IPM) 소손, 콤프레셔 압축 불량 또는 기동 콘덴서 이상",
        solution: "IPM 파워 보드 교체 또는 인버터 콤프레셔 정밀 진단이 즉시 요구됩니다.",
        urgency: "긴급수리 권장"
    },
    {
        brand: "삼성",
        code: "E554",
        name: "가스 누설 판정 (냉매 전량 유출)",
        symptom: "송풍만 나오고 실외기 배관에 성에가 심하게 끼거나 전혀 시원하지 않음",
        cause: "배관 연결 플레어 너트 풀림, 진동 크랙 또는 증발기 핀 미세 누설",
        solution: "질소 가압 누설 검사를 진행한 뒤 용접 수리 및 진공 게이지 확인 후 R-410A 정량 주입.",
        urgency: "긴급수리 권장"
    }
];

// -------------------------------------------------------------------------
// 4. 자주 묻는 질문 (FAQ)
// -------------------------------------------------------------------------
const FAQS = [
    {
        q: "LG나 삼성 공식 서비스센터에서 단종되어 수리 불가 판정을 받았는데 수리가 가능한가요?",
        a: "네, 가능합니다! 도원시스템은 전·현직 제조사 엔지니어 출신으로 구성되어 있으며, 단종된 구형 멀티V, DVM 모델의 전용 순정 PCB 기판, 콤프레셔, 센서류를 다량 보유하고 있습니다. 전체 기기를 수천만 원 들여 바꾸실 필요 없이 고장 부위만 정밀 수리해 드립니다."
    },
    {
        q: "접수하면 당일 바로 방문 출장 수리가 가능한가요?",
        a: "네, 서울 전지역 및 인천, 일산, 파주, 김포, 부천 등 수도권 거점 엔지니어가 상시 출장 대기 중입니다. 오전 중 접수 시 대부분 당일 방문 진단 및 현장 긴급 수리가 가능합니다."
    },
    {
        q: "수리 비용이나 출장 견적은 어떻게 산정되나요?",
        a: "도원시스템은 과잉 수리를 절대 하지 않습니다. 현장 도착 후 디지털 게이지 및 전용 테스터기로 정밀 진단을 먼저 실시하고, 수리 항목과 정찰제 공임비를 고객님께 투명하게 설명드린 뒤 동의하에 작업을 진행합니다."
    },
    {
        q: "수리나 설치 시공 후 사후 A/S 보증 기간은 어떻게 되나요?",
        a: "도원시스템에서 교체한 순정 부품 및 수리 부위는 최대 1년간 무상 품질 보증(A/S)을 제공하며, 신규 설치 공사의 경우 2년간 배관 및 시공 하자 무상 보증서를 발급해 드립니다."
    },
    {
        q: "통화가 안 될 때 문자나 카톡으로도 상담받을 수 있나요?",
        a: "네, 현장 작업 중 통화가 어려울 경우 홈페이지 내 '문자(SMS) 문의'를 통해 연락처와 증상을 남겨주시면 확인 즉시 회신드립니다. 현장 사진(에러코드 화면, 실외기 명판 등)을 문자로 함께 보내주시면 더욱 정확한 안내가 가능합니다."
    }
];

// -------------------------------------------------------------------------
// 5. 고객 리얼 후기 (REVIEWS)
// -------------------------------------------------------------------------
const REVIEWS = [
    {
        name: "박*훈 님 (일산 대형 카페)",
        service: "LG 멀티V 콤프레셔 긴급 수리",
        date: "2026.10",
        rating: 5,
        content: "주말 한낮에 에어컨이 멈춰서 손님들 다 나갈 뻔했는데, 전화드린 지 1시간 만에 오셔서 콤프레셔 원인 짚어내고 저녁 장사 전에 완벽하게 살려주셨습니다. 생명의 은인이십니다!"
    },
    {
        name: "최*영 님 (용산구 오피스 빌딩 관리소장)",
        service: "삼성 DVM 구형 인버터 PCB 재생",
        date: "2026.09",
        rating: 5,
        content: "본사에서 단종이라고 교체 견적 4천만원 나왔었는데, 도원시스템에서 기판 부품 찾아내서 10분의 1도 안 되는 비용으로 고쳤습니다. 입주사분들도 다들 대만족합니다."
    },
    {
        name: "이*진 님 (파주 운정 힐스테이트 입주민)",
        service: "무풍 시스템에어컨 4대 신규 설치",
        date: "2026.08",
        rating: 5,
        content: "신축 아파트라 천장 손상될까 봐 걱정 많았는데 먼지 하나 안 날리게 보양 작업 철저히 하시고 배관도 완전 깔끔하게 숨겨주셨어요. 엔지니어님들이 진짜 친절하십니다."
    }
];
