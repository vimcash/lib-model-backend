import Device from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a simple Device interface with Table Paramameters
 */
export interface DeviceTable extends Device, DataControl {
}
export default DeviceTable;
