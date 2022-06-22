import TradicionalCompany from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a tradicional company interface with Table Paramameters
 */
export interface TradicionalCompanyTable extends TradicionalCompany, DataControl {
}
export default TradicionalCompanyTable;
