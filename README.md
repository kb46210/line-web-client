# Line Web Client

Self-hosting 的 LINE 網頁版，目前 LINE 只有推出 Chrome Extension 版，本案 Fork 自 2.5.4，並可以自行架設 LINE 網頁。

目前僅支援 Chrome 系瀏覽器，Firefox、Safari 無法使用

## Example
1. 修改 nginx.conf 中 line.example.com 為要使用的網域
2. 將 SSL 憑證 ssl.crt、ssl.key 放到 ssl 資料夾
3. 執行 `sudo docker-compose up -d `

## 相關文章
- [[教學] 教你如何架設LINE網頁版(1) — VM篇](https://chouhsiang.medium.com/%E6%95%99%E5%AD%B8-%E6%95%99%E4%BD%A0%E5%A6%82%E4%BD%95%E6%9E%B6%E8%A8%ADline%E7%B6%B2%E9%A0%81%E7%89%88-17723ec5db06)
- [[教學] 教你如何架設LINE網頁版(2) — Cloudflare篇](https://chouhsiang.medium.com/%E6%95%99%E5%AD%B8-%E6%95%99%E4%BD%A0%E5%A6%82%E4%BD%95%E6%9E%B6%E8%A8%ADline%E7%B6%B2%E9%A0%81%E7%89%88-2-cloudflare%E7%AF%87-f4df6f7e2467)
