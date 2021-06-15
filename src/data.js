import { v4 as uuidv4 } from "uuid";
import {
  hotel,
  highway,
  backinBlack,
  ornaments,
  getIton,
  wantToBreakFreee,
} from "./music-files/audio-module";

const allSongs = [
  {
    id: uuidv4(),
    name: `Get it on`,
    artist: `T. Rex`,
    colors: ["#A84A4A", "#DAA691"],
    song: `${getIton}`,
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/51Nn7pfgXgL._AC_SX450_.jpg",
    active: true,
  },
  {
    id: uuidv4(),
    name: `Want to break free`,
    artist: `Queens`,
    colors: ["#A84A4A", "#DAA691"],
    song: `${wantToBreakFreee}`,
    cover: "https://upload.wikimedia.org/wikipedia/en/0/0d/Iwtbf_fm.jpg",
    active: false,
  },
  {
    id: uuidv4(),
    name: `Hotel California`,
    artist: `Eagles`,
    colors: ["#A84A4A", "#DAA691"],
    song: `${hotel}`,
    cover:
      "https://marketingweek.imgix.net/content/uploads/2019/12/24114607/shutterstock_403709458-1.jpg",
    active: false,
  },
  {
    id: uuidv4(),
    name: `Highway to hell`,
    artist: `AC/DC`,
    colors: ["#A4BE65", "#19220D"],
    song: `${highway}`,
    cover: `https://upload.wikimedia.org/wikipedia/en/a/ac/Acdc_Highway_to_Hell.JPG`,
    active: false,
  },
  {
    id: uuidv4(),
    name: `Back in Black`,
    artist: `AC/DC`,
    colors: ["#B9A7D9", "#7D5E87"],
    song: `${backinBlack}`,
    cover: `https://upload.wikimedia.org/wikipedia/commons/9/92/ACDC_Back_in_Black.png`,
    active: false,
  },
  {
    id: uuidv4(),
    name: `Precious Ornaments`,
    artist: `Wrath of man`,
    colors: ["#8C332F", "#92574A"],
    song: `${ornaments}`,
    cover: `https://filmmusiccentral.files.wordpress.com/2021/05/2-album-artwork-chris-benstead.jpeg?w=544`,
    active: false,
  },
];

export default allSongs;
