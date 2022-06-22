import SimpleUser from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a simple User interface with Table Paramameters
 */
export interface SimpleUserTable extends SimpleUser, DataControl {
}
export default SimpleUserTable;
