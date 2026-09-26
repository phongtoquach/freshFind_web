import os
import subprocess

html_template = """<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv=Content-Type content="text/html; charset=unicode">
<meta name=ProgId content=Word.Document>
<meta name=Generator content="Microsoft Word 15">
<meta name=Originator content="Microsoft Word 15">
<link rel=File-List href="ReadMe_files/filelist.xml">
<!--[if !mso]>
<style>
v\\:* {behavior:url(#default#VML);}
o\\:* {behavior:url(#default#VML);}
w\\:* {behavior:url(#default#VML);}
.shape {behavior:url(#default#VML);}
</style>
<![endif]-->
<title>Project Documentation &amp; ReadMe - FreshFind</title>
<!--[if gte mso 9]><xml>
 <o:DocumentProperties>
  <o:Author>Di&#7879;u &#272;&#7853; Do&#227;n Quang</o:Author>
  <o:LastAuthor>Di&#7879;u &#272;&#7853; Do&#227;n Quang</o:LastAuthor>
  <o:Revision>15</o:Revision>
  <o:Created>2026-09-26T11:18:00Z</o:Created>
  <o:LastSaved>2026-09-26T12:20:00Z</o:LastSaved>
  <o:Pages>25</o:Pages>
  <o:Words>4200</o:Words>
  <o:Version>16.00</o:Version>
 </o:DocumentProperties>
 <o:OfficeDocumentSettings>
  <o:AllowPNG/>
 </o:OfficeDocumentSettings>
</xml><![endif]-->
<link rel=themeData href="ReadMe_files/themedata.thmx">
<link rel=colorSchemeMapping href="ReadMe_files/colorschememapping.xml">
<!--[if gte mso 9]><xml>
 <w:WordDocument>
  <w:TrackMoves>false</w:TrackMoves>
  <w:TrackFormatting/>
  <w:ValidateAgainstSchemas/>
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w:DoNotPromoteQF/>
  <w:LidThemeOther>EN-US</w:LidThemeOther>
  <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
  <w:Compatibility>
   <w:BreakWrappedTables/>
   <w:SplitPgBreakAndParaMark/>
  </w:Compatibility>
  <w:DoNotOptimizeForBrowser/>
 </w:WordDocument>
</xml><![endif]-->
<style>
<!--
.INFO-BOX { border-radius: 0 6px 6px 0; }
.IMAGE-PLACEHOLDER { border-radius: 6px; }
.PLACEHOLDER-BOX { border-radius: 6px; }
code { border-radius: 3px; }
pre { border-radius: 4px; overflow-x: auto; }
.DIAGRAM-CONTAINER { border-radius: 8px; }
.FLOW-STEP { border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
.FLOW-DECISION { border-radius: 6px; }
.FLOW-BRANCH-BOX { border-radius: 6px; min-height: 75px; }

@font-face { font-family:"Segoe UI"; panose-1:2 11 5 2 4 2 4 2 2 3; }
@font-face { font-family:Consolas; panose-1:2 11 6 9 2 2 4 3 2 4; }
@font-face { font-family:"Segoe UI Symbol"; panose-1:2 11 5 2 4 2 4 2 2 3; }

p.MsoNormal, li.MsoNormal, div.MsoNormal {
  margin:0cm; text-align:left; font-size:11.0pt; font-family:"Segoe UI",sans-serif; color:#2C3E50;
}
h1 {
  margin-top:auto; margin-bottom:10.5pt; text-align:center; font-size:26.0pt;
  font-family:"Segoe UI",sans-serif; color:#1B5E20; text-transform:uppercase; font-weight:bold;
  border-bottom:solid #2E7D32 2.25pt; padding-bottom:8.0pt;
}
h2 {
  margin-top:21.0pt; margin-bottom:9.0pt; text-align:left; font-size:16.0pt;
  font-family:"Segoe UI",sans-serif; color:#2E7D32; font-weight:bold;
  border-bottom:solid #A5D6A7 1.0pt; padding-bottom:5.0pt;
}
h3 {
  margin-top:13.5pt; margin-bottom:6.0pt; text-align:left; font-size:13.0pt;
  font-family:"Segoe UI",sans-serif; color:#388E3C; font-weight:bold;
}
h4 {
  margin-top:9.0pt; margin-bottom:4.5pt; text-align:left; font-size:11.5pt;
  font-family:"Segoe UI",sans-serif; color:#43A047; font-weight:bold;
}
p {
  margin-top:auto; margin-bottom:auto; text-align:justify; font-size:11.0pt;
  font-family:"Segoe UI",sans-serif; color:#2C3E50; line-height:1.5;
}
code {
  font-family:Consolas; color:#B71C1C; background:#F1F3F4; padding:2px 5px; font-size:10.0pt;
}
pre {
  margin:0cm; text-align:left; background:#F8F9FA; border:solid #E9ECEF .75pt;
  padding:9.0pt; font-size:10.0pt; font-family:Consolas; color:#2C3E50;
}
-->
</style>
</head>

<body lang=EN-US style='tab-interval:36.0pt;word-wrap:break-word;margin:30.0pt'>

<div class=WordSection1>

<div style='border:none;border-bottom:solid #2E7D32 2.25pt;padding:0cm 0cm 8.0pt 0cm'>
<h1>PROJECT README &amp; TECHNICAL SPECIFICATION</h1>
</div>

<div style='border:none;border-left:solid #4CAF50 4.5pt;padding:0cm 0cm 0cm 15.0pt;margin-top:13.5pt;margin-bottom:13.5pt;background:#F1F8E9'>
<p><strong>Project Name:</strong> FreshFind – Fresh All Along</p>
<p><strong>Theme:</strong> eGreen Basket | <strong>Category:</strong> Web Innovation Unleashed</p>
<p><strong>System Architecture:</strong> Frontend Single Page Application (SPA) built using React 19 + Vite, running purely on client-side logic with pre-populated JSON datasets and browser storage, adhering strictly to the zero-backend constraint of the TechWiz competition.</p>
</div>

<hr size=2 width="100%" align=center>

<!-- ========================================================================= -->
<!-- 1. PROBLEM DEFINITION                                                     -->
<!-- ========================================================================= -->
<h2>1. PROBLEM DEFINITION &amp; BACKGROUND</h2>

<h3>1.1. Background &amp; Necessity</h3>
<p>Farmers markets play a vital role in bridging local communities with regional growers who harvest fresh, healthy, seasonal produce for local households. However, in reality, information regarding market schedules, geographic locations, operating hours, and produce availability remains fragmented across paper flyers, community physical bulletin boards, social media groups, and word of mouth. There has been no single, consolidated, and reliable digital platform for neighborhood residents to access this information seamlessly.</p>

<h3>1.2. Key User Pain Points</h3>
<ul>
 <li><strong>Unpredictable Operating Hours:</strong> Unlike conventional supermarkets, farmers markets operate on sporadic schedules (e.g., only Saturday mornings, alternate Sundays, or specific weekday afternoons). Residents struggle to plan their visits without knowing whether a market is currently open.</li>
 <li><strong>Produce Availability Uncertainty:</strong> Shoppers rarely know in advance which fresh fruits, herbs, or vegetables are currently in season or supplied at particular market stalls.</li>
 <li><strong>Navigation &amp; Proximity Hurdles:</strong> Consumers often find it inconvenient to calculate travel distances, view map directions, or discover newer markets located nearest to their current whereabouts.</li>
</ul>

<h3>1.3. Proposed Solution (FreshFind)</h3>
<p><strong>FreshFind</strong> addresses these challenges by delivering an accessible, browser-based Single Page Application (SPA) designed to consolidate farmers market information into one unified hub:</p>
<ul>
 <li>Aggregating real-time market details: exact street addresses, weekly operating timetables, interactive maps, and cataloged produce inventories.</li>
 <li>Providing an interactive Seasonal Produce Guide that educates consumers on peak harvesting periods and links them directly to nearby markets stocking those items.</li>
 <li>Leveraging Browser Geolocation to compute real-time distances (via the Haversine formula) and surface nearest markets instantly.</li>
 <li>Equipping users with a client-side Bookmarking, Session Notes, and Formatted Text Export System to plan shopping itineraries effortlessly without requiring complex server-side accounts.</li>
</ul>

<hr size=2 width="100%" align=center>

<!-- ========================================================================= -->
<!-- 2. DESIGN SPECIFICATIONS                                                  -->
<!-- ========================================================================= -->
<h2>2. DESIGN SPECIFICATIONS</h2>

<h3>2.1. UI/UX Design Philosophy</h3>
<p>The FreshFind user interface embodies an organic, minimalist, and approachable design language. The visual identity reflects fresh agriculture through lush greens, warm harvesting ambers, and clean white backdrops that enhance readability and create an airy, positive user atmosphere. The interface is fully responsive, catering seamlessly to desktop monitors, tablets, and mobile smartphones.</p>

<p align=center><img width=624 height=298 src="ReadMe_files/image004.png"></p>
<p align=center><i>(High-fidelity Design Prototype)</i></p>

<p align=center><img width=624 height=266 src="ReadMe_files/image005.png"></p>
<p align=center><i>(Homepage FreshFind)</i></p>

<p align=center><img width=406 height=864 src="ReadMe_files/image011.png"></p>
<p align=center><i>(Markets list page)</i></p>

<p align=center><img width=642 height=306 src="ReadMe_files/image012.png"></p>
<p align=center><i>(Farm products page)</i></p>

<p align=center><img width=642 height=304 src="ReadMe_files/image016.png"></p>
<p align=center><i>(Seasonal produce page)</i></p>

<p align=center><img width=643 height=695 src="ReadMe_files/image018.png"></p>
<p align=center><i>(Market details page)</i></p>

<p align=center><img width=643 height=845 src="ReadMe_files/image019.png"></p>
<p align=center><i>(Contact page)</i></p>

<p align=center><img width=642 height=305 src="ReadMe_files/image025.png"></p>
<p align=center><i>(Bookmark page)</i></p>

<h3>2.2. Color Palette &amp; Typography</h3>
<table border=1 cellspacing=0 cellpadding=6 width="100%" style='border-collapse:collapse;border:solid #C8E6C9 1.0pt'>
 <tr style='background:#E8F5E9'>
  <th width="25%" style='color:#1B5E20'>Design Token</th>
  <th width="35%" style='color:#1B5E20'>Color Code / Font Family</th>
  <th width="40%" style='color:#1B5E20'>Design Rationale &amp; Application</th>
 </tr>
 <tr>
  <td><strong>Primary Color</strong></td>
  <td><code>#2e7d32</code> (Forest Green) / <code>#4caf50</code></td>
  <td>Represents fresh produce, organic harvest, used for Header, primary Call-To-Action buttons, and section titles.</td>
 </tr>
 <tr>
  <td><strong>Secondary Accent</strong></td>
  <td><code>#fbc02d</code> / <code>#ffa000</code> (Harvest Amber)</td>
  <td>Warm sunshine and ripe crops, utilized for "Open Right Now" live badges, seasonal highlights, and bookmark stars.</td>
 </tr>
 <tr>
  <td><strong>Background Canvas</strong></td>
  <td><code>#ffffff</code> / <code>#f8fbf8</code> (Clean Soft Off-White)</td>
  <td>Ensures maximum readability, clarity, and visual contrast for food photography.</td>
 </tr>
 <tr>
  <td><strong>Typography Neutral</strong></td>
  <td><code>#2c3e50</code> / <code>#455a64</code> (Dark Slate)</td>
  <td>High-contrast text color providing strict compliance with WCAG Accessibility guidelines.</td>
 </tr>
 <tr>
  <td><strong>Typeface Family</strong></td>
  <td><code>'Segoe UI', system-ui, -apple-system, sans-serif</code></td>
  <td>Clean, modern sans-serif typography ensuring legibility across Windows, macOS, Android, and iOS devices.</td>
 </tr>
</table>

<h3>2.3. Design References &amp; Live Prototype</h3>
<p><img width=310 height=782 src="ReadMe_files/image026.png" align=left hspace=12>
<strong>Design Template Source:</strong> My team is designing based on the template at the following URL:<br/>
<a href="https://freshfind-market.youware.app/markets/downtown-farmers-market">https://freshfind-market.youware.app/markets/downtown-farmers-market</a></p>

<br clear=all>

<hr size=2 width="100%" align=center>

<!-- ========================================================================= -->
<!-- 3. DETAILED SPECIFICATION OF EXISTING WEB FEATURES                       -->
<!-- ========================================================================= -->
<h2>3. DETAILED SPECIFICATION OF EXISTING WEB FEATURES</h2>

<h3>3.1. Global Navigation &amp; Utilities</h3>
<ul>
 <li><strong>Header Navigation (NavBar):</strong> Hosts the brand identity "FreshFind", primary navigation links (<em>Home, Markets, Farm Products, Seasonal, About Us, Contact</em>), a live bookmark badge displaying the current number of saved items, and a dummy Login / Sign Up action button.</li>
 <li><strong>Browser Geolocation &amp; Proximity Calculation (Haversine Formula):</strong> Integrated within <code>AppContext</code> to request user GPS permission via <code>navigator.geolocation.getCurrentPosition()</code>. Calculates the real-time geographic distance in kilometers (km) between the user's coordinates and each market's coordinates using the spherical Haversine formula ($R = 6371$ km).</li>
 <li><strong>Simulated Page View / Visitor Counter:</strong> Located in the footer, this counter uses JavaScript coupled with <code>localStorage</code> to dynamically track and display cumulative page visit counts across user sessions.</li>
 <li><strong>Real-Time Schedule Status Checker:</strong> An automated algorithm that compares client system time (day of week and current <code>HH:mm</code>) against each market's timetable to immediately indicate whether it is "Open Right Now" or "Closed".</li>
 <li><strong>Breadcrumb Navigation:</strong> Renders clear hierarchical location paths (e.g., <code>Home / Markets / Downtown Farmers Market</code>) for seamless user orientation.</li>
</ul>

<h3>3.2. SEO-Friendly Slug &amp; Dynamic Entity Lookup (`/:id/:slug`)</h3>
<ul>
 <li><strong>Human-Readable, SEO-Friendly URL Structure:</strong> Markets and detailed product resources utilize an intuitive slug routing pattern: <code>/markets/:marketId/:marketSlug</code> (for example: <code>/markets/1/downtown-farmers-market</code>).</li>
 <li><strong>Flexible Entity Lookup (`getMarketByIdOrSlug`):</strong> The service layer can resolve market entities either by numeric identifier (<code>id</code>) or by textual slug string (<code>slug</code>). This enables easy social link sharing, bookmark preservation, and enhanced search engine optimization.</li>
 <li><strong>Dual-Entity Lookups:</strong> Enables quick cross-referencing between products and markets; clicking a produce item or market link seamlessly resolves the corresponding target entity.</li>
</ul>

<h3>3.3. Home Page (`/`)</h3>
<ul>
 <li><strong>Hero Section Quick Find (HomeMarketSearchBox):</strong> A prominent search widget allowing visitors to select a Produce Category (dynamically populated from <code>categories.json</code>) and multiple Days of the Week. Submitting the form navigates directly to the Market Directory with serialized URL search parameters.</li>
 <li><strong>Nearby Markets Showcase (Automatic Nearest-First Geolocation Sorting):</strong> A flagship feature on the FreshFind homepage designed to connect local consumers directly with neighborhood growers in their immediate vicinity. Upon initial page mount, <code>Home.jsx</code> triggers <code>AppContext.refreshUserCurrentLocation()</code> to request the user's live GPS coordinates via <code>navigator.geolocation.getCurrentPosition()</code>. While coordinates are being queried, a smooth loading placeholder (<code>&lt;div style=&quot;text-align: center;&quot;&gt;Loading...&lt;/div&gt;</code>) prevents layout shifts. Once latitude and longitude are acquired, the system computes the exact great-circle distance between the user and every market in <code>markets.json</code> using the spherical Haversine formula ($R = 6371\text{ km}$). The markets are automatically reordered in ascending order of physical distance (<code>distanceA - distanceB</code>), placing the closest venues at the very front of the grid. Each market card renders a formatted proximity badge (e.g., <code>"450 m"</code> or <code>"2.4 km away"</code>). If GPS access is declined or unavailable, <code>userLocation</code> resolves to <code>null</code>, and the section gracefully falls back to default catalog ordering without interrupting the browsing experience.</li>
 <li><strong>Featured Currently Open Markets:</strong> A filtered view that exclusively surfaces markets operating right at the time of browsing (<code>onlyOpenNow: 1</code>), sorted by promotional prominence (<code>clickCount</code> descending).</li>
 <li><strong>This Week's Seasonal Picks:</strong> An automated harvest recommendation showcase powered by <code>ProducesGrid.jsx</code> (invoked with <code>getByCurrentMonth={1}</code>) that dynamically presents fresh produce items harvested in the active calendar month, complete with produce photos, descriptions, and links to local markets stocking them.</li>
</ul>

<h3>3.4. Market Directory (`/markets`)</h3>
<ul>
 <li><strong>Sidebar Multi-Criteria Filter:</strong>
  <ul>
   <li><em>Area Search:</em> Text input for neighborhood or district names (e.g., "Downtown", "Westside").</li>
   <li><em>Produce Category:</em> Dropdown selecting specific food types (Fruits, Vegetables, Herbs, Dairy, etc.).</li>
   <li><em>Days of Week:</em> Multi-select control to filter markets active on chosen weekdays.</li>
   <li><em>"Remove Filters" Button:</em> Clears all active filters and restores the full directory catalog.</li>
  </ul>
 </li>
 <li><strong>Sorting Options:</strong> Supports 4 distinct ordering algorithms:
  <ol>
   <li><code>Nearest First</code>: Evaluates GPS distance and lists nearest venues first.</li>
   <li><code>Name A-Z</code>: Alphabetical ascending sort.</li>
   <li><code>Name Z-A</code>: Alphabetical descending sort.</li>
   <li><code>Open next day</code>: Prioritizes markets holding sessions on the nearest forthcoming day.</li>
  </ol>
 </li>
 <li><strong>Market Card Grid:</strong> Displays thumbnail images, market name, calculated distance badge (e.g. <em>"2.4 km away"</em>), neighborhood area, working hours summary, and direct link to full market details.</li>
</ul>

<h3>3.5. Market Details Page (`/markets/:marketId/:marketSlug`)</h3>
<ul>
 <li><strong>Real-Time Schedule Evaluation &amp; Next Open Day:</strong> Accurately determines whether the market is open during the current visit. If closed, the algorithm triggers <code>getNextOpenDay()</code> to calculate the next upcoming operating date (e.g., <em>"Closed today • Next open: Saturday at 08:00 AM"</em>).</li>
 <li><strong>Weekly Schedule Table:</strong> A full 7-day breakdown displaying daily start and closing hours or "Closed" badges.</li>
 <li><strong>Interactive Leaflet Map:</strong> Embedded OpenStreetMap powered by Leaflet, displaying an exact coordinate pin (Marker) and an informational Popup containing the market title and street address.</li>
 <li><strong>Available Farm Produce Grid:</strong> Displays farm-fresh goods available at this specific market, cross-referenced from <code>products.json</code> via <code>productIds</code>.</li>
 <li><strong>Bookmark &amp; Personal Notes System:</strong> Includes an instant bookmark toggle and a "Read my Notes" button that launches an interactive Modal to view, draft, and delete customized shopping notes.</li>
</ul>

<h3>3.6. Produce Guide (`/produce-guide`)</h3>
<ul>
 <li><strong>Instant Keyword Search:</strong> Real-time filtering matching against produce titles and descriptions.</li>
 <li><strong>Category Filter Tabs:</strong> Quick switches for All Categories, Vegetables, Fruits, Herbs, Dairy &amp; Eggs, Bakery, Honey &amp; Preserves, etc.</li>
 <li><strong>Produce Information Cards:</strong> Presents vivid food photography, descriptive nutritional/culinary notes, ideal harvesting seasons, and <strong>direct links to all local markets stocking this item</strong>.</li>
 <li><strong>Item Bookmarks &amp; Notes:</strong> Allows saving individual produce items to personal favorites alongside private notes.</li>
</ul>

<h3>3.7. Seasonal Produce (`/products-seasons`)</h3>
<ul>
 <li><strong>12-Month Switcher:</strong> Horizontal selector enabling users to inspect produce harvested in any month (January to December) or view the full annual cycle.</li>
 <li><strong>Seasonal Produce Ingestion:</strong> Displays items matching the selected month via the <code>availableMonths</code> dataset attribute.</li>
 <li><strong>Related Markets Discovery:</strong> Automatically queries and presents all local markets that currently stock the seasonal items on display.</li>
</ul>

<h3>3.8. Bookmarking &amp; Notes Management (`/bookmarks`)</h3>
<ul>
 <li><strong>Tabbed Layout:</strong> Segregated tabs for "My Markets" and "My Products".</li>
 <li><strong>Quick Delete Action:</strong> Dedicated remove button on each saved item.</li>
 <li><strong>Empty State Handling:</strong> Informative placeholder screen directing visitors back to the directory when no bookmarks have been saved yet.</li>
 <li><strong>Personal Notes Modal:</strong> Interactive popup allowing users to add dated notes, review thoughts, and remove individual entries seamlessly.</li>
 <li><strong>Export Bookmarks via Formatted `.txt` File Download:</strong> A dedicated <code>"Export bookmarks"</code> button on the <code>/bookmarks</code> page triggers an instant, purely client-side data export. The handler (<code>exportBookmarks()</code> in <code>BookMarks.jsx</code>) compiles all saved markets (numbered with names, areas, and canonical slug URLs: <code>${origin}/markets/:id/:slug</code>) and all bookmarked produce items (numbered with direct search query URLs) into a structured plain text document. It constructs an in-memory <code>Blob([content], { type: 'text/plain;charset=utf-8' })</code> and triggers an automatic browser file download named <code>freshfind-bookmarks.txt</code> via <code>URL.createObjectURL()</code>, requiring zero backend server interaction.</li>
</ul>

<h3>3.9. Contact Us &amp; About Us (`/contact`, `/about`)</h3>
<ul>
 <li><strong>About Us:</strong> Narrative describing FreshFind's community mission and support for sustainable agriculture.</li>
 <li><strong>Contact Us with Full Form Validation:</strong> Includes contact coordinates, hours, Leaflet headquarter map, and an interactive contact form validated with real-time feedback (Full name $\\ge 2$ chars, strict Email regex, inquiry dropdown, message body $\\ge 10$ chars, touched/errors lifecycle states).</li>
</ul>

<h3>3.10. Dummy Authentication Prototype (`/login`, `/signup`)</h3>
<ul>
 <li>Clean login and sign-up user interfaces providing aesthetic and functional prototype completeness (UI Continuity) as requested by SRS Section 1.8.</li>
</ul>

<h3>3.11. Dedicated Specification: Simulated Page View &amp; Visitor Counter (`Footer.jsx`)</h3>
<p>To fulfill the requirement in SRS Section 1.8 (<em>"Visitor Counter: Simulated visitor counter using JavaScript"</em>), FreshFind implements an autonomous, client-side metric tracker without requiring an external analytics server:</p>
<ul>
 <li><strong>Component Implementation:</strong> Encapsulated directly within <code>Footer.jsx</code>, which remains visible across all website pages.</li>
 <li><strong>State &amp; Storage Lifecycle:</strong> Upon mounting, the component invokes <code>useEffect(() => { ... }, [])</code>. It inspects browser <code>localStorage</code> under the key <code>"visits"</code>.</li>
 <li><strong>Seeded Initial Baseline:</strong> If no previous record exists (first-time visitor), it initializes with a default seed of <code>233</code> (via nullish coalescing operator: <code>localStorage.getItem("visits") ?? 233</code>).</li>
 <li><strong>Incremental Computation:</strong> The counter computes <code>newCount = oldCount + 1</code> (resulting in an initial active count of <code>234</code>), persists <code>newCount</code> back to <code>localStorage</code>, and updates the React state via <code>setVisitCount(newCount)</code>.</li>
 <li><strong>UI Presentation:</strong> Displays dynamically at the footer: <code>Total visits: <span>{visitCount}</span></code>.</li>
</ul>

<h3>3.12. Dedicated Feature Specification: Homepage Proximity Engine, Haversine Distance Calculation &amp; Automatic Nearest-First Sorting</h3>
<p>FreshFind integrates an automated, client-side geospatial proximity engine to prioritize the geographically closest farmers markets directly upon opening the Homepage:</p>
<ul>
 <li><strong>GPS Hardware Interrogation:</strong> Managed inside <code>AppContext.jsx</code> via <code>refreshUserCurrentLocation()</code>, which calls <code>navigator.geolocation.getCurrentPosition()</code> with <code>enableHighAccuracy: true</code>, <code>timeout: 5000ms</code>, and <code>maximumAge: 60000ms</code>.</li>
 <li><strong>Mathematical Implementation (Haversine Formula):</strong> Encapsulated in <code>calculateDistance(lat1, lon1, lat2, lon2)</code> within <code>marketService.js</code>, computing great-circle spherical distance using Earth radius $R = 6371\text{ km}$:
  <pre>
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in kilometers
    const toRad = (degree) => degree * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
  </pre>
 </li>
 <li><strong>Proximity Badge Formatting (<code>formatDistance</code>):</strong> In <code>marketService.js</code>, distances are formatted intelligently for readability:
  <pre>
export function formatDistance(distanceKm) {
    if (distanceKm &lt; 1) {
        return `${Math.round(distanceKm * 1000)} m`;
    }
    return `${new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 1
    }).format(distanceKm)} km away`;
}
  </pre>
  In <code>MarketsGrid.jsx</code>, each card renders this badge alongside a pin icon (<code>&lt;img src=&quot;/images/distance-icon.png&quot; /&gt;</code>).
 </li>
 <li><strong>Automated Nearest-First Sorting on Homepage:</strong> In <code>Home.jsx</code>, the "Nearby Markets" section passes <code>sortType=&quot;nearest_first&quot;</code> and <code>userCurrentLocation</code> to <code>MarketsGrid</code>. The sorting routine computes distances on-the-fly and organizes the array by ascending numerical value (<code>distanceA - distanceB</code>), placing the closest market venue at the top-left slot of the homepage grid.</li>
 <li><strong>Graceful Degradation Fallback:</strong> If the user declines geolocation permissions, if GPS is unavailable, or if the request times out, <code>userLocation</code> defaults to <code>null</code>. The component immediately terminates the loading state, hides the distance badges, and preserves the default catalog display order without throwing exceptions or breaking the UI.</li>
</ul>

<hr size=2 width="100%" align=center>

<!-- ========================================================================= -->
<!-- 4. APPLICATION WORKFLOW & ARCHITECTURE                                    -->
<!-- ========================================================================= -->
<h2>4. APPLICATION WORKFLOW &amp; ARCHITECTURE</h2>

<h3>4.1. System &amp; Architectural Data Flow</h3>
<p>FreshFind adopts React’s Unidirectional Data Flow combined with React Context Providers and Browser LocalStorage:</p>
<ol>
 <li><strong>Application Bootstrapping:</strong> At startup, <code>App.jsx</code> wraps all routes within four foundational Context Providers: <code>AppProvider</code> (Geolocation GPS), <code>ProductsSeasonProvider</code> (Season &amp; month filter state), <code>BookmarkProvider</code> (Favorite markets and produce), and <code>NoteProvider</code> (Personal notes).</li>
 <li><strong>Data Ingestion:</strong> Static datasets (<code>markets.json</code>, <code>products.json</code>, <code>categories.json</code>, <code>seasons.js</code>) are imported directly into memory.</li>
 <li><strong>Client-Side Business Logic:</strong> Geospatial distance calculation (Haversine formula), real-time schedule checks, keyword matching, and multi-criteria sorting execute on the client with zero latency.</li>
 <li><strong>State Persistence:</strong> User bookmarks and personal notes synchronize bidirectionally with <code>localStorage</code>, preserving user data across page refreshes and route transitions.</li>
</ol>

<h3>4.2. User Journey &amp; Operational Workflows</h3>
<ul>
 <li><strong>Market Discovery Journey:</strong> Visitor enters Home ➔ Initiates Quick Find or browses Market Directory ➔ Adjusts area, day, or produce filters ➔ Selects Nearest First sort ➔ Clicks market card to open SEO-friendly URL (<code>/markets/:id/:slug</code>) ➔ Inspects timetable and Leaflet map ➔ Toggles Bookmark or adds personal notes.</li>
 <li><strong>Seasonal Produce Journey:</strong> Visitor enters Seasonal Produce ➔ Selects current calendar month ➔ Discovers in-season crops ➔ Views list of stocking markets ➔ Clicks market link to schedule a visit.</li>
 <li><strong>Shopping Planning &amp; TXT Export Journey:</strong> Visitor navigates to Bookmarks ➔ Reviews saved venues and goods ➔ Launches Notes Modal to review shopping lists ➔ Clicks "Export bookmarks" button ➔ Browser instantly generates and downloads <code>freshfind-bookmarks.txt</code> containing formatted shopping lists with direct URLs and areas.</li>
 <li><strong>Page View Counter Lifecycle Workflow:</strong> Visitor accesses any page on FreshFind ➔ <code>Footer</code> mounts in DOM ➔ <code>useEffect</code> checks <code>localStorage.getItem("visits")</code> ➔ Increments tally by 1 ➔ Writes back to <code>localStorage</code> ➔ Re-renders footer display with updated count.</li>
</ul>

<h3>4.3. Dedicated Operational Workflow: Homepage Distance Calculation &amp; Nearest-First Market Auto-Sorting</h3>
<p>To ensure neighborhood residents immediately discover the markets closest to them without manual searching, FreshFind implements an automated proximity ordering pipeline upon accessing the homepage:</p>
<ol>
 <li><strong>Component Initialization &amp; Mount:</strong> When the user visits <code>/</code>, <code>Home.jsx</code> mounts. While GPS coordinates have not yet resolved, <code>userLocation</code> equals <code>undefined</code>. The component conditionally renders a clean loading indicator (<code>&lt;div style=&quot;text-align: center;&quot;&gt;Loading...&lt;/div&gt;</code>) to avoid layout shifts while hardware coordinates are determined.</li>
 <li><strong>Geolocation API Handshake:</strong> The <code>useEffect</code> hook in <code>Home.jsx</code> executes on mount, calling <code>refreshUserCurrentLocation()</code> from <code>AppContext</code>. The browser prompts the user for location access and invokes <code>navigator.geolocation.getCurrentPosition()</code> with high-accuracy mode.</li>
 <li><strong>Coordinate State Synchronization:</strong> Upon receiving position coordinates, <code>AppContext</code> updates state with <code>{ latitude: position.coords.latitude, longitude: position.coords.longitude }</code>, causing <code>Home.jsx</code> to re-render with active coordinates.</li>
 <li><strong>MarketsGrid Ingestion with <code>nearest_first</code> Parameter:</strong> <code>Home.jsx</code> renders the <code>&quot;Nearby Markets&quot;</code> section by invoking <code>&lt;MarketsGrid sortType=&quot;nearest_first&quot; userCurrentLocation={userCurrentLocationObj} /&gt;</code>.</li>
 <li><strong>Great-Circle Distance Calculation (Haversine Formula):</strong> Inside <code>marketService.js</code>, the engine passes the user's coordinates and iterates over every market entry in <code>markets.json</code>. It executes <code>calculateDistance(lat1, lon1, lat2, lon2)</code> with Earth radius $R = 6371\text{ km}$, computing precise spherical distances with zero latency.</li>
 <li><strong>Ascending Proximity Sorting (Nearest First):</strong> The sorting engine runs <code>sortMarketsByType()</code> with <code>case &quot;nearest_first&quot;</code>. It evaluates <code>distanceA - distanceB</code>, reorganizing the market array in strict ascending order of physical distance, positioning the closest farmers market at index 0.</li>
 <li><strong>Proximity Badge Formatting &amp; Card Rendering:</strong> For each sorted market, <code>MarketsGrid.jsx</code> passes the distance to <code>formatDistance(distanceKm)</code>:
  <ul>
   <li>If distance $&lt; 1\text{ km}$: Formatted in meters (e.g., <code>&quot;450 m&quot;</code>).</li>
   <li>If distance $\\ge 1\\text{ km}$: Formatted in kilometers with 1 decimal place (e.g., <code>&quot;1.8 km away&quot;</code>).</li>
  </ul>
  The resulting proximity badge is rendered alongside a location pin icon on each market card.
 </li>
 <li><strong>Graceful Degradation / Permission Denied Fallback:</strong> If GPS access is declined, disabled, or times out, <code>userLocation</code> resolves to <code>null</code>. The component immediately terminates the loading state, omits distance badges, and renders the default market catalog order seamlessly without errors or application crashes.</li>
</ol>

<hr size=2 width="100%" align=center>

<!-- ========================================================================= -->
<!-- 5. COMPREHENSIVE FLOWCHARTS                                               -->
<!-- ========================================================================= -->
<h2>5. COMPREHENSIVE SYSTEM FLOWCHARTS</h2>
<p>The following 7 structured flowcharts illustrate the core business logic, algorithms, and lifecycle workflows powering the FreshFind web portal:</p>

<!-- FLOWCHART 1 -->
<h3>5.1. Flowchart 1: Site Navigation &amp; Dynamic Route Flowchart (`/:id/:slug`)</h3>
<div style='border:solid #E0E0E0 1.0pt;padding:15.0pt;margin-top:13.5pt;margin-bottom:18.75pt;background:#FAFBFC'>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>START: User opens FreshFind in web browser</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b>Browser initializes React Router DOM &amp; Mounts Context Providers (App, Bookmark, Note, Seasonal)</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #FBC02D 1.0pt;padding:8.0pt;margin:4.5pt;background:#FFF9C4;text-align:center'><b>Which route / page did the user request?</b></div>
 
 <table border=0 width="100%" cellpadding=6>
  <tr>
   <td width="50%" valign=top>
    <div style='border:solid #81C784 1.0pt;padding:9.0pt;background:white'>
     <strong>• Path <code>/</code> (Home):</strong><br/>
     Fetches GPS position, renders Hero Quick Find, Nearby Markets, and Featured Open Markets.
    </div>
   </td>
   <td width="50%" valign=top>
    <div style='border:solid #81C784 1.0pt;padding:9.0pt;background:white'>
     <strong>• Path <code>/markets</code> (Directory):</strong><br/>
     Renders full market catalog, multi-criteria sidebar filter, and sorting dropdown.
    </div>
   </td>
  </tr>
  <tr>
   <td width="50%" valign=top>
    <div style='border:solid #81C784 1.0pt;padding:9.0pt;background:white'>
     <strong>• Path <code>/markets/:id/:slug</code> (Details):</strong><br/>
     Executes <code>getMarketByIdOrSlug()</code> to resolve entity by ID/Slug; renders Leaflet map, timetable, and produce.
    </div>
   </td>
   <td width="50%" valign=top>
    <div style='border:solid #81C784 1.0pt;padding:9.0pt;background:white'>
     <strong>• Path <code>/produce-guide</code> &amp; <code>/products-seasons</code>:</strong><br/>
     Loads produce catalog, 12-month switcher, and cross-references selling markets.
    </div>
   </td>
  </tr>
 </table>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>END: Target View renders smoothly with client-side SPA routing (Zero page reload)</b></div>
</div>

<!-- FLOWCHART 2 -->
<h3>5.2. Flowchart 2: Market Search, Multi-Criteria Filter &amp; Haversine Distance Sort</h3>
<div style='border:solid #E0E0E0 1.0pt;padding:15.0pt;margin-top:13.5pt;margin-bottom:18.75pt;background:#FAFBFC'>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>START: User accesses Market Directory (`/markets`)</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b>User configures filters: Types Area keyword, Selects Produce Category, Selects Weekdays</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b><code>getMarketsByFilters()</code> iterates through <code>markets.json</code> to evaluate matching criteria</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #FBC02D 1.0pt;padding:8.0pt;margin:4.5pt;background:#FFF9C4;text-align:center'><b>Do any markets satisfy all active filter criteria?</b></div>

 <table border=0 width="100%" cellpadding=6>
  <tr>
   <td width="50%" valign=top>
    <p align=center style='color:#2E7D32;font-weight:bold'>[ YES: MATCH FOUND ] ↓</p>
    <div style='border:solid #4CAF50 1.0pt;padding:9.0pt;background:white'>
     <strong>Execute <code>sortMarketsByType()</code>:</strong><br/>
     - <em>Nearest First</em>: Applies Haversine formula against GPS position.<br/>
     - <em>Name A-Z / Z-A</em>: Performs string collation.<br/>
     - <em>Open next day</em>: Sorts by closest upcoming market session.<br/>
     ➔ Render Market Cards grid with total count badge.
    </div>
   </td>
   <td width="50%" valign=top>
    <p align=center style='color:#D32F2F;font-weight:bold'>[ NO: NO MATCHES ] ↓</p>
    <div style='border:solid #EF5350 1.0pt;padding:9.0pt;background:white'>
     <strong>Handle Empty Search State:</strong><br/>
     - Displays "No markets found matching your criteria".<br/>
     - Renders "Remove Filters" button to reset parameters to default catalog.
    </div>
   </td>
  </tr>
 </table>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>END: Filtered and sorted market cards are displayed interactively</b></div>
</div>

<!-- FLOWCHART 3 -->
<h3>5.3. Flowchart 3: Real-Time Schedule &amp; Next Open Day Calculation Algorithm</h3>
<div style='border:solid #E0E0E0 1.0pt;padding:15.0pt;margin-top:13.5pt;margin-bottom:18.75pt;background:#FAFBFC'>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>START: User navigates to Market Details (`/markets/:marketId/:marketSlug`)</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b>Retrieve current system time: Active day of week (key) and current time in <code>HH:mm</code> format</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #FBC02D 1.0pt;padding:8.0pt;margin:4.5pt;background:#FFF9C4;text-align:center'><b>Is the market scheduled to open today? (`todaySchedule.open === true`)</b></div>

 <table border=0 width="100%" cellpadding=6>
  <tr>
   <td width="50%" valign=top>
    <p align=center style='color:#2E7D32;font-weight:bold'>[ YES: SCHEDULED TODAY ] ↓</p>
    <div style='border:solid #4CAF50 1.0pt;padding:9.0pt;background:white'>
     <strong>Evaluate Time Window:</strong><br/>
     Check if <code>(Current Time &gt;= Start Hour)</code> AND <code>(Current Time &lt; End Hour)</code>.<br/><br/>
     • <em>If True</em>: Display prominent green badge <strong>"Open Right Now"</strong>.<br/>
     • <em>If False</em>: Mark as "Closed for today" (before or after hours).
    </div>
   </td>
   <td width="50%" valign=top>
    <p align=center style='color:#D32F2F;font-weight:bold'>[ NO: CLOSED TODAY ] ↓</p>
    <div style='border:solid #EF5350 1.0pt;padding:9.0pt;background:white'>
     <strong>Execute <code>getNextOpenDay()</code>:</strong><br/>
     Loop through upcoming 7 calendar days to find the next day marked with <code>open: true</code>.<br/><br/>
     ➔ Display: <strong>"Closed today • Next open: [Day] at [Start Hour]"</strong>.
    </div>
   </td>
  </tr>
 </table>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b>Render 7-day Weekly Schedule Table and Interactive Leaflet Map with Coordinates Marker</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>END: User receives accurate opening times and geographic directions</b></div>
</div>

<!-- FLOWCHART 4 -->
<h3>5.4. Flowchart 4: Seasonal Produce Month Selector &amp; Related Markets Lookup</h3>
<div style='border:solid #E0E0E0 1.0pt;padding:15.0pt;margin-top:13.5pt;margin-bottom:18.75pt;background:#FAFBFC'>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>START: User opens Seasonal Produce page (`/products-seasons`)</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b>User selects a month button (Jan - Dec) OR enters a search term</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b>Produce filtering algorithm: Evaluates if <code>product.availableMonths.includes(activeMonth)</code></b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b>Render filtered Produce Cards with photos, titles, and harvest durations</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'>
  <strong>Trigger Related Markets Cross-Lookup Algorithm:</strong><br/>
  Extract set of visible product IDs (<code>validProductIds</code>), then filter <code>markets.json</code> for venues whose <code>productIds</code> contain at least one matching item
 </div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>END: Displays markets stocking in-season items; user can click any card to visit that market</b></div>
</div>

<!-- FLOWCHART 5 -->
<h3>5.5. Flowchart 5: Bookmarking, Personal Notes &amp; Formatted `.txt` File Export</h3>
<div style='border:solid #E0E0E0 1.0pt;padding:15.0pt;margin-top:13.5pt;margin-bottom:18.75pt;background:#FAFBFC'>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>START: User views a Market or Produce card across the site</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #FBC02D 1.0pt;padding:8.0pt;margin:4.5pt;background:#FFF9C4;text-align:center'><b>Which interaction does the user trigger?</b></div>

 <table border=0 width="100%" cellpadding=6>
  <tr>
   <td width="50%" valign=top>
    <p align=center style='color:#2E7D32;font-weight:bold'>[ CLICK BOOKMARK BUTTON ] ↓</p>
    <div style='border:solid #4CAF50 1.0pt;padding:9.0pt;background:white'>
     - If already saved: Remove ID from favorites array.<br/>
     - If not saved: Add ID to favorites array.<br/>
     - Updates live badge count in Navbar.<br/>
     - Automatically synchronizes with <code>localStorage</code>.
    </div>
   </td>
   <td width="50%" valign=top>
    <p align=center style='color:#F57C00;font-weight:bold'>[ CLICK "READ MY NOTES" ] ↓</p>
    <div style='border:solid #FFB74D 1.0pt;padding:9.0pt;background:white'>
     - Opens the interactive Notes Modal for this specific item.<br/>
     - Fetches existing notes from <code>NoteContext</code>.<br/>
     - User inputs new note and submits form.<br/>
     - User clicks "x" icon to delete individual notes.<br/>
     - Notes persist in client storage.
    </div>
   </td>
  </tr>
 </table>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b>User navigates to <code>/bookmarks</code> to review all saved markets and produce</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'>
  <b>Export Option: User clicks &quot;Export bookmarks&quot; ➔ <code>exportBookmarks()</code> formats text ➔ Client builds in-memory <code>Blob</code> ➔ Browser triggers automatic download of <code>freshfind-bookmarks.txt</code></b>
 </div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>END: User shopping itinerary and bookmarks saved locally &amp; exported as TXT</b></div>
</div>

<!-- FLOWCHART 6 -->
<h3>5.6. Flowchart 6: Homepage Real-Time Geolocation, Haversine Distance Calculation &amp; Nearest-First Market Auto-Sorting</h3>
<div style='border:solid #E0E0E0 1.0pt;padding:15.0pt;margin-top:13.5pt;margin-bottom:18.75pt;background:#FAFBFC'>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>START: User accesses FreshFind Homepage (`/`)</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'>
  <b><code>Home.jsx</code> Lifecycle Mount:</b> Evaluates <code>userLocation === undefined</code> ➔ Displays temporary loading placeholder (<code>Loading...</code>)<br/>
  Executes <code>useEffect()</code> ➔ Invokes <code>refreshUserCurrentLocation()</code> via <code>AppContext</code>
 </div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'>
  <b>Browser queries Device Location:</b> <code>navigator.geolocation.getCurrentPosition()</code> with <code>enableHighAccuracy: true</code>
 </div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #FBC02D 1.0pt;padding:8.0pt;margin:4.5pt;background:#FFF9C4;text-align:center'>
  <b>Did the user grant GPS permission &amp; coordinates were successfully obtained?</b>
 </div>

 <table border=0 width="100%" cellpadding=6>
  <tr>
   <td width="50%" valign=top>
    <p align=center style='color:#2E7D32;font-weight:bold'>[ YES: GPS COORDINATES AVAILABLE ] ↓</p>
    <div style='border:solid #4CAF50 1.0pt;padding:9.0pt;background:white'>
     1. <strong>Synchronize Context:</strong> Store <code>{ latitude, longitude }</code> into <code>AppContext</code> state.<br/>
     2. <strong>Render Nearby Markets Grid:</strong> <code>Home.jsx</code> re-renders with <code>userLocation</code> defined and passes <code>sortType="nearest_first"</code> to <code>&lt;MarketsGrid /&gt;</code>.<br/>
     3. <strong>Calculate Spherical Distances:</strong> Iterate through <code>markets.json</code>, calling <code>calculateDistance(userLat, userLon, mktLat, mktLon)</code> via Haversine formula ($R = 6371\text{ km}$).<br/>
     4. <strong>Auto-Sort Nearest First:</strong> Array reorders by ascending distance (<code>distanceA - distanceB</code>), moving closest markets to index 0.<br/>
     5. <strong>Format Proximity Badges:</strong> Call <code>formatDistance(distanceKm)</code> to generate human-readable distance (e.g. <code>"450 m"</code> or <code>"2.4 km away"</code>).<br/>
     6. <strong>Prioritized Homepage Display:</strong> Geographically nearest markets are placed at the very front of the <strong>"Nearby Markets"</strong> section.
    </div>
   </td>
   <td width="50%" valign=top>
    <p align=center style='color:#D32F2F;font-weight:bold'>[ NO: DENIED / UNAVAILABLE / TIMEOUT ] ↓</p>
    <div style='border:solid #EF5350 1.0pt;padding:9.0pt;background:white'>
     1. <strong>Safe Fallback State:</strong> Set <code>userLocation = null</code> gracefully.<br/>
     2. <strong>Dismiss Loading Screen:</strong> <code>Home.jsx</code> exits loading state and proceeds to render page sections.<br/>
     3. <strong>Omit Proximity Badges:</strong> Distance badges are cleanly omitted from market cards.<br/>
     4. <strong>Preserve Default Catalog:</strong> Markets display in standard default order without crashing or freezing.<br/>
     5. <strong>Full Usability Intact:</strong> Visitor can still search by area, filter by day/produce category, and access market details.
    </div>
   </td>
  </tr>
 </table>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'>
  <b>Render Subsequent Homepage Sections:</b><br/>
  • <em>"Featured Currently Open Markets"</em>: filtered by <code>onlyOpenNow: 1</code> &amp; sorted by <code>featured_desc</code><br/>
  • <em>"This week's seasonal picks"</em>: loaded via <code>&lt;ProducesGrid getByCurrentMonth={1} /&gt;</code>
 </div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'>
  <b>END: FreshFind Homepage renders interactively with geographically nearest markets prioritized at the front</b>
 </div>
</div>

<!-- FLOWCHART 7 (NEW) -->
<h3>5.7. Flowchart 7: Simulated Page View &amp; Visitor Counter Lifecycle (`Footer.jsx`)</h3>
<div style='border:solid #E0E0E0 1.0pt;padding:15.0pt;margin-top:13.5pt;margin-bottom:18.75pt;background:#FAFBFC'>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>START: Visitor accesses or refreshes any page on FreshFind</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b><code>Footer.jsx</code> component is mounted into the DOM</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'><b>Lifecycle Hook <code>useEffect(() => { ... }, [])</code> executes once on mount</b></div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #FBC02D 1.0pt;padding:8.0pt;margin:4.5pt;background:#FFF9C4;text-align:center'><b>Does key <code>"visits"</code> exist in browser <code>localStorage</code>?</b></div>

 <table border=0 width="100%" cellpadding=6>
  <tr>
   <td width="50%" valign=top>
    <p align=center style='color:#2E7D32;font-weight:bold'>[ YES: RECORD FOUND ] ↓</p>
    <div style='border:solid #4CAF50 1.0pt;padding:9.0pt;background:white'>
     Retrieve existing numerical count:<br/>
     <code>oldCount = Number(localStorage.getItem("visits"))</code>
    </div>
   </td>
   <td width="50%" valign=top>
    <p align=center style='color:#F57C00;font-weight:bold'>[ NO: FIRST-TIME VISIT ] ↓</p>
    <div style='border:solid #FFB74D 1.0pt;padding:9.0pt;background:white'>
     Apply seeded baseline value via nullish coalescing:<br/>
     <code>oldCount = 233</code>
    </div>
   </td>
  </tr>
 </table>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'>
  <b>Compute increment: <code>newCount = oldCount + 1</code> (e.g. 234)</b>
 </div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:white;text-align:center'>
  <b>Persist updated counter: <code>localStorage.setItem("visits", newCount)</code> &amp; Update State: <code>setVisitCount(newCount)</code></b>
 </div>
 <p align=center style='font-size:17.0pt;color:#2E7D32'>↓</p>
 <div style='border:solid #4CAF50 1.0pt;padding:8.0pt;margin:4.5pt;background:#E8F5E9;text-align:center'><b>END: Footer renders live counter <code>"Total visits: [newCount]"</code> accurately</b></div>
</div>

<hr size=2 width="100%" align=center>

<!-- ========================================================================= -->
<!-- 6. ASSUMPTIONS MADE IN THE PROJECT                                        -->
<!-- ========================================================================= -->
<h2>6. ASSUMPTIONS MADE IN THE PROJECT</h2>
<p>In accordance with the competition guidelines and the SRS document (Sections 1.5 Constraints and 1.8 Interface Requirements), the project is engineered upon the following foundational assumptions:</p>
<ul>
 <li><strong>Pure Client-Side Architecture (Zero-Backend):</strong> Per SRS constraint 1.5, the application operates entirely without a server-side database backend. All market profiles, schedules, product catalogs, and category lists are served from local static JSON/JS files (<code>markets.json</code>, <code>products.json</code>, <code>categories.json</code>, <code>seasons.js</code>). The application treats these files as read-only.</li>
 <li><strong>Client-Side Storage for Bookmarks, Notes &amp; TXT Export:</strong> User preferences, favorites, and notes are managed in client memory and persisted through browser storage (<code>localStorage</code> and <code>sessionStorage</code>), ensuring a seamless experience across page reloads without requiring server user accounts. The bookmark export feature is handled 100% in-browser via the W3C <code>Blob</code> and <code>URL.createObjectURL()</code> APIs.</li>
 <li><strong>Device Real-Time Clock Reliability:</strong> Operating status indicators ("Open Right Now" vs. "Closed") rely on the user device's local system time to match the market's operating hours.</li>
 <li><strong>Simulated Visitor Metrics:</strong> In the absence of a global analytics server, the visitor counter in the footer is simulated via client-side JavaScript and updated per session in <code>localStorage</code> as suggested by SRS Section 1.8.</li>
 <li><strong>OpenStreetMap &amp; Leaflet Integration:</strong> Interactive location mapping utilizes Leaflet.js with OpenStreetMap tiles, ensuring accurate spatial visualization and routing coordinates without external commercial API key restrictions.</li>
 <li><strong>Dummy Authentication Prototype:</strong> Login and registration pages are functional prototypes designed to complete the user journey (UI Continuity) as requested by SRS Section 1.8.</li>
</ul>

<hr size=2 width="100%" align=center>

<!-- ========================================================================= -->
<!-- 7. SYSTEM REQUIREMENTS & INSTALLATION INSTRUCTIONS (MANDATORY)            -->
<!-- ========================================================================= -->
<h2>7. SYSTEM REQUIREMENTS &amp; INSTALLATION INSTRUCTIONS (MANDATORY)</h2>
<p>Follow the step-by-step instructions below to set up and run the FreshFind application on a local development environment:</p>

<h3>7.1. Prerequisites:</h3>
<ul>
 <li><strong>Node.js Runtime:</strong> Version 18.x, 20.x, or newer (bundled with <code>npm</code> package manager).</li>
 <li><strong>Web Browser:</strong> Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari (latest stable release).</li>
 <li><strong>Display Resolution:</strong> Fully responsive; optimized for mobile (375px+), tablet (768px+), and desktop (1024px+).</li>
</ul>

<h3>7.2. Step-by-Step Installation:</h3>
<ol>
 <li><strong>Step 1: Extract Project Source Code:</strong> Extract the submitted <code>SourceCode.zip</code> archive or clone repository from <code>https://github.com/phongtoquach/freshFind_web.git</code> into your desired local directory.</li>
 <li><strong>Step 2: Open Terminal / Command Prompt:</strong> Open your Terminal, Command Prompt, or PowerShell, and navigate to the project root directory:
  <pre>cd path/to/freshfind-web</pre>
 </li>
 <li><strong>Step 3: Install Project Dependencies:</strong> Execute the following command to download and install all necessary packages specified in <code>package.json</code>:
  <pre>npm install</pre>
 </li>
 <li><strong>Step 4: Start the Local Development Server:</strong> Launch the Vite development server by running:
  <pre>npm run dev</pre>
 </li>
 <li><strong>Step 5: Access the Application:</strong> Open your web browser and navigate to the local URL displayed in the terminal output:
  <pre>http://localhost:5173/</pre>
 </li>
 <li><strong>Step 6 (Optional): Build Production Bundle:</strong> To compile and preview an optimized production build, run:
  <pre>
npm run build
npm run preview
  </pre>
 </li>
</ol>

<hr size=2 width="100%" align=center>

<!-- ========================================================================= -->
<!-- 8. AI CHATBOT INTEGRATION                                                 -->
<!-- ========================================================================= -->
<h2>8. AI CHATBOT INTEGRATION</h2>
<div style='border:dashed #FFA000 1.5pt;padding:14.0pt;margin:15.0pt;background:#FFF8E1'>
 <h3 style='margin-top:0cm;color:#E65100'>[RESERVED SECTION: AI CHATBOT INTEGRATION - TO BE UPDATED UPON REQUEST]</h3>
 <p><em>This section is reserved as requested. Once you provide the specific scripted Q&amp;A dataset, rule-based response logic, or third-party widget integration details (Tidio / Tawk.to / Custom Chat Component), the technical specifications will be populated here.</em></p>
</div>

<div style='border-top:solid #C8E6C9 1.0pt;padding-top:11.0pt;margin-top:37.5pt;text-align:center'>
 <p style='color:#666666;font-size:9.5pt'>FreshFind Project – TechWiz Competition | Technical Specification &amp; ReadMe Documentation</p>
</div>

</div>

</body>
</html>
"""

# Write HTML source into docs/ReadMe_source.htm
source_path = os.path.abspath('docs/ReadMe_source.htm')
with open(source_path, 'w', encoding='utf-16') as f:
    f.write(html_template)
print("Wrote HTML template with all 7 flowcharts and specifications to:", source_path)
