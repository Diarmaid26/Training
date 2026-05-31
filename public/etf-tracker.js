// ── Top 100 Stock Universe ────────────────────────────────────────────────────
const STOCK_UNIVERSE = [
  { symbol:'AAPL',  name:'Apple Inc.',                      sector:'Technology',              description:'Apple designs and sells consumer electronics, software, and online services. Its iPhone, Mac, iPad, and wearables lines are complemented by a fast-growing Services segment covering the App Store, iCloud, Apple TV+, and Apple Pay. The world\'s most valuable company by market cap.', holdings:['iPhone','Mac','iPad','Apple Watch','App Store','iCloud','Apple TV+','Apple Pay'] },
  { symbol:'MSFT',  name:'Microsoft Corp.',                  sector:'Technology',              description:'Microsoft develops software, cloud infrastructure, and hardware across enterprise and consumer markets. Azure is the world\'s second-largest cloud platform; Office 365 and LinkedIn anchor its productivity and professional-networking businesses. Its Copilot AI suite is deeply integrated across all product lines.', holdings:['Azure','Office 365','Windows','LinkedIn','Xbox','GitHub','Dynamics 365','Copilot AI'] },
  { symbol:'NVDA',  name:'NVIDIA Corp.',                     sector:'Technology',              description:'NVIDIA dominates the GPU market for AI training and inference, data centres, gaming, and professional visualisation. Its H100 and Blackwell chip families are the de-facto standard for large language model workloads, making it the central hardware beneficiary of the AI boom.', holdings:['H100 / Blackwell GPUs','CUDA platform','Data Centre AI','GeForce Gaming','Omniverse','Networking (Mellanox)'] },
  { symbol:'AMZN',  name:'Amazon.com Inc.',                  sector:'Consumer Discretionary',  description:'Amazon runs the world\'s largest e-commerce marketplace and the leading cloud computing platform, AWS, which contributes the majority of group operating profit. Advertising, Prime Video, Alexa, and its fulfilment logistics network round out a highly diversified technology-and-retail conglomerate.', holdings:['AWS','Amazon.com Marketplace','Prime / Prime Video','Alexa / Echo','Advertising','Whole Foods','Kuiper (satellite)'] },
  { symbol:'GOOGL', name:'Alphabet Inc.',                    sector:'Communication Services',  description:'Alphabet is the parent of Google, whose Search, YouTube, Maps, and Android products reach billions of users daily. Google Cloud is its fast-growing third division, while Waymo (autonomous vehicles) and DeepMind (AI research) are long-term bets housed under Other Bets.', holdings:['Google Search','YouTube','Google Cloud','Android','Google Ads','Waymo','DeepMind','Pixel devices'] },
  { symbol:'META',  name:'Meta Platforms Inc.',              sector:'Communication Services',  description:'Meta owns the world\'s largest social-media family — Facebook, Instagram, WhatsApp, and Threads — generating revenue almost entirely through targeted advertising. Heavy investment in AI-driven feed recommendations and the Reality Labs metaverse / AR/VR hardware division underpin its long-term strategy.', holdings:['Facebook','Instagram','WhatsApp','Threads','Meta AI','Quest VR headsets','Ray-Ban smart glasses','Advantage+ Ads'] },
  { symbol:'BRK-B', name:'Berkshire Hathaway Inc.',          sector:'Financials',              description:'Warren Buffett\'s conglomerate owns a vast collection of wholly-owned operating businesses — including GEICO, BNSF Railway, and Berkshire Hathaway Energy — alongside a huge public-equity portfolio led by Apple, American Express, Bank of America, and Coca-Cola.', holdings:['GEICO Insurance','BNSF Railway','BH Energy','Apple (stake)','Coca-Cola (stake)','Pilot Travel Centers','Dairy Queen'] },
  { symbol:'LLY',   name:'Eli Lilly and Co.',                sector:'Health Care',             description:'Eli Lilly is a global pharmaceutical leader whose blockbuster GLP-1 drugs Mounjaro (tirzepatide) and Zepbound have made it the dominant player in the diabetes and obesity treatment market. Its pipeline also spans oncology, immunology, and neurological disorders.', holdings:['Mounjaro (diabetes)','Zepbound (obesity)','Verzenio (cancer)','Jardiance','Taltz','Trulicity','Kisunla (Alzheimer\'s)'] },
  { symbol:'AVGO',  name:'Broadcom Inc.',                    sector:'Technology',              description:'Broadcom designs and supplies a wide range of semiconductors and infrastructure software for networking, storage, and wireless markets. Its 2023 acquisition of VMware added a major enterprise software business; it also supplies custom AI accelerator chips (XPUs) to hyperscalers including Google and Meta.', holdings:['Networking ASICs','Custom AI XPUs','Wi-Fi / Bluetooth chips','VMware (software)','Symantec (security)','Storage controllers'] },
  { symbol:'TSLA',  name:'Tesla Inc.',                       sector:'Consumer Discretionary',  description:'Tesla is the world\'s best-selling electric-vehicle brand, producing the Model S, 3, X, Y, and Cybertruck alongside energy-storage products (Megapack, Powerwall). Its Autopilot and Full Self-Driving software and the Supercharger network are key strategic assets; Optimus humanoid robots are an emerging moonshot.', holdings:['Model Y / Model 3','Cybertruck','Megapack energy storage','Full Self-Driving software','Supercharger network','Optimus robot','Solar roof'] },
  { symbol:'JPM',   name:'JPMorgan Chase & Co.',             sector:'Financials',              description:'JPMorgan is the largest US bank by assets, operating across consumer & community banking, commercial banking, investment banking, asset & wealth management, and markets. Its scale and diversification make it the benchmark for global financial services.', holdings:['Chase Retail Banking','Investment Banking','J.P. Morgan Asset Management','Commercial Banking','Credit Cards','Markets & Securities Services','Chase Sapphire'] },
  { symbol:'V',     name:'Visa Inc.',                        sector:'Financials',              description:'Visa operates the world\'s largest retail electronic-payments network, connecting 4.3 billion cards to 130 million merchant locations in over 200 countries. It earns fees on payment volume and transactions without taking credit risk, as banks issue Visa-branded cards.', holdings:['Visa Payment Network','Visa Direct (P2P)','Visa B2B Connect','CyberSource (fraud tools)','Tokenisation services'] },
  { symbol:'WMT',   name:'Walmart Inc.',                     sector:'Consumer Staples',        description:'Walmart is the world\'s largest retailer by revenue, operating over 10,500 stores globally under Walmart, Sam\'s Club, and international banners. Its fast-growing e-commerce platform, Walmart Connect advertising business, and Walmart+ subscription service are key growth drivers alongside its traditional grocery and general-merchandise stores.', holdings:['Walmart US stores','Sam\'s Club','Walmart International','Walmart.com','Walmart+','Walmart Connect (ads)','PhonePe (stake)','Flipkart (stake)'] },
  { symbol:'UNH',   name:'UnitedHealth Group Inc.',          sector:'Health Care',             description:'UnitedHealth is the largest US health insurer and a leading health-services company. UnitedHealthcare provides insurance to over 50 million members, while Optum — spanning pharmacy benefits, data analytics, and physician care — is the fastest-growing and highest-margin segment.', holdings:['UnitedHealthcare','Optum Health','Optum Rx (pharmacy)','Optum Insight (data)','Change Healthcare'] },
  { symbol:'XOM',   name:'Exxon Mobil Corp.',                sector:'Energy',                  description:'ExxonMobil is the largest US publicly traded oil and gas company, with integrated operations spanning upstream exploration and production, refining, and chemicals. Its acquisition of Pioneer Natural Resources in 2024 significantly expanded its Permian Basin shale footprint.', holdings:['Upstream E&P','Permian Basin (Pioneer)','Refining & Chemicals','ExxonMobil Chemical','LNG exports','Carbon capture projects'] },
  { symbol:'MA',    name:'Mastercard Inc.',                   sector:'Financials',              description:'Mastercard operates a global electronic-payments network processing transactions in more than 150 currencies across 210+ countries. Like Visa, it earns fees on volume and does not carry credit risk. Its Vocalink real-time-payments unit and cybersecurity services extend its reach into adjacent markets.', holdings:['Mastercard Payment Network','Vocalink (real-time payments)','Mastercard Send','Cybersecurity services','Mastercard Advisors'] },
  { symbol:'ORCL',  name:'Oracle Corp.',                     sector:'Technology',              description:'Oracle is a global enterprise-software and cloud-infrastructure company best known for its relational database products. Its Oracle Cloud Infrastructure (OCI) platform is winning large AI workload contracts, and its Electronic Health Records business (Cerner) serves thousands of hospitals worldwide.', holdings:['Oracle Database','Oracle Cloud Infrastructure (OCI)','Cerner (healthcare IT)','Oracle Fusion ERP','NetSuite','Java','MySQL'] },
  { symbol:'HD',    name:'Home Depot Inc.',                   sector:'Consumer Discretionary',  description:'Home Depot is the world\'s largest home-improvement retailer, with roughly 2,300 stores across the US, Canada, and Mexico. It serves both professional contractors (Pros) and DIY consumers; the Pro segment — boosted by the 2024 acquisition of SRS Distribution — now drives over half of sales.', holdings:['US Retail Stores','Pro business (contractors)','SRS Distribution','HomeDepot.com','Installation services','Private-label brands'] },
  { symbol:'COST',  name:'Costco Wholesale Corp.',            sector:'Consumer Staples',        description:'Costco operates a global warehouse-club chain where members pay an annual fee to access deeply discounted goods in bulk. Its membership model generates highly predictable fee income, while the Kirkland Signature private label is one of the best-selling brands in the US.', holdings:['Warehouse Clubs (US)','Costco International','Kirkland Signature (private label)','Costco.com','Pharmacy','Optical','Gas Stations'] },
  { symbol:'PG',    name:'Procter & Gamble Co.',              sector:'Consumer Staples',        description:'P&G is a global consumer-goods giant selling household brands across beauty, grooming, health care, fabric care, and baby and home care. Its 65+ billion-dollar or half-billion-dollar brands include Tide, Pampers, Gillette, Oral-B, and Pantene, sold in nearly 180 countries.', holdings:['Tide / Ariel (laundry)','Pampers (diapers)','Gillette (grooming)','Oral-B','Pantene / Head & Shoulders','Always','Febreze','Bounty'] },
  { symbol:'JNJ',   name:'Johnson & Johnson',                 sector:'Health Care',             description:'Johnson & Johnson is a global healthcare conglomerate focused on pharmaceuticals and medical devices following the 2023 spin-off of its consumer-health unit (Kenvue). Key drug franchises include Darzalex (blood cancer), Stelara (immunology), and Tremfya, while MedTech covers surgical robotics and orthopaedics.', holdings:['Darzalex (cancer)','Stelara (immunology)','Tremfya','Abiomed (heart)','DePuy Synthes (ortho)','Surgical robotics','Innovative Medicine'] },
  { symbol:'BAC',   name:'Bank of America Corp.',             sector:'Financials',              description:'Bank of America is one of the world\'s largest financial institutions, serving ~68 million consumer and small-business clients through its retail network alongside Global Banking, Global Markets, and Merrill Lynch wealth-management businesses. Digital adoption is a key focus, with 57 million active digital users.', holdings:['Consumer Banking','Merrill Lynch (wealth)','Global Banking & Markets','Business Banking','Zelle (payments)','BofA Securities'] },
  { symbol:'ABBV',  name:'AbbVie Inc.',                       sector:'Health Care',             description:'AbbVie is a biopharmaceutical company whose immunology franchise — led by Humira (the world\'s former best-selling drug) and its successors Skyrizi and Rinvoq — generates the bulk of revenue. It also has strong positions in oncology (Imbruvica, Venclexta) and neuroscience (Botox via Allergan).', holdings:['Skyrizi (immunology)','Rinvoq (immunology)','Humira','Botox (Allergan)','Imbruvica (oncology)','Venclexta','Qulipta (migraine)'] },
  { symbol:'NFLX',  name:'Netflix Inc.',                      sector:'Communication Services',  description:'Netflix is the world\'s leading subscription streaming service with over 300 million paid memberships in 190+ countries. Its ad-supported tier, live sports rights, and crackdown on password sharing have reignited revenue growth, while its original content library — including Stranger Things, Squid Game, and Wednesday — drives subscriber retention.', holdings:['Streaming platform','Ad-supported tier','Original content library','Games','Live events / sports','Netflix Studios'] },
  { symbol:'AMD',   name:'Advanced Micro Devices Inc.',       sector:'Technology',              description:'AMD designs high-performance CPUs and GPUs for data centres, gaming consoles, and PCs. Its EPYC server CPUs have taken significant share from Intel in cloud and enterprise, while its MI300 series AI accelerators are a growing challenger to NVIDIA in the AI chip market. It acquired Xilinx in 2022 for FPGAs.', holdings:['EPYC Server CPUs','Ryzen (PC CPUs)','Radeon GPUs','MI300 AI Accelerators','Instinct series','Xilinx FPGAs','Console chips (PS5 / Xbox)'] },
  { symbol:'CRM',   name:'Salesforce Inc.',                   sector:'Technology',              description:'Salesforce is the world\'s leading CRM platform, providing cloud-based tools for sales, service, marketing, commerce, and analytics. Its Agentforce AI platform — enabling autonomous AI agents for enterprise workflows — is the company\'s biggest strategic bet for the next decade of growth.', holdings:['Sales Cloud','Service Cloud','Marketing Cloud','Slack','Tableau','MuleSoft','Agentforce AI','Commerce Cloud'] },
  { symbol:'MRK',   name:'Merck & Co. Inc.',                  sector:'Health Care',             description:'Merck is a global pharmaceutical leader whose cancer immunotherapy Keytruda is the world\'s best-selling drug. It also has leading vaccines (Gardasil for HPV, Pneumovax), animal health products (Bravecto, NexGard), and a growing pipeline spanning HIV, cardiology, and infectious disease.', holdings:['Keytruda (cancer)','Gardasil (HPV vaccine)','Januvia (diabetes)','Welireg (kidney cancer)','Lagevrio (COVID)','Merck Animal Health'] },
  { symbol:'KO',    name:'Coca-Cola Co.',                     sector:'Consumer Staples',        description:'Coca-Cola is the world\'s largest beverage company, owning or licensing more than 500 brands across sparkling soft drinks, water, juice, coffee, tea, and energy drinks. It operates primarily as a brand and concentrate company, franchising production and distribution to independent bottlers worldwide.', holdings:['Coca-Cola / Coke Zero','Sprite','Fanta','Minute Maid','Smartwater / Dasani','Monster (stake)','Fairlife','Costa Coffee'] },
  { symbol:'CVX',   name:'Chevron Corp.',                     sector:'Energy',                  description:'Chevron is one of the world\'s largest integrated energy companies, with operations in oil and gas exploration, production, refining, chemicals, and marketing across six continents. Its acquisition of Hess Corporation broadens its Guyana deepwater exposure and diversifies its upstream portfolio.', holdings:['Permian Basin upstream','Tengiz (Kazakhstan)','Chevron Phillips Chemical','Chevron Lummus Global','Refined products','LNG portfolio','Carbon-capture projects'] },
  { symbol:'TMUS',  name:'T-Mobile US Inc.',                  sector:'Communication Services',  description:'T-Mobile is the largest US wireless carrier by customer growth, having overtaken AT&T and Verizon on net adds since its merger with Sprint. Its 5G mid-band network covers the broadest swath of the country, and its growing Home Internet business is disrupting the cable broadband market.', holdings:['5G Wireless Network','T-Mobile Home Internet','Metro by T-Mobile (prepaid)','Sprint (merged)','T-Mobile for Business'] },
  { symbol:'LIN',   name:'Linde plc',                         sector:'Materials',               description:'Linde is the world\'s largest industrial-gases company, supplying oxygen, nitrogen, argon, hydrogen, and specialty gases to healthcare, chemicals, manufacturing, and electronics customers. Its engineering division designs and builds gas-processing plants globally. Hydrogen and clean-energy applications are key growth vectors.', holdings:['Industrial gases (O₂ N₂ H₂)','Healthcare gases','Electronics gases','LNG engineering','Clean hydrogen projects','On-site gas plants'] },
  { symbol:'ACN',   name:'Accenture plc',                     sector:'Technology',              description:'Accenture is a global professional-services firm delivering strategy, consulting, technology, and outsourcing services to clients in more than 120 countries. Its AI and cloud practices — built around partnerships with Microsoft, Google, and Salesforce — are the fastest-growing segments as enterprises modernise legacy systems.', holdings:['Technology consulting','Accenture AI (GenAI services)','Cloud migration','Digital transformation','Security services','Outsourcing & managed services'] },
  { symbol:'MCD',   name:"McDonald's Corp.",                  sector:'Consumer Discretionary',  description:"McDonald's is the world's largest fast-food chain by revenue, operating ~40,000 locations in 100+ countries, the vast majority run by independent franchisees. Its asset-light franchise model generates highly predictable royalty and rent income, while investments in digital ordering, loyalty programmes, and automated kitchens drive margin improvement.", holdings:["Franchised restaurants","McDonald's App / Loyalty","BigMac / McFlurry","McCafé","Drive-Thru network","McDelivery","CosMc's (concept)"] },
  { symbol:'WFC',   name:'Wells Fargo & Co.',                 sector:'Financials',              description:'Wells Fargo is one of the four largest US banks, with leading positions in consumer banking, mortgage origination, and commercial banking. Following a major sales-practices scandal in 2016, the company has been operating under a Federal Reserve asset cap while rebuilding its risk management, compliance, and investment-banking capabilities.', holdings:['Consumer Banking','Home Lending (mortgages)','Commercial Banking','Corporate & Investment Banking','Credit Cards','Wealth & Investment Management'] },
  { symbol:'TMO',   name:'Thermo Fisher Scientific Inc.',     sector:'Health Care',             description:'Thermo Fisher Scientific is the global leader in life-sciences tools, equipment, and services, supplying instruments, reagents, consumables, and outsourced pharma manufacturing to biopharma, academic, and government customers. Its contract-development and manufacturing (CDMO) business is a key beneficiary of biotech outsourcing.', holdings:['Laboratory instruments','Life-science reagents','CDMO (drug manufacturing)','Clinical trials services','Bioproduction','Electron microscopes','Unity Lab Services'] },
  { symbol:'CSCO',  name:'Cisco Systems Inc.',                sector:'Technology',              description:'Cisco is the dominant supplier of enterprise networking hardware — routers, switches, and wireless access points — and has been transitioning to recurring software and subscription revenue through its Webex, Cisco Security, and Splunk (acquired 2024) businesses.', holdings:['Networking (switches & routers)','Webex (collaboration)','Cisco Security','Splunk (observability)','AppDynamics','ThousandEyes','IoT networking'] },
  { symbol:'ABT',   name:'Abbott Laboratories',               sector:'Health Care',             description:'Abbott is a global medical-products company spanning diagnostics, medical devices, nutritional products, and established pharmaceuticals. Its FreeStyle Libre continuous glucose monitors are the world\'s top-selling CGM system, and its structural-heart and electrophysiology devices are fast-growing within MedTech.', holdings:['FreeStyle Libre (CGM)','Structural Heart devices','Electrophysiology','Alinity diagnostics','Ensure / Similac nutrition','Rapid diagnostics (COVID tests)'] },
  { symbol:'GE',    name:'GE Aerospace',                      sector:'Industrials',             description:'GE Aerospace (formerly part of General Electric) is one of the world\'s leading aircraft engine makers, supplying LEAP and GE9X engines to Boeing and Airbus and providing aftermarket services to airlines globally. The company was separated from GE Vernova (energy) and GE HealthCare in 2023–24.', holdings:['LEAP engines (737 MAX / A320neo)','GE9X (Boeing 777X)','CFM International (JV)','Military engines (F414 / GE T700)','Engine aftermarket services','Aviation systems'] },
  { symbol:'PM',    name:'Philip Morris International Inc.',  sector:'Consumer Staples',        description:'PMI manufactures and markets cigarettes and smoke-free products outside the United States. Its IQOS heated-tobacco system has become the world\'s leading smoke-free nicotine product, and the acquisition of Swedish Match added Zyn nicotine pouches — one of the fastest-growing consumer products globally.', holdings:['Marlboro (international)','IQOS (heated tobacco)','Zyn nicotine pouches (via Swedish Match)','Smoke-Free Products division','Parliament / L&M / Chesterfield'] },
  { symbol:'ADBE',  name:'Adobe Inc.',                        sector:'Technology',              description:'Adobe is the industry-standard provider of creative, marketing, and document-management software. Its Creative Cloud (Photoshop, Illustrator, Premiere Pro) and Document Cloud (Acrobat, Adobe Sign) are deeply embedded in enterprise and professional workflows; its Experience Cloud serves digital-marketing teams. Generative AI tools like Firefly are integrated across its product suite.', holdings:['Creative Cloud (Photoshop / Illustrator)','Premiere Pro / After Effects','Acrobat / Adobe Sign','Adobe Experience Cloud','Adobe Firefly (GenAI)','Frame.io','Substance 3D'] },
  { symbol:'IBM',   name:'International Business Machines',   sector:'Technology',              description:'IBM is a century-old technology company now focused on hybrid cloud computing and enterprise AI. Its Red Hat acquisition underpins the hybrid-cloud strategy, while watsonx is IBM\'s enterprise AI and data platform. IBM also has significant consulting, mainframe, and IT-infrastructure businesses.', holdings:['Red Hat (hybrid cloud)','watsonx (enterprise AI)','IBM Cloud','Mainframes (z-series)','IBM Consulting','Quantum computing (IBM Quantum)','IBM Security'] },
  { symbol:'CAT',   name:'Caterpillar Inc.',                  sector:'Industrials',             description:'Caterpillar is the world\'s largest manufacturer of construction and mining equipment, diesel engines, and industrial gas turbines. Demand for heavy machinery is driven by infrastructure spending, energy transition (mining for battery metals), and global construction activity. Its Financial Products division provides equipment financing.', holdings:['Excavators & Dozers','Mining trucks','Diesel & Gas Engines','Turbines','Cat Financial (financing)','Perkins Engines','Solar Turbines'] },
  { symbol:'AXP',   name:'American Express Co.',              sector:'Financials',              description:'American Express is a premium charge-card and payments network whose affluent, high-spending cardholders generate above-average transaction volumes and low credit losses. Its closed-loop network — where Amex issues cards and processes transactions — enables rich data insights and differentiates it from Visa and Mastercard.', holdings:['Charge & credit cards','Merchant network','Corporate travel & expense (GBT stake)','Centurion (Black card)','Business banking','Amex Offers / Rewards'] },
  { symbol:'INTU',  name:'Intuit Inc.',                       sector:'Technology',              description:'Intuit dominates small-business accounting (QuickBooks) and consumer tax filing (TurboTax) in the US, and is expanding globally through its acquisition of Mailchimp and Credit Karma. Its AI-powered Intuit Assist is being woven across all products to automate financial workflows for small businesses and individuals.', holdings:['TurboTax','QuickBooks (small business)','Credit Karma','Mailchimp','ProConnect (tax pro)','Intuit Assist (AI)'] },
  { symbol:'MS',    name:'Morgan Stanley',                    sector:'Financials',              description:'Morgan Stanley is a leading global investment bank with strong positions in equity underwriting, M&A advisory, and institutional equities. Its acquisitions of E*Trade and Eaton Vance have shifted the mix toward higher-multiple wealth and investment management revenues, which now account for over half of net revenues.', holdings:['Investment Banking','Institutional Securities','Wealth Management (E*Trade)','Morgan Stanley Investment Management','Eaton Vance (asset management)'] },
  { symbol:'GS',    name:'Goldman Sachs Group Inc.',          sector:'Financials',              description:'Goldman Sachs is a premier global investment bank and financial services firm. After pulling back from consumer banking (Marcus), it has refocused on its core strengths: investment banking, global markets trading, asset & wealth management, and alternatives investing through its large private-equity and credit platforms.', holdings:['Investment Banking (M&A / ECM / DCM)','Global Markets (FICC & Equities)','Asset & Wealth Management','Marcus (consumer wind-down)','Alternatives (private equity / credit)'] },
  { symbol:'BLK',   name:'BlackRock Inc.',                    sector:'Financials',              description:'BlackRock is the world\'s largest asset manager with over $10 trillion in AUM across its iShares ETF platform, active funds, and alternatives. Its Aladdin technology platform — used to manage risk across trillions of dollars of assets by third-party institutions — is a unique and high-margin revenue stream.', holdings:['iShares ETFs','Active equity & fixed income','Aladdin (risk platform)','BlackRock Alternatives','eFront (private markets tech)','Infrastructure investing'] },
  { symbol:'ISRG',  name:'Intuitive Surgical Inc.',           sector:'Health Care',             description:'Intuitive Surgical pioneered robotic-assisted minimally invasive surgery with its da Vinci surgical system, which is installed in over 8,600 hospitals worldwide. The highly recurring razor-and-blade business model — instruments and accessories sold per procedure — generates predictable revenue growth as procedure volumes rise.', holdings:['da Vinci Surgical System','Ion endoluminal system (lung biopsy)','Surgical instruments & accessories','Surgery training & simulation','Intuitive system data platform'] },
  { symbol:'TXN',   name:'Texas Instruments Inc.',            sector:'Technology',              description:'Texas Instruments designs and manufactures analogue and embedded-processing semiconductors used in industrial, automotive, personal electronics, and communications equipment. Its broad portfolio of 80,000+ products, owned manufacturing fabs, and focus on long product lifecycles give it durable competitive advantages and high free-cash-flow conversion.', holdings:['Analogue chips','Embedded processors (microcontrollers)','OMAP / Sitara processors','Industrial & automotive chips','TI\'s owned fab network'] },
  { symbol:'RTX',   name:'RTX Corp.',                         sector:'Industrials',             description:'RTX (formerly Raytheon Technologies) is a leading aerospace and defence contractor formed by the merger of Raytheon and United Technologies. Its Collins Aerospace division supplies aircraft systems and avionics; Pratt & Whitney makes commercial and military jet engines; the Raytheon division produces missiles, radars, and other defence systems.', holdings:['Pratt & Whitney engines','Collins Aerospace systems','Raytheon missiles (Patriot / Stinger / AMRAAM)','F135 engine (F-35)','GTF (geared turbofan) engine','Radar & electronic warfare systems'] },
  { symbol:'SPGI',  name:'S&P Global Inc.',                   sector:'Financials',              description:'S&P Global provides essential financial intelligence — credit ratings, market data, and analytics — to investors and corporates worldwide. Its five divisions are Market Intelligence, Ratings, Commodity Insights, Mobility, and Indices; the last covers the iconic S&P 500 index family licensed to ETFs generating lucrative recurring fee income.', holdings:['S&P Credit Ratings','S&P 500 & Dow Jones Indices','Market Intelligence (data terminals)','Platts (commodity data)','S&P Global Mobility (auto data)','Kensho (AI analytics)'] },
  { symbol:'LOW',   name:"Lowe's Companies Inc.",             sector:'Consumer Discretionary',  description:"Lowe's is the second-largest home-improvement retailer in the US, operating ~1,700 stores serving both DIY homeowners and Pro contractors. Its Total Home strategy focuses on improving the Pro experience, growing its loyalty programme, and expanding its online and installation-services capabilities.", holdings:["Lowe's US Stores","Pro contractor business","Lowe's.com","Lowe's installation services","MVPs loyalty programme","Kobalt / allen+roth (private labels)"] },
  { symbol:'HON',   name:'Honeywell International Inc.',      sector:'Industrials',             description:'Honeywell is a diversified industrial conglomerate with businesses in aerospace technologies, industrial automation, building automation, and energy and sustainability solutions. The company has signalled plans to separate into two focused entities — Honeywell Aerospace and Honeywell Automation — to unlock shareholder value.', holdings:['Aerospace (avionics / engines)','Building Automation','Industrial Automation','Energy & Sustainability','Process Solutions','Quantum computing (Quantinuum)'] },
  { symbol:'VRTX',  name:'Vertex Pharmaceuticals Inc.',       sector:'Health Care',             description:'Vertex dominates the treatment of cystic fibrosis with its triple-combination therapy Trikafta/Kaftrio, which addresses the underlying cause of CF in ~90% of patients. Its pipeline extends to pain (suzetrigine — a non-opioid approved in 2025), kidney disease, sickle cell (with CRISPR Therapeutics), and Type 1 diabetes.', holdings:['Trikafta / Kaftrio (CF)','Casgevy (sickle-cell — CRISPR)','Suzetrigine (pain — non-opioid)','CF triple combination pipeline','Inaxaplin (kidney disease)'] },
  { symbol:'PFE',   name:'Pfizer Inc.',                       sector:'Health Care',             description:'Pfizer is one of the world\'s largest pharmaceutical companies. After COVID-19 vaccine and Paxlovid revenues normalised, management has pivoted to rebuilding growth through oncology (Seagen acquisition), vaccines (Prevnar, RSV), and other new launches. Cost-cutting and pipeline execution are key near-term investor focuses.', holdings:['Comirnaty (COVID vaccine)','Paxlovid (COVID treatment)','Prevnar (pneumococcal vaccine)','Eliquis (blood thinner — BMS JV)','Seagen oncology portfolio','Nurtec (migraine)'] },
  { symbol:'AMGN',  name:'Amgen Inc.',                        sector:'Health Care',             description:'Amgen is a leading biotechnology company with blockbuster drugs in bone health (Prolia/Xgeva), cardiovascular (Repatha, MariTide — its obesity candidate), oncology (Blincyto, Lumakras), and inflammation (Enbrel in the US). Its biosimilar business is an emerging second growth pillar.', holdings:['Prolia / Xgeva (bone)','Repatha (cholesterol)','Enbrel (inflammation - US)','Blincyto (cancer)','Lumakras (KRAS - cancer)','MariTide (obesity — pipeline)','Biosimilars'] },
  { symbol:'DHR',   name:'Danaher Corp.',                     sector:'Health Care',             description:'Danaher is a life-sciences and diagnostics tools company after spinning off its industrial businesses as Veralto in 2023. Its bioprocessing (Cytiva), water quality (Hach), diagnostics (Beckman Coulter, Radiometer), and life-science instruments divisions serve biopharma, hospitals, and research labs worldwide.', holdings:['Cytiva (bioprocessing)','Beckman Coulter (diagnostics)','Hach (water quality)','Leica Microsystems','Radiometer (blood gas)','Molecular diagnostics (Cepheid)'] },
  { symbol:'BKNG',  name:'Booking Holdings Inc.',             sector:'Consumer Discretionary',  description:'Booking Holdings is the world\'s largest online travel agency, operating Booking.com (accommodation), Priceline (discount travel), Kayak (metasearch), OpenTable (restaurant reservations), and Agoda (Asia-Pacific). Booking.com alone lists over 28 million properties in 220 countries and processes over 1 million room nights daily.', holdings:['Booking.com','Priceline','Kayak','OpenTable','Agoda','Rentalcars.com','AI trip planning'] },
  { symbol:'UBER',  name:'Uber Technologies Inc.',            sector:'Industrials',             description:'Uber operates the world\'s largest ride-hailing platform and a major food-delivery business (Uber Eats) across 70+ countries and 10,000+ cities. Its Uber Freight logistics unit and autonomous-vehicle partnerships (Waymo, Motional) represent longer-term adjacencies. The company reached consistent GAAP profitability in 2023.', holdings:['Uber Rides (ride-hailing)','Uber Eats (food delivery)','Uber Freight','Uber for Business','Autonomous (Waymo partnership)','Advertising'] },
  { symbol:'NKE',   name:'Nike Inc.',                         sector:'Consumer Discretionary',  description:'Nike is the world\'s largest athletic-footwear and apparel brand, with iconic franchises including Air Jordan, Air Force 1, Dunk, and Air Max. After over-rotating to direct-to-consumer, management under new CEO Elliott Hill is rebuilding wholesale partnerships and reinvesting in product innovation to reaccelerate growth.', holdings:['Nike footwear (Air Max, Air Force 1, Jordan)','Nike Apparel','Converse','Nike.com / SNKRS','Jordan Brand','Nike Training / Running / Basketball'] },
  { symbol:'UNP',   name:'Union Pacific Corp.',               sector:'Industrials',             description:'Union Pacific operates the largest railroad network in the western United States, hauling freight across 32,000 miles of track connecting the Pacific Coast to the Midwest and Gulf Coast. Its diverse cargo mix spans bulk commodities (coal, grain), intermodal containers, premium auto and chemical shipments, and industrial products.', holdings:['Intermodal freight','Agricultural products','Energy (coal & ethanol)','Industrial products','Automotive transport','Premium chemicals','International gateway traffic'] },
  { symbol:'MDT',   name:'Medtronic plc',                     sector:'Health Care',             description:'Medtronic is the world\'s largest standalone medical-device company, with products spanning cardiac rhythm management (pacemakers, defibrillators), surgical robotics (Hugo), diabetes (insulin pumps), neuroscience, and spine surgery. Management is focused on accelerating organic growth and margin improvement after years of underperformance.', holdings:['Cardiac devices (pacemakers / ICDs)','Hugo surgical robotics','MiniMed insulin pumps','Spine & orthopaedics','Brain stimulation (DBS)','Endoscopy & surgery tools'] },
  { symbol:'C',     name:'Citigroup Inc.',                    sector:'Financials',              description:'Citigroup is a global banking institution with one of the widest geographic footprints in financial services, serving clients in 160+ countries. CEO Jane Fraser\'s transformation programme has exited numerous international retail markets to focus on institutional clients, US personal banking, and cross-border treasury services for multinationals.', holdings:['Services (treasury & trade)','Markets (FICC & equities)','US Personal Banking','Wealth management','Investment Banking','Legacy international retail (exiting)'] },
  { symbol:'SYK',   name:'Stryker Corp.',                     sector:'Health Care',             description:'Stryker is a global medical-technology company with market-leading positions in orthopaedic implants (hips, knees), surgical robots (Mako), neurovascular devices, and emergency medical equipment (Power-PRO stretchers). Mako robotic-arm-assisted surgery is a key growth driver enabling more precise and reproducible joint replacements.', holdings:['Mako Surgical Robotics','Joint replacements (hips & knees)','Neurovascular (stroke)','Endoscopy','Emergency Medical Equipment (Power-PRO)','Spine implants'] },
  { symbol:'PLD',   name:'Prologis Inc.',                     sector:'Real Estate',             description:'Prologis is the world\'s largest logistics real-estate REIT, owning and operating ~1.2 billion sq ft of warehouse and distribution space across 19 countries. Its tenants — Amazon, FedEx, UPS, DHL — depend on its strategically located facilities near population centres and transportation hubs. It also has a growing solar and EV-charging platform.', holdings:['Logistics / warehouse REIT','Amazon / FedEx / UPS tenancy','Global logistics network (19 countries)','Essentials (energy / EV charging)','Prologis Ventures (proptech)'] },
  { symbol:'SCHW',  name:'Charles Schwab Corp.',              sector:'Financials',              description:'Schwab is the largest US retail brokerage and a leading provider of investment services, with over $9 trillion in client assets following its acquisition of TD Ameritrade. Revenue is split between interest income on client cash, asset-management fees, and trading. Its bank subsidiary supplements the brokerage with deposit-funded interest income.', holdings:['Retail brokerage','Schwab Bank (deposits)','Asset management','Retirement plan services (workplace)','TD Ameritrade (merged)','Schwab Intelligent Portfolios (robo-advisor)'] },
  { symbol:'T',     name:'AT&T Inc.',                         sector:'Communication Services',  description:'AT&T is one of the two largest US wireless carriers and provides fibre-broadband (AT&T Fiber) to homes and businesses. Following the DirecTV and WarnerMedia spin-offs, it has refocused on its core connectivity businesses: wireless (Mobility) and fibre internet, with meaningful free cash flow directed toward debt reduction and a sustainable dividend.', holdings:['AT&T Wireless (Mobility)','AT&T Fiber (broadband)','Business wireline (enterprise)','FirstNet (public safety network)','International roaming'] },
  { symbol:'DE',    name:'Deere & Company',                   sector:'Industrials',             description:'Deere is the world\'s largest agricultural-equipment manufacturer, with iconic John Deere branded tractors, combines, sprayers, and precision-agriculture technology. Its smart-connected equipment platform — including autonomous and semi-autonomous machinery — is central to its strategy of selling recurring technology subscriptions alongside hardware.', holdings:['John Deere tractors & combines','Precision Agriculture technology','Construction & Forestry equipment','Autonomy / semi-autonomous equipment','John Deere Financial','Turf & utility equipment'] },
  { symbol:'BA',    name:'Boeing Co.',                        sector:'Industrials',             description:'Boeing is one of only two commercial aircraft manufacturers of scale globally, building the 737, 787 Dreamliner, and 777X families. After a series of safety, quality, and production crises (737 MAX groundings, 787 rework), a new management team led by Kelly Ortberg is working to restore Boeing\'s manufacturing culture, regain regulatory trust, and ramp production.', holdings:['737 MAX commercial jets','787 Dreamliner','777X (in development)','KC-46 tanker (defence)','F/A-18 (defence)','Space Launch System','Boeing Global Services (aftermarket)'] },
  { symbol:'BMY',   name:'Bristol-Myers Squibb Co.',          sector:'Health Care',             description:'Bristol-Myers Squibb is a biopharmaceutical company with major oncology (Opdivo, Revlimid/Pomalyst) and cardiovascular (Eliquis co-marketed with Pfizer) franchises. The company is investing heavily in next-generation oncology, immunology, and cardiovascular drugs as Revlimid faces significant generic erosion post-2025.', holdings:['Opdivo (cancer immunotherapy)','Eliquis (blood thinner — Pfizer JV)','Revlimid / Pomalyst (blood cancer)','Breyanzi (CAR-T)','Sotyktu (immunology)','Cardiovascular pipeline'] },
  { symbol:'GILD',  name:'Gilead Sciences Inc.',              sector:'Health Care',             description:'Gilead Sciences is best known for its dominant HIV franchise (Biktarvy, Descovy, Sunlenca) and the COVID antiviral remdesivir (Veklury). It is diversifying into oncology through its Kite CAR-T unit (Yescarta, Tecartus) and its liver-disease portfolio (Epclusa, Harvoni for hepatitis C), while its lenacapavir HIV prevention injection is a major upcoming catalyst.', holdings:['Biktarvy (HIV)','Veklury / remdesivir (COVID)','Yescarta / Tecartus (CAR-T cancer)','Trodelvy (breast cancer)','Hepatitis C franchise','Lenacapavir (HIV prevention — pipeline)'] },
  { symbol:'LMT',   name:'Lockheed Martin Corp.',             sector:'Industrials',             description:'Lockheed Martin is the world\'s largest defence contractor by revenue, best known for the F-35 Joint Strike Fighter — the most expensive weapons programme in history. Its Missiles and Fire Control, Rotary and Mission Systems (Black Hawk helicopter), and Space divisions round out a highly diversified defence portfolio.', holdings:['F-35 Lightning II','F-22 Raptor (sustainment)','C-130J Hercules (transport)','Black Hawk helicopter','Sikorsky (rotorcraft)','Patriot missile system','Space / satellite systems'] },
  { symbol:'SBUX',  name:'Starbucks Corp.',                   sector:'Consumer Discretionary',  description:'Starbucks is the world\'s largest coffeehouse chain with over 38,000 locations in 86 markets, the majority company-operated in North America and licensed internationally. New CEO Brian Niccol (ex-Chipotle) is implementing a "Back to Starbucks" strategy focused on improving in-store speed, simplifying the menu, and rebuilding the brand\'s premium positioning after a period of declining traffic.', holdings:["Company-operated US cafés","Licensed stores (international)","Starbucks Rewards loyalty","Mobile order & pay","Reserve Roasteries","Ready-to-drink (Frappuccino bottles)","Starbucks at Home (CPG)"] },
  { symbol:'REGN',  name:'Regeneron Pharmaceuticals Inc.',    sector:'Health Care',             description:'Regeneron is a biotechnology company renowned for Dupixent (dupilumab), the fastest-selling drug in pharma history, approved for atopic dermatitis, asthma, COPD, and multiple other conditions. Its other key products include Eylea (wet AMD), Kevzara, Libtayo, and Praluent; VEGF Trap technology underpins its ophthalmology franchise.', holdings:['Dupixent (atopic dermatitis / asthma)','Eylea / Eylea HD (wet AMD)','Libtayo (skin cancer)','Praluent (cholesterol)','Kevzara (inflammation)','REGN-COV (antibody therapies)'] },
  { symbol:'TJX',   name:'TJX Companies Inc.',                sector:'Consumer Discretionary',  description:'TJX operates off-price retail chains — TJ Maxx, Marshalls, HomeGoods, Homesense, and Winners — selling branded apparel, accessories, and home goods at 20–60% below full-price retailers. Its opportunistic buying model and treasure-hunt shopping experience are resilient across economic cycles, driving consistent traffic and strong comparable-store sales.', holdings:['TJ Maxx','Marshalls','HomeGoods / Homesense','Winners / Marshalls (Canada)','TK Maxx (Europe)','Sierra Trading Post'] },
  { symbol:'MU',    name:'Micron Technology Inc.',            sector:'Technology',              description:'Micron is one of only three manufacturers of DRAM and NAND flash memory chips globally (alongside Samsung and SK Hynix). It is a major beneficiary of the AI memory cycle, as large-language models require vast amounts of high-bandwidth memory (HBM), where Micron\'s HBM3E products are ramping aggressively.', holdings:['DRAM (DDR5 / LPDDR5)','NAND Flash (3D NAND)','HBM3E (AI memory)','Micron SSDs (client & data centre)','Compute Express Link (CXL)'] },
  { symbol:'ADI',   name:'Analog Devices Inc.',               sector:'Technology',              description:'Analog Devices (ADI) designs and manufactures high-performance analogue, mixed-signal, and digital signal-processing chips for industrial, automotive, healthcare, and communications markets. Its acquisition of Maxim Integrated in 2021 extended its reach in automotive battery management systems and power management chips for data centres.', holdings:['Industrial automation chips','Automotive (BMS / ADAS chips)','Communications infrastructure','Healthcare instruments','Power management (Maxim)','Software-Defined Instrumentation'] },
  { symbol:'PANW',  name:'Palo Alto Networks Inc.',           sector:'Technology',              description:'Palo Alto Networks is a leading pure-play cybersecurity company offering network security (NGFW), cloud security (Prisma Cloud), and AI-driven security operations (Cortex). Its "platformisation" strategy aims to consolidate customers onto its end-to-end Strata, Prisma, and Cortex platforms, displacing point-product competitors.', holdings:['Strata (NGFW / network security)','Prisma Cloud (cloud security)','Cortex (AI-powered SOC)','Unit 42 (threat intelligence)','XSIAM (security platform)'] },
  { symbol:'NOW',   name:'ServiceNow Inc.',                   sector:'Technology',              description:'ServiceNow is the leading platform for enterprise workflow automation, best known for IT service management but rapidly expanding into HR, customer service, legal, and finance use cases. Its Now platform and AI-powered Now Assist agent are becoming the operating system for large enterprise back-office operations.', holdings:['IT Service Management (ITSM)','Now Platform','Now Assist (GenAI)','HR Service Delivery','Customer Service Management','IT Operations Management (ITOM)','Security Operations'] },
  { symbol:'LRCX',  name:'Lam Research Corp.',                sector:'Technology',              description:'Lam Research is one of the world\'s largest semiconductor-equipment manufacturers, specialising in wafer fabrication equipment for etch and deposition processes. It is a critical supplier in the advanced-node logic and memory chip manufacturing supply chain, with especially high exposure to NAND flash and DRAM customers.', holdings:['Etch equipment (Kiyo / Flex)','Deposition equipment (ALTUS / Vector)','Clean / surface prep','Advanced packaging equipment','Customer support & services'] },
  { symbol:'SO',    name:'Southern Co.',                      sector:'Utilities',               description:'Southern Company is one of the largest US electric and gas utilities, serving 9 million customers in Georgia, Alabama, Mississippi, and beyond. Its Georgia Power subsidiary owns a stake in the Vogtle nuclear power plant — the first new US nuclear reactors completed in decades — providing long-term carbon-free baseload generation.', holdings:['Georgia Power (regulated electric)','Alabama Power','Mississippi Power','Southern Natural Gas','Vogtle Nuclear Plant (Units 3 & 4)','Southern Company Gas'] },
  { symbol:'DUK',   name:'Duke Energy Corp.',                 sector:'Utilities',               description:'Duke Energy is one of the largest US electric utility holding companies, serving 8+ million customers across the Southeast and Midwest. It is investing heavily in a regulated clean-energy transition — retiring coal, adding solar, wind, and nuclear — underpinned by constructive regulatory relationships in its key states.', holdings:['Duke Energy Carolinas','Duke Energy Florida','Duke Energy Indiana','Progress Energy','Duke Energy Ohio','Renewable energy generation','Nuclear fleet (10 GW)'] },
  { symbol:'ETN',   name:'Eaton Corp. plc',                   sector:'Industrials',             description:'Eaton is an intelligent power-management company supplying electrical systems, hydraulics, and aerospace components. Its Electrical Americas and Global segments are significant beneficiaries of data-centre electrification (PDUs, switchgear) and energy-transition infrastructure spending. The AI infrastructure buildout has made Eaton one of the most sought-after electrical equipment suppliers.', holdings:['Electrical systems (switchgear / PDUs)','Data centre power management','Hydraulics','Aerospace fuel systems','Cooper Industries (electrical)','Vehicle powertrain (eMobility)'] },
  { symbol:'APH',   name:'Amphenol Corp.',                    sector:'Technology',              description:'Amphenol is one of the world\'s largest makers of electronic connectors, interconnects, antennas, and sensors used in IT, communications, automotive, industrial, and military equipment. Its connector products are critical components in AI server racks, data-centre cabling, electric vehicles, and defence systems.', holdings:['High-speed interconnects (AI servers)','RF / antenna products','Military & aerospace connectors','Automotive connectors & sensors','Mobile device connectors','Industrial sensors'] },
  { symbol:'MCO',   name:"Moody's Corp.",                     sector:'Financials',              description:"Moody's operates the world's second-largest credit-rating agency (MIS division) alongside a fast-growing data, analytics, and research division (MA — Moody's Analytics). Rating fees are tied to global bond issuance volumes, while MA provides subscription-based risk-management tools, economic research, and KYC/compliance software.", holdings:["Moody's Investors Service (ratings)","Moody's Analytics (data & risk tools)","CreditView","Bureau van Dijk (company data)","Passfort (KYC)","RMS (catastrophe risk)"] },
  { symbol:'ZTS',   name:'Zoetis Inc.',                       sector:'Health Care',             description:'Zoetis is the world\'s largest standalone animal-health company, selling medicines, vaccines, and diagnostics for livestock and companion animals. Its companion-animal franchise — including Apoquel and Cytopoint for dog allergies, and Librela for dog pain — is the fastest-growing segment as pet humanisation drives spending on pet healthcare.', holdings:['Apoquel (dog allergy)','Cytopoint (dog itch)','Librela / Solensia (pet pain)','Livestock vaccines & medicines','Diagnostics & monitoring','Simparica (parasite)'] },
  { symbol:'CMG',   name:'Chipotle Mexican Grill Inc.',       sector:'Consumer Discretionary',  description:'Chipotle is the dominant fast-casual Mexican food chain with over 3,400 restaurants in the US, Canada, Europe, and the Middle East. Its "Food with Integrity" brand positioning, loyalty programme (30M+ members), digital ordering, and automated ingredient-prep tech (Autocado, Chippy) are the pillars of its long-term unit-economics story.', holdings:['US restaurants','Chipotlane (drive-thru)','Chipotle Rewards','Digital / mobile ordering','International (Canada / Europe)','Kitchen automation (Autocado)'] },
  { symbol:'PGR',   name:'Progressive Corp.',                 sector:'Financials',              description:'Progressive is the largest US private-passenger auto insurer and one of the fastest-growing in commercial auto. It pioneered usage-based insurance (Snapshot), pricing discipline through real-time data, and direct-to-consumer digital distribution. Its homeowners insurance (bundled via ASI) and recent market-share gains have driven exceptional earnings growth.', holdings:['Personal auto insurance','Commercial auto insurance','Snapshot (usage-based)','HomeQuote Explorer (home)','Direct.com / agent channel','Claims management'] },
  { symbol:'MMC',   name:'Marsh & McLennan Companies Inc.',   sector:'Financials',              description:'Marsh McLennan is the world\'s largest insurance broker and professional-services firm, operating through Marsh (insurance brokerage), Guy Carpenter (reinsurance brokerage), Mercer (HR consulting), and Oliver Wyman (management consulting). It earns fees and commissions placing risk on behalf of corporate clients.', holdings:['Marsh (insurance brokerage)','Guy Carpenter (reinsurance)','Mercer (HR / benefits consulting)','Oliver Wyman (strategy consulting)'] },
  { symbol:'SHW',   name:'Sherwin-Williams Co.',              sector:'Materials',               description:'Sherwin-Williams is the world\'s largest paint and coatings company, with a vertically integrated model spanning manufacturing, company-owned stores, and direct sales to professional painters. Its The Americas Group (retail paint stores), Consumer Brands Group, and Performance Coatings Group cover DIY, retail, and industrial markets globally.', holdings:['Paint Stores Group (US retail)','Valspar (acquired)','Consumer Brands (Minwax / Cabot)','Performance Coatings (industrial)','Sherwin-Williams.com','Pro contractor loyalty'] },
  { symbol:'AON',   name:'Aon plc',                           sector:'Financials',              description:'Aon is the world\'s second-largest insurance broker and human-capital consultant, serving clients across commercial-risk, reinsurance brokerage, health, and retirement advisory. Its failed merger with Willis Towers Watson was blocked by regulators; it has since refocused on organic growth and its Aon Business Services shared-services platform.', holdings:['Commercial Risk Solutions (brokerage)','Reinsurance Solutions','Health Solutions','Wealth Solutions (retirement)','Aon Business Services (shared platform)'] },
  { symbol:'ECL',   name:'Ecolab Inc.',                       sector:'Materials',               description:'Ecolab provides water, hygiene, and infection-prevention solutions to food, hospitality, healthcare, and industrial customers in 170+ countries. Its differentiated model combines chemistry, equipment, and field-service experts embedded at customer sites, making it difficult to displace and generating highly recurring revenue.', holdings:['Global Institutional (restaurants / hotels)','Global Industrial (water treatment)','Global Healthcare (hospitals)','Pest Control','Food & Beverage (food safety)','Life Sciences'] },
  { symbol:'ITW',   name:'Illinois Tool Works Inc.',          sector:'Industrials',             description:'Illinois Tool Works is a highly diversified industrial manufacturer operating across automotive OEM, food equipment, test & measurement, welding, polymers & fluids, construction products, and specialty products segments. Its decentralised "80/20" simplification philosophy prioritises the top 20% of products generating 80% of revenue, driving best-in-class margins.', holdings:['Automotive OEM components','Hobart welding equipment','Food equipment (Hobart / Vulcan)','Test & measurement','Construction fasteners','Polymers & adhesives','Finishing systems'] },
  { symbol:'HCA',   name:'HCA Healthcare Inc.',               sector:'Health Care',             description:'HCA Healthcare is the largest US for-profit hospital system, operating 186+ hospitals and 2,400+ care sites in 20 US states and the UK. Its scale advantages in purchasing, technology, and physician recruitment — combined with a capital-light real-estate strategy — generate strong and growing free cash flow.', holdings:['Acute-care hospitals','Ambulatory surgery centres','Emergency facilities','Physician staffing','HCA UK (private hospitals)','Healthcare analytics platform'] },
  { symbol:'APD',   name:'Air Products and Chemicals Inc.',   sector:'Materials',               description:'Air Products is one of the world\'s largest industrial-gas companies, with a growing portfolio of mega-scale clean-hydrogen and green-ammonia projects. Beyond its traditional atmospheric and process-gas operations (oxygen, nitrogen, argon), it is investing tens of billions in hydrogen infrastructure in the US, Middle East, and Europe.', holdings:['Industrial gases (O₂ N₂ H₂)','Gasification technology','Green hydrogen projects','NEOM H₂ project (Saudi Arabia)','LNG process technology','Electronics gases'] },
  { symbol:'NSC',   name:'Norfolk Southern Corp.',            sector:'Industrials',             description:'Norfolk Southern operates a 19,500-mile rail network in the eastern United States, transporting intermodal containers, coal, agricultural products, chemicals, and automotive freight. Following the East Palestine, Ohio derailment in 2023, management is focused on safety improvements, service quality, and restoring its operational and financial credibility.', holdings:['Intermodal (containers)','Coal transport','Merchandise freight (chemicals / metals)','Automotive transport','Triple Crown (trailer-on-flatcar)','Precision scheduled railroading'] },
  { symbol:'FDX',   name:'FedEx Corp.',                       sector:'Industrials',             description:'FedEx is one of the world\'s largest express courier and freight companies, delivering packages, freight, and logistics services across 220+ countries. Its ongoing DRIVE cost-reduction programme and consolidation of FedEx Express and FedEx Ground into a single unified network aim to structurally improve margins and returns.', holdings:['FedEx Express (air / international)','FedEx Ground (domestic small package)','FedEx Freight (LTL trucking)','FedEx Office','fdx platform (data & intelligence)','DRIVE cost programme'] },
  { symbol:'CME',   name:'CME Group Inc.',                    sector:'Financials',              description:'CME Group operates the world\'s largest derivatives exchange, offering futures and options on interest rates, equity indices, foreign exchange, agricultural commodities, energy, and metals. Its rate-futures volume — driven by Fed-policy uncertainty and hedging demand — is the primary earnings driver; market volatility is CME\'s fundamental tailwind.', holdings:['Interest rate futures (Treasuries / SOFR)','Equity index futures (S&P 500 / NASDAQ)','FX futures','Energy futures (WTI crude)','Agricultural futures (corn / wheat)','CME Clearing (central counterparty)'] },
  { symbol:'PH',    name:'Parker-Hannifin Corp.',             sector:'Industrials',             description:'Parker Hannifin is the world\'s largest diversified motion and control technologies company, supplying hydraulic, pneumatic, electromechanical, and filtration products to industrial, mobile, and aerospace markets globally. Its acquisition of Meggitt in 2022 significantly expanded its aerospace-systems business.', holdings:['Hydraulics & pneumatics','Electromechanical motion control','Aerospace systems (Meggitt)','Filtration & purification','Industrial automation components','Motion & Control portfolio'] },
  { symbol:'COP',   name:'ConocoPhillips',                    sector:'Energy',                  description:'ConocoPhillips is the world\'s largest independent (non-integrated) oil and gas exploration and production company, with a low-breakeven portfolio spanning the Permian Basin, Bakken, Eagle Ford, Alaska, LNG (Australia / Qatar), and Norway. Its acquisition of Marathon Oil in 2024 further bolstered its US shale inventory.', holdings:['Permian Basin (Midland & Delaware)','Eagle Ford shale','Bakken shale','Alaska (Willow project)','APLNG (Australia LNG)','Qatar LNG stake','Marathon Oil (acquired)'] },
];

const STOCK_SYMBOLS = STOCK_UNIVERSE.map(s => s.symbol);

// ── ETF Universe ──────────────────────────────────────────────────────────────
const ETF_UNIVERSE = [
  // Broad US Equity
  // Broad US Equity
  { symbol:'SPY',  name:'SPDR S&P 500 ETF',                      cat:'Broad US Equity',     er:0.0945, description:'The original ETF, launched in 1993, and still the world\'s most traded fund. Tracks the S&P 500 index of 503 large-cap US companies, weighted by market cap. Unmatched liquidity — $30B+ in daily volume — makes it the benchmark instrument for institutional and retail investors alike.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Amazon (AMZN)','Alphabet (GOOGL)','Meta (META)','Berkshire B','Broadcom (AVGO)','Tesla (TSLA)','JPMorgan (JPM)'] },
  { symbol:'IVV',  name:'iShares Core S&P 500 ETF',              cat:'Broad US Equity',     er:0.03,   description:'BlackRock\'s low-cost S&P 500 tracker at 0.03% — four times cheaper than SPY. Near-identical performance to SPY but favoured by long-term buy-and-hold investors for its lower fee. One of the largest ETFs globally by AUM, attracting significant institutional flows.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Amazon (AMZN)','Alphabet (GOOGL)','Meta (META)','Berkshire B','Broadcom (AVGO)','Tesla (TSLA)','JPMorgan (JPM)'] },
  { symbol:'VOO',  name:'Vanguard S&P 500 ETF',                  cat:'Broad US Equity',     er:0.03,   description:'Vanguard\'s flagship S&P 500 product, sharing a 0.03% expense ratio with IVV. Known for its tax-efficient structure and loyal retail investor base. AUM has grown dramatically as the industry has shifted from active to passive management, making it one of the world\'s three largest ETFs.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Amazon (AMZN)','Alphabet (GOOGL)','Meta (META)','Berkshire B','Broadcom (AVGO)','Tesla (TSLA)','JPMorgan (JPM)'] },
  { symbol:'VTI',  name:'Vanguard Total Stock Market ETF',        cat:'Broad US Equity',     er:0.03,   description:'Broader than SPY — captures the entire US equity market across large, mid, small, and micro-cap stocks (~3,700 holdings). Preferred by investors seeking complete US-market exposure in a single fund. The slight mid- and small-cap tilt gives marginally different factor exposure than pure S&P 500 trackers.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Amazon (AMZN)','Alphabet (GOOGL)','Meta (META)','Berkshire B','Broadcom (AVGO)','Tesla (TSLA)','+ ~3,690 more'] },
  { symbol:'IWM',  name:'iShares Russell 2000 ETF',               cat:'Broad US Equity',     er:0.19,   description:'The primary benchmark for US small-cap equities, tracking ~2,000 smaller US companies. Small-caps are more domestically oriented and economically sensitive, making IWM a popular gauge of US economic health. Widely used for tactical trades around interest-rate cycles, as small-caps carry more floating-rate debt.', holdings:['~2,000 small-cap stocks','No single dominant holding','Diversified across all sectors','Healthcare ~20%','Industrials ~18%','Financials ~16%'] },
  { symbol:'MDY',  name:'SPDR S&P MidCap 400 ETF',               cat:'Broad US Equity',     er:0.24,   description:'Tracks the S&P MidCap 400 index of medium-sized US companies, offering a sweet spot between the growth potential of small-caps and the stability of large-caps. Less followed than IWM or SPY, creating occasional relative-value opportunities. The highest-cost of the core US equity trackers in this universe.', holdings:['~400 mid-cap stocks','Industrials ~20%','Financials ~15%','IT ~13%','Healthcare ~13%','Consumer Disc ~12%'] },
  { symbol:'IJH',  name:'iShares Core S&P Mid-Cap ETF',           cat:'Broad US Equity',     er:0.05,   description:'Low-cost alternative to MDY tracking the same S&P Mid-Cap 400 index at 0.05% vs MDY\'s 0.24%. Increasingly preferred by cost-conscious institutional investors. Tracks companies too large for small-cap indices but not large enough for the S&P 500 — a distinct and often overlooked segment of the market.', holdings:['~400 mid-cap stocks','Same index as MDY','Industrials, Financials, IT heavy','Quarterly reconstitution'] },
  { symbol:'IJR',  name:'iShares Core S&P Small-Cap ETF',         cat:'Broad US Equity',     er:0.06,   description:'Tracks the S&P SmallCap 600 index, which has a higher quality bar than the Russell 2000 — companies must be profitable to be included. This profitability screen historically gives IJR a quality tilt and slightly higher risk-adjusted returns than IWM. Lower AUM than IWM but arguably superior fundamental exposure.', holdings:['~600 profitable small-cap stocks','Industrials ~18%','Financials ~16%','Healthcare ~14%','Consumer Disc ~13%'] },
  { symbol:'VB',   name:'Vanguard Small-Cap ETF',                 cat:'Broad US Equity',     er:0.05,   description:'Tracks the CRSP US Small Cap Index (~1,400 stocks), slightly broader than IJR. Vanguard\'s preferred small-cap offering for its brokerage clients, combining low cost with broad diversification across the smaller end of the US market. Includes companies from micro-cap up to the bottom of the large-cap range.', holdings:['~1,400 small-cap stocks','CRSP US Small Cap Index','Industrials, Financials, Healthcare heavy','No profitability screen (unlike IJR)'] },
  { symbol:'SCHB', name:'Schwab US Broad Market ETF',             cat:'Broad US Equity',     er:0.03,   description:'Ultra-low-cost (0.03%) total-market fund tracking the Dow Jones US Broad Stock Market Index (~2,500 stocks). Competes directly with VTI and ITOT for cost-conscious investors seeking complete US equity exposure. Schwab\'s primary total-market building block, favoured within its brokerage platform.', holdings:['~2,500 US stocks','Large-cap dominated (~85%)','Tech, Healthcare, Financials largest sectors','Quarterly rebalancing'] },
  { symbol:'ITOT', name:'iShares Core S&P Total US Stock Market', cat:'Broad US Equity',     er:0.03,   description:'BlackRock\'s total-market product tracking the S&P Total Market Index (~3,600 stocks). Similar to VTI but with BlackRock infrastructure — used as a core building block in many institutional model portfolios. Covers the full US equity market from mega-cap to micro-cap in a single low-cost wrapper.', holdings:['~3,600 US stocks','S&P Total Market Index','Apple, Microsoft, NVIDIA top positions','Broad sector diversification'] },
  { symbol:'VV',   name:'Vanguard Large-Cap ETF',                 cat:'Broad US Equity',     er:0.04,   description:'Tracks the CRSP US Large Cap Index (~530 stocks), offering a slight variation on S&P 500 methodology that includes a broader set of large-cap companies. The CRSP methodology uses gradual buffer zones to reduce unnecessary turnover and transaction costs at index reconstitution dates.', holdings:['~530 large-cap stocks','Apple, Microsoft, NVIDIA, Amazon, Alphabet top 5','Similar to S&P 500 but CRSP methodology','Lower turnover than S&P 500'] },
  { symbol:'IWB',  name:'iShares Russell 1000 ETF',               cat:'Broad US Equity',     er:0.15,   description:'Tracks the Russell 1000 — the top 1,000 US stocks by market cap, covering approximately 92% of the total US market. Broader than the S&P 500\'s 503 stocks, adding meaningful mid-cap exposure. Widely used as a performance benchmark for large-cap active managers.', holdings:['Top 1,000 US stocks by market cap','~92% US market coverage','Apple, Microsoft, NVIDIA, Amazon, Alphabet top 5','Tech 32%, Healthcare 13%, Financials 13%'] },
  { symbol:'SPTM', name:'SPDR Portfolio S&P 1500 Composite ETF',  cat:'Broad US Equity',     er:0.03,   description:'Tracks the S&P Composite 1500 — covering the S&P 500, S&P 400, and S&P 600 indices in a single fund. Captures approximately 90% of US market cap with one of the most comprehensive large-to-small cap exposures available in an ETF. One of the cheapest broad-market funds at 0.03%.', holdings:['S&P 500 + S&P 400 + S&P 600 combined','~1,500 US stocks','Covers 90% of US market cap','All three S&P quality indices'] },
  { symbol:'SPLG', name:'SPDR Portfolio S&P 500 ETF',             cat:'Broad US Equity',     er:0.02,   description:'The cheapest S&P 500 tracker available at 0.02% expense ratio — half the cost of IVV and VOO, and almost five times cheaper than SPY. Same index as SPY/IVV/VOO but targets fee-sensitive long-term investors. AUM has grown rapidly as cost-conscious investors switched from more expensive peers.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Amazon (AMZN)','Alphabet (GOOGL)','Meta (META)','Berkshire B','Broadcom (AVGO)','Tesla (TSLA)','JPMorgan (JPM)'] },
  { symbol:'MGC',  name:'Vanguard Mega Cap ETF',                  cat:'Broad US Equity',     er:0.07,   description:'Focuses on the very largest US companies — the top ~230 mega-cap stocks — providing more concentrated large-cap exposure than the S&P 500. Useful for investors who want to overweight the largest, most liquid US names or express a view that mega-caps will outperform the broader market.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Amazon (AMZN)','Alphabet (GOOGL)','Meta (META)','Berkshire B','Broadcom (AVGO)','Tesla (TSLA)','Eli Lilly (LLY)'] },
  { symbol:'IWF',  name:'iShares Russell 1000 Growth ETF',        cat:'Broad US Equity',     er:0.19,   description:'Tracks the Russell 1000 Growth index, screening for companies with high price-to-book ratios and strong earnings growth expectations. Heavily concentrated in Technology and Consumer Discretionary; historically outperforms in bull markets and rising-multiple environments, but underperforms during value rotations and rising-rate periods.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Amazon (AMZN)','Meta (META)','Alphabet (GOOGL)','Tesla (TSLA)','Broadcom (AVGO)','Eli Lilly (LLY)','Costco (COST)'] },
  { symbol:'IWD',  name:'iShares Russell 1000 Value ETF',         cat:'Broad US Equity',     er:0.19,   description:'Tracks the Russell 1000 Value index, screening for companies with lower price-to-book, price-to-earnings, and price-to-sales ratios. Financials, healthcare, and energy heavy; historically outperforms during rising rate environments and economic recoveries. A classic pair-trade against IWF for factor rotation strategies.', holdings:['Berkshire Hathaway B','JPMorgan (JPM)','Exxon Mobil (XOM)','J&J (JNJ)','Walmart (WMT)','P&G (PG)','Chevron (CVX)','UnitedHealth (UNH)','Bank of America (BAC)','Comcast (CMCSA)'] },
  { symbol:'SCHX', name:'Schwab US Large-Cap ETF',                cat:'Broad US Equity',     er:0.03,   description:'Ultra-low-cost (0.03%) large-cap tracker for the Dow Jones US Large-Cap Total Stock Market Index (~750 stocks). Schwab\'s primary large-cap building block, designed to sit at the core of a diversified portfolio. Slightly broader than the S&P 500 by including stocks outside the formal index.', holdings:['~750 large-cap stocks','Apple, Microsoft, NVIDIA top positions','Dow Jones US Large-Cap Index','Tech 30%+, Healthcare 12%, Financials 13%'] },

  // US Sector
  { symbol:'XLK',  name:'Technology Select Sector SPDR',          cat:'US Sector',           er:0.13,   description:'The dominant sector ETF for US technology stocks within the S&P 500, covering software, hardware, semiconductors, and IT services. Highly concentrated — the top two holdings (Apple and Microsoft) can represent 40%+ of the fund. The most liquid sector ETF and a primary vehicle for tactical technology overweights.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Broadcom (AVGO)','Oracle (ORCL)','Salesforce (CRM)','AMD','Cisco (CSCO)','Texas Instruments (TXN)','Adobe (ADBE)'] },
  { symbol:'XLF',  name:'Financial Select Sector SPDR',           cat:'US Sector',           er:0.13,   description:'Tracks all financial stocks within the S&P 500 — banks, insurance companies, asset managers, payment networks, and diversified financials. A common tactical overweight in rising-rate environments, as bank net-interest margins expand and payment volumes grow. Berkshire Hathaway B is the largest holding due to its classification as a financial.', holdings:['Berkshire Hathaway B','JPMorgan (JPM)','Visa (V)','Mastercard (MA)','Bank of America (BAC)','Wells Fargo (WFC)','Goldman Sachs (GS)','Morgan Stanley (MS)','American Express (AXP)','BlackRock (BLK)'] },
  { symbol:'XLE',  name:'Energy Select Sector SPDR',              cat:'US Sector',           er:0.13,   description:'Tracks energy stocks within the S&P 500 — oil and gas producers, refiners, and equipment and services companies. Heavily influenced by crude oil prices; widely used for tactical hedging against oil-price spikes and as an inflation hedge. XOM and CVX together typically account for 40-50% of the fund.', holdings:['Exxon Mobil (XOM)','Chevron (CVX)','ConocoPhillips (COP)','EOG Resources','Schlumberger (SLB)','Marathon Petroleum (MPC)','Valero (VLO)','Phillips 66 (PSX)','Occidental (OXY)','Halliburton (HAL)'] },
  { symbol:'XLV',  name:'Health Care Select Sector SPDR',         cat:'US Sector',           er:0.13,   description:'Tracks healthcare stocks within the S&P 500 — pharma, biotech, medical devices, managed care, and services. Traditionally considered a defensive sector for its relatively stable earnings; GLP-1 obesity drug growth has made it a top-performing sector. UnitedHealth and Eli Lilly are the dominant holdings.', holdings:['UnitedHealth (UNH)','Eli Lilly (LLY)','Johnson & Johnson (JNJ)','AbbVie (ABBV)','Merck (MRK)','Thermo Fisher (TMO)','Abbott (ABT)','Intuitive Surgical (ISRG)','Danaher (DHR)','Amgen (AMGN)'] },
  { symbol:'XLY',  name:'Consumer Discret Select Sector SPDR',    cat:'US Sector',           er:0.13,   description:'Tracks consumer discretionary stocks within the S&P 500 — retailers, automakers, restaurants, and leisure companies. Highly sensitive to the economic cycle and consumer confidence. Amazon and Tesla dominate the fund (often 35-40% combined), giving it a distinctly tech-flavoured character compared to its name suggests.', holdings:['Amazon (AMZN)','Tesla (TSLA)','Home Depot (HD)','McDonald\'s (MCD)','Lowe\'s (LOW)','Nike (NKE)','Booking Holdings (BKNG)','TJX Companies (TJX)','Starbucks (SBUX)','Chipotle (CMG)'] },
  { symbol:'XLC',  name:'Communication Services Select SPDR',     cat:'US Sector',           er:0.13,   description:'Tracks communication services stocks within the S&P 500 — internet platforms, telecom carriers, media companies, and interactive entertainment. Created in 2018 when the GICS sector was redesigned, moving Alphabet, Meta, and Netflix from Technology and Consumer Discretionary. Meta and Alphabet typically dominate.', holdings:['Meta (META)','Alphabet (GOOGL)','Netflix (NFLX)','T-Mobile (TMUS)','AT&T (T)','Verizon (VZ)','Walt Disney (DIS)','Comcast (CMCSA)','Charter Communications','Electronic Arts (EA)'] },
  { symbol:'XLI',  name:'Industrial Select Sector SPDR',          cat:'US Sector',           er:0.13,   description:'Tracks industrial stocks within the S&P 500 — aerospace & defence, machinery, transportation, and professional services. A broad and economically sensitive sector; GE Aerospace and RTX are the largest holdings. Benefits from infrastructure spending, defence budget increases, and near-shoring manufacturing trends.', holdings:['GE Aerospace (GE)','RTX Corp (RTX)','Honeywell (HON)','Caterpillar (CAT)','Union Pacific (UNP)','Eaton (ETN)','Deere & Co (DE)','Lockheed Martin (LMT)','Illinois Tool Works (ITW)','Parker-Hannifin (PH)'] },
  { symbol:'XLB',  name:'Materials Select Sector SPDR',           cat:'US Sector',           er:0.13,   description:'Tracks materials stocks within the S&P 500 — chemicals, mining, construction materials, and packaging companies. One of the smallest sector ETFs by AUM. Linde is by far the largest holding, often representing 20%+ of the fund. A proxy for global industrial activity and commodity demand cycles.', holdings:['Linde (LIN)','Sherwin-Williams (SHW)','Air Products (APD)','Ecolab (ECL)','Newmont (NEM)','Freeport-McMoRan (FCX)','PPG Industries','Nucor Steel','Albemarle (ALB)','Ball Corporation'] },
  { symbol:'XLRE', name:'Real Estate Select Sector SPDR',         cat:'US Sector',           er:0.13,   description:'Tracks REIT and real estate stocks within the S&P 500. REITs are required to distribute 90% of taxable income, giving XLRE a higher dividend yield than most sector ETFs. Rate-sensitive — tends to underperform when interest rates rise (as financing costs increase and bond yields compete for income seekers). Data centres and logistics are now the largest sub-sectors.', holdings:['Prologis (PLD)','American Tower (AMT)','Equinix (EQIX)','Simon Property Group (SPG)','Realty Income (O)','Public Storage (PSA)','Welltower (WELL)','Digital Realty (DLR)','AvalonBay (AVB)','Equity Residential (EQR)'] },
  { symbol:'XLU',  name:'Utilities Select Sector SPDR',           cat:'US Sector',           er:0.13,   description:'Tracks utility stocks within the S&P 500 — electric, gas, and water utilities. The classic defensive, income-oriented sector; utility stocks often move inversely to interest rates as investors compare dividend yields to bond yields. AI data-centre electricity demand is an emerging growth catalyst for the sector, generating renewed interest.', holdings:['NextEra Energy (NEE)','Southern Co (SO)','Duke Energy (DUK)','Sempra (SRE)','AEP','Dominion Energy (D)','PG&E (PCG)','Exelon (EXC)','Xcel Energy (XEL)','Entergy (ETR)'] },
  { symbol:'VGT',  name:'Vanguard Information Technology ETF',    cat:'US Sector',           er:0.10,   description:'Tracks the MSCI US IMI Information Technology 25/50 Index — similar to XLK but with broader mid-cap technology coverage (~380 stocks vs XLK\'s ~65). A lower-cost (0.10% vs 0.13%) and more diversified technology sector exposure. Apple and Microsoft typically each cap at 25% under the index methodology.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Broadcom (AVGO)','Oracle (ORCL)','AMD','Salesforce (CRM)','Cisco (CSCO)','Texas Instruments (TXN)','Adobe (ADBE)'] },
  { symbol:'VHT',  name:'Vanguard Health Care ETF',               cat:'US Sector',           er:0.10,   description:'Tracks the MSCI US IMI Health Care 25/50 Index with broader exposure (~420 stocks) than XLV (~65 stocks). Lower-cost alternative to XLV, covering the full US healthcare market from large-cap pharma to smaller biotech and medical-device companies. UnitedHealth and Eli Lilly are the dominant positions.', holdings:['UnitedHealth (UNH)','Eli Lilly (LLY)','Johnson & Johnson (JNJ)','AbbVie (ABBV)','Merck (MRK)','Thermo Fisher (TMO)','Abbott (ABT)','Intuitive Surgical (ISRG)','Amgen (AMGN)','Danaher (DHR)'] },
  { symbol:'VFH',  name:'Vanguard Financials ETF',                cat:'US Sector',           er:0.10,   description:'Tracks the MSCI US IMI Financials 25/50 Index — broader exposure than XLF with ~400 holdings including banks, insurance, asset managers, payment networks, and REITs excluded from XLRE. Provides comprehensive US financial sector coverage at a lower cost than XLF.', holdings:['JPMorgan (JPM)','Berkshire Hathaway B','Visa (V)','Mastercard (MA)','Bank of America (BAC)','Wells Fargo (WFC)','Goldman Sachs (GS)','Morgan Stanley (MS)','American Express (AXP)','BlackRock (BLK)'] },
  { symbol:'VDE',  name:'Vanguard Energy ETF',                    cat:'US Sector',           er:0.10,   description:'Tracks the MSCI US IMI Energy 25/50 Index — broader energy sector exposure (~100 stocks) than XLF\'s ~25. Covers integrated majors, exploration & production companies, refiners, and energy services. Heavily influenced by crude oil and natural gas prices; Exxon and Chevron typically dominate.', holdings:['Exxon Mobil (XOM)','Chevron (CVX)','ConocoPhillips (COP)','EOG Resources','Schlumberger (SLB)','Occidental (OXY)','Marathon Petroleum (MPC)','Valero (VLO)','Phillips 66 (PSX)','Pioneer Natural Resources'] },
  { symbol:'ARKK', name:'ARK Innovation ETF',                     cat:'US Sector',           er:0.75,   description:'Cathie Wood\'s flagship actively managed fund focused on disruptive innovation across AI, genomics, fintech, autonomous vehicles, and robotics. Skyrocketed 150%+ in 2020, then fell 75%+ from its peak by 2022. Known for high conviction, concentrated bets on early-stage growth companies with multi-year horizons and extreme volatility.', holdings:['Tesla (TSLA)','Roku','Coinbase','UiPath','Palantir','Block (SQ)','Zoom','Robinhood','CRISPR Therapeutics','Intellia Therapeutics'] },
  { symbol:'ARKW', name:'ARK Next Generation Internet ETF',       cat:'US Sector',           er:0.88,   description:'ARK\'s actively managed fund targeting next-generation internet companies across AI, cloud computing, blockchain, streaming, and digital wallets. High overlap with ARKK but with a more explicit internet and fintech focus. Significant holdings in crypto-adjacent names (Coinbase, Robinhood, Grayscale Bitcoin Trust).', holdings:['Tesla (TSLA)','Coinbase','Palantir','Block (SQ)','Meta (META)','Roblox','Shopify','Twilio','Spotify','IBIT (Bitcoin ETF)'] },
  { symbol:'ARKG', name:'ARK Genomic Revolution ETF',             cat:'US Sector',           er:0.75,   description:'ARK\'s actively managed fund focused on genomics, CRISPR gene-editing, molecular diagnostics, and targeted therapeutics. Very high risk and concentrated in early-stage biotech companies. Potential for outsized gains if gene-editing technologies achieve commercial scale; significant binary risk at the individual-holding level.', holdings:['Exact Sciences','CRISPR Therapeutics','Twist Bioscience','CareDx','Intellia Therapeutics','Pacific Biosciences','Veeva Systems','Fate Therapeutics','Arctus BioTherapeutics','Repare Therapeutics'] },
  { symbol:'SMH',  name:'VanEck Semiconductor ETF',               cat:'US Sector',           er:0.35,   description:'Tracks the MVIS US Listed Semiconductor 25 Index of the 25 largest US-listed semiconductor companies by market cap. Highly concentrated and AI-exposed — NVIDIA alone can represent 20-25% of the fund. The go-to ETF for direct semiconductor sector exposure, blending chip designers, foundries, and equipment makers.', holdings:['NVIDIA (NVDA)','Broadcom (AVGO)','TSMC (TSM)','ASML','AMD','Texas Instruments (TXN)','Qualcomm (QCOM)','Applied Materials (AMAT)','KLA Corp (KLAC)','Lam Research (LRCX)'] },

  // International
  { symbol:'VEA',  name:'Vanguard FTSE Developed Markets ETF',    cat:'International',       er:0.05,   description:'Tracks the FTSE Developed All Cap ex US Index — broad exposure to developed markets outside the US and Canada across Europe, Japan, and Asia-Pacific. One of the cheapest international ETFs at 0.05%. Covers approximately 4,000 stocks and is the cornerstone international equity holding for many US-based passive portfolios.', holdings:['Nestlé (CH)','ASML (NL)','Samsung (KR)','Novo Nordisk (DK)','Toyota (JP)','LVMH (FR)','Shell (UK)','Roche (CH)','AstraZeneca (UK)','SAP (DE)'] },
  { symbol:'EFA',  name:'iShares MSCI EAFE ETF',                  cat:'International',       er:0.32,   description:'The original international developed-market ETF benchmark, launched in 2001. Tracks the MSCI EAFE Index (Europe, Australasia, Far East) — the most cited benchmark for non-US developed-market performance. Higher cost than IEFA (0.32% vs 0.07%) but maintains the deepest liquidity and is the most widely traded international ETF.', holdings:['Nestlé (CH)','ASML (NL)','Novo Nordisk (DK)','LVMH (FR)','Toyota (JP)','Shell (UK)','SAP (DE)','AstraZeneca (UK)','HSBC (UK)','Sony (JP)'] },
  { symbol:'IEFA', name:'iShares Core MSCI EAFE ETF',             cat:'International',       er:0.07,   description:'Low-cost (0.07%) alternative to EFA tracking the same MSCI EAFE universe but with a broader, more complete implementation. Preferred for long-term buy-and-hold investors who want developed-market international exposure at minimal cost. Tracks approximately 2,800 stocks versus EFA\'s ~900.', holdings:['Nestlé (CH)','ASML (NL)','Novo Nordisk (DK)','LVMH (FR)','Toyota (JP)','Shell (UK)','SAP (DE)','AstraZeneca (UK)','HSBC (UK)','Sony (JP)'] },
  { symbol:'VWO',  name:'Vanguard FTSE Emerging Markets ETF',     cat:'International',       er:0.08,   description:'One of the world\'s largest emerging-market ETFs, tracking the FTSE Emerging Markets All Cap China A Inclusion Index across China, India, Taiwan, Brazil, and South Africa. Notably excludes South Korea (classified as developed by FTSE). Ultra-low cost at 0.08% for broad EM exposure. Highly sensitive to China policy risk and USD strength.', holdings:['TSMC (TW)','Tencent (CN)','Alibaba (CN)','Samsung (KR - note: EEM includes)','Meituan (CN)','Infosys (IN)','Reliance Industries (IN)','Vale (BR)','PDD Holdings (CN)','ICBC (CN)'] },
  { symbol:'EEM',  name:'iShares MSCI Emerging Markets ETF',      cat:'International',       er:0.70,   description:'The original and most liquid emerging-market ETF, launched in 2003. Tracks the MSCI Emerging Markets Index, including South Korea (unlike VWO). Significantly more expensive than VWO (0.70% vs 0.08%) but maintains unmatched daily trading volume and options liquidity — making it the preferred vehicle for tactical EM exposure and hedging.', holdings:['TSMC (TW)','Samsung (KR)','Tencent (CN)','Alibaba (CN)','Meituan (CN)','Infosys (IN)','Vale (BR)','Reliance Industries (IN)','PDD Holdings (CN)','Baidu (CN)'] },
  { symbol:'EWJ',  name:'iShares MSCI Japan ETF',                 cat:'International',       er:0.50,   description:'The primary ETF for single-country Japan exposure, covering the MSCI Japan Index of ~240 large and mid-cap Japanese stocks. Japan has attracted significant foreign investor interest as corporate governance reforms, rising inflation ending decades of deflation, and Buffett\'s trading-house investments have renewed focus on Japanese equities.', holdings:['Toyota (JP)','Sony (JP)','Keyence (JP)','SoftBank Group (JP)','Tokyo Electron (JP)','Mitsubishi UFJ Financial (JP)','Recruit Holdings (JP)','Honda (JP)','KDDI (JP)','Shin-Etsu Chemical (JP)'] },
  { symbol:'FXI',  name:'iShares China Large-Cap ETF',            cat:'International',       er:0.74,   description:'Tracks the top 50 Chinese companies listed in Hong Kong (H-shares) and the US (ADRs). The most widely traded China-focused ETF for Western investors, commonly used for tactical China plays and as an options vehicle. High concentration risk — top 10 holdings often represent 60%+ of the fund. Heavily regulated sector exposure (tech, property, finance).', holdings:['Alibaba (HK)','Tencent (HK)','JD.com','Baidu','Meituan (HK)','PDD Holdings','ICBC','China Construction Bank','BYD','CNOOC'] },
  { symbol:'MCHI', name:'iShares MSCI China ETF',                 cat:'International',       er:0.59,   description:'Broader China exposure than FXI — tracks the MSCI China Index covering A-shares, B-shares, H-shares, and ADRs across ~700 stocks. More representative of the Chinese economy, including mainland-listed companies. Lower individual-stock concentration than FXI. Both funds carry significant political, regulatory, and delisting risk for US investors.', holdings:['Tencent (HK)','Alibaba (HK)','Meituan (HK)','PDD Holdings','JD.com','Baidu','CNOOC','China Merchants Bank','NetEase','Li Auto'] },
  { symbol:'EWG',  name:'iShares MSCI Germany ETF',               cat:'International',       er:0.51,   description:'Tracks the MSCI Germany Index of ~60 large and mid-cap German stocks. Germany is Europe\'s largest economy and a global exporter of industrial machinery, chemicals, and premium autos. The fund reflects Germany\'s industrial and financial makeup — SAP (software), Siemens (industrial), and Deutsche Telekom (telecom) are typically the top positions.', holdings:['SAP (DE)','Siemens (DE)','Deutsche Telekom (DE)','Allianz (DE)','BASF (DE)','Mercedes-Benz (DE)','BMW (DE)','Volkswagen (DE)','Deutsche Bank (DE)','Bayer (DE)'] },
  { symbol:'EWU',  name:'iShares MSCI United Kingdom ETF',        cat:'International',       er:0.51,   description:'Tracks the MSCI United Kingdom Index of ~80 large and mid-cap UK stocks. The UK market is notable for its large weighting in financials, energy, and consumer staples, and its relatively high dividend yield. Brexit-related discounting has made UK valuations attractive relative to US peers — a persistent debate among global equity allocators.', holdings:['AstraZeneca (UK)','Shell (UK)','HSBC (UK)','Unilever (UK)','BP (UK)','GSK (UK)','Rio Tinto (UK)','British American Tobacco (UK)','Diageo (UK)','Barclays (UK)'] },
  { symbol:'ACWI', name:'iShares MSCI ACWI ETF',                  cat:'International',       er:0.33,   description:'Tracks the MSCI All Country World Index — global equities across 23 developed and 24 emerging markets in a single fund (~2,900 stocks). The true one-fund global equity solution. US stocks typically represent ~65% of the index, with the remainder split across Europe (~15%), Asia-Pacific (~10%), and emerging markets (~10%).', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Amazon (AMZN)','Alphabet (GOOGL)','Meta (META)','TSMC (TW)','Samsung (KR)','Nestlé (CH)','Novo Nordisk (DK)'] },
  { symbol:'VXUS', name:'Vanguard Total International Stock ETF', cat:'International',       er:0.08,   description:'Tracks the FTSE Global All Cap ex US Index — every non-US equity market, developed and emerging, across ~8,500 stocks. Paired with VTI, it forms Vanguard\'s two-fund total-world portfolio. Ultra-low cost at 0.08% for comprehensive ex-US exposure. A cornerstone holding for global passive investors.', holdings:['TSMC (TW)','Samsung (KR)','Nestlé (CH)','ASML (NL)','Novo Nordisk (DK)','Toyota (JP)','LVMH (FR)','Shell (UK)','Tencent (CN)','AstraZeneca (UK)'] },
  { symbol:'IXUS', name:'iShares Core MSCI Total Intl Stock ETF', cat:'International',       er:0.09,   description:'BlackRock\'s low-cost total-international fund tracking the MSCI ACWI ex USA IMI Index (~4,300 stocks). Competes directly with VXUS for cost-conscious investors seeking comprehensive non-US equity exposure. Slightly narrower than VXUS but with BlackRock\'s infrastructure and liquidity.', holdings:['TSMC (TW)','Samsung (KR)','Nestlé (CH)','ASML (NL)','Novo Nordisk (DK)','Toyota (JP)','LVMH (FR)','Shell (UK)','Tencent (CN)','Roche (CH)'] },
  { symbol:'SCHF', name:'Schwab International Equity ETF',        cat:'International',       er:0.06,   description:'One of the cheapest developed-market international ETFs at 0.06%, tracking the FTSE Developed ex US Index (~1,500 stocks). Schwab\'s primary international equity building block, designed for cost-conscious long-term investors. Excludes emerging markets and Canada; focuses on Europe, Japan, and Asia-Pacific developed markets.', holdings:['Nestlé (CH)','ASML (NL)','Novo Nordisk (DK)','Toyota (JP)','LVMH (FR)','Shell (UK)','SAP (DE)','AstraZeneca (UK)','HSBC (UK)','Roche (CH)'] },
  { symbol:'EWC',  name:'iShares MSCI Canada ETF',                cat:'International',       er:0.51,   description:'Tracks the MSCI Canada Index of ~90 large and mid-cap Canadian stocks. Canada\'s market is heavily skewed toward financials (big banks), energy (oil sands and pipelines), and materials (gold miners and base metals). Shopify is a significant growth-oriented holding. The fund provides a commodity-and-financials tilt relative to the US market.', holdings:['Royal Bank of Canada (RBC)','Shopify (CA)','TD Bank','Enbridge','Canadian Pacific (CP)','Brookfield Asset Mgmt','Bank of Nova Scotia','Manulife Financial','Canadian Natural Resources','Agnico Eagle Mines'] },

  // Factor / Smart Beta
  { symbol:'QQQ',  name:'Invesco QQQ Trust',                      cat:'Factor / Smart Beta', er:0.20,   description:'Tracks the Nasdaq-100 — the 100 largest non-financial companies listed on the Nasdaq exchange. The most popular non-S&P ETF, heavily concentrated in mega-cap technology. Widely used by retail and institutional investors for growth exposure, momentum trading, and as an options vehicle. Second only to SPY in daily trading volume among US ETFs.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Amazon (AMZN)','Meta (META)','Alphabet (GOOGL)','Tesla (TSLA)','Broadcom (AVGO)','Costco (COST)','Netflix (NFLX)'] },
  { symbol:'QQQM', name:'Invesco NASDAQ 100 ETF',                 cat:'Factor / Smart Beta', er:0.15,   description:'Same index as QQQ (Nasdaq-100) but designed for long-term buy-and-hold investors at a lower expense ratio (0.15% vs 0.20%). Invesco created QQQM to avoid cannibalising QQQ\'s institutional and options-trading liquidity while offering retail investors a more cost-efficient wrapper. Identical portfolio composition to QQQ.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Amazon (AMZN)','Meta (META)','Alphabet (GOOGL)','Tesla (TSLA)','Broadcom (AVGO)','Costco (COST)','Netflix (NFLX)'] },
  { symbol:'SCHD', name:'Schwab US Dividend Equity ETF',          cat:'Factor / Smart Beta', er:0.06,   description:'The most popular dividend ETF in the US, screening for high-quality companies with strong free cash flow, low debt, and consistent dividend growth. Requires 10 consecutive years of dividends and screens on cash-flow-to-debt, return on equity, and dividend yield. Known for a portfolio of durable, mature businesses with rising payouts rather than just maximum yield.', holdings:['Coca-Cola (KO)','Home Depot (HD)','Lockheed Martin (LMT)','Texas Instruments (TXN)','Verizon (VZ)','BlackRock (BLK)','Altria (MO)','Amgen (AMGN)','Bristol-Myers Squibb (BMY)','Merck (MRK)'] },
  { symbol:'VIG',  name:'Vanguard Dividend Appreciation ETF',     cat:'Factor / Smart Beta', er:0.06,   description:'Tracks companies with 10+ consecutive years of dividend growth, using the S&P US Dividend Growers Index. Growth-oriented dividend approach — prioritises the quality and trajectory of dividend increases over current yield. As a result, VIG yields less than SCHD or DVY but holds higher-growth businesses with stronger balance sheets.', holdings:['Microsoft (MSFT)','Apple (AAPL)','UnitedHealth (UNH)','JPMorgan (JPM)','Visa (V)','Exxon (XOM)','J&J (JNJ)','Broadcom (AVGO)','Home Depot (HD)','Costco (COST)'] },
  { symbol:'RSP',  name:'Invesco S&P 500 Equal Weight ETF',       cat:'Factor / Smart Beta', er:0.20,   description:'Holds all ~503 S&P 500 stocks at an equal ~0.2% weight — rebalanced quarterly. Dramatically reduces mega-cap concentration vs market-cap-weighted SPY. Provides more mid-cap tilt and a value/size factor exposure. Historically outperforms when smaller stocks lead (value cycles); underperforms in mega-cap growth bull markets. A diversification tool within the S&P 500.', holdings:['Equal weight — all 503 S&P 500 stocks','~0.2% per holding','Quarterly rebalancing back to equal weight','More Industrials & Financials, less Tech vs SPY'] },
  { symbol:'DGRO', name:'iShares Core Dividend Growth ETF',       cat:'Factor / Smart Beta', er:0.08,   description:'Screens for US companies with at least 5 consecutive years of dividend growth and solid fundamentals including payout ratio below 75%. More diversified than SCHD (~450 stocks vs SCHD\'s ~100) and slightly lower yield — trades off some yield for broader diversification and lower tracking error. A core dividend-growth building block.', holdings:['Microsoft (MSFT)','Apple (AAPL)','JPMorgan (JPM)','Visa (V)','J&J (JNJ)','AbbVie (ABBV)','UnitedHealth (UNH)','P&G (PG)','Home Depot (HD)','Exxon (XOM)'] },
  { symbol:'VTV',  name:'Vanguard Value ETF',                     cat:'Factor / Smart Beta', er:0.04,   description:'Tracks the CRSP US Large Cap Value Index — the cheapest and broadest large-cap value ETF at 0.04%. Screens for lower price-to-book, price-to-earnings, price-to-sales, and price-to-cash-flow ratios. A pure value-factor play; the natural complement to VUG (Vanguard Growth) for investors building a factor-tilted portfolio.', holdings:['Berkshire Hathaway B','JPMorgan (JPM)','Exxon (XOM)','J&J (JNJ)','Walmart (WMT)','P&G (PG)','Chevron (CVX)','UnitedHealth (UNH)','Bank of America (BAC)','Comcast (CMCSA)'] },
  { symbol:'MTUM', name:'iShares MSCI USA Momentum Factor ETF',   cat:'Factor / Smart Beta', er:0.15,   description:'Tracks stocks with the strongest recent price momentum within the MSCI USA universe, rebalanced semi-annually. The portfolio can shift dramatically between sectors as momentum rotates — it can look very different from one rebalance to the next. Useful for investors who want systematic exposure to the momentum factor without picking individual stocks.', holdings:['Apple (AAPL)','NVIDIA (NVDA)','Meta (META)','Microsoft (MSFT)','Amazon (AMZN)','Alphabet (GOOGL)','Tesla (TSLA)','Palantir (PLTR)','GE Aerospace (GE)','Broadcom (AVGO)'] },
  { symbol:'QUAL', name:'iShares MSCI USA Quality Factor ETF',    cat:'Factor / Smart Beta', er:0.15,   description:'Screens for companies with high return on equity, stable earnings growth, and low financial leverage — the three MSCI quality metrics. The quality factor has historically delivered strong risk-adjusted returns across market cycles by focusing on financially sound businesses. Tends to hold technology-heavy and consumer-staples companies.', holdings:['Apple (AAPL)','Microsoft (MSFT)','NVIDIA (NVDA)','Meta (META)','Alphabet (GOOGL)','Visa (V)','Mastercard (MA)','Amazon (AMZN)','Costco (COST)','Broadcom (AVGO)'] },
  { symbol:'VLUE', name:'iShares MSCI USA Value Factor ETF',      cat:'Factor / Smart Beta', er:0.15,   description:'Screens the MSCI USA universe for value stocks on three metrics: book value-to-price, earnings-to-price, and cash-earnings-to-price. More aggressive value tilt than broad-market value ETFs; portfolio shifts meaningfully based on relative valuation. The value factor has had extended periods of under- and outperformance relative to growth.', holdings:['Berkshire Hathaway B','JPMorgan (JPM)','Exxon Mobil (XOM)','Comcast (CMCSA)','CVS Health','Bank of America (BAC)','Cisco (CSCO)','Intel (INTC)','AbbVie (ABBV)','Ford (F)'] },
  { symbol:'USMV', name:'iShares MSCI USA Min Vol Factor ETF',    cat:'Factor / Smart Beta', er:0.15,   description:'Holds a subset of US large and mid-cap stocks optimised to have the lowest overall portfolio volatility, subject to diversification constraints. Designed to reduce drawdowns in bear markets while maintaining equity exposure. Historically delivers equity-like returns with 20-30% less volatility than the S&P 500. Often underperforms in strong bull markets.', holdings:['Waste Management (WM)','Verizon (VZ)','P&G (PG)','Danaher (DHR)','S&P Global (SPGI)','Church & Dwight','Paychex (PAYX)','Automatic Data Processing (ADP)','Coca-Cola (KO)','Republic Services (RSG)'] },
  { symbol:'NOBL', name:"ProShares S&P 500 Dividend Aristocrats", cat:'Factor / Smart Beta', er:0.35,   description:'Exclusively holds S&P 500 companies with 25+ consecutive years of dividend increases — the most stringent dividend-growth criterion of any ETF in this universe. Currently ~67 stocks, equally weighted and rebalanced quarterly. These "Dividend Aristocrats" have demonstrated extraordinary earnings consistency and capital-allocation discipline across recessions, inflation, and rate cycles.', holdings:['Coca-Cola (KO)','J&J (JNJ)','ADP (Automatic Data Processing)','P&G (PG)','Emerson Electric','Realty Income (O)','Nucor Steel','Colgate-Palmolive','Albemarle (ALB)','Sherwin-Williams (SHW)'] },
  { symbol:'DVY',  name:'iShares Select Dividend ETF',            cat:'Factor / Smart Beta', er:0.38,   description:'Focuses on the highest-yielding US stocks passing a dividend-sustainability screen (5-year dividend-per-share growth, payout ratio below 60%). Provides higher current income than SCHD or VIG with a more value-oriented portfolio skewed toward mature, slower-growing industries. Financials, utilities, and consumer staples are typically the top sectors.', holdings:['Altria (MO)','Ford (F)','Verizon (VZ)','AT&T (T)','Philip Morris Intl (PM)','LyondellBasell (LYB)','T. Rowe Price (TROW)','IBM','Gilead Sciences (GILD)','Prudential Financial (PRU)'] },
  { symbol:'VYM',  name:'Vanguard High Dividend Yield ETF',       cat:'Factor / Smart Beta', er:0.06,   description:'Tracks the FTSE High Dividend Yield Index of ~400+ US stocks with above-average dividend yields. Broader and lower-yielding than DVY, blending quality large-cap payers across financials, healthcare, consumer staples, and industrials. Lower cost (0.06%) and greater diversification make it a popular core income holding.', holdings:['JPMorgan (JPM)','Exxon (XOM)','Broadcom (AVGO)','J&J (JNJ)','P&G (PG)','Home Depot (HD)','AbbVie (ABBV)','Merck (MRK)','Coca-Cola (KO)','Cisco (CSCO)'] },
  { symbol:'SDY',  name:'SPDR S&P Dividend ETF',                  cat:'Factor / Smart Beta', er:0.35,   description:'Tracks the S&P High Yield Dividend Aristocrats Index — companies in the S&P Composite 1500 (not just S&P 500) with 20+ consecutive years of dividend increases, equal-weighted. Broader universe than NOBL (includes mid and small caps) with a higher yield focus. The equal-weight methodology tilts the portfolio toward smaller, higher-yielding Aristocrats.', holdings:['Realty Income (O)','National Retail Properties (NNN)','Old Republic International','NNN REIT','Universal Corporation','Gorman-Rupp','Erie Indemnity','Leggett & Platt','Black Hills Corp','Stepan Company'] },

  // Fixed Income
  { symbol:'BND',  name:'Vanguard Total Bond Market ETF',         cat:'Fixed Income',        er:0.03,   description:'The "SPY of bonds" — tracks the Bloomberg US Aggregate Bond Index, the broadest US investment-grade bond benchmark covering government, corporate, agency, and securitised debt. Over 10,000 bond positions at a 0.03% expense ratio. The cornerstone fixed-income holding for passive investors; duration of approximately 6 years.', holdings:['US Treasuries (~45% of fund)','Agency Mortgage-Backed Securities (~21%)','Investment-Grade Corporate Bonds (~25%)','Government-Related bonds (~5%)','Commercial Mortgage-Backed Securities (~3%)','Duration ~6 years'] },
  { symbol:'AGG',  name:'iShares Core US Aggregate Bond ETF',     cat:'Fixed Income',        er:0.03,   description:'BlackRock\'s version of the Bloomberg US Aggregate Bond Index — near-identical portfolio to BND. Launched in 2003, it was the dominant bond ETF before Vanguard entered the space. Maintains deeper options liquidity than BND, making it the preferred bond ETF for institutional hedging and tactical fixed-income trades.', holdings:['US Treasuries (~45%)','Agency MBS (~21%)','Investment-Grade Corporates (~25%)','Gov-Related (~5%)','CMBS (~3%)','~10,000+ individual bond positions'] },
  { symbol:'TLT',  name:'iShares 20+ Year Treasury Bond ETF',     cat:'Fixed Income',        er:0.15,   description:'Holds only long-duration US government bonds (20-30 year maturities). The most interest-rate-sensitive mainstream ETF — a 1% rise in yields causes roughly 15-18% decline in NAV. Widely used for interest-rate hedging, macro trades, and as a flight-to-safety instrument during equity bear markets. Duration of approximately 16-18 years.', holdings:['US Treasury 30-year bonds','US Treasury 20-25 year bonds','~40 individual Treasury positions','Duration ~17 years','No credit risk (USG backed)','Highly liquid, deep options market'] },
  { symbol:'LQD',  name:'iShares iBoxx $ Inv Grade Corp Bond ETF',cat:'Fixed Income',        er:0.14,   description:'Tracks the Markit iBoxx USD Liquid Investment Grade Index — the most liquid investment-grade corporate bond ETF. Covers bonds from investment-grade US and foreign companies with at least $750M outstanding. Duration of ~8 years. Provides corporate credit spread exposure on top of Treasury rates; widens in risk-off environments.', holdings:['JPMorgan bonds','Apple bonds','Microsoft bonds','AT&T bonds','Verizon bonds','Goldman Sachs bonds','Bank of America bonds','Pfizer bonds','Comcast bonds','Wells Fargo bonds'] },
  { symbol:'HYG',  name:'iShares iBoxx $ High Yield Corp Bond',   cat:'Fixed Income',        er:0.49,   description:'The most liquid high-yield (junk bond) ETF, tracking the Markit iBoxx USD Liquid High Yield Index of BB and B-rated corporate bonds. Higher yield than investment-grade funds at the cost of greater credit risk. Often trades as a risk-sentiment barometer — spreads widen in recessions. Widely used for credit hedging via short positions or options.', holdings:['BB-rated corporate bonds (~50%)','B-rated corporate bonds (~35%)','CCC-rated bonds (~10%)','Ford bonds','Sprint/T-Mobile bonds','CCO Holdings bonds','TransDigm bonds','Bath & Body Works bonds'] },
  { symbol:'JNK',  name:'SPDR Bloomberg High Yield Bond ETF',     cat:'Fixed Income',        er:0.40,   description:'Tracks the Bloomberg High Yield Very Liquid Index — a close competitor to HYG for high-yield bond exposure. Slightly cheaper than HYG (0.40% vs 0.49%) with a similar but not identical portfolio. Often trades at a small liquidity discount to HYG but provides comparable credit risk and income characteristics.', holdings:['BB-rated corporates (largest weight)','B-rated corporate bonds','Energy sector bonds','Telecommunications bonds','Healthcare sector bonds','Consumer Cyclical bonds'] },
  { symbol:'TIP',  name:'iShares TIPS Bond ETF',                  cat:'Fixed Income',        er:0.19,   description:'Holds US Treasury Inflation-Protected Securities (TIPS) whose principal adjusts with the Consumer Price Index — a direct government-backed inflation hedge. When inflation surprises to the upside, TIP outperforms nominal Treasuries. Duration of approximately 7 years. Used by investors seeking real (inflation-adjusted) return from government bonds.', holdings:['US TIPS — short maturity','US TIPS — intermediate maturity','US TIPS — long maturity','All maturities from 1 to 30 years','Principal adjusted quarterly with CPI','No credit risk (US government backed)'] },
  { symbol:'MUB',  name:'iShares National Muni Bond ETF',         cat:'Fixed Income',        er:0.07,   description:'Holds investment-grade US municipal bonds whose interest is generally exempt from federal income tax — making them particularly valuable for investors in high tax brackets. The tax-equivalent yield (adjusted for the federal tax exemption) is often higher than comparable corporate bonds for taxpayers in the 32%+ bracket. Duration approximately 6 years.', holdings:['New York state/city bonds','California bonds','Texas bonds','Illinois bonds','Florida bonds','General obligation bonds','Revenue bonds (water, transport, hospital)','Investment-grade rated (BBB+ or better)'] },
  { symbol:'SHY',  name:'iShares 1-3 Year Treasury Bond ETF',     cat:'Fixed Income',        er:0.15,   description:'Very short-duration US Treasuries (1-3 year maturities) — the lowest interest-rate risk of any Treasury ETF. Often used as a cash substitute, short-term parking vehicle, or rate-risk reduction tool within fixed-income portfolios. Duration of approximately 1.8 years means minimal price movement from rate changes. Yield closely tracks the Fed Funds rate.', holdings:['1-3 year US Treasury notes','~80 Treasury positions','Duration ~1.8 years','Virtually no credit risk','Yield moves closely with Fed policy rate','High liquidity, tight spreads'] },
  { symbol:'IEF',  name:'iShares 7-10 Year Treasury Bond ETF',    cat:'Fixed Income',        er:0.15,   description:'Intermediate-duration US Treasuries (7-10 year maturities) — balancing moderate rate sensitivity with higher yield than short-duration funds. Duration of approximately 7.5 years. A common benchmark for the "belly" of the Treasury curve. Widely used for tactical duration management and as a pure rate-risk vehicle without credit risk.', holdings:['7-10 year US Treasury notes and bonds','~20-25 Treasury positions','Duration ~7.5 years','Benchmark for 10-year Treasury futures hedging','No credit risk','Key rate duration in the intermediate range'] },
  { symbol:'BNDX', name:'Vanguard Total International Bond ETF',  cat:'Fixed Income',        er:0.07,   description:'Tracks investment-grade bonds from developed markets outside the US, currency-hedged back to USD. Covers government, agency, and corporate bonds from Europe, Japan, and other developed markets. The USD hedge eliminates foreign-exchange risk while retaining the yield and diversification benefits of non-US bonds. A key component of Vanguard\'s three-fund portfolio recommendation.', holdings:['Japanese Government Bonds (JGBs) — largest weight','European government bonds (France, Germany, Italy)','UK Gilts','Canadian government bonds','Australian government bonds','Investment-grade corporate bonds (non-US)','All currency-hedged to USD'] },
  { symbol:'EMB',  name:'iShares JP Morgan USD EM Bond ETF',      cat:'Fixed Income',        er:0.39,   description:'Tracks the J.P. Morgan EMBI Global Core Index — USD-denominated sovereign and quasi-sovereign bonds from emerging-market countries. Since bonds are USD-denominated, investors avoid currency risk while still accessing EM credit spreads. Higher yield than developed-market sovereigns compensates for greater political and economic risk.', holdings:['Mexico sovereign bonds','Indonesia sovereign bonds','Turkey sovereign bonds','Saudi Arabia sovereign bonds','Brazil sovereign bonds','Colombia sovereign bonds','Qatar sovereign bonds','South Africa sovereign bonds','Philippines sovereign bonds','Chile sovereign bonds'] },
  { symbol:'VCIT', name:'Vanguard Intermediate-Term Corp Bond',   cat:'Fixed Income',        er:0.04,   description:'Tracks investment-grade corporate bonds with 5-10 year maturities at an extremely low 0.04% expense ratio. Provides pure corporate credit exposure in the intermediate duration range — more yield than Treasuries with credit-spread risk. One of Vanguard\'s core fixed-income building blocks for cost-conscious investors.', holdings:['Apple bonds (5-10 yr)','Microsoft bonds (5-10 yr)','JPMorgan bonds (5-10 yr)','Comcast bonds (5-10 yr)','Verizon bonds (5-10 yr)','Duration ~6.5 years','~2,000+ investment-grade corporate bonds','BBB-rated bonds largest weight'] },
  { symbol:'VCSH', name:'Vanguard Short-Term Corp Bond ETF',      cat:'Fixed Income',        er:0.04,   description:'Short-duration (1-5 year) investment-grade corporate bonds at 0.04% — virtually the cheapest short corporate fund available. Low rate sensitivity with a yield premium over comparable Treasuries. Often used as a higher-yielding alternative to money markets for cash management within fixed-income portfolios.', holdings:['Short-maturity investment-grade corporate bonds','Duration ~2.7 years','~2,000+ positions','A-rated and BBB-rated bonds','Financial sector bonds — largest segment','Industrial and utility bonds'] },
  { symbol:'BSV',  name:'Vanguard Short-Term Bond ETF',           cat:'Fixed Income',        er:0.04,   description:'Holds short-duration (1-5 year) government and investment-grade corporate bonds — a blend of VCSH (corporate) and short Treasuries. Very low rate risk with duration around 2.7 years. Used as a conservative fixed-income building block or as a lower-risk parking vehicle when equity allocations are reduced.', holdings:['Short US Treasuries (~70%)','Short investment-grade corporate bonds (~30%)','Duration ~2.7 years','Near-zero credit risk on government portion','Higher yield than SHY due to corporate allocation'] },
  { symbol:'FLOT', name:'iShares Floating Rate Bond ETF',         cat:'Fixed Income',        er:0.15,   description:'Holds investment-grade floating-rate bonds whose coupons reset periodically with reference to SOFR or LIBOR — minimal interest-rate duration risk. Outperforms fixed-rate bonds when rates rise and underperforms when rates fall. Predominantly bank-issued senior unsecured floating-rate notes. Duration near zero.', holdings:['JPMorgan floating rate notes','Bank of America floating rate notes','Wells Fargo floating rate notes','Goldman Sachs floating rate notes','Citigroup floating rate notes','Duration ≈ 0 (rate-insensitive)','Investment-grade only','Quarterly coupon resets with SOFR'] },
  { symbol:'JPST', name:'JPMorgan Ultra-Short Income ETF',        cat:'Fixed Income',        er:0.18,   description:'Actively managed ultra-short-duration bond fund designed to deliver higher income than money-market funds while maintaining very low rate risk. Invests in investment-grade commercial paper, asset-backed securities, short corporate bonds, and government securities. Maintains a weighted-average life under one year. A popular cash management tool.', holdings:['Commercial paper (highest-rated companies)','Asset-backed securities (ABS)','Ultra-short corporate bonds (<1 year)','Short-term government debt','Duration <0.5 years','Actively managed by JPMorgan fixed income team'] },
  { symbol:'NEAR', name:'iShares Short Maturity Bond ETF',        cat:'Fixed Income',        er:0.25,   description:'Actively managed 0-1 year bond fund competing with JPST as an enhanced cash alternative. Holds a diversified mix of very short investment-grade securities including commercial paper, agency discount notes, and short corporates. Aims to outperform money-market rates while maintaining capital preservation as the primary objective.', holdings:['Commercial paper','Agency discount notes','Very short corporate bonds (<1 year)','ABS (short maturity)','Government money-market instruments','Duration <0.5 years'] },
  { symbol:'IGIB', name:'iShares Intermediate-Term Corp Bond',   cat:'Fixed Income',        er:0.06,   description:'Low-cost intermediate investment-grade corporate bond ETF tracking the ICE BofA 5-10 Year US Corporate Index. Provides targeted exposure to the intermediate part of the corporate credit curve — more yield than short bonds with less rate risk than long-duration funds. Popular as a building block in intermediate fixed-income sleeves.', holdings:['5-10 year investment-grade corporate bonds','~3,000+ bond positions','Duration ~7 years','A-rated and BBB-rated bonds (~60% and ~40%)','Financial sector largest weight','Telecom and industrial bonds'] },

  // Commodities & Alts
  { symbol:'GLD',  name:'SPDR Gold Shares',                       cat:'Commodities & Alts',  er:0.40,   description:'The world\'s largest gold ETF by AUM, launched in 2004. Backed by physical gold bars held in HSBC\'s London vaults — each share represents approximately 1/10th of an ounce. Widely used as an inflation hedge, USD hedge, and flight-to-safety instrument. Deep options market and the highest liquidity of any gold ETF make it the institutional standard.', holdings:['Physical gold bullion','Vaulted at HSBC London','Each share = ~0.0928 oz gold','No counterparty risk (allocated gold)','Audited twice yearly','~900 tonnes of gold held'] },
  { symbol:'IAU',  name:'iShares Gold Trust',                     cat:'Commodities & Alts',  er:0.25,   description:'Physical gold ETF backed by bullion held in JPMorgan\'s London and New York vaults. Lower expense ratio than GLD (0.25% vs 0.40%) making it more cost-efficient for long-term holders. Each share represents approximately 1/100th of an ounce. Second-largest gold ETF globally; preferred by buy-and-hold investors due to its cost advantage.', holdings:['Physical gold bullion','Vaulted at JPMorgan London & New York','Each share = ~0.0096 oz gold','No counterparty risk (allocated gold)','Lower cost than GLD for long-term holders'] },
  { symbol:'GLDM', name:'SPDR Gold MiniShares',                   cat:'Commodities & Alts',  er:0.10,   description:'The lowest-cost physical gold ETF at 0.10% — created by State Street specifically to offer retail investors a more affordable gold exposure than GLD. Each share represents approximately 1/100th of an ounce, with a lower share price than GLD or IAU. Vaulted at ICBC Standard Bank in London. Growing rapidly in AUM as cost-conscious investors migrate from GLD.', holdings:['Physical gold bullion','Vaulted at ICBC Standard Bank, London','Each share = ~0.0009 oz gold','No counterparty risk','Lowest expense ratio among physical gold ETFs'] },
  { symbol:'SLV',  name:'iShares Silver Trust',                   cat:'Commodities & Alts',  er:0.50,   description:'Physical silver ETF backed by silver bars held in JPMorgan\'s London vaults. Silver has dual demand — as a monetary/store-of-value asset like gold, and as an industrial metal (solar panels, EV components, electronics). This dual demand makes SLV more volatile than GLD: it amplifies gold\'s moves in risk-on environments and has larger drawdowns in risk-off.', holdings:['Physical silver bullion','Vaulted at JPMorgan London','Each share = ~0.934 oz silver','Industrial demand: solar, EVs, electronics','Monetary demand: inflation hedge','Higher volatility than gold ETFs'] },
  { symbol:'USO',  name:'United States Oil Fund',                 cat:'Commodities & Alts',  er:0.81,   description:'Provides exposure to WTI crude oil price movements via near-month futures contracts — not physical oil. Subject to significant contango drag when futures curves slope upward (as futures roll costs erode returns over time). More useful for short-term tactical oil price views than long-term holding. Widely misunderstood by retail investors unfamiliar with futures-roll mechanics.', holdings:['WTI crude oil near-month futures','Rolls futures monthly (contango risk)','US Treasury Bills (as collateral)','Not backed by physical oil','Regulated by CFTC (commodity pool)','Price closely tracks WTI spot in short term'] },
  { symbol:'UNG',  name:'United States Natural Gas Fund',         cat:'Commodities & Alts',  er:1.11,   description:'Provides exposure to natural gas prices via Henry Hub natural gas futures. Highly volatile and subject to severe contango drag — historically one of the worst ETFs for long-term holding due to steep futures roll costs. Useful only for short-term views on natural gas price spikes (cold weather, LNG export demand, supply disruptions). The highest-cost ETF in this universe at 1.11%.', holdings:['Henry Hub natural gas near-month futures','Monthly futures rolls (extreme contango drag)','US Treasury Bills (collateral)','Not physical gas','Extreme volatility — gas prices can move 50%+ in weeks','Regulated commodity pool'] },
  { symbol:'DBC',  name:'Invesco DB Commodity Index Tracking Fund',cat:'Commodities & Alts', er:0.85,   description:'Diversified commodity futures ETF covering energy, precious metals, industrial metals, and agricultural commodities. Uses an "Optimum Yield" rolling methodology designed to reduce contango costs by selecting futures contracts based on the shape of the forward curve. Issued as a K-1 for tax purposes. One of the oldest and most established diversified commodity funds.', holdings:['WTI Crude Oil','Brent Crude Oil','Natural Gas','Gasoil','Gold','Silver','Copper','Zinc','Aluminium','Wheat, Corn, Soybeans, Sugar'] },
  { symbol:'PDBC', name:'Invesco Optimum Yield Diversified Commodity',cat:'Commodities & Alts',er:0.59, description:'Similar diversified commodity exposure to DBC but structured as an ETF (not a partnership) — issues a 1099 instead of K-1, avoiding the tax complexity for most investors. Uses the same Optimum Yield rolling strategy to reduce contango drag across energy, metals, and agricultural futures. Lower cost than DBC (0.59% vs 0.85%).', holdings:['WTI Crude & Brent Crude','Natural Gas','Gold & Silver','Copper, Zinc, Aluminium','Corn, Wheat, Soybeans, Sugar','No K-1 (1099 instead — more tax-friendly)'] },
  { symbol:'CPER', name:'United States Copper Index Fund',        cat:'Commodities & Alts',  er:0.97,   description:'Provides exposure to COMEX copper futures — a critical industrial metal and economic bellwether increasingly tied to the global electrification megatrend. Copper demand is driven by EVs (~4x more copper per vehicle than ICE), solar panels, wind turbines, and grid infrastructure upgrades. A direct play on the energy transition; supply is heavily concentrated in Chile and Peru.', holdings:['COMEX copper near-month futures','Roll to next contract monthly','US Treasury Bills (collateral)','Supply concentrated in Chile & Peru','Key electrification metal: EVs, solar, grid','Economic indicator — tracks global industrial growth'] },

  // Leveraged / Inverse
  { symbol:'TQQQ', name:'ProShares UltraPro QQQ',                 cat:'Leveraged / Inverse', er:0.88,   description:'Seeks 3x the daily return of the Nasdaq-100. Used by sophisticated traders for short-term amplified tech exposure. Due to daily rebalancing and volatility decay (beta-slippage), TQQQ erodes significantly in choppy or declining markets even if the index ends flat. Not suitable for long-term buy-and-hold. Requires active monitoring and risk management. WARNING: high-risk instrument.', holdings:['Nasdaq-100 exposure via swap agreements','2x additional leverage via futures','Daily rebalancing to 3x','Cash and short-term Treasuries (collateral)','Daily reset — compounding works for AND against holders','Not designed for holding periods >1 day'] },
  { symbol:'SQQQ', name:'ProShares UltraPro Short QQQ',           cat:'Leveraged / Inverse', er:0.95,   description:'Seeks -3x the daily return of the Nasdaq-100. A short-term bearish speculation tool on the technology sector. In a rising market it loses value rapidly; in a falling market it profits daily but compounding decay means long-term returns differ substantially from 3x the index\'s loss. Used primarily for hedging or short-term directional bets. WARNING: high-risk instrument.', holdings:['-3x Nasdaq-100 via swap agreements','Short futures on Nasdaq-100','Daily rebalancing to -3x','Designed for intraday or very short-term use only','Loses value over time in rising or volatile markets'] },
  { symbol:'SPXU', name:'ProShares UltraPro Short S&P 500',       cat:'Leveraged / Inverse', er:0.91,   description:'Seeks -3x the daily return of the S&P 500. Used for aggressive short-term bearish hedging or speculation on a broad market decline. Daily compounding means the fund will diverge from 3x the inverse of the index over any multi-day period. Most effective in sharp, swift market drops. WARNING: high-risk instrument.', holdings:['-3x S&P 500 via swap agreements','Short S&P 500 futures','Daily rebalancing to -3x','Extreme volatility','Daily reset — not for multi-day holding'] },
  { symbol:'SPXS', name:'Direxion Daily S&P 500 Bear 3X',         cat:'Leveraged / Inverse', er:1.01,   description:'Direxion\'s competing -3x S&P 500 inverse ETF, nearly identical in structure and purpose to SPXU. Slightly less AUM and options liquidity than SPXU. Both are used for short-term tactical hedging or speculation on broad market declines. The highest expense ratio in this universe at 1.01%. WARNING: high-risk instrument.', holdings:['-3x S&P 500 via swap agreements','Direxion managed','Daily reset mechanism','Designed for intraday use','Extreme leverage decay over multi-day periods'] },
  { symbol:'SH',   name:'ProShares Short S&P 500',                cat:'Leveraged / Inverse', er:0.88,   description:'Seeks -1x the daily return of the S&P 500 — a simple one-day inverse on the broad market. Less volatile than SPXU (-3x) but still subject to daily compounding decay. Used as a partial portfolio hedge against broad market declines or as a tactical short in risk-off environments. More conservative than 2x or 3x inverse funds. WARNING: decays in upward-trending markets.', holdings:['-1x S&P 500 via swap agreements','Short S&P 500 futures','Daily rebalancing to -1x','Lower daily volatility vs leveraged inverse ETFs','Still erodes in trending bull markets over time'] },
  { symbol:'PSQ',  name:'ProShares Short QQQ',                    cat:'Leveraged / Inverse', er:0.95,   description:'Seeks -1x the daily return of the Nasdaq-100. A simple one-day inverse on the technology-heavy Nasdaq, used to hedge tech exposure or express a short-term bearish view on growth stocks. Like SH but targeting the Nasdaq-100 rather than the S&P 500. Lower volatility than SQQQ (-3x) but still decays in rising markets. WARNING: not for long-term holding.', holdings:['-1x Nasdaq-100 via swap agreements','Short Nasdaq-100 futures','Daily rebalancing to -1x','Tech-sector hedge or short-term bearish trade','Less extreme than SQQQ but still decays over time'] },
  { symbol:'UVXY', name:'ProShares Ultra VIX Short-Term Futures',  cat:'Leveraged / Inverse', er:0.95,   description:'Seeks 1.5x the daily return of short-term VIX futures (not the VIX index itself). Designed to benefit from spikes in equity-market volatility (fear). In practice, UVXY loses value extremely rapidly in calm markets due to steep contango in VIX futures — it has historically declined 90%+ per year in low-volatility periods. Only appropriate for short-term volatility spikes. WARNING: extremely high-risk.', holdings:['VIX near-month futures (1st month)','VIX next-month futures (2nd month)','1.5x daily leverage on blended position','Extreme contango decay in normal markets','Only effective during sharp volatility spikes','Not a long-term position — decays almost daily'] },
  { symbol:'SDOW', name:'ProShares UltraPro Short Dow30',         cat:'Leveraged / Inverse', er:0.95,   description:'Seeks -3x the daily return of the Dow Jones Industrial Average (DJIA). Bears the same daily-compounding and volatility-decay risks as all 3x inverse funds. The DJIA is price-weighted (not market-cap-weighted) and only 30 stocks, giving SDOW a different sector composition than SPXU. Used for short-term tactical hedging of Dow-correlated positions. WARNING: high-risk instrument.', holdings:['-3x DJIA via swap agreements','Short DJIA futures','Daily rebalancing to -3x','DJIA is price-weighted (30 blue-chip stocks)','Different exposure from SPXU (S&P 500)','Not suitable for multi-day holding'] },
  { symbol:'UDOW', name:'ProShares UltraPro Dow30',               cat:'Leveraged / Inverse', er:0.95,   description:'Seeks 3x the daily return of the Dow Jones Industrial Average. The leveraged bullish counterpart to SDOW. Used for short-term amplified exposure to the 30 blue-chip Dow stocks. Daily compounding benefits traders in strongly trending up-markets but devastates returns in choppy conditions. The price-weighted DJIA gives different sector tilts than QQQ or SPX leveraged ETFs. WARNING: high-risk instrument.', holdings:['3x DJIA via swap agreements and futures','Daily rebalancing to 3x','DJIA 30 blue-chip stocks','Price-weighted index (higher-priced stocks = larger weight)','Goldman Sachs, UnitedHealth largest Dow weights','Not for multi-day holding without active management'] },
];

const SYMBOLS = ETF_UNIVERSE.map(e => e.symbol);
const META = Object.fromEntries(ETF_UNIVERSE.map(e => [e.symbol, e]));

// Combined lookup across ETFs + stocks — used by shared autocomplete
const ALL_UNIVERSE = [...ETF_UNIVERSE, ...STOCK_UNIVERSE];
const ALL_META = Object.fromEntries(ALL_UNIVERSE.map(e => [e.symbol, e]));

// ── Chart colours ─────────────────────────────────────────────────────────────
const CHART_COLORS = ['#388bfd','#3fb950','#f85149','#d29922','#bc8cff','#79c0ff'];

// ── State ─────────────────────────────────────────────────────────────────────
let quotes = {};           // symbol → Yahoo quote object
let sortCol = 'aum';
let sortDir = -1;          // -1 desc, 1 asc
let filterCat = 'All';
let searchQuery = '';
let refreshTimer = null;
let countdownTimer = null;
let secondsLeft = 0;
let mainChart = null;
let snapshotChart = null;
let chartSymbols = [];
let chartRange = '5y';
let chartNormalize = true;
let historyCache = {};     // symbol+range → data

// ── Helpers ───────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const fmt = (n, d = 2) => n == null || isNaN(n) ? '—' : n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const fmtPct = n => n == null || isNaN(n) ? '—' : (n >= 0 ? '+' : '') + fmt(n) + '%';
const fmtVol = n => {
  if (!n || isNaN(n)) return '—';
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return String(n);
};
const fmtAUM = n => {
  if (!n || isNaN(n)) return '—';
  if (n >= 1e12) return '$' + (n / 1e12).toFixed(2) + 'T';
  if (n >= 1e9)  return '$' + (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6)  return '$' + (n / 1e6).toFixed(2) + 'M';
  return '$' + n.toLocaleString();
};
const cls = n => !n || isNaN(n) ? '' : n >= 0 ? 'up' : 'dn';

// ── Market hours (NYSE: 9:30–16:00 ET, Mon–Fri) ───────────────────────────────
function nyseStatus() {
  const now = new Date();
  const et = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const day = et.getDay();      // 0=Sun 6=Sat
  const h = et.getHours();
  const m = et.getMinutes();
  const mins = h * 60 + m;

  if (day === 0 || day === 6) return 'closed';
  if (mins < 570) return mins >= 240 ? 'premarket' : 'closed';  // 4:00–9:30
  if (mins < 960) return 'open';    // 9:30–16:00
  return 'closed';
}

function updateMarketStatus() {
  const status = nyseStatus();
  const dot = $('marketDot');
  const label = $('marketLabel');
  dot.className = 'market-dot ' + status;
  if (status === 'open')       label.textContent = 'Market Open';
  else if (status === 'premarket') label.textContent = 'Pre-Market';
  else                         label.textContent = 'Market Closed';
}

// ── Data fetching ─────────────────────────────────────────────────────────────
async function fetchQuotes() {
  const btn = $('refreshBtn');
  btn.classList.add('spinning');
  try {
    // Batch into groups of 30 to keep URLs manageable
    const batches = [];
    for (let i = 0; i < SYMBOLS.length; i += 30) batches.push(SYMBOLS.slice(i, i + 30));
    const results = await Promise.all(batches.map(batch =>
      fetch(`/api/etf/quote?symbols=${batch.join(',')}`)
        .then(r => r.json())
        .catch(() => null)
    ));
    results.forEach(res => {
      if (!res) return;
      const list = res?.quoteResponse?.result || [];
      list.forEach(q => { quotes[q.symbol] = q; });
    });
    $('lastRefresh').textContent = 'Updated ' + new Date().toLocaleTimeString();
  } catch (e) {
    console.error('Quote fetch error', e);
  } finally {
    btn.classList.remove('spinning');
  }
}

async function fetchHistory(symbol) {
  if (historyCache[symbol]) return historyCache[symbol];
  const res = await fetch(`/api/etf/history?symbol=${symbol}&interval=1mo`);
  const data = await res.json();
  const chart = data?.chart?.result?.[0];
  if (!chart) return null;
  const timestamps = chart.timestamp;
  const closes = chart.indicators?.quote?.[0]?.close;
  if (!timestamps || !closes) return null;
  const result = timestamps.map((t, i) => ({ date: new Date(t * 1000), price: closes[i] }))
    .filter(d => d.price != null && d.date >= new Date('2020-01-01'));
  historyCache[symbol] = result;
  return result;
}

// ── Auto-refresh ──────────────────────────────────────────────────────────────
function scheduleRefresh() {
  clearInterval(refreshTimer);
  clearInterval(countdownTimer);
  const status = nyseStatus();
  const interval = status === 'open' ? 60 : 300;  // 60s open, 5min closed
  secondsLeft = interval;

  refreshTimer = setInterval(async () => {
    await fetchQuotes();
    renderRankings();
    renderMovers();
    secondsLeft = interval;
  }, interval * 1000);

  countdownTimer = setInterval(() => {
    secondsLeft = Math.max(0, secondsLeft - 1);
    const s = nyseStatus();
    $('countdown').textContent = s === 'open'
      ? `↻ in ${secondsLeft}s`
      : `(closed · ${Math.round(secondsLeft / 60)}m)`;
    updateMarketStatus();
  }, 1000);
}

// ── Top Movers ────────────────────────────────────────────────────────────────
function renderMovers() {
  // Pool all loaded quotes from ETFs + stocks
  const allLoaded = [...Object.entries(quotes), ...Object.entries(stockQuotes)];
  const seen = new Set();
  const tickers = [];
  for (const [sym, q] of allLoaded) {
    if (seen.has(sym)) continue;
    seen.add(sym);
    const pct = q.regularMarketChangePercent;
    const price = q.regularMarketPrice;
    if (pct == null || price == null) continue;
    const meta = ALL_META[sym];
    tickers.push({ sym, pct, price, name: meta?.name || q.shortName || sym });
  }
  if (!tickers.length) return;

  tickers.sort((a, b) => b.pct - a.pct);
  const gainers = tickers.slice(0, 5);
  const losers  = tickers.slice(-5).reverse();

  const chip = ({ sym, pct, price }, cls) =>
    `<div class="mover-chip ${cls}" onclick="handleMoverClick('${sym}')">
      <span class="mover-sym">${sym}</span>
      <span class="mover-pct">${pct >= 0 ? '+' : ''}${fmt(pct)}%</span>
      <span class="mover-price">$${fmt(price)}</span>
    </div>`;

  $('moverGainers').innerHTML = gainers.map(t => chip(t, 'gainer')).join('');
  $('moverLosers').innerHTML  = losers.map(t => chip(t, 'loser')).join('');
}

window.handleMoverClick = function(sym) {
  if (META[sym])        openETFDetail(sym);
  else if (ALL_META[sym]) openStockDetail(sym);
};

// ── Rankings ──────────────────────────────────────────────────────────────────
function sortValue(sym, col) {
  const q = quotes[sym] || {};
  switch (col) {
    case 'rank':      return 0;
    case 'symbol':    return sym;
    case 'price':     return q.regularMarketPrice || 0;
    case 'change':    return q.regularMarketChange || 0;
    case 'changePct': return q.regularMarketChangePercent || 0;
    case 'bid':       return q.bid || 0;
    case 'ask':       return q.ask || 0;
    case 'spread':    return (q.ask && q.bid) ? q.ask - q.bid : 0;
    case 'volume':    return q.regularMarketVolume || 0;
    case 'aum':       return q.marketCap || 0;
    default:          return 0;
  }
}

function renderRankings() {
  const body = $('rankingsBody');
  const q = searchQuery.toLowerCase();

  let rows = ETF_UNIVERSE.filter(e => {
    if (filterCat !== 'All' && e.cat !== filterCat) return false;
    if (q && !e.symbol.toLowerCase().includes(q) && !e.name.toLowerCase().includes(q)) return false;
    return true;
  });

  rows.sort((a, b) => {
    const va = sortValue(a.symbol, sortCol);
    const vb = sortValue(b.symbol, sortCol);
    if (typeof va === 'string') return sortDir * va.localeCompare(vb);
    return sortDir * (vb - va);
  });

  if (!Object.keys(quotes).length) {
    body.innerHTML = '<tr><td colspan="13" class="loading-cell">Loading…</td></tr>';
    return;
  }

  body.innerHTML = rows.map((e, i) => {
    const q = quotes[e.symbol] || {};
    const price = q.regularMarketPrice;
    const chg = q.regularMarketChange;
    const chgPct = q.regularMarketChangePercent;
    const bid = q.bid > 0 ? q.bid : null;
    const ask = q.ask > 0 ? q.ask : null;
    const spread = (bid && ask) ? ask - bid : null;
    return `<tr onclick="openETFDetail('${e.symbol}')">
      <td class="num">${i + 1}</td>
      <td class="ticker">${e.symbol}</td>
      <td class="name-cell" title="${e.name}">${e.name}</td>
      <td><span class="cat-badge">${e.cat}</span></td>
      <td class="num">${price != null ? '$' + fmt(price) : '—'}</td>
      <td class="num ${cls(chg)}">${chg != null ? (chg >= 0 ? '+' : '') + '$' + fmt(Math.abs(chg)) : '—'}</td>
      <td class="num ${cls(chgPct)}">${fmtPct(chgPct)}</td>
      <td class="num">${bid ? '$' + fmt(bid) : '—'}</td>
      <td class="num">${ask ? '$' + fmt(ask) : '—'}</td>
      <td class="num">${spread ? '$' + fmt(spread) : '—'}</td>
      <td class="num">${fmtVol(q.regularMarketVolume)}</td>
      <td class="num">${fmtAUM(q.marketCap)}</td>
      <td class="num">${fmt(e.er, 2)}%</td>
    </tr>`;
  }).join('') || '<tr><td colspan="13" class="loading-cell">No ETFs match your filter.</td></tr>';

  // Update sort indicators
  document.querySelectorAll('.etf-table th.sortable').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc');
    if (th.dataset.col === sortCol) {
      th.classList.add(sortDir === -1 ? 'sort-desc' : 'sort-asc');
    }
  });
}

// ── ETF Detail Panel (slide-in from rankings) ─────────────────────────────────
window.openETFDetail = function(symbol) {
  const e = META[symbol];
  const q = quotes[symbol] || {};
  if (!e) { openStockDetail(symbol); return; }  // fall through to stock panel if it's a stock

  const bid    = q.bid > 0 ? q.bid : null;
  const ask    = q.ask > 0 ? q.ask : null;
  const spread = (bid && ask) ? ask - bid : null;
  const price  = q.regularMarketPrice;
  const chg    = q.regularMarketChange;
  const chgPct = q.regularMarketChangePercent;

  $('edSymbol').textContent     = symbol;
  $('edName').textContent       = e.name;
  $('edCat').textContent        = e.cat;
  $('edPrice').textContent      = price != null ? '$' + fmt(price) : '—';
  $('edChange').className       = 'snap-change ' + cls(chg);
  $('edChange').textContent     = chg != null
    ? `${chg >= 0 ? '+' : ''}$${fmt(Math.abs(chg))} (${fmtPct(chgPct)})` : '—';
  $('edDescription').textContent = e.description || '';
  $('edBid').textContent        = bid  ? '$' + fmt(bid)  : '—';
  $('edAsk').textContent        = ask  ? '$' + fmt(ask)  : '—';
  $('edSpread').textContent     = spread ? '$' + fmt(spread) : '—';
  $('edVolume').textContent     = fmtVol(q.regularMarketVolume);
  $('edAUM').textContent        = fmtAUM(q.marketCap);
  $('edER').textContent         = e.er != null ? fmt(e.er, 2) + '%' : '—';
  $('edYield').textContent      = q.trailingAnnualDividendYield != null
    ? fmt(q.trailingAnnualDividendYield * 100) + '%' : '—';
  $('edDayRange').textContent   = (q.regularMarketDayLow && q.regularMarketDayHigh)
    ? `$${fmt(q.regularMarketDayLow)} – $${fmt(q.regularMarketDayHigh)}` : '—';
  $('ed52w').textContent        = (q.fiftyTwoWeekLow && q.fiftyTwoWeekHigh)
    ? `$${fmt(q.fiftyTwoWeekLow)} – $${fmt(q.fiftyTwoWeekHigh)}` : '—';
  $('ed50d').textContent        = q.fiftyDayAverage != null ? '$' + fmt(q.fiftyDayAverage) : '—';
  $('ed200d').textContent       = q.twoHundredDayAverage != null ? '$' + fmt(q.twoHundredDayAverage) : '—';
  const ytd = q.ytdReturn;
  $('edYTD').className          = cls(ytd);
  $('edYTD').textContent        = ytd != null ? fmtPct(ytd * 100) : '—';
  $('edHoldings').innerHTML     = (e.holdings || []).map(h =>
    `<span class="holding-tag">${h}</span>`).join('');

  $('etfDetailPanel').classList.remove('hidden');
};

// ── Snapshot ──────────────────────────────────────────────────────────────────
function openSnapshot(symbol) {
  setActiveTab('snapshot');
  $('snapshotSearch').value = symbol;
  renderSnapshot(symbol);
}

async function renderSnapshot(symbol) {
  // Fetch live quote if not already in either cache
  if (!quotes[symbol] && !stockQuotes[symbol]) {
    const res = await fetch(`/api/etf/quote?symbols=${symbol}`).then(r => r.json()).catch(() => null);
    const result = res?.quoteResponse?.result?.[0];
    if (result) { quotes[symbol] = result; stockQuotes[symbol] = result; }
  }
  const q = quotes[symbol] || stockQuotes[symbol] || {};
  const m = ALL_META[symbol];
  if (!m && !q.symbol) return;

  const bid  = q.bid > 0 ? q.bid : null;
  const ask  = q.ask > 0 ? q.ask : null;
  const spread = (bid && ask) ? ask - bid : null;
  const spreadPct = (bid && ask) ? ((ask - bid) / ((ask + bid) / 2)) * 100 : null;
  const price = q.regularMarketPrice;
  const chg   = q.regularMarketChange;
  const chgPct = q.regularMarketChangePercent;

  $('snapSymbol').textContent = symbol;
  $('snapName').textContent = m?.name || q.shortName || '';
  $('snapCat').textContent = m?.cat || '';
  $('snapPrice').textContent = price != null ? '$' + fmt(price) : '—';
  $('snapChange').className = 'snap-change ' + cls(chg);
  $('snapChange').textContent = chg != null
    ? `${chg >= 0 ? '+' : ''}$${fmt(Math.abs(chg))} (${fmtPct(chgPct)})`
    : '—';

  $('sdBid').textContent     = bid  ? '$' + fmt(bid)  : '—';
  $('sdAsk').textContent     = ask  ? '$' + fmt(ask)  : '—';
  $('sdSpread').textContent  = spread    ? '$' + fmt(spread)    : '—';
  $('sdSpreadPct').textContent = spreadPct ? fmt(spreadPct) + '%' : '—';
  $('sdDayRange').textContent = (q.regularMarketDayLow && q.regularMarketDayHigh)
    ? `$${fmt(q.regularMarketDayLow)} – $${fmt(q.regularMarketDayHigh)}` : '—';
  $('sd52w').textContent = (q.fiftyTwoWeekLow && q.fiftyTwoWeekHigh)
    ? `$${fmt(q.fiftyTwoWeekLow)} – $${fmt(q.fiftyTwoWeekHigh)}` : '—';
  $('sdOpen').textContent     = q.regularMarketOpen != null ? '$' + fmt(q.regularMarketOpen) : '—';
  $('sdPrevClose').textContent = q.regularMarketPreviousClose != null ? '$' + fmt(q.regularMarketPreviousClose) : '—';
  $('sdVolume').textContent   = fmtVol(q.regularMarketVolume);
  $('sdAUM').textContent      = fmtAUM(q.marketCap);
  $('sdER').textContent       = m?.er != null ? fmt(m.er, 2) + '%' : (m?.sector ? '—' : 'n/a');
  $('sdYield').textContent    = q.trailingAnnualDividendYield != null
    ? fmt(q.trailingAnnualDividendYield * 100) + '%' : '—';
  $('sd50d').textContent      = q.fiftyDayAverage != null ? '$' + fmt(q.fiftyDayAverage) : '—';
  $('sd200d').textContent     = q.twoHundredDayAverage != null ? '$' + fmt(q.twoHundredDayAverage) : '—';
  $('sdYTD').className        = cls(q.ytdReturn);
  $('sdYTD').textContent      = q.ytdReturn != null ? fmtPct(q.ytdReturn * 100) : '—';
  $('sd3M').className         = cls(q.trailingThreeMonthReturns);
  $('sd3M').textContent       = q.trailingThreeMonthReturns != null ? fmtPct(q.trailingThreeMonthReturns * 100) : '—';

  // Description + holdings (if in universe)
  const meta = META[symbol];
  if (meta?.description) {
    $('snapDescription').textContent = meta.description;
    $('snapDescription').style.display = 'block';
  } else {
    $('snapDescription').style.display = 'none';
  }
  if (meta?.holdings?.length) {
    $('snapHoldings').innerHTML = meta.holdings.map(h => `<span class="holding-tag">${h}</span>`).join('');
    $('snapHoldingsSection').style.display = 'block';
  } else {
    $('snapHoldingsSection').style.display = 'none';
  }

  $('snapshotCard').classList.remove('hidden');
  $('snapshotEmpty').style.display = 'none';

  // Mini chart
  const hist = await fetchHistory(symbol);
  if (hist && hist.length) {
    drawMiniChart(hist);
  }
}

function drawMiniChart(hist) {
  const ctx = $('snapshotChart').getContext('2d');
  if (snapshotChart) snapshotChart.destroy();
  const labels = hist.map(d => d.date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }));
  const data = hist.map(d => d.price);
  const last = data[data.length - 1];
  const first = data[0];
  const color = last >= first ? '#3fb950' : '#f85149';

  snapshotChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{ data, borderColor: color, borderWidth: 1.5, pointRadius: 0, fill: true,
        backgroundColor: hexToRgba(color, 0.1), tension: 0.3 }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false,
        callbacks: { label: ctx => '$' + fmt(ctx.parsed.y) } } },
      scales: {
        x: { ticks: { color: '#6e7681', maxTicksLimit: 6, font: { size: 10 } }, grid: { color: '#21262d' } },
        y: { ticks: { color: '#6e7681', callback: v => '$' + fmt(v), font: { size: 10 } }, grid: { color: '#21262d' } },
      },
    },
  });
}

// ── Compare ───────────────────────────────────────────────────────────────────
async function renderCompare(symA, symB) {
  if (!symA || !symB) return;
  // Fetch live data for any symbol not yet in either cache
  for (const sym of [symA, symB]) {
    if (!quotes[sym] && !stockQuotes[sym]) {
      const res = await fetch(`/api/etf/quote?symbols=${sym}`).then(r => r.json()).catch(() => null);
      const result = res?.quoteResponse?.result?.[0];
      if (result) { quotes[sym] = result; stockQuotes[sym] = result; }
    }
  }
  const qA = quotes[symA] || stockQuotes[symA] || {};
  const qB = quotes[symB] || stockQuotes[symB] || {};
  const mA = ALL_META[symA] || {};
  const mB = ALL_META[symB] || {};

  const bidA  = qA.bid > 0 ? qA.bid : null;
  const askA  = qA.ask > 0 ? qA.ask : null;
  const bidB  = qB.bid > 0 ? qB.bid : null;
  const askB  = qB.ask > 0 ? qB.ask : null;
  const spreadA = (bidA && askA) ? askA - bidA : null;
  const spreadB = (bidB && askB) ? askB - bidB : null;

  const rows = [
    { label: 'Price',          a: qA.regularMarketPrice,      b: qB.regularMarketPrice,      fmt: v => '$' + fmt(v),     higher: false },
    { label: 'Change %',       a: qA.regularMarketChangePercent, b: qB.regularMarketChangePercent, fmt: fmtPct, higher: true },
    { label: 'Bid',            a: bidA,                       b: bidB,                       fmt: v => '$' + fmt(v),     higher: null },
    { label: 'Ask',            a: askA,                       b: askB,                       fmt: v => '$' + fmt(v),     higher: null },
    { label: 'Spread ($)',     a: spreadA,                    b: spreadB,                    fmt: v => '$' + fmt(v),     higher: false },
    { label: 'Volume',         a: qA.regularMarketVolume,     b: qB.regularMarketVolume,     fmt: fmtVol,                higher: true },
    { label: 'AUM',            a: qA.marketCap,               b: qB.marketCap,               fmt: fmtAUM,                higher: true },
    { label: 'Expense Ratio',  a: mA.er,                      b: mB.er,                      fmt: v => fmt(v, 2) + '%',  higher: false },
    { label: 'Div Yield',      a: qA.trailingAnnualDividendYield != null ? qA.trailingAnnualDividendYield * 100 : null,
                                b: qB.trailingAnnualDividendYield != null ? qB.trailingAnnualDividendYield * 100 : null,
                                fmt: v => fmt(v) + '%', higher: true },
    { label: '50-Day Avg',     a: qA.fiftyDayAverage,         b: qB.fiftyDayAverage,         fmt: v => '$' + fmt(v),     higher: null },
    { label: '200-Day Avg',    a: qA.twoHundredDayAverage,    b: qB.twoHundredDayAverage,    fmt: v => '$' + fmt(v),     higher: null },
    { label: 'YTD Return',     a: qA.ytdReturn != null ? qA.ytdReturn * 100 : null,
                                b: qB.ytdReturn != null ? qB.ytdReturn * 100 : null,
                                fmt: fmtPct, higher: true },
  ];

  const wrap = $('compareResult');
  wrap.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th class="${!symA ? '' : ''}">${symA}</th>
          <th class="${!symB ? '' : ''}">${symB}</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => {
          const aVal = r.fmt(r.a);
          const bVal = r.fmt(r.b);
          let aClass = '', bClass = '';
          if (r.higher !== null && r.a != null && r.b != null && r.a !== r.b) {
            const aWins = r.higher ? r.a > r.b : r.a < r.b;
            aClass = aWins ? 'winner' : 'loser';
            bClass = aWins ? 'loser' : 'winner';
          }
          return `<tr>
            <td class="row-label">${r.label}</td>
            <td class="${aClass}">${aVal}</td>
            <td class="${bClass}">${bVal}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>`;

  wrap.classList.remove('hidden');
  $('compareEmpty').style.display = 'none';
}

// ── Main Chart ────────────────────────────────────────────────────────────────
async function renderMainChart() {
  if (!chartSymbols.length) return;

  const startMap = {
    ytd: new Date(new Date().getFullYear(), 0, 1),
    '1y': new Date(Date.now() - 365 * 864e5),
    '3y': new Date(Date.now() - 3 * 365 * 864e5),
    '5y': new Date(Date.now() - 5 * 365 * 864e5),
    max: new Date('2020-01-01'),
  };
  const startDate = startMap[chartRange];

  const datasets = [];
  for (let i = 0; i < chartSymbols.length; i++) {
    const sym = chartSymbols[i];
    const hist = await fetchHistory(sym);
    if (!hist) continue;
    const filtered = hist.filter(d => d.date >= startDate);
    if (!filtered.length) continue;

    let data = filtered.map(d => d.price);
    if (chartNormalize && data[0]) {
      const base = data[0];
      data = data.map(v => (v / base) * 100);
    }

    datasets.push({
      label: sym,
      data: filtered.map((d, j) => ({ x: d.date, y: data[j] })),
      borderColor: CHART_COLORS[i % CHART_COLORS.length],
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.3,
      fill: false,
    });
  }

  const ctx = $('mainChart').getContext('2d');
  if (mainChart) mainChart.destroy();

  mainChart = new Chart(ctx, {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              const v = ctx.parsed.y;
              return ` ${ctx.dataset.label}: ${chartNormalize ? fmt(v) : '$' + fmt(v)}`;
            },
          },
        },
      },
      scales: {
        x: {
          type: 'time',
          time: { unit: 'month', displayFormats: { month: 'MMM yy' } },
          ticks: { color: '#6e7681', maxTicksLimit: 10 },
          grid: { color: '#21262d' },
        },
        y: {
          ticks: {
            color: '#6e7681',
            callback: v => chartNormalize ? fmt(v) : '$' + fmt(v),
          },
          grid: { color: '#21262d' },
        },
      },
    },
  });

  // Custom legend
  const legend = $('chartLegend');
  legend.innerHTML = datasets.map((ds, i) => {
    const lastVal = ds.data[ds.data.length - 1]?.y;
    const firstVal = ds.data[0]?.y;
    const chgPct = (firstVal && lastVal) ? ((lastVal - firstVal) / firstVal * 100) : null;
    const fullName = ALL_META[ds.label]?.name || '';
    return `<div class="legend-item">
      <span class="legend-dot" style="background:${ds.borderColor}"></span>
      <strong>${ds.label}</strong>
      ${fullName ? `<span style="color:var(--text3);font-size:11px">${fullName}</span>` : ''}
      ${lastVal != null ? `<span>${chartNormalize ? fmt(lastVal) : '$' + fmt(lastVal)}</span>` : ''}
      ${chgPct != null ? `<span class="${cls(chgPct)}">(${fmtPct(chgPct)})</span>` : ''}
    </div>`;
  }).join('');
}

function updateChartTags() {
  const tags = $('chartTags');
  tags.innerHTML = chartSymbols.map((sym, i) => `
    <span class="chart-tag" style="border-color:${CHART_COLORS[i % CHART_COLORS.length]}20;color:${CHART_COLORS[i % CHART_COLORS.length]}">
      ${sym}
      <button onclick="removeChartSymbol('${sym}')" title="Remove">×</button>
    </span>`).join('');
}

window.removeChartSymbol = function(sym) {
  chartSymbols = chartSymbols.filter(s => s !== sym);
  updateChartTags();
  renderMainChart();
};

// ── Autocomplete ──────────────────────────────────────────────────────────────
function bindAutocomplete(inputId, listId, onSelect, universe = ALL_UNIVERSE) {
  const input = $(inputId);
  const list  = $(listId);

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { list.classList.remove('open'); return; }
    const matches = universe.filter(e =>
      e.symbol.toLowerCase().startsWith(q) || e.name.toLowerCase().includes(q)
    ).slice(0, 10);
    if (!matches.length) { list.classList.remove('open'); return; }
    list.innerHTML = matches.map(e => {
      const badge = META[e.symbol] ? 'ETF' : 'Stock';
      const badgeColor = badge === 'ETF' ? '#388bfd' : '#3fb950';
      return `<div class="autocomplete-item" data-sym="${e.symbol}">
        <span class="ac-sym">${e.symbol}</span>
        <span class="ac-name">${e.name}</span>
        <span style="font-size:10px;padding:1px 5px;border-radius:3px;background:${badgeColor}20;color:${badgeColor};flex-shrink:0">${badge}</span>
      </div>`;
    }).join('');
    list.classList.add('open');
  });

  list.addEventListener('click', e => {
    const item = e.target.closest('.autocomplete-item');
    if (!item) return;
    const sym = item.dataset.sym;
    input.value = sym;
    list.classList.remove('open');
    onSelect(sym);
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !list.contains(e.target)) list.classList.remove('open');
  });
}

// ── Tabs ──────────────────────────────────────────────────────────────────────
function setActiveTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  document.querySelectorAll('.tab-content').forEach(s => s.classList.toggle('active', s.id === 'tab-' + name));
}

// ── Hex → rgba ────────────────────────────────────────────────────────────────
function hexToRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

// ── Init ──────────────────────────────────────────────────────────────────────
async function init() {
  updateMarketStatus();

  // Tab clicks
  document.querySelectorAll('.tab').forEach(t =>
    t.addEventListener('click', () => setActiveTab(t.dataset.tab))
  );

  // Category filter chips
  $('categoryFilters').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    filterCat = chip.dataset.cat;
    renderRankings();
  });

  // Rankings search
  $('searchBox').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderRankings();
  });

  // Sort on header click
  document.querySelectorAll('.etf-table th.sortable').forEach(th =>
    th.addEventListener('click', () => {
      if (sortCol === th.dataset.col) sortDir *= -1;
      else { sortCol = th.dataset.col; sortDir = -1; }
      renderRankings();
    })
  );

  // Manual refresh
  $('refreshBtn').addEventListener('click', async () => {
    await fetchQuotes();
    renderRankings();
    renderMovers();
    secondsLeft = nyseStatus() === 'open' ? 60 : 300;
  });

  // Snapshot autocomplete
  bindAutocomplete('snapshotSearch', 'autocompleteList', sym => renderSnapshot(sym));
  $('snapshotSearch').addEventListener('keydown', e => {
    if (e.key === 'Enter') renderSnapshot($('snapshotSearch').value.trim().toUpperCase());
  });

  // Compare autocompletes
  let compareA = '', compareB = '';
  bindAutocomplete('compareInputA', 'autocompleteA', sym => { compareA = sym; renderCompare(compareA, compareB); });
  bindAutocomplete('compareInputB', 'autocompleteB', sym => { compareB = sym; renderCompare(compareA, compareB); });

  // Chart controls
  bindAutocomplete('chartInput', 'autocompleteChart', async sym => {
    if (chartSymbols.includes(sym) || chartSymbols.length >= 6) return;
    chartSymbols.push(sym);
    $('chartInput').value = '';
    updateChartTags();
    renderMainChart();
  });

  document.querySelectorAll('.range-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.range-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      chartRange = btn.dataset.range;
      renderMainChart();
    })
  );

  $('normalizeToggle').addEventListener('change', e => {
    chartNormalize = e.target.checked;
    renderMainChart();
  });

  // Load data
  await fetchQuotes();
  renderRankings();
  renderMovers();
  scheduleRefresh();

  // ETFs tab — renders from already-loaded quotes (no extra fetch needed)
  document.querySelector('[data-tab="etfs"]').addEventListener('click', () => {
    renderETFsTab();
  });

  // ETFs tab category filter
  $('etfCategoryFilters').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $('etfCategoryFilters').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    etfTabFilterCat = chip.dataset.ecat;
    renderETFsTab();
  });

  // ETFs tab search
  $('etfTabSearchBox').addEventListener('input', e => {
    etfTabSearch = e.target.value;
    renderETFsTab();
  });

  // ETFs tab sort
  document.querySelectorAll('#etfsTabTable th.sortable').forEach(th =>
    th.addEventListener('click', () => {
      if (etfTabSortCol === th.dataset.ecol) etfTabSortDir *= -1;
      else { etfTabSortCol = th.dataset.ecol; etfTabSortDir = -1; }
      renderETFsTab();
    })
  );

  // Stocks tab — lazy-load on first visit
  document.querySelector('[data-tab="stocks"]').addEventListener('click', async () => {
    if (!stocksLoaded) {
      stocksLoaded = true;
      $('stocksBody').innerHTML = '<tr><td colspan="12" class="loading-cell">Fetching stock data…</td></tr>';
      await fetchStockQuotes();
      renderStocksTable();
      renderMovers(); // update movers now stocks are included
    }
  });

  // Stocks sector filter chips
  $('stockSectorFilters').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $('stockSectorFilters').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    stockFilterSector = chip.dataset.sector;
    renderStocksTable();
  });

  // Stocks search
  $('stockSearchBox').addEventListener('input', e => {
    stockSearchQuery = e.target.value;
    renderStocksTable();
  });

  // Stocks table sort
  document.querySelectorAll('#stocksTable th.sortable').forEach(th =>
    th.addEventListener('click', () => {
      if (stockSortCol === th.dataset.scol) stockSortDir *= -1;
      else { stockSortCol = th.dataset.scol; stockSortDir = -1; }
      renderStocksTable();
    })
  );

  // ETF detail panel close
  $('etfPanelClose').addEventListener('click', () => {
    $('etfDetailPanel').classList.add('hidden');
  });

  // Stock detail panel close
  $('stockPanelClose').addEventListener('click', () => {
    $('stockDetailPanel').classList.add('hidden');
  });

  // Default chart: SPY vs QQQ
  chartSymbols = ['SPY', 'QQQ'];
  updateChartTags();
  // Chart will render when user switches to chart tab
  document.querySelector('[data-tab="chart"]').addEventListener('click', () => {
    if (!mainChart && chartSymbols.length) renderMainChart();
  }, { once: true });
}

// ── ETFs Tab State & Logic (dedicated Top 100 ETFs tab) ───────────────────────
let etfTabSortCol = 'aum';
let etfTabSortDir = -1;
let etfTabFilterCat = 'All';
let etfTabSearch = '';

function etfTabSortValue(sym, col) {
  const q = quotes[sym] || {};
  switch (col) {
    case 'symbol':    return sym;
    case 'price':     return q.regularMarketPrice || 0;
    case 'changePct': return q.regularMarketChangePercent || 0;
    case 'bid':       return q.bid > 0 ? q.bid : 0;
    case 'ask':       return q.ask > 0 ? q.ask : 0;
    case 'spread':    return (q.bid > 0 && q.ask > 0) ? q.ask - q.bid : 0;
    case 'volume':    return q.regularMarketVolume || 0;
    case 'aum':       return q.marketCap || 0;
    default:          return 0;
  }
}

function renderETFsTab() {
  const body = $('etfsTabBody');
  const q = etfTabSearch.toLowerCase();

  let rows = ETF_UNIVERSE.filter(e => {
    if (etfTabFilterCat !== 'All' && e.cat !== etfTabFilterCat) return false;
    if (q && !e.symbol.toLowerCase().includes(q) && !e.name.toLowerCase().includes(q)) return false;
    return true;
  });

  rows.sort((a, b) => {
    if (etfTabSortCol === 'rank') return 0;
    const va = etfTabSortValue(a.symbol, etfTabSortCol);
    const vb = etfTabSortValue(b.symbol, etfTabSortCol);
    if (typeof va === 'string') return etfTabSortDir * va.localeCompare(vb);
    return etfTabSortDir * (vb - va);
  });

  if (!Object.keys(quotes).length) {
    body.innerHTML = '<tr><td colspan="12" class="loading-cell">Loading…</td></tr>';
    return;
  }

  body.innerHTML = rows.map((e, i) => {
    const q = quotes[e.symbol] || {};
    const price  = q.regularMarketPrice;
    const chgPct = q.regularMarketChangePercent;
    const bid    = q.bid > 0 ? q.bid : null;
    const ask    = q.ask > 0 ? q.ask : null;
    const spread = (bid && ask) ? ask - bid : null;
    return `<tr onclick="openETFDetail('${e.symbol}')">
      <td class="num">${i + 1}</td>
      <td class="ticker">${e.symbol}</td>
      <td class="name-cell" title="${e.name}">${e.name}</td>
      <td><span class="cat-badge">${e.cat}</span></td>
      <td class="num">${price != null ? '$' + fmt(price) : '—'}</td>
      <td class="num ${cls(chgPct)}">${fmtPct(chgPct)}</td>
      <td class="num">${bid ? '$' + fmt(bid) : '—'}</td>
      <td class="num">${ask ? '$' + fmt(ask) : '—'}</td>
      <td class="num">${spread ? '$' + fmt(spread) : '—'}</td>
      <td class="num">${fmtVol(q.regularMarketVolume)}</td>
      <td class="num">${fmtAUM(q.marketCap)}</td>
      <td class="num">${fmt(e.er, 2)}%</td>
    </tr>`;
  }).join('') || '<tr><td colspan="12" class="loading-cell">No ETFs match your filter.</td></tr>';

  document.querySelectorAll('#etfsTabTable th.sortable').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc');
    if (th.dataset.ecol === etfTabSortCol) {
      th.classList.add(etfTabSortDir === -1 ? 'sort-desc' : 'sort-asc');
    }
  });
}

// ── Stocks Tab State & Logic ──────────────────────────────────────────────────
let stockQuotes = {};
let stockSortCol = 'aum';
let stockSortDir = -1;
let stockFilterSector = 'All';
let stockSearchQuery = '';
let stocksLoaded = false;

async function fetchStockQuotes() {
  const batches = [];
  for (let i = 0; i < STOCK_SYMBOLS.length; i += 30) batches.push(STOCK_SYMBOLS.slice(i, i + 30));
  const results = await Promise.all(batches.map(batch =>
    fetch(`/api/etf/quote?symbols=${batch.join(',')}`)
      .then(r => r.json())
      .catch(() => null)
  ));
  results.forEach(res => {
    if (!res) return;
    (res?.quoteResponse?.result || []).forEach(q => { stockQuotes[q.symbol] = q; });
  });
}

function stockSortValue(sym, col) {
  const q = stockQuotes[sym] || {};
  switch (col) {
    case 'symbol':    return sym;
    case 'price':     return q.regularMarketPrice || 0;
    case 'changePct': return q.regularMarketChangePercent || 0;
    case 'bid':       return q.bid || 0;
    case 'ask':       return q.ask || 0;
    case 'volume':    return q.regularMarketVolume || 0;
    case 'aum':       return q.marketCap || 0;
    case 'pe':        return q.trailingPE || 0;
    default:          return 0;
  }
}

function renderStocksTable() {
  const body = $('stocksBody');
  const q = stockSearchQuery.toLowerCase();

  let rows = STOCK_UNIVERSE.filter(s => {
    if (stockFilterSector !== 'All' && s.sector !== stockFilterSector) return false;
    if (q && !s.symbol.toLowerCase().includes(q) && !s.name.toLowerCase().includes(q)) return false;
    return true;
  });

  rows.sort((a, b) => {
    if (stockSortCol === 'rank') return 0;
    const va = stockSortValue(a.symbol, stockSortCol);
    const vb = stockSortValue(b.symbol, stockSortCol);
    if (typeof va === 'string') return stockSortDir * va.localeCompare(vb);
    return stockSortDir * (vb - va);
  });

  if (!Object.keys(stockQuotes).length) {
    body.innerHTML = '<tr><td colspan="12" class="loading-cell">Loading…</td></tr>';
    return;
  }

  body.innerHTML = rows.map((s, i) => {
    const q = stockQuotes[s.symbol] || {};
    const price  = q.regularMarketPrice;
    const chgPct = q.regularMarketChangePercent;
    const bid    = q.bid > 0 ? q.bid : null;
    const ask    = q.ask > 0 ? q.ask : null;
    const pe     = q.trailingPE;
    const divY   = q.trailingAnnualDividendYield;
    return `<tr onclick="openStockDetail('${s.symbol}')">
      <td class="num">${i + 1}</td>
      <td class="ticker">${s.symbol}</td>
      <td class="name-cell" title="${s.name}">${s.name}</td>
      <td><span class="cat-badge">${s.sector}</span></td>
      <td class="num">${price != null ? '$' + fmt(price) : '—'}</td>
      <td class="num ${cls(chgPct)}">${fmtPct(chgPct)}</td>
      <td class="num">${bid ? '$' + fmt(bid) : '—'}</td>
      <td class="num">${ask ? '$' + fmt(ask) : '—'}</td>
      <td class="num">${fmtVol(q.regularMarketVolume)}</td>
      <td class="num">${fmtAUM(q.marketCap)}</td>
      <td class="num">${pe ? fmt(pe, 1) + 'x' : '—'}</td>
      <td class="num">${divY != null ? fmt(divY * 100) + '%' : '—'}</td>
    </tr>`;
  }).join('') || '<tr><td colspan="12" class="loading-cell">No stocks match your filter.</td></tr>';

  // Update sort indicators on stocks table
  document.querySelectorAll('#stocksTable th.sortable').forEach(th => {
    th.classList.remove('sort-asc', 'sort-desc');
    if (th.dataset.scol === stockSortCol) {
      th.classList.add(stockSortDir === -1 ? 'sort-desc' : 'sort-asc');
    }
  });
}

window.openStockDetail = function(symbol) {
  const s = STOCK_UNIVERSE.find(x => x.symbol === symbol);
  if (!s) return;
  const q = stockQuotes[symbol] || {};

  const bid    = q.bid > 0 ? q.bid : null;
  const ask    = q.ask > 0 ? q.ask : null;
  const spread = (bid && ask) ? ask - bid : null;
  const price  = q.regularMarketPrice;
  const chg    = q.regularMarketChange;
  const chgPct = q.regularMarketChangePercent;

  $('sdSymbol').textContent    = symbol;
  $('sdCompany').textContent   = s.name;
  $('sdSector').textContent    = s.sector;
  $('sdPrice').textContent     = price != null ? '$' + fmt(price) : '—';
  $('sdPriceChange').className = 'snap-change ' + cls(chg);
  $('sdPriceChange').textContent = chg != null
    ? `${chg >= 0 ? '+' : ''}$${fmt(Math.abs(chg))} (${fmtPct(chgPct)})` : '—';
  $('sdDescription').textContent = s.description;

  $('sdStockBid').textContent    = bid  ? '$' + fmt(bid)  : '—';
  $('sdStockAsk').textContent    = ask  ? '$' + fmt(ask)  : '—';
  $('sdStockSpread').textContent = spread ? '$' + fmt(spread) : '—';
  $('sdStockVol').textContent    = fmtVol(q.regularMarketVolume);
  $('sdMktCap').textContent      = fmtAUM(q.marketCap);
  $('sdPE').textContent          = q.trailingPE ? fmt(q.trailingPE, 1) + 'x' : '—';
  $('sdDivYield').textContent    = q.trailingAnnualDividendYield != null
    ? fmt(q.trailingAnnualDividendYield * 100) + '%' : '—';
  $('sdEPS').textContent         = q.epsTrailingTwelveMonths != null
    ? '$' + fmt(q.epsTrailingTwelveMonths) : '—';
  $('sdStockDayRange').textContent = (q.regularMarketDayLow && q.regularMarketDayHigh)
    ? `$${fmt(q.regularMarketDayLow)} – $${fmt(q.regularMarketDayHigh)}` : '—';
  $('sdStock52w').textContent    = (q.fiftyTwoWeekLow && q.fiftyTwoWeekHigh)
    ? `$${fmt(q.fiftyTwoWeekLow)} – $${fmt(q.fiftyTwoWeekHigh)}` : '—';
  $('sdStock50d').textContent    = q.fiftyDayAverage != null ? '$' + fmt(q.fiftyDayAverage) : '—';
  $('sdStock200d').textContent   = q.twoHundredDayAverage != null ? '$' + fmt(q.twoHundredDayAverage) : '—';

  $('sdHoldings').innerHTML = s.holdings.map(h =>
    `<span class="holding-tag">${h}</span>`
  ).join('');

  const panel = $('stockDetailPanel');
  panel.classList.remove('hidden');
};

document.addEventListener('DOMContentLoaded', init);
