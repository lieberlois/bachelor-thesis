function Decoder(bytes, port) {
  // Decode an uplink message from a buffer
  // (array) of bytes to an object of fields.
  var value=(bytes[0]<<8 | bytes[1])&0x3FFF;
  var bat=value/1000;//Battery,units:V
  
  var door_open_status=bytes[0]&0x80?1:0;//1:open,0:close
  
  var mod=bytes[2];
 
  var open_times=bytes[3]<<16 | bytes[4]<<8 | bytes[5];
  var open_duration=bytes[6]<<16 | bytes[7]<<8 | bytes[8];//units:min
  return {
    BatV: bat,
    Door_Open_State: door_open_status === 1,
    Open_Times: open_times,
    Last_Open_Dur: open_duration
    };
}