const imageMap: Record<string, any> = {
    'momoko.jpg': require('../../assets/images/stories_cover/momoko.jpg'),
    'magical_shoujo.jpg': require('../../assets/images/stories_cover/magical_shoujo.jpg'),
    'cover_example.jpg': require('../../assets/images/stories_cover/cover_example.jpg'), // 預設圖
  };
  
  export function getImage(imageName: string): any {
    return imageMap[imageName] || imageMap['cover_example.jpg']; // 找不到圖片時使用預設圖
  }
  