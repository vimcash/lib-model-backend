import SimpleCompany from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a simple company interface with Table Paramameters
 */
export interface SimpleCompanyTable extends SimpleCompany, DataControl {
}
export default SimpleCompanyTable;
