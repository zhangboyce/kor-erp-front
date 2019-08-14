let names = [
    "AccountingInformationSearch",
    "AdminManagement",
    "AlteringManagement",
    "AsManagement",
    "AsSearch",
    "AssistanceRequestReport",
    "ContractManagement",
    "CurrentInventoryManagement",
    "CustomerQualityManagement",
    "DesignOfficeShoppingCostManagement",
    "EtcCostManagement",
    "InvoiceReport",
    "LaborCostManagement",
    "NotificationManagement",
    "OrderManagement",
    "PackageLabelReport",
    "ProductionRequestManagement",
    "RawMaterialPriceManagement",
    "StockOutInInformationManagement",
    "UnitPriceManagement",
];

names.forEach(name => {
    console.log(`import ${name} from "./component/segment/${name}";`)
    // console.log(`${name.charAt(0).toLocaleLowerCase() + name.slice(1)}: new ${name}($segment),`);
});