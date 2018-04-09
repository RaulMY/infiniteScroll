var express = require('express');
var router = express.Router();
const request = require('request');
const Item       = require('../models/Item');
const lists = [
  {
  _id: "5aca5625c28bd608f2221704",
  title: "Light's Wrath",
  description: "It was with our greatest hopes and prayers that we attended the ceremony that day... and it is with our greatest sorrows that we departed it.",
  imageURL: "/images/artifacts/lightswrath",
  price: 21,
  __v: 0
  },
  {
  _id: "5aca578b165f71094f72735d",
  title: "T'uure, Beacon of the Naaru",
  description: "Blessed are the torchbearers, who bring light to the darkness.",
  imageURL: "/images/artifacts/tuure",
  price: 61,
  __v: 0
  },
  {
  _id: "5aca57f907e6a7096d277769",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 85,
  __v: 0
  },
  {
  _id: "5aca583307e6a7096d27776a",
  title: "Maw of the Dammed",
  description: "The Maw's thirst is unquenchable. If it is not fed fresh victims, it will not hesitate to drink from its wielder instead.",
  imageURL: "/images/artifacts/maw",
  price: 2,
  __v: 0
  },
  {
  _id: "5aca583307e6a7096d27776b",
  title: "Blades of the Fallen Prince",
  description: "When my days have come to an end, you shall be king.",
  imageURL: "/images/artifacts/fallenprince",
  price: 70,
  __v: 0
  },
  {
  _id: "5aca583307e6a7096d27776c",
  title: "Apocalypse",
  description: "It shall sow destruction and war. Famine and death. It shall tempt with power, and then bring an end to all life.",
  imageURL: "/images/artifacts/apocalypse",
  price: 41,
  __v: 0
  },
  {
  _id: "5aca583307e6a7096d27776d",
  title: "Twinblades of the Deceiver",
  description: "Make examples of those foolish enough to oppose you, and the rest of their kind will grovel at your feet.",
  imageURL: "/images/artifacts/twinblades",
  price: 30,
  __v: 0
  },
  {
  _id: "5aca583307e6a7096d27776e",
  title: "Scythe of Elune",
  description: "There is power within that would be freed. With balance and control, the wolf may be tamed, but only for a time.",
  imageURL: "/images/artifacts/scythe",
  price: 77,
  __v: 0
  },
  {
  _id: "5aca583407e6a7096d27776f",
  title: "Fangs of Ashamane",
  description: "The sacrifice of Ashamane is remembered to this day. We live by her grace, and her children still tread the forests with us as our closest companions.",
  imageURL: "/images/artifacts/ashamane",
  price: 80,
  __v: 0
  },
  {
  _id: "5aca583407e6a7096d277770",
  title: "Claws of Ursoc",
  description: "Ursoc, brother of Ursol and guardian of the furbolg tribes... bearer of the strength of the forest itself.",
  imageURL: "/images/artifacts/ursoc",
  price: 18,
  __v: 0
  },
  {
  _id: "5aca583407e6a7096d277771",
  title: "G'Hanir, the Mother Tree",
  description: "At the beginning, there was a source of healing and balance, a place where all life could rest and revive.",
  imageURL: "/images/artifacts/ghanir",
  price: 100,
  __v: 0
  },
  {
  _id: "5aca583407e6a7096d277772",
  title: "Titanstrike",
  description: "A peerless example of techno-magical engineering, infused with the power of storms.",
  imageURL: "/images/artifacts/titanstrike",
  price: 11,
  __v: 0
  },
  {
  _id: "5aca583507e6a7096d277773",
  title: "Thas'dorah, Legacy of the Windrunners",
  description: "When it was retrieved from the Sunwell, the bow radiated power. Talanas was humbled by the gift. He named the weapon Thas'dorah, Valor of the Forest.",
  imageURL: "/images/artifacts/thasdorah",
  price: 14,
  __v: 0
  },
  {
  _id: "5aca583507e6a7096d277774",
  title: "Talonclaw",
  description: "The Eagle Spear. Spear of the Wild Gods. Talonclaw. Bearing many names and many blessings, this is a weapon of legends.",
  imageURL: "/images/artifacts/talonclaw",
  price: 26,
  __v: 0
  },
  {
  _id: "5aca583507e6a7096d277775",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 49,
  __v: 0
  },
  {
  _id: "5aca583507e6a7096d277776",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 87,
  __v: 0
  },
  {
  _id: "5aca583507e6a7096d277777",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 1,
  __v: 0
  },
  {
  _id: "5aca583607e6a7096d277778",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 52,
  __v: 0
  },
  {
  _id: "5aca583607e6a7096d277779",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 70,
  __v: 0
  },
  {
  _id: "5aca583607e6a7096d27777a",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 72,
  __v: 0
  },
  {
  _id: "5aca583607e6a7096d27777b",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 8,
  __v: 0
  },
  {
  _id: "5aca583607e6a7096d27777c",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 91,
  __v: 0
  },
  {
  _id: "5aca583707e6a7096d27777d",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 35,
  __v: 0
  },
  {
  _id: "5aca583707e6a7096d27777e",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 85,
  __v: 0
  },
  {
  _id: "5aca583707e6a7096d27777f",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 14,
  __v: 0
  },
  {
  _id: "5aca583707e6a7096d277780",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 52,
  __v: 0
  },
  {
  _id: "5aca583707e6a7096d277781",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 59,
  __v: 0
  },
  {
  _id: "5aca583807e6a7096d277782",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 68,
  __v: 0
  },
  {
  _id: "5aca583807e6a7096d277783",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 67,
  __v: 0
  },
  {
  _id: "5aca583807e6a7096d277784",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 3,
  __v: 0
  },
  {
  _id: "5aca583807e6a7096d277785",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 65,
  __v: 0
  },
  {
  _id: "5aca583807e6a7096d277786",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 20,
  __v: 0
  },
  {
  _id: "5aca583907e6a7096d277787",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 31,
  __v: 0
  },
  {
  _id: "5aca583907e6a7096d277788",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 30,
  __v: 0
  },
  {
  _id: "5aca583907e6a7096d277789",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 63,
  __v: 0
  },
  {
  _id: "5aca583907e6a7096d27778a",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 84,
  __v: 0
  },
  {
  _id: "5aca583907e6a7096d27778b",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 33,
  __v: 0
  },
  {
  _id: "5aca583a07e6a7096d27778c",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 12,
  __v: 0
  },
  {
  _id: "5aca583a07e6a7096d277790",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 87,
  __v: 0
  },
  {
  _id: "5aca583b07e6a7096d277792",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 35,
  __v: 0
  },
  {
  _id: "5aca583b07e6a7096d277794",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 22,
  __v: 0
  },
  {
  _id: "5aca583c07e6a7096d277796",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 76,
  __v: 0
  },
  {
  _id: "5aca583c07e6a7096d277799",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 28,
  __v: 0
  },
  {
  _id: "5aca584507e6a7096d27779b",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 3,
  __v: 0
  },
  {
  _id: "5aca584607e6a7096d27779d",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 83,
  __v: 0
  },
  {
  _id: "5aca584607e6a7096d27779f",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 44,
  __v: 0
  },
  {
  _id: "5aca584607e6a7096d2777a1",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 94,
  __v: 0
  },
  {
  _id: "5aca584707e6a7096d2777a2",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 79,
  __v: 0
  },
  {
  _id: "5aca584707e6a7096d2777a3",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 42,
  __v: 0
  },
  {
  _id: "5aca584707e6a7096d2777a4",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 61,
  __v: 0
  },
  {
  _id: "5aca584707e6a7096d2777a5",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 9,
  __v: 0
  },
  {
  _id: "5aca584707e6a7096d2777a6",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 30,
  __v: 0
  },
  {
  _id: "5aca584807e6a7096d2777a7",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 41,
  __v: 0
  },
  {
  _id: "5aca584807e6a7096d2777a8",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 95,
  __v: 0
  },
  {
  _id: "5aca584807e6a7096d2777a9",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 29,
  __v: 0
  },
  {
  _id: "5aca584807e6a7096d2777aa",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 39,
  __v: 0
  },
  {
  _id: "5aca584807e6a7096d2777ab",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 61,
  __v: 0
  },
  {
  _id: "5aca584907e6a7096d2777ac",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 93,
  __v: 0
  },
  {
  _id: "5aca584907e6a7096d2777ad",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 19,
  __v: 0
  },
  {
  _id: "5aca584907e6a7096d2777ae",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 81,
  __v: 0
  },
  {
  _id: "5aca584907e6a7096d2777af",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 86,
  __v: 0
  },
  {
  _id: "5aca584907e6a7096d2777b0",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 58,
  __v: 0
  },
  {
  _id: "5aca584a07e6a7096d2777b1",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 81,
  __v: 0
  },
  {
  _id: "5aca584a07e6a7096d2777b2",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 1,
  __v: 0
  },
  {
  _id: "5aca584a07e6a7096d2777b3",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 97,
  __v: 0
  },
  {
  _id: "5aca584a07e6a7096d2777b4",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 88,
  __v: 0
  },
  {
  _id: "5aca584a07e6a7096d2777b5",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 87,
  __v: 0
  },
  {
  _id: "5aca584b07e6a7096d2777b6",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 54,
  __v: 0
  },
  {
  _id: "5aca584b07e6a7096d2777b7",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 73,
  __v: 0
  },
  {
  _id: "5aca584b07e6a7096d2777b8",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 68,
  __v: 0
  },
  {
  _id: "5aca584b07e6a7096d2777b9",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 59,
  __v: 0
  },
  {
  _id: "5aca584b07e6a7096d2777ba",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 100,
  __v: 0
  },
  {
  _id: "5aca584b07e6a7096d2777bb",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 50,
  __v: 0
  },
  {
  _id: "5aca584c07e6a7096d2777bc",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 69,
  __v: 0
  },
  {
  _id: "5aca584c07e6a7096d2777bd",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 21,
  __v: 0
  },
  {
  _id: "5aca584c07e6a7096d2777be",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 84,
  __v: 0
  },
  {
  _id: "5aca584c07e6a7096d2777bf",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 90,
  __v: 0
  },
  {
  _id: "5aca584c07e6a7096d2777c0",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 32,
  __v: 0
  },
  {
  _id: "5aca584d07e6a7096d2777c1",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 38,
  __v: 0
  },
  {
  _id: "5aca584d07e6a7096d2777c2",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 53,
  __v: 0
  },
  {
  _id: "5aca584d07e6a7096d2777c3",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 12,
  __v: 0
  },
  {
  _id: "5aca584d07e6a7096d2777c4",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 86,
  __v: 0
  },
  {
  _id: "5aca584d07e6a7096d2777c5",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 52,
  __v: 0
  },
  {
  _id: "5aca584e07e6a7096d2777c6",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 16,
  __v: 0
  },
  {
  _id: "5aca584e07e6a7096d2777c7",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 58,
  __v: 0
  },
  {
  _id: "5aca584e07e6a7096d2777c8",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 37,
  __v: 0
  },
  {
  _id: "5aca584e07e6a7096d2777c9",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 46,
  __v: 0
  },
  {
  _id: "5aca584f07e6a7096d2777ca",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 49,
  __v: 0
  },
  {
  _id: "5aca584f07e6a7096d2777cb",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 55,
  __v: 0
  },
  {
  _id: "5aca584f07e6a7096d2777cc",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 50,
  __v: 0
  },
  {
  _id: "5aca584f07e6a7096d2777cd",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 26,
  __v: 0
  },
  {
  _id: "5aca584f07e6a7096d2777ce",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 70,
  __v: 0
  },
  {
  _id: "5aca585007e6a7096d2777cf",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 65,
  __v: 0
  },
  {
  _id: "5aca585007e6a7096d2777d0",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 13,
  __v: 0
  },
  {
  _id: "5aca585007e6a7096d2777d1",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 95,
  __v: 0
  },
  {
  _id: "5aca585007e6a7096d2777d2",
  title: "Xal'atath, Blade of the Black Empire",
  description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
  imageURL: "/images/artifacts/xalatath",
  price: 3,
  __v: 0
  }
  ]


/* GET users listing. */
router.get('/new', function(req, res, next) {
  const item = new Item({
    title: "Xal'atath, Blade of the Black Empire",
    description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
    imageURL: `/images/artifacts/xalatath`,
    price: Math.floor(Math.random()*100)+1
  });
  item.save()
  .then(lists=>res.status(200).json(lists))
  .catch(e=>res.status(500).send(e));;
});

router.get('/:start/:segment', function(req, res, next) {
//Aqui usualmente llamaria a la BD, pero para que funcione sin una inclui los 96 en una variable en este archivo
    var start = Number(req.params.start);
    var segment = Number(req.params.segment);
    var seg = lists.slice(start, start + segment)
    if (seg.length<segment){
      seg = seg.concat(lists.slice(0,segment-seg.length))
    }
    res.status(200).json(seg)

});



module.exports = router;
