const imageMap: Record<string, any> = {
  'cover_example.jpg': require('../../assets/images/stories_cover/cover_example.jpg'), // 預設圖
  'momoko.jpg': require('../../assets/images/stories_cover/momoko.jpg'),
  'magical_shoujo.jpg': require('../../assets/images/stories_cover/magical_shoujo.jpg'),
  'fat_cat.jpg': require('../../assets/images/stories_cover/fat_cat.jpg'),
  'panda_river.jpg': require('../../assets/images/stories_cover/panda_river.jpg'),
  'delinquent_cat_sennin.jpg': require('../../assets/images/stories_cover/delinquent_cat_sennin.jpg'),
  'panda_shrine.jpg': require('../../assets/images/stories_cover/panda_shrine.jpg'),
  'overlord_food.jpg': require('../../assets/images/stories_cover/overlord_food.jpg'),
  'girl_hospital_visit.jpg': require('../../assets/images/stories_cover/girl_hospital_visit.jpg'),
  'colinb_witch.jpg': require('../../assets/images/stories_cover/colinb_witch.jpg'),

  //conversation images
  'convenience_shopping.jpg': require('../../assets/images/stories_cover/convenience_shopping.jpg'),
  'restaurant_dining.jpg': require('../../assets/images/stories_cover/restaurant_dining.jpg'),
  'station_help.jpg': require('../../assets/images/stories_cover/station_help.jpg'),
  'cafe_order.jpg': require('../../assets/images/stories_cover/cafe_order.jpg'),
  'clothing_store.jpg': require('../../assets/images/stories_cover/clothing_store.jpg'),
  'phone_call.jpg': require('../../assets/images/stories_cover/phone_call.jpg'),
  'supermarket_shopping.jpg': require('../../assets/images/stories_cover/supermarket_shopping.jpg'),
  'school_chat.jpg': require('../../assets/images/stories_cover/school_chat.jpg'),
  'bookstore_shopping.jpg': require('../../assets/images/stories_cover/bookstore_shopping.jpg'),
  'weekend_plan.jpg': require('../../assets/images/stories_cover/weekend_plan.jpg'),
  
};

export function getImage(imageName: string): any {
  return imageMap[imageName] || imageMap['cover_example.jpg']; // 找不到圖片時使用預設圖
}
