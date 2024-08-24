import { defineConfig } from "vite";

export default defineConfig({
  base: "/Swiper-Vite-Deploy-2024/", // 替換為你的儲存庫名稱
  build: {
    outDir: "dist", // 編譯結果的輸出目錄
  },
  server: {
    open: true, // 自動打開瀏覽器
  },
});
