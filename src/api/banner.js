import request from './request';

export async function getBanner () {
  return await request.get('/api/banner');
}

// getBanner().then(res => {
//   console.log(res);
// });