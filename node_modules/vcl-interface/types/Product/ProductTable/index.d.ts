import Product from "..";
import { DataControl } from "../../Core/Dependencies/DataContol";
/**
 * This is a product interface with Table Paramameters
 */
export interface ProductTable extends Product, DataControl {
}
export default ProductTable;
