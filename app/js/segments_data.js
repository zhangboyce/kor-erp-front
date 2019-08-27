import AccountingInformationSearch from "./component/segment/AccountingInformationSearch";
import AdminManagement from "./component/segment/AdminManagement";
import AlteringManagement from "./component/segment/AlteringManagement";
import AsManagement from "./component/segment/AsManagement.jsx";
import AsSearch from "./component/segment/AsSearch";
import AssistanceRequestReport from "./component/segment/AssistanceRequestReport";
import ContractManagement from "./component/segment/ContractManagement";
import CurrentInventoryManagement from "./component/segment/CurrentInventoryManagement";
import CustomerQualityManagement from "./component/segment/CustomerQualityManagement";
import DesignOfficeShoppingCostManagement from "./component/segment/DesignOfficeShoppingCostManagement";
import EtcCostManagement from "./component/segment/EtcCostManagement";
import InvoiceReport from "./component/segment/InvoiceReport";
import LaborCostManagement from "./component/segment/LaborCostManagement";
import NotificationManagement from "./component/segment/NotificationManagement";
import OrderManagement from "./component/segment/OrderManagement";
import PackageLabelReport from "./component/segment/PackageLabelReport";
import ProductionRequestManagement from "./component/segment/ProductionRequestManagement";
import RawMaterialPriceManagement from "./component/segment/RawMaterialPriceManagement";
import StockOutInInformationManagement from "./component/segment/StockOutInInformationManagement";
import UnitPriceManagement from "./component/segment/UnitPriceManagement";


export default function ($segment) {
    return {
        accountingInformationSearch: new AccountingInformationSearch($segment),
        adminManagement: new AdminManagement($segment),
        alteringManagement: new AlteringManagement($segment),
        asManagement: new AsManagement($segment),
        asSearch: new AsSearch($segment),
        assistanceRequestReport: new AssistanceRequestReport($segment),
        contractManagement: new ContractManagement($segment),
        currentInventoryManagement: new CurrentInventoryManagement($segment),
        customerQualityManagement: new CustomerQualityManagement($segment),
        designOfficeShoppingCostManagement: new DesignOfficeShoppingCostManagement($segment),
        etcCostManagement: new EtcCostManagement($segment),
        invoiceReport: new InvoiceReport($segment),
        laborCostManagement: new LaborCostManagement($segment),
        notificationManagement: new NotificationManagement($segment),
        orderManagement: new OrderManagement($segment),
        packageLabelReport: new PackageLabelReport($segment),
        productionRequestManagement: new ProductionRequestManagement($segment),
        rawMaterialPriceManagement: new RawMaterialPriceManagement($segment),
        stockOutInInformationManagement: new StockOutInInformationManagement($segment),
        unitPriceManagement: new UnitPriceManagement($segment),

    }
}