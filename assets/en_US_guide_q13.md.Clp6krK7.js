import{_ as e,c as a,o as t,a4 as s}from"./chunks/framework.BmdFiWrL.js";const g=JSON.parse('{"title":"Initialize User Password","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"en_US/guide/q13.md","filePath":"en_US/guide/q13.md","lastUpdated":1734258434000}'),i={name:"en_US/guide/q13.md"},o=s('<h1 id="initialize-user-password" tabindex="-1">Initialize User Password <a class="header-anchor" href="#initialize-user-password" aria-label="Permalink to &quot;Initialize User Password&quot;">​</a></h1><p>If you forget the user password stored in the local database, it cannot be retrieved as it is encrypted using <code>bcrypt</code>. However, you can reset it by creating a default user account and then updating the password to your preference.</p><hr><h2 id="steps-to-reset-the-password" tabindex="-1">Steps to Reset the Password <a class="header-anchor" href="#steps-to-reset-the-password" aria-label="Permalink to &quot;Steps to Reset the Password&quot;">​</a></h2><h3 id="_1-stop-the-dashboard-service" tabindex="-1">1. Stop the Dashboard Service <a class="header-anchor" href="#_1-stop-the-dashboard-service" aria-label="Permalink to &quot;1. Stop the Dashboard Service&quot;">​</a></h3><p>To ensure data consistency and prevent conflicts, it is recommended to stop the Dashboard before modifying the database.</p><hr><h3 id="_2-locate-the-database-file" tabindex="-1">2. Locate the Database File <a class="header-anchor" href="#_2-locate-the-database-file" aria-label="Permalink to &quot;2. Locate the Database File&quot;">​</a></h3><p>The database file is typically located at:</p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/opt/nezha/dashboard/data/sqlite.db</span></span></code></pre></div><hr><h3 id="_3-query-and-reset-the-user-table" tabindex="-1">3. Query and Reset the User Table <a class="header-anchor" href="#_3-query-and-reset-the-user-table" aria-label="Permalink to &quot;3. Query and Reset the User Table&quot;">​</a></h3><p>Use the SQLite command-line tool to interact with the database:</p><ol><li><p><strong>Query Existing Users</strong>: Run the following command to list all existing users:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sqlite3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/nezha/dashboard/data/sqlite.db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SELECT * FROM users;&quot;</span></span></code></pre></div></li><li><p><strong>Clear the User Table</strong>: If you need to reset the user table, run the following command to delete all user records:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sqlite3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/nezha/dashboard/data/sqlite.db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;DELETE FROM users;&quot;</span></span></code></pre></div></li></ol><hr><h3 id="_4-restart-the-dashboard" tabindex="-1">4. Restart the Dashboard <a class="header-anchor" href="#_4-restart-the-dashboard" aria-label="Permalink to &quot;4. Restart the Dashboard&quot;">​</a></h3><p>After modifying the database, restart the Dashboard to apply changes.</p><hr><h3 id="_5-login-using-the-default-account" tabindex="-1">5. Login Using the Default Account <a class="header-anchor" href="#_5-login-using-the-default-account" aria-label="Permalink to &quot;5. Login Using the Default Account&quot;">​</a></h3><p>During initialization, the Dashboard checks if the user table is empty. If it is, a default user account is created automatically.<br> You can log in with the following credentials:</p><ul><li><strong>Username</strong>: <code>admin</code></li><li><strong>Password</strong>: <code>admin</code></li></ul><hr><h2 id="post-reset-actions" tabindex="-1">Post-Reset Actions <a class="header-anchor" href="#post-reset-actions" aria-label="Permalink to &quot;Post-Reset Actions&quot;">​</a></h2><p>Once logged in, it is strongly recommended to change the default password immediately for security reasons:</p><ol><li>Go to <strong>Profile → Personal Info</strong>.</li><li>Select <strong>Update Profile</strong>.</li><li>Set a new, secure password.</li></ol><hr><h2 id="important-notes" tabindex="-1">Important Notes <a class="header-anchor" href="#important-notes" aria-label="Permalink to &quot;Important Notes&quot;">​</a></h2><ul><li><strong>Backup Before Modifying</strong>: Always create a backup of the database before making any changes:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/nezha/dashboard/data/sqlite.db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/nezha/dashboard/data/sqlite.db.bak</span></span></code></pre></div></li><li><strong>Caution</strong>: Clearing the user table will remove all existing user accounts, including administrators. Proceed only if you are certain about the operation.</li></ul><hr>',29),r=[o];function n(l,d,h,c,p,u){return t(),a("div",null,r)}const k=e(i,[["render",n]]);export{g as __pageData,k as default};