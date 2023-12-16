/*\
title: $:/plugins/oeyoews/neotw-image-gallery/netease-fetcher.js
type: application/javascript
module-type: library

\*/

// TODO: add error catch
const getbanners = async () => {
  const api = 'https://react-music-api-coral.vercel.app/api/banner';
  const res = await fetch(api);
  const data = await res.json();
  const { banners } = data.body;
  return banners.map((banner) => ({ src: banner.pic }));
};

module.exports = getbanners;