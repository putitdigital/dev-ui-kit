<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/dev-ui-kit@main/base.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/dev-ui-kit@main/components.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/dev-ui-kit@main/animations.css">

You must load your local variables FIRST, then load the CDN CSS.
<link rel="stylesheet" href="variables.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/putitdigital/dev-ui-kit@main/components.css">

Updates are usually instant on GitHub, but CDNs + browser cache can take minutes to hours (sometimes longer).
Method 1: Add version query (FASTEST)
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/putitdigital/dev-ui-kit@main/base.css?v=2">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/putitdigital/dev-ui-kit@main/components.css?v=2">
Change ?v=2 to ?v=3 whenever you update.
Method 2: Hard refresh browser
Mac: Cmd + Shift + R
Windows: Ctrl + Shift + R
Method 3: Use jsDelivr purge tool
Go here:
👉 https://www.jsdelivr.com/tools/purge
Paste your file URL:
https://cdn.jsdelivr.net/gh/putitdigital/dev-ui-kit@main/base.css
👉 This forces CDN to refresh immediately.
🔥 Method 4: Use commit hash (BEST for production)
Instead of @main, use a specific commit:
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/putitdigital/dev-ui-kit@COMMIT_HASH/base.css">
👉 This guarantees:
No caching issues
Exact version control