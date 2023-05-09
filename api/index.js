import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat :'43.56673777231237',
          tr_latitude: tr_lat ? tr_lat :'43.65329457274589',
          bl_longitude: bl_lng ? bl_lng :'3.807051777238071',
          tr_longitude: tr_lng ? tr_lng : '3.941286923984968',
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          'X-RapidAPI-Key': '0a9b3d2c55msh3a1163af4e85ad7p19383cjsna485388524de',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
