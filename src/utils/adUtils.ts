// src/utils/adUtils.ts
export interface AdItem {
    type: 'ad';
    id: string;
  }
  
  export function insertAds<T>(
    items: T[],
    adFrequency: number = 5, // 預設每5個項目插入一個廣告
    sectionIndex: number = 0
  ): (T | AdItem)[] {
    const result: (T | AdItem)[] = [];
    items.forEach((item, index) => {
      result.push(item);
      if ((index + 1) % adFrequency === 0) {
        result.push({ type: 'ad', id: `ad-${sectionIndex}-${index}` });
      }
    });
    return result;
  }