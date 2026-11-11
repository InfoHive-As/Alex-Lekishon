# Alex Lekishon — Reports & Publications Folder

Place all your PDF reports, newsletters, and documents in this folder (`public/reports/`).

## How it works:
1. Save your PDF files in this folder, for example:
   - `public/reports/lca-annual-report-2024.pdf`
   - `public/reports/lca-annual-report-2023.pdf`
   - `public/reports/lca-newsletter-q3-2024.pdf`
   - `public/reports/oliveseed-needs-assessment.pdf`

2. In `src/data/portfolioData.js`, add or update the `fileUrl` and `downloadUrl` properties under `attachments` in `initiativesData`:
   ```javascript
   {
     id: 'lca-ar-2024',
     title: 'LCA Annual Report 2024',
     category: 'Annual Report',
     period: '2024',
     format: 'PDF',
     size: '3.8 MB',
     fileUrl: '/reports/lca-annual-report-2024.pdf',
     downloadUrl: '/reports/lca-annual-report-2024.pdf',
     summary: 'Detailed conservation impact review...'
   }
   ```

3. Any file in `public/reports/` is automatically accessible at `/reports/your-file-name.pdf` on your live site!
