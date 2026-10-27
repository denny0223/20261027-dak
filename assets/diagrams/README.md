# Mermaid 圖稿

`.mmd` 是可編輯來源，同名 `.svg` 供 `slide.md` 使用。一般 Marp 建置直接讀取 SVG，不需要 Mermaid 或網路。配色、字級與排列設定保存在各圖的 front matter；不內嵌字型。

| 圖稿 | 用途 |
|---|---|
| `data-relationships.mmd` | 本次 demo 使用的資料位置與對照欄位。連線表示邏輯關係，並非資料搬移或跨服務外鍵；`1 : N` 表示一對多。 |
| `dbt-data-flow.mmd` | 實線表示資料與查詢結果流向，虛線表示本機 dbt 提交 SQL 與執行測試。BigQuery 透過 Connection 與 `EXTERNAL_QUERY()` 取得 Cloud SQL 查詢結果，再建立每筆訂單一列的分析模型。 |

資料關係圖中的 Cloud SQL／BigQuery 連線對應 `customers.customer_id` 與 `orders.customer_id`；促銷活動依 `promo_code` 對照 `orders`。圖只保留本次分析使用的資料，不是完整 schema。dbt 圖中的彙整與 JOIN 包含 staging 與 model 內的 CTE；預測不列入這份 demo 已保存的 dbt 流程。

## 更新圖檔

在專案根目錄使用 Mermaid CLI 12.x 與可用的 Chromium：

```sh
mmdc -i assets/diagrams/data-relationships.mmd -o assets/diagrams/data-relationships.svg -b transparent --no-font-embed
mmdc -i assets/diagrams/dbt-data-flow.mmd -o assets/diagrams/dbt-data-flow.svg -b transparent --no-font-embed
marp slide.md -o index.html
```

更新後檢查完整資料表名稱、中文換行、連線標籤與投影片內的實際字級。

## 來源

- [官方 Codelab](https://codelabs.developers.google.com/dak-analytics-eng-antigravity-ide?hl=zh-tw)
- Demo repo：[stg_customers.sql](https://github.com/denny0223/data-agent-kit-analytics-demo/blob/e7d51e7a4760e7ffe1515f360e1e9aa9c13ba938/dbt/models/staging/stg_customers.sql)、[stg_pet_profiles.sql](https://github.com/denny0223/data-agent-kit-analytics-demo/blob/e7d51e7a4760e7ffe1515f360e1e9aa9c13ba938/dbt/models/staging/stg_pet_profiles.sql)、[fct_order_analysis.sql](https://github.com/denny0223/data-agent-kit-analytics-demo/blob/e7d51e7a4760e7ffe1515f360e1e9aa9c13ba938/dbt/models/marts/fct_order_analysis.sql)
- [Cloud SQL 聯合查詢](https://docs.cloud.google.com/bigquery/docs/cloud-sql-federated-queries)、[dbt build](https://docs.getdbt.com/reference/commands/build)
