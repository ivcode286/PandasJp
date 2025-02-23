const imageMap: Record<string, any> = {
  'cover_example.jpg': require('../../assets/images/stories_cover/cover_example.jpg'), // 預設圖
    'momoko.jpg': require('../../assets/images/stories_cover/momoko.jpg'),
    'magical_shoujo.jpg': require('../../assets/images/stories_cover/magical_shoujo.jpg'),
    'fat_cat.jpg': require('../../assets/images/stories_cover/fat_cat.jpg'),
    'panda_river.jpg': require('../../assets/images/stories_cover/panda_river.jpg'),
    'delinquent_cat_sennin.jpg': require('../../assets/images/stories_cover/delinquent_cat_sennin.jpg'),
    
  };
  
  export function getImage(imageName: string): any {
    return imageMap[imageName] || imageMap['cover_example.jpg']; // 找不到圖片時使用預設圖
  }
  