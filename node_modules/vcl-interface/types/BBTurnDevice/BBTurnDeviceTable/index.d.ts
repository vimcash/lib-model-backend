import BBTurnDevice from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a especific device from BBTurn interface with Table Paramameters
 */
export interface BBTurnDeviceTable extends BBTurnDevice, DataControl {
}
export default BBTurnDeviceTable;
