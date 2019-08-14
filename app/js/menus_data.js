export default [
    {
        name: '사이트 관리',
        children: [
            { name: '공지 사항', href: "notificationManagement" },
            { name: '직원정보 및 권한 관리', href: "adminManagement" },
            { name: '거래처 정보 관리', href: "contractManagement" }
        ]
    },
    {
        name: '생산 관리',
        children: [
            { name: '발주정보 관리', href: "orderManagement" },
            { name: '생산 의뢰정보 관리', href: "productionRequestManagement" }
        ]
    },
    {
        name: '재고 및 수선 관리',
        children: [
            { name: '재고현황 관리', href: "currentInventoryManagement" },
            { name: '선장 관리', href: "alteringManagement" }
        ]
    },
    {
        name: 'A/S',
        children: [
            { name: 'A/S정보 관리', href: "asManagement" },
            { name: 'A/S현황 조회', href: "asSearch" },
            { name: '고객 질의 관리', href: "customerQualityManagement" }
        ]
    },
    {
        name: '영업자재물류관리',
        children: [
            { name: '납품단가 관리', href: "unitPriceManagement" },
            { name: '입고내역 및 청구내역 관리', href: "stockOutInInformationManagement" },
            { name: '원부자제발주내역관리', href: "rawMaterialPriceManagement" },
            { name: '임가공비발주내역관리', href: "laborCostManagement" },
            { name: '디자인실구매내역관리', href: "designOfficeShoppingCostManagement" },
            { name: '기타부대비용내역관리', href: "etcCostManagement" },
            { name: '손익현황 조회', href: "accountingInformationSearch" }
        ]
    },
    {
        name: '각종 보고서',
        children: [
            { name: '업무협조', href: "assistanceRequestReport" },
            { name: '인수증', href: "invoiceReport" },
            { name: '포장라벨', href: "packageLabelReport" }
        ]
    },
]