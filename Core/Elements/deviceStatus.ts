import { DeviceStatus } from "vcl-interface";

export const deviceStatus = {
  type: String,
  required: true,
  enum: Object.values(DeviceStatus),
  default: DeviceStatus.user,
}