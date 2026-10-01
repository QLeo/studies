window.ECON_DATA = {
  "version": 1,
  "chapters": [
    {
      "id": 1,
      "title": "금리와 돈의 흐름",
      "description": "돈의 가격과 중앙은행을 이해해요.",
      "connection": "기준금리 변화는 시중금리와 소비·투자에 영향을 줍니다. 다만 경제 상황에 따라 전달 속도와 크기는 달라집니다."
    },
    {
      "id": 2,
      "title": "물가와 경기",
      "description": "경제가 움직이는 신호를 읽어요.",
      "connection": "명목은 표시된 숫자, 실질은 물가를 고려한 구매력입니다. 월급과 물가를 함께 비교해 보세요."
    },
    {
      "id": 3,
      "title": "환율과 국제경제",
      "description": "우리 경제와 세계의 연결을 배워요.",
      "connection": "환율, 수출입, 대외자산을 함께 보면 해외 변화가 국내 경제에 미치는 영향을 이해할 수 있습니다."
    },
    {
      "id": 4,
      "title": "은행과 금융 시스템",
      "description": "은행의 역할과 금융위기를 알아봐요.",
      "connection": "은행은 예금으로 자금을 조달하고 대출합니다. 신뢰와 유동성이 흔들리면 자금 흐름도 막힐 수 있습니다."
    },
    {
      "id": 5,
      "title": "주식과 기업",
      "description": "기업의 가치와 주식시장을 읽어요.",
      "connection": "주가 ÷ EPS = PER. 숫자만 외우기보다 이익, 성장 전망, 위험을 함께 살펴보세요."
    },
    {
      "id": 6,
      "title": "채권과 신용",
      "description": "돈을 빌려주는 계약을 이해해요.",
      "connection": "일반적으로 신용위험이 높으면 투자자가 요구하는 수익률도 높아집니다."
    },
    {
      "id": 7,
      "title": "파생상품",
      "description": "선물과 옵션의 차이를 구분해요.",
      "connection": "선물은 계약상 의무, 옵션은 권리입니다. 스왑과 통화스왑은 국제경제 챕터에서 연결해 배웁니다."
    },
    {
      "id": 8,
      "title": "경제학 기본 원리",
      "description": "일상 속 선택을 경제적으로 생각해요.",
      "connection": "기회비용은 포기한 대안의 가치, 매몰비용은 이미 되돌릴 수 없는 비용입니다."
    },
    {
      "id": 9,
      "title": "금융시장과 고급 개념",
      "description": "시장의 구조와 기업 전략을 살펴봐요.",
      "connection": "기본 개념을 익힌 뒤 자금 조달과 기업 경쟁으로 확장해 보세요."
    }
  ],
  "terms": [
    {
      "id": "term-001",
      "chapter": 1,
      "name": "기준금리",
      "definition": "중앙은행이 정하는 금리의 기준점",
      "enabled": true,
      "explanation": "대출과 예금 금리의 출발점입니다. 기준금리가 오르면 시중금리도 올라가는 경향이 있지만 항상 같은 폭으로 움직이지는 않습니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-002",
      "chapter": 1,
      "name": "가산금리",
      "definition": "기준이 되는 금리에 위험도 등을 고려해 추가하는 금리",
      "enabled": true,
      "explanation": "대출 기준이 3%이고 가산금리가 2%라면 대출금리는 5%입니다. 신용도와 은행 비용 등에 따라 달라집니다.",
      "relatedIds": [
        "term-010",
        "term-003",
        "term-004"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-003",
      "chapter": 1,
      "name": "고정금리",
      "definition": "일정 기간 금리가 변하지 않는 방식",
      "enabled": true,
      "explanation": "연 4% 고정금리로 계약했다면 약정된 기간에는 시장금리가 올라가도 이자율은 그대로입니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-004"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-004",
      "chapter": 1,
      "name": "변동금리",
      "definition": "시장 상황에 따라 금리가 바뀌는 방식",
      "enabled": true,
      "explanation": "기준이 되는 금리가 오르면 내 대출 이자율도 약정된 주기에 맞춰 바뀝니다. 금리가 내려가면 부담이 줄 수도 있습니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-005",
      "chapter": 1,
      "name": "명목금리",
      "definition": "물가상승률을 고려하지 않은 겉으로 보이는 금리",
      "enabled": true,
      "explanation": "예금 금리가 4%이고 물가가 3% 오르면 구매력 기준 수익은 대략 1%입니다. 표시된 4%가 명목금리입니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-006",
      "chapter": 1,
      "name": "표면금리",
      "definition": "채권에 표시되어 있는 약속된 이자율",
      "enabled": true,
      "explanation": "액면가 100만 원, 표면금리 3% 채권은 보통 연 3만 원의 이자를 약속합니다. 실제 매입가격에 따른 수익률과는 다릅니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-007",
      "chapter": 1,
      "name": "제로금리정책",
      "definition": "중앙은행이 정책금리를 0% 가까이 낮추는 정책",
      "enabled": true,
      "explanation": "경기가 약할 때 돈을 빌리는 부담을 줄이려는 정책입니다. 금리를 낮춰도 소비와 투자가 바로 늘어난다는 보장은 없습니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-008",
      "chapter": 1,
      "name": "장단기금리차",
      "definition": "장기금리와 단기금리의 차이",
      "enabled": true,
      "explanation": "10년물 금리가 4%, 2년물 금리가 3%라면 차이는 1%포인트입니다. 차이의 변화로 시장의 경기 전망을 살펴봅니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-009",
      "chapter": 1,
      "name": "만기수익률",
      "definition": "채권을 만기까지 가지고 있을 때 기대되는 수익률",
      "enabled": true,
      "explanation": "채권 가격, 이자, 원금 상환을 모두 고려합니다. 계산된 수익률에는 이자 재투자와 채무 이행 등의 가정이 포함됩니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-010",
      "chapter": 1,
      "name": "중앙은행",
      "definition": "돈과 금리를 관리하는 국가의 핵심 금융기관",
      "enabled": true,
      "explanation": "한국의 중앙은행은 한국은행입니다. 통화정책을 운영하고 화폐를 발행하지만 개인에게 일반 예금계좌를 제공하는 은행은 아닙니다.",
      "relatedIds": [
        "term-002",
        "term-003",
        "term-004"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-011",
      "chapter": 1,
      "name": "양적완화정책",
      "definition": "중앙은행이 채권 등을 사들이며 시장에 돈을 공급하는 정책",
      "enabled": true,
      "explanation": "금리 인하만으로 부족할 때 중앙은행이 채권 등을 매입합니다. 금융시장에 자금을 공급하고 장기금리에 영향을 주려는 정책입니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-012",
      "chapter": 1,
      "name": "본원통화",
      "definition": "중앙은행이 직접 공급하는 돈의 기반",
      "enabled": true,
      "explanation": "현금과 은행이 중앙은행에 보유한 지급준비금 등이 돈의 기반이 됩니다. 시중 예금 전체와는 범위가 다릅니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-013",
      "chapter": 1,
      "name": "유동성",
      "definition": "자산을 얼마나 쉽게 현금처럼 사용할 수 있는지",
      "enabled": true,
      "explanation": "현금은 바로 사용할 수 있지만 집은 팔 때까지 시간이 걸립니다. 유동성은 시장의 자금 사정을 뜻하기도 합니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-014",
      "chapter": 1,
      "name": "기축통화",
      "definition": "국제 거래와 외환보유에 널리 쓰이는 핵심 통화",
      "enabled": true,
      "explanation": "미국 달러처럼 여러 나라에서 결제와 외환보유에 널리 사용하는 통화입니다. 모든 국가의 통화를 대체한다는 뜻은 아닙니다.",
      "relatedIds": [
        "term-010",
        "term-002",
        "term-003"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-015",
      "chapter": 2,
      "name": "물가지수",
      "definition": "전체적인 물가 수준을 숫자로 나타낸 것",
      "enabled": true,
      "explanation": "여러 상품과 서비스의 가격을 묶어 물가 움직임을 봅니다. 지수가 100에서 103이 되면 해당 바구니의 가격이 3% 오른 셈입니다.",
      "relatedIds": [
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-016",
      "chapter": 2,
      "name": "디플레이션",
      "definition": "전반적인 물가가 지속적으로 떨어지는 현상",
      "enabled": true,
      "explanation": "일부 상품의 할인과 다릅니다. 경제 전반의 가격이 계속 하락하면 소비를 미루고 기업의 매출도 줄어들 수 있습니다.",
      "relatedIds": [
        "term-015",
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-017",
      "chapter": 2,
      "name": "애그플레이션",
      "definition": "농산물 가격 상승이 전체 물가 상승으로 이어지는 현상",
      "enabled": true,
      "explanation": "곡물 가격이 오르면 사료, 고기, 가공식품 가격에도 영향을 줍니다. 농산물 가격에서 시작된 물가 상승을 가리킵니다.",
      "relatedIds": [
        "term-015",
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-018",
      "chapter": 2,
      "name": "경기동향지수",
      "definition": "경제가 좋아지는지 나빠지는지 보여주는 지표",
      "enabled": true,
      "explanation": "여러 지표를 종합해 경기의 방향을 읽습니다. 선행·동행·후행 지표를 구분해 보면 경기의 시점을 이해하기 쉽습니다.",
      "relatedIds": [
        "term-015",
        "term-024"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-019",
      "chapter": 2,
      "name": "고통지수",
      "definition": "물가상승률과 실업률 등을 이용해 경제적 어려움을 나타내는 지표",
      "enabled": true,
      "explanation": "가장 흔한 계산은 물가상승률과 실업률을 더하는 방식입니다. 사람마다 느끼는 어려움을 완벽하게 나타내지는 못합니다.",
      "relatedIds": [
        "term-015",
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-020",
      "chapter": 2,
      "name": "골디락스 경제",
      "definition": "과열도 침체도 아닌 적당한 성장 상태",
      "enabled": true,
      "explanation": "경제가 성장하면서 물가가 지나치게 오르지 않는 상황입니다. '너무 뜨겁지도 차갑지도 않은' 경제라는 비유입니다.",
      "relatedIds": [
        "term-015",
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-021",
      "chapter": 2,
      "name": "더블딥",
      "definition": "경기 회복 후 다시 침체에 빠지는 현상",
      "enabled": true,
      "explanation": "침체 뒤 잠시 회복했다가 다시 침체에 빠집니다. 경기 흐름이 W자처럼 두 번 내려가는 모습에 빗댑니다.",
      "relatedIds": [
        "term-015",
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-022",
      "chapter": 2,
      "name": "디커플링",
      "definition": "서로 같이 움직이던 경제·시장이 따로 움직이는 현상",
      "enabled": true,
      "explanation": "미국 주가가 올라도 다른 나라 주가는 떨어질 수 있습니다. 원래 같이 움직이던 경제나 시장의 동조화가 약해진 상황입니다.",
      "relatedIds": [
        "term-015",
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-023",
      "chapter": 2,
      "name": "고용률",
      "definition": "생산가능인구 중 실제 취업자의 비율",
      "enabled": true,
      "explanation": "15세 이상 인구 100명 중 취업자가 60명이면 고용률은 60%입니다. 실업률은 경제활동인구를 분모로 사용합니다.",
      "relatedIds": [
        "term-015",
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-024",
      "chapter": 2,
      "name": "실질임금",
      "definition": "물가를 고려한 임금의 실제 구매력",
      "enabled": true,
      "explanation": "월급이 5% 올라도 물가가 7% 오르면 살 수 있는 양은 줄 수 있습니다. 실제 구매력으로 보는 임금입니다.",
      "relatedIds": [
        "term-015",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-025",
      "chapter": 2,
      "name": "자발적 실업",
      "definition": "일할 의사와 능력이 있지만 제시된 임금·조건을 받아들이지 않아 구직 중인 상태",
      "enabled": true,
      "explanation": "현재 제시된 임금이나 근로조건을 받아들이지 않고 구직하는 경우입니다. 일할 의사 없이 쉬는 비경제활동인구와 구별합니다.",
      "relatedIds": [
        "term-015",
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-026",
      "chapter": 2,
      "name": "낙수효과",
      "definition": "부유층·대기업의 성장이 다른 계층으로 퍼진다는 주장/경제적 가설",
      "enabled": true,
      "explanation": "상위 계층의 투자와 소비가 일자리와 소득 증가로 퍼진다는 주장입니다. 효과는 조건에 따라 달라져 자동적인 법칙은 아닙니다.",
      "relatedIds": [
        "term-015",
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-027",
      "chapter": 2,
      "name": "소득주도성장",
      "definition": "가계소득 증가를 통해 소비와 성장을 촉진하려는 정책 접근",
      "enabled": true,
      "explanation": "임금과 가계소득을 늘리면 소비가 늘고 경제성장을 도울 수 있다는 접근입니다. 비용과 고용 등에 대한 영향도 함께 살펴야 합니다.",
      "relatedIds": [
        "term-015",
        "term-024",
        "term-018"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-028",
      "chapter": 3,
      "name": "평가절하",
      "definition": "고정환율제에서 당국이 자국 통화의 공식 가치를 낮추는 조치",
      "enabled": true,
      "explanation": "고정환율제에서 정부가 자국 통화의 공식 가치를 낮추는 조치입니다. 변동환율 시장에서의 가치 하락은 보통 절하라고 구분합니다.",
      "relatedIds": [
        "term-014",
        "term-029",
        "term-030"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-029",
      "chapter": 3,
      "name": "외환보유액",
      "definition": "중앙은행·정부가 보유한 외화자산",
      "enabled": true,
      "explanation": "해외 지급과 외환시장 안정에 사용할 수 있도록 당국이 보유한 대외자산입니다. 현금뿐 아니라 외화증권 등도 포함합니다.",
      "relatedIds": [
        "term-014",
        "term-030"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-030",
      "chapter": 3,
      "name": "경상수지",
      "definition": "국가가 해외와 상품·서비스 등을 거래해 벌고 쓴 돈의 차이",
      "enabled": true,
      "explanation": "상품·서비스 거래, 투자소득, 이전소득 등을 합친 대외거래 수지입니다. 상품 수출입 차이인 무역수지보다 넓은 개념입니다.",
      "relatedIds": [
        "term-014",
        "term-029"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-031",
      "chapter": 3,
      "name": "대외의존도",
      "definition": "한 나라 경제가 해외 거래에 얼마나 의존하는지",
      "enabled": true,
      "explanation": "보통 수출과 수입의 합을 GDP로 나누어 살펴봅니다. 비율이 높으면 해외 수요와 공급 변화의 영향을 많이 받을 수 있습니다.",
      "relatedIds": [
        "term-014",
        "term-029",
        "term-030"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-032",
      "chapter": 3,
      "name": "환율조작국",
      "definition": "환율에 부당하게 개입한다고 특정 국가가 지정한 국가",
      "enabled": true,
      "explanation": "일정 기준에 따라 다른 나라의 환율정책을 문제 삼아 지정하는 명칭입니다. 지정 주체와 기준을 함께 확인해야 합니다.",
      "relatedIds": [
        "term-014",
        "term-029",
        "term-030"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-033",
      "chapter": 3,
      "name": "보호무역주의",
      "definition": "관세 등으로 국내 산업을 해외 경쟁으로부터 보호하려는 정책",
      "enabled": true,
      "explanation": "수입품에 관세를 매기거나 수입량을 제한합니다. 국내 산업을 보호할 수 있지만 소비자 부담이나 무역 갈등도 생길 수 있습니다.",
      "relatedIds": [
        "term-014",
        "term-029",
        "term-030"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-034",
      "chapter": 3,
      "name": "통화스왑",
      "definition": "서로 다른 통화를 일정 조건으로 교환하는 계약",
      "enabled": true,
      "explanation": "두 당사자가 서로 다른 통화를 교환하고 나중에 되돌리는 조건을 정합니다. 중앙은행 간 계약은 외화 유동성 확보에 도움을 줄 수 있습니다.",
      "relatedIds": [
        "term-014",
        "term-029",
        "term-030"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-035",
      "chapter": 3,
      "name": "스왑",
      "definition": "서로 다른 현금흐름이나 금융조건을 교환하는 계약",
      "enabled": true,
      "explanation": "한쪽의 고정금리 이자와 다른 쪽의 변동금리 이자를 바꾸는 것이 한 예입니다. 계약 조건과 상대방 위험을 함께 봐야 합니다.",
      "relatedIds": [
        "term-014",
        "term-029",
        "term-030"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-036",
      "chapter": 3,
      "name": "이중통화채",
      "definition": "원금과 이자를 서로 다른 통화로 지급할 수 있는 채권",
      "enabled": true,
      "explanation": "이자는 달러, 원금은 다른 통화로 받는 식의 구조가 가능합니다. 통화 간 환율 변화가 실제 수익에 영향을 줍니다.",
      "relatedIds": [
        "term-014",
        "term-029",
        "term-030"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-037",
      "chapter": 3,
      "name": "금본위제",
      "definition": "통화가치를 금과 연결하는 화폐제도",
      "enabled": true,
      "explanation": "정해진 양의 금으로 화폐를 바꿀 수 있게 하는 제도입니다. 화폐 공급이 금 보유량에 제약받을 수 있습니다.",
      "relatedIds": [
        "term-014",
        "term-029",
        "term-030"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-038",
      "chapter": 3,
      "name": "빅맥지수",
      "definition": "빅맥 가격으로 국가 간 구매력을 비교하는 지표",
      "enabled": true,
      "explanation": "같은 빅맥의 나라별 가격을 비교해 통화의 구매력을 가늠합니다. 세금과 임대료 등도 달라 정밀한 적정 환율은 아닙니다.",
      "relatedIds": [
        "term-014",
        "term-029",
        "term-030"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-039",
      "chapter": 4,
      "name": "예대율",
      "definition": "은행 예금 대비 대출 규모의 비율",
      "enabled": true,
      "explanation": "예금 100억 원에 대출 80억 원이면 단순 예대율은 80%입니다. 실제 규제 비율은 포함 항목과 계산 기준에 따라 달라집니다.",
      "relatedIds": [
        "term-040",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-040",
      "chapter": 4,
      "name": "뱅크런",
      "definition": "사람들이 한꺼번에 은행에서 돈을 인출하는 현상",
      "enabled": true,
      "explanation": "은행이 위험하다는 불안 때문에 예금자가 동시에 인출합니다. 정상적인 은행도 단기간에 현금을 마련하기 어려워질 수 있습니다.",
      "relatedIds": [
        "term-039",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-041",
      "chapter": 4,
      "name": "신용경색",
      "definition": "금융기관이 대출을 꺼려 돈이 잘 돌지 않는 상태",
      "enabled": true,
      "explanation": "위험을 우려한 금융기관이 대출을 줄이면 기업과 가계가 자금을 구하기 힘들어집니다. 금리가 낮아도 대출이 잘 안 나올 수 있습니다.",
      "relatedIds": [
        "term-039",
        "term-040"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-042",
      "chapter": 4,
      "name": "자기자본비율",
      "definition": "자산 대비 자기자본의 비율; 은행 BIS 비율은 위험가중자산 대비 자기자본",
      "enabled": true,
      "explanation": "일반 기업은 자산 중 자기자본의 비중을 봅니다. 은행의 BIS 비율은 위험가중자산 대비 적격 자기자본으로 계산합니다.",
      "relatedIds": [
        "term-039",
        "term-040",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-043",
      "chapter": 4,
      "name": "부채비율",
      "definition": "자기자본 대비 부채 규모",
      "enabled": true,
      "explanation": "자기자본 50억 원에 부채 100억 원이면 부채비율은 200%입니다. 업종별 특성과 함께 비교해야 합니다.",
      "relatedIds": [
        "term-039",
        "term-040",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-044",
      "chapter": 4,
      "name": "금산분리",
      "definition": "금융자본과 산업자본의 결합을 제한하는 원칙",
      "enabled": true,
      "explanation": "산업자본이 은행을 지배할 때 생길 수 있는 이해충돌을 제한하려는 원칙입니다. 구체적인 소유 제한은 제도마다 다릅니다.",
      "relatedIds": [
        "term-039",
        "term-040",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-045",
      "chapter": 4,
      "name": "단기금융시장",
      "definition": "만기가 짧은 자금을 거래하는 시장",
      "enabled": true,
      "explanation": "대체로 만기 1년 이내 자금을 거래합니다. 금융기관은 일시적으로 남거나 부족한 돈을 이 시장에서 조절합니다.",
      "relatedIds": [
        "term-039",
        "term-040",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-046",
      "chapter": 4,
      "name": "양도성예금증서(CD)",
      "definition": "은행이 발행하고 시장에서 거래할 수 있는 예금증서",
      "enabled": true,
      "explanation": "은행 정기예금을 증서로 만들고 만기 전에 양도할 수 있게 한 상품입니다. 일반 예금과 거래 구조가 다릅니다.",
      "relatedIds": [
        "term-039",
        "term-040",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-047",
      "chapter": 4,
      "name": "종합자산관리계좌(CMA)",
      "definition": "단기 금융상품 등에 투자하면서 입출금 기능을 제공하는 계좌",
      "enabled": true,
      "explanation": "맡긴 돈을 단기상품 등에 운용하며 입출금 편의를 제공합니다. 종류별 운용 방식과 예금자보호 여부가 다릅니다.",
      "relatedIds": [
        "term-039",
        "term-040",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-048",
      "chapter": 4,
      "name": "마이크로크레디트",
      "definition": "저소득층 등에 제공하는 소액 금융",
      "enabled": true,
      "explanation": "담보가 부족한 저소득층이나 영세사업자에게 작은 금액의 금융을 제공합니다. 자립과 사업 활동을 돕는 목적이 있습니다.",
      "relatedIds": [
        "term-039",
        "term-040",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-049",
      "chapter": 4,
      "name": "워크아웃",
      "definition": "부실기업을 청산하지 않고 채권단과 함께 구조조정하는 과정",
      "enabled": true,
      "explanation": "채권단이 상환 일정과 채무 조건 등을 조정해 기업의 회생을 돕습니다. 빚이 모두 사라지는 것은 아닙니다.",
      "relatedIds": [
        "term-039",
        "term-040",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-050",
      "chapter": 4,
      "name": "연방준비제도(FRS) / 연방준비은행(FRB)",
      "definition": "미국의 중앙은행 시스템과 이를 구성하는 지역 연방준비은행",
      "enabled": true,
      "explanation": "FRS는 미국 중앙은행 체계이고 FRB는 지역 연방준비은행을 가리킵니다. 연방준비제도 이사회와 지역 은행의 역할을 구분합니다.",
      "relatedIds": [
        "term-039",
        "term-040",
        "term-041"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-051",
      "chapter": 5,
      "name": "주가지수",
      "definition": "여러 주식의 움직임을 하나의 숫자로 나타낸 지표",
      "enabled": true,
      "explanation": "코스피처럼 여러 종목의 가격 움직임을 묶은 숫자입니다. 지수가 올라가도 모든 종목이 오른 것은 아닙니다.",
      "relatedIds": [
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-052",
      "chapter": 5,
      "name": "주가수익비율(PER)",
      "definition": "주가를 주당순이익(EPS)으로 나눈 배수",
      "enabled": true,
      "explanation": "주가가 10만 원, EPS가 1만 원이면 PER는 10배입니다. 낮다고 무조건 싼 주식은 아니며 적자기업은 해석이 어렵습니다.",
      "relatedIds": [
        "term-051",
        "term-053"
      ],
      "aliases": [
        "주가수익률",
        "PER"
      ],
      "difficulty": "기초"
    },
    {
      "id": "term-053",
      "chapter": 5,
      "name": "주당순이익(EPS)",
      "definition": "회사의 이익을 주식 한 주당으로 계산한 값",
      "enabled": true,
      "explanation": "순이익 1억 원을 주식 1만 주로 나누면 단순 EPS는 1만 원입니다. 실제 계산에는 가중평균 주식 수 등을 씁니다.",
      "relatedIds": [
        "term-051",
        "term-052"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-054",
      "chapter": 5,
      "name": "기업공개(IPO)",
      "definition": "기업이 주식을 일반 투자자에게 처음 공개적으로 모집·매출하는 것",
      "enabled": true,
      "explanation": "기업이 투자자들에게 주식을 공개적으로 모집·매출합니다. 증시 상장과 함께 이뤄지는 경우가 많지만 둘의 뜻은 같지 않습니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-055",
      "chapter": 5,
      "name": "공매도",
      "definition": "주식을 빌려 먼저 판 뒤 나중에 사서 갚는 거래",
      "enabled": true,
      "explanation": "빌린 주식을 10만 원에 팔고 8만 원에 사서 갚으면 비용 전 2만 원이 남습니다. 가격이 오르면 손실이 커질 수 있습니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-056",
      "chapter": 5,
      "name": "증거금",
      "definition": "거래 이행을 보증하기 위해 미리 맡기는 돈",
      "enabled": true,
      "explanation": "계약 이행을 보증하기 위해 맡기는 담보 성격의 돈입니다. 선물 등에서는 가격 변화에 따라 추가 납부가 필요할 수 있습니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-057",
      "chapter": 5,
      "name": "스톡옵션",
      "definition": "정해진 가격으로 회사 주식을 살 수 있는 권리",
      "enabled": true,
      "explanation": "직원이 약정된 가격에 회사 주식을 살 수 있는 권리입니다. 시장가격이 행사가격보다 낮으면 행사하지 않을 수 있습니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-058",
      "chapter": 5,
      "name": "M&A",
      "definition": "기업의 인수와 합병",
      "enabled": true,
      "explanation": "회사를 사들이거나 두 회사를 합치는 거래입니다. 규모 확대, 기술 확보 등 목적이 있지만 통합 비용도 생깁니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-059",
      "chapter": 5,
      "name": "지주회사",
      "definition": "다른 회사의 지분을 보유하며 계열사를 지배하는 회사",
      "enabled": true,
      "explanation": "다른 기업의 주식을 보유해 경영을 지배하는 회사입니다. 직접 제품을 생산하는 사업회사와 구분해 볼 수 있습니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-060",
      "chapter": 5,
      "name": "신주인수권부사채(BW)",
      "definition": "새 주식을 살 권리가 붙어 있는 채권",
      "enabled": true,
      "explanation": "채권에 새 주식을 약정 가격에 살 권리가 붙습니다. 권리를 행사하면 보통 별도의 주식 매입대금을 납부합니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-061",
      "chapter": 5,
      "name": "전환사채(CB)",
      "definition": "일정 조건에서 주식으로 바꿀 수 있는 채권",
      "enabled": true,
      "explanation": "투자자는 약정 조건에 따라 채권을 주식으로 바꿀 수 있습니다. 전환되면 기업의 주식 수가 늘어날 수 있습니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-062",
      "chapter": 5,
      "name": "상장지수펀드(ETF)",
      "definition": "지수 등을 추종하며 주식처럼 거래되는 펀드",
      "enabled": true,
      "explanation": "주식시장에 상장되어 거래되는 펀드입니다. 지수를 추종하는 상품이 많지만 모든 ETF의 전략과 위험이 같은 것은 아닙니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-063",
      "chapter": 5,
      "name": "뮤추얼펀드",
      "definition": "투자자 돈을 모아 운용하는 펀드 형태",
      "enabled": true,
      "explanation": "여러 투자자의 돈을 모아 주식이나 채권 등에 운용합니다. 투자자는 펀드의 성과에 따라 이익과 손실을 나눕니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-064",
      "chapter": 5,
      "name": "헤지펀드",
      "definition": "다양한 전략을 적극적으로 사용하는 사모 투자펀드",
      "enabled": true,
      "explanation": "공매도나 파생상품 등 다양한 전략을 사용할 수 있는 사모펀드입니다. 이름에 '헤지'가 있어도 손실이 없는 상품은 아닙니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-065",
      "chapter": 5,
      "name": "서킷브레이커",
      "definition": "시장이 급변할 때 거래를 일시 중단하는 제도",
      "enabled": true,
      "explanation": "시장 전체가 급변할 때 거래를 잠시 멈춰 판단 시간을 줍니다. 발동 기준은 거래소와 시장별 제도에 따라 다릅니다.",
      "relatedIds": [
        "term-051",
        "term-052",
        "term-053"
      ],
      "aliases": [],
      "difficulty": "기초"
    },
    {
      "id": "term-066",
      "chapter": 6,
      "name": "국채",
      "definition": "정부가 돈을 빌리기 위해 발행하는 채권",
      "enabled": true,
      "explanation": "정부가 발행한 빚의 증서입니다. 이자와 원금 상환을 약속하지만 금리 변화로 매매가격은 움직입니다.",
      "relatedIds": [
        "term-068",
        "term-071"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-067",
      "chapter": 6,
      "name": "정크본드",
      "definition": "신용등급이 낮아 위험이 큰 대신 일반적으로 높은 금리를 요구받는 채권",
      "enabled": true,
      "explanation": "투자적격보다 낮은 신용등급의 채권입니다. 높은 이자를 제시해도 발행자가 돈을 갚지 못할 위험이 있습니다.",
      "relatedIds": [
        "term-066",
        "term-068",
        "term-071"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-068",
      "chapter": 6,
      "name": "국가신용등급",
      "definition": "국가가 빚을 갚을 능력과 위험도를 평가한 등급",
      "enabled": true,
      "explanation": "국가가 채무를 갚을 능력과 의지를 평가합니다. 등급이 낮아지면 자금 조달 비용이 오를 수 있습니다.",
      "relatedIds": [
        "term-066",
        "term-071"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-069",
      "chapter": 6,
      "name": "무디스",
      "definition": "대표적인 국제 신용평가회사",
      "enabled": true,
      "explanation": "국가와 기업 등의 신용위험을 평가하는 회사입니다. 평가 등급은 의견이며 미래 상환을 보증하지 않습니다.",
      "relatedIds": [
        "term-066",
        "term-068",
        "term-071"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-070",
      "chapter": 6,
      "name": "부채담보부증권(CDO)",
      "definition": "여러 부채를 묶어 만든 구조화 금융상품",
      "enabled": true,
      "explanation": "대출이나 채권 등 여러 부채를 묶어 위험과 지급 순위를 나눕니다. 구조가 복잡하고 기초자산의 부실에 영향을 받습니다.",
      "relatedIds": [
        "term-066",
        "term-068",
        "term-071"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-071",
      "chapter": 6,
      "name": "원금리스크",
      "definition": "투자한 원금을 잃을 가능성",
      "enabled": true,
      "explanation": "100만 원을 투자했는데 80만 원만 돌려받을 수도 있습니다. 기대 수익률과 함께 원금 손실 가능성을 봐야 합니다.",
      "relatedIds": [
        "term-066",
        "term-068"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-072",
      "chapter": 7,
      "name": "파생금융상품",
      "definition": "다른 자산의 가격에서 가치가 파생되는 금융상품",
      "enabled": true,
      "explanation": "주식, 금리, 환율 등의 움직임에 따라 가치가 달라집니다. 위험을 줄이는 데도, 큰 위험을 부담하는 데도 쓰입니다.",
      "relatedIds": [
        "term-073",
        "term-074",
        "term-075"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-073",
      "chapter": 7,
      "name": "선물거래",
      "definition": "미래에 정해진 가격으로 거래하기로 미리 계약하는 것",
      "enabled": true,
      "explanation": "석유를 3개월 뒤 약정 가격에 거래하기로 계약합니다. 옵션과 달리 계약상 의무가 있으며 정산 방식은 상품마다 다릅니다.",
      "relatedIds": [
        "term-072",
        "term-074",
        "term-075"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-074",
      "chapter": 7,
      "name": "옵션",
      "definition": "미래에 특정 가격으로 사고팔 수 있는 권리",
      "enabled": true,
      "explanation": "정해진 가격에 사고팔 수 있는 권리입니다. 권리 구매자는 프리미엄을 지불하며 불리하면 행사하지 않을 수 있습니다.",
      "relatedIds": [
        "term-072",
        "term-073",
        "term-075"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-075",
      "chapter": 7,
      "name": "콜옵션",
      "definition": "특정 가격으로 살 수 있는 권리",
      "enabled": true,
      "explanation": "주식 가격이 올라갈 때 유리해질 수 있는 매수 권리입니다. 행사가격과 프리미엄을 함께 고려해야 이익을 판단할 수 있습니다.",
      "relatedIds": [
        "term-072",
        "term-073",
        "term-074"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-076",
      "chapter": 8,
      "name": "기회비용",
      "definition": "하나를 선택하면서 포기한 것 중 가장 가치가 큰 것",
      "enabled": true,
      "explanation": "영화 대신 아르바이트를 선택하면 포기한 영화의 가치가 기회비용이 될 수 있습니다. 포기한 대안 중 가장 가치 있는 것을 봅니다.",
      "relatedIds": [
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-077",
      "chapter": 8,
      "name": "매몰비용",
      "definition": "이미 써서 되돌릴 수 없는 비용",
      "enabled": true,
      "explanation": "환불 불가 티켓값은 이미 돌려받을 수 없는 비용입니다. 앞으로의 선택은 추가 이익과 비용을 기준으로 판단합니다.",
      "relatedIds": [
        "term-076",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-078",
      "chapter": 8,
      "name": "한계비용",
      "definition": "하나를 추가로 생산할 때 추가되는 비용",
      "enabled": true,
      "explanation": "빵 100개 대신 101개를 만들 때 추가로 드는 재료와 작업 비용입니다. 전체 비용을 수량으로 나눈 평균비용과 다릅니다.",
      "relatedIds": [
        "term-076",
        "term-077"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-079",
      "chapter": 8,
      "name": "공공재",
      "definition": "비경합성과 비배제성을 함께 가진 재화",
      "enabled": true,
      "explanation": "국방처럼 한 사람이 이용해도 다른 사람의 이용이 줄지 않고 배제도 어려운 재화입니다. 공공기관이 제공한다고 모두 공공재는 아닙니다.",
      "relatedIds": [
        "term-076",
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-080",
      "chapter": 8,
      "name": "대체재",
      "definition": "서로 대신 사용할 수 있는 상품",
      "enabled": true,
      "explanation": "커피 가격이 오를 때 차를 선택할 수 있습니다. 서로 대신 사용할 수 있을수록 대체재 관계가 강해집니다.",
      "relatedIds": [
        "term-076",
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-081",
      "chapter": 8,
      "name": "수요탄력성",
      "definition": "가격 등이 변할 때 수요가 얼마나 민감하게 변하는지",
      "enabled": true,
      "explanation": "가격이 1% 변할 때 수요량이 몇 % 변하는지 봅니다. 반응이 크면 가격 변화에 민감한 수요입니다.",
      "relatedIds": [
        "term-076",
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-082",
      "chapter": 8,
      "name": "공급탄력성",
      "definition": "가격 등이 변할 때 공급이 얼마나 민감하게 변하는지",
      "enabled": true,
      "explanation": "가격이 올라갈 때 생산량을 얼마나 늘릴 수 있는지 봅니다. 생산 설비와 기간 등의 제약에 따라 달라집니다.",
      "relatedIds": [
        "term-076",
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-083",
      "chapter": 8,
      "name": "부가가치",
      "definition": "생산 과정에서 새롭게 더해진 가치",
      "enabled": true,
      "explanation": "원재료 1천 원으로 만든 제품을 3천 원에 팔면 단순 예에서 추가된 가치는 2천 원입니다. 임금과 이윤 등으로 나뉩니다.",
      "relatedIds": [
        "term-076",
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-084",
      "chapter": 8,
      "name": "베블런효과",
      "definition": "가격이 높다는 점 자체가 일부 소비자의 수요를 자극하는 현상",
      "enabled": true,
      "explanation": "높은 가격이 지위나 희소성의 신호가 되어 일부 소비를 자극합니다. 모든 비싼 상품에서 나타나는 현상은 아닙니다.",
      "relatedIds": [
        "term-076",
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-085",
      "chapter": 8,
      "name": "엥겔의 법칙",
      "definition": "소득이 증가할수록 전체 소비에서 식비가 차지하는 비중이 감소하는 경향",
      "enabled": true,
      "explanation": "소득이 늘면 식비의 금액은 늘어도 전체 지출에서 차지하는 비중은 낮아지는 경향입니다. 개인별 예외는 있습니다.",
      "relatedIds": [
        "term-076",
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-086",
      "chapter": 8,
      "name": "분수효과",
      "definition": "경제적 혜택이 아래에서 위쪽으로 확산된다는 관점",
      "enabled": true,
      "explanation": "저소득층의 소득과 소비 증가가 전체 경제로 퍼진다는 관점입니다. 낙수효과와 함께 정책 효과를 비교할 때 등장합니다.",
      "relatedIds": [
        "term-076",
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-087",
      "chapter": 8,
      "name": "시뇨리지",
      "definition": "화폐를 발행함으로써 발행 주체가 얻는 경제적 이익",
      "enabled": true,
      "explanation": "화폐를 발행하는 주체가 얻는 경제적 이익입니다. 단순한 인쇄비와 액면가 차이뿐 아니라 발행 구조에 따라 해석이 달라집니다.",
      "relatedIds": [
        "term-076",
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-088",
      "chapter": 9,
      "name": "특수목적기구(SPV)",
      "definition": "특정 사업·자산·거래만을 위해 별도로 만든 법인",
      "enabled": true,
      "explanation": "특정 자산이나 사업을 분리해 관리하기 위해 만든 법인입니다. 자산 유동화와 프로젝트 금융 등에 활용됩니다.",
      "relatedIds": [
        "term-089",
        "term-095"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-089",
      "chapter": 9,
      "name": "투자은행",
      "definition": "기업의 자금조달, M&A, 증권 발행 등을 돕는 금융기관",
      "enabled": true,
      "explanation": "기업의 증권 발행, 자금 조달, 인수·합병 등을 돕습니다. 일반적인 예금과 대출 중심의 은행 업무와 구분되는 역할입니다.",
      "relatedIds": [
        "term-088",
        "term-095"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-090",
      "chapter": 9,
      "name": "추심",
      "definition": "받을 돈을 대신 받아내는 행위",
      "enabled": true,
      "explanation": "빌려준 돈이나 미지급 대금을 회수하는 일입니다. 채권자가 직접 하거나 적법한 위임을 받은 곳이 진행할 수 있습니다.",
      "relatedIds": [
        "term-088",
        "term-089",
        "term-095"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-091",
      "chapter": 9,
      "name": "카르텔",
      "definition": "기업들이 가격·생산량 등에 대해 담합하는 것",
      "enabled": true,
      "explanation": "경쟁 기업끼리 가격이나 생산량을 맞추기로 약속하면 경쟁이 약해집니다. 소비자 가격 상승으로 이어질 수 있습니다.",
      "relatedIds": [
        "term-088",
        "term-089",
        "term-095"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-092",
      "chapter": 9,
      "name": "치킨게임",
      "definition": "상대가 먼저 포기할 때까지 서로 버티는 경쟁",
      "enabled": true,
      "explanation": "두 회사가 상대의 철수를 기다리며 손해를 감수하는 가격 경쟁이 예입니다. 둘 다 버티면 모두 큰 피해를 볼 수 있습니다.",
      "relatedIds": [
        "term-088",
        "term-089",
        "term-095"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-093",
      "chapter": 9,
      "name": "장외시장",
      "definition": "정규 거래소 밖에서 금융상품을 거래하는 시장",
      "enabled": true,
      "explanation": "정규 거래소 밖에서 당사자끼리 금융상품을 거래합니다. 거래 조건과 유동성, 상대방 신용을 확인하는 것이 중요합니다.",
      "relatedIds": [
        "term-088",
        "term-089",
        "term-095"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-094",
      "chapter": 9,
      "name": "역모기지론",
      "definition": "주택을 담보로 맡기고 정기적으로 돈을 지급받는 금융상품",
      "enabled": true,
      "explanation": "집을 담보로 정기적으로 돈을 받는 구조입니다. 주택연금이 대표적인 예이며 가입 조건과 지급 방식은 상품마다 다릅니다.",
      "relatedIds": [
        "term-088",
        "term-089",
        "term-095"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-095",
      "chapter": 9,
      "name": "레버리지 효과",
      "definition": "빚 등을 활용해 자기자본 대비 투자효과를 확대하는 것",
      "enabled": true,
      "explanation": "내 돈 100만 원에 빌린 돈 100만 원을 더하면 투자 규모는 200만 원입니다. 수익뿐 아니라 손실과 이자 부담도 확대됩니다.",
      "relatedIds": [
        "term-088",
        "term-089"
      ],
      "aliases": [],
      "difficulty": "응용"
    },
    {
      "id": "term-097",
      "chapter": 8,
      "name": "조세부담률",
      "definition": "국내총생산(GDP)에서 국세와 지방세가 차지하는 비율",
      "enabled": true,
      "explanation": "GDP가 1천억 원이고 국세·지방세가 200억 원이면 20%입니다. 사회보험료까지 포함하는 국민부담률과 구별합니다.",
      "relatedIds": [
        "term-076",
        "term-077",
        "term-078"
      ],
      "aliases": [],
      "difficulty": "응용"
    }
  ]
};
