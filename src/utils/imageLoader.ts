const imageMap: Record<string, any> = {
  'cover-example.jpg': require('@/assets/images/stories_cover/cover-example.jpg'), //default image
  'momoko.jpg': require('@/assets/images/stories_cover/momoko.jpg'), 
  'magical-shoujo.jpg': require('@/assets/images/stories_cover/magical-shoujo.jpg'),
  'fat-cat.jpg': require('@/assets/images/stories_cover/fat-cat.jpg'),
  'panda-river.jpg': require('@/assets/images/stories_cover/panda-river.jpg'),
  'delinquent-cat-sennin.jpg': require('@/assets/images/stories_cover/delinquent-cat-sennin.jpg'),
  'panda-shrine.jpg': require('@/assets/images/stories_cover/panda-shrine.jpg'),
  'overlord-food.jpg': require('@/assets/images/stories_cover/overlord-food.jpg'),
  'girl-hospital-visit.jpg': require('@/assets/images/stories_cover/girl-hospital-visit.jpg'),
  'colinb-witch.jpg': require('@/assets/images/stories_cover/colinb-witch.jpg'),
  'panda-cat-lake.jpg': require('@/assets/images/stories_cover/panda-cat-lake.jpg'),

  // n5chat images
  'convenience-shopping.jpg': require('@/assets/images/stories_cover/convenience-shopping.jpg'),
  'restaurant-dining.jpg': require('@/assets/images/stories_cover/restaurant-dining.jpg'),
  'station-help.jpg': require('@/assets/images/stories_cover/station-help.jpg'),
  'cafe-order.jpg': require('@/assets/images/stories_cover/cafe-order.jpg'),
  'clothing-store.jpg': require('@/assets/images/stories_cover/clothing-store.jpg'),
  'phone-call.jpg': require('@/assets/images/stories_cover/phone-call.jpg'),
  'supermarket-shopping.jpg': require('@/assets/images/stories_cover/supermarket-shopping.jpg'),
  'school-chat.jpg': require('@/assets/images/stories_cover/school-chat.jpg'),
  'bookstore-shopping.jpg': require('@/assets/images/stories_cover/bookstore-shopping.jpg'),
  'weekend-plan.jpg': require('@/assets/images/stories_cover/weekend-plan.jpg'),

  //travel chat images
  'airport-flight.jpg': require('@/assets/images/stories_cover/airport-flight.jpg'),
  'hotel-airbnb.jpg': require('@/assets/images/stories_cover/hotel-airbnb.jpg'),
  'transportation.jpg': require('@/assets/images/stories_cover/transportation.jpg'),
  'dining.jpg': require('@/assets/images/stories_cover/dining.jpg'),
  'shopping.jpg': require('@/assets/images/stories_cover/shopping.jpg'),
  'sightseeing.jpg': require('@/assets/images/stories_cover/sightseeing.jpg'),
  'emergency.jpg': require('@/assets/images/stories_cover/emergency.jpg'),
};

export function getImage(imageName: string): any {
  return imageMap[imageName] || imageMap['cover-example.jpg']; // 找不到圖片時使用預設圖
}