declare global {
    var database: import("@nozbe/watermelondb").Database;
  }
  
  export {}; // 確保這個檔案是 Module，不會影響全域作用域