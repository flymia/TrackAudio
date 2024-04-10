import { AudioDevice } from "../../../../backend/js/trackaudio-afv.d";
import React from "react";

export type AudioOutputsProps = {
  devices: Array<AudioDevice>;
  selectedDeviceId: string;
  setDevice: (device: AudioDevice) => void;
};

const AudioOutputs: React.FC<AudioOutputsProps> = ({
  devices,
  selectedDeviceId,
  setDevice,
}) => {
  const handleDeviceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDevice(devices.find((device) => device.id === e.target.value));
  };

  return (
    <select
      className="form-control mt-1"
      onChange={handleDeviceChange}
      value={
        devices.some((device) => device.id === selectedDeviceId)
          ? selectedDeviceId
          : ""
      }
    >
      <option disabled value=""> -- select an option -- </option>
      {devices.map(({ id, name, isDefault }) => (
        <option key={id} value={id}>
          {isDefault ? "* " : ""}
          {name}
        </option>
      ))}
    </select>
  );
};

export default AudioOutputs;