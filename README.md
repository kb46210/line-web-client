# Line Web Client

Self-hosting 的 LINE 網頁版，目前 LINE 只有推出 Chrome Extension 版，本案 Fork 自 2.5.4，並可以自行架設 LINE 網頁。

目前僅支援 Chrome 系瀏覽器，Firefox、Safari 無法使用

## Example
1. 修改 nginx.conf 中 line.example.com 為要使用的網域
2. 將 SSL 憑證 ssl.crt、ssl.key 放到 ssl 資料夾
3. 執行 `sudo docker-compose up -d `
