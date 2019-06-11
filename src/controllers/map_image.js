import gm from "gm";
import request from "request";
require("gm-base64");
export const createImage = extent => {
  const { left, bottom, right, top } = extent;
  const h = parseInt(((top - bottom) / (right - left)) * 1024);
  const url = `http://mapgateway-aws.findmaps.co.uk/wms/searchacumen/jxq6fI4tR0g9eTu4?tiled=true&trk=-6&clientid=-6&LAYERS=OS%3AOS%20Mastermap%20(Live)%20100&TRANSPARENT=FALSE&CLEANUP=1&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&STYLES=&FORMAT=image%2Fjpeg&SRS=EPSG%3A27700&BBOX=${left},${bottom},${right},${top}&WIDTH=1024&HEIGHT=${h}`;
  console.log(url);
  const im = gm.subClass({ imageMagick: true });
  const image = request(url);
  return im(image)
    .setFormat("png")
    .stroke("#ff0000", 2)
    .fill("rgba(255,0,0,0)")
    .stream();
};
