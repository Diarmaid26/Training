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
  { symbol:'SPY',  name:'SPDR S&P 500 ETF',                      cat:'Broad US Equity',     er:0.0945 },
  { symbol:'IVV',  name:'iShares Core S&P 500 ETF',              cat:'Broad US Equity',     er:0.03 },
  { symbol:'VOO',  name:'Vanguard S&P 500 ETF',                  cat:'Broad US Equity',     er:0.03 },
  { symbol:'VTI',  name:'Vanguard Total Stock Market ETF',        cat:'Broad US Equity',     er:0.03 },
  { symbol:'IWM',  name:'iShares Russell 2000 ETF',               cat:'Broad US Equity',     er:0.19 },
  { symbol:'MDY',  name:'SPDR S&P MidCap 400 ETF',               cat:'Broad US Equity',     er:0.24 },
  { symbol:'IJH',  name:'iShares Core S&P Mid-Cap ETF',           cat:'Broad US Equity',     er:0.05 },
  { symbol:'IJR',  name:'iShares Core S&P Small-Cap ETF',         cat:'Broad US Equity',     er:0.06 },
  { symbol:'VB',   name:'Vanguard Small-Cap ETF',                 cat:'Broad US Equity',     er:0.05 },
  { symbol:'SCHB', name:'Schwab US Broad Market ETF',             cat:'Broad US Equity',     er:0.03 },
  { symbol:'ITOT', name:'iShares Core S&P Total US Stock Market', cat:'Broad US Equity',     er:0.03 },
  { symbol:'VV',   name:'Vanguard Large-Cap ETF',                 cat:'Broad US Equity',     er:0.04 },
  { symbol:'IWB',  name:'iShares Russell 1000 ETF',               cat:'Broad US Equity',     er:0.15 },
  { symbol:'SPTM', name:'SPDR Portfolio S&P 1500 Composite ETF',  cat:'Broad US Equity',     er:0.03 },
  { symbol:'SPLG', name:'SPDR Portfolio S&P 500 ETF',             cat:'Broad US Equity',     er:0.02 },
  { symbol:'MGC',  name:'Vanguard Mega Cap ETF',                  cat:'Broad US Equity',     er:0.07 },
  { symbol:'IWF',  name:'iShares Russell 1000 Growth ETF',        cat:'Broad US Equity',     er:0.19 },
  { symbol:'IWD',  name:'iShares Russell 1000 Value ETF',         cat:'Broad US Equity',     er:0.19 },
  { symbol:'SCHX', name:'Schwab US Large-Cap ETF',                cat:'Broad US Equity',     er:0.03 },

  // US Sector
  { symbol:'XLK',  name:'Technology Select Sector SPDR',          cat:'US Sector',           er:0.13 },
  { symbol:'XLF',  name:'Financial Select Sector SPDR',           cat:'US Sector',           er:0.13 },
  { symbol:'XLE',  name:'Energy Select Sector SPDR',              cat:'US Sector',           er:0.13 },
  { symbol:'XLV',  name:'Health Care Select Sector SPDR',         cat:'US Sector',           er:0.13 },
  { symbol:'XLY',  name:'Consumer Discret Select Sector SPDR',    cat:'US Sector',           er:0.13 },
  { symbol:'XLC',  name:'Communication Services Select SPDR',     cat:'US Sector',           er:0.13 },
  { symbol:'XLI',  name:'Industrial Select Sector SPDR',          cat:'US Sector',           er:0.13 },
  { symbol:'XLB',  name:'Materials Select Sector SPDR',           cat:'US Sector',           er:0.13 },
  { symbol:'XLRE', name:'Real Estate Select Sector SPDR',         cat:'US Sector',           er:0.13 },
  { symbol:'XLU',  name:'Utilities Select Sector SPDR',           cat:'US Sector',           er:0.13 },
  { symbol:'VGT',  name:'Vanguard Information Technology ETF',    cat:'US Sector',           er:0.10 },
  { symbol:'VHT',  name:'Vanguard Health Care ETF',               cat:'US Sector',           er:0.10 },
  { symbol:'VFH',  name:'Vanguard Financials ETF',                cat:'US Sector',           er:0.10 },
  { symbol:'VDE',  name:'Vanguard Energy ETF',                    cat:'US Sector',           er:0.10 },
  { symbol:'ARKK', name:'ARK Innovation ETF',                     cat:'US Sector',           er:0.75 },
  { symbol:'ARKW', name:'ARK Next Generation Internet ETF',       cat:'US Sector',           er:0.88 },
  { symbol:'ARKG', name:'ARK Genomic Revolution ETF',             cat:'US Sector',           er:0.75 },
  { symbol:'SMH',  name:'VanEck Semiconductor ETF',               cat:'US Sector',           er:0.35 },

  // International
  { symbol:'VEA',  name:'Vanguard FTSE Developed Markets ETF',    cat:'International',       er:0.05 },
  { symbol:'EFA',  name:'iShares MSCI EAFE ETF',                  cat:'International',       er:0.32 },
  { symbol:'IEFA', name:'iShares Core MSCI EAFE ETF',             cat:'International',       er:0.07 },
  { symbol:'VWO',  name:'Vanguard FTSE Emerging Markets ETF',     cat:'International',       er:0.08 },
  { symbol:'EEM',  name:'iShares MSCI Emerging Markets ETF',      cat:'International',       er:0.70 },
  { symbol:'EWJ',  name:'iShares MSCI Japan ETF',                 cat:'International',       er:0.50 },
  { symbol:'FXI',  name:'iShares China Large-Cap ETF',            cat:'International',       er:0.74 },
  { symbol:'MCHI', name:'iShares MSCI China ETF',                 cat:'International',       er:0.59 },
  { symbol:'EWG',  name:'iShares MSCI Germany ETF',               cat:'International',       er:0.51 },
  { symbol:'EWU',  name:'iShares MSCI United Kingdom ETF',        cat:'International',       er:0.51 },
  { symbol:'ACWI', name:'iShares MSCI ACWI ETF',                  cat:'International',       er:0.33 },
  { symbol:'VXUS', name:'Vanguard Total International Stock ETF', cat:'International',       er:0.08 },
  { symbol:'IXUS', name:'iShares Core MSCI Total Intl Stock ETF', cat:'International',       er:0.09 },
  { symbol:'SCHF', name:'Schwab International Equity ETF',        cat:'International',       er:0.06 },
  { symbol:'EWC',  name:'iShares MSCI Canada ETF',                cat:'International',       er:0.51 },

  // Factor / Smart Beta
  { symbol:'QQQ',  name:'Invesco QQQ Trust',                      cat:'Factor / Smart Beta', er:0.20 },
  { symbol:'QQQM', name:'Invesco NASDAQ 100 ETF',                 cat:'Factor / Smart Beta', er:0.15 },
  { symbol:'SCHD', name:'Schwab US Dividend Equity ETF',          cat:'Factor / Smart Beta', er:0.06 },
  { symbol:'VIG',  name:'Vanguard Dividend Appreciation ETF',     cat:'Factor / Smart Beta', er:0.06 },
  { symbol:'RSP',  name:'Invesco S&P 500 Equal Weight ETF',       cat:'Factor / Smart Beta', er:0.20 },
  { symbol:'DGRO', name:'iShares Core Dividend Growth ETF',       cat:'Factor / Smart Beta', er:0.08 },
  { symbol:'VTV',  name:'Vanguard Value ETF',                     cat:'Factor / Smart Beta', er:0.04 },
  { symbol:'MTUM', name:'iShares MSCI USA Momentum Factor ETF',   cat:'Factor / Smart Beta', er:0.15 },
  { symbol:'QUAL', name:'iShares MSCI USA Quality Factor ETF',    cat:'Factor / Smart Beta', er:0.15 },
  { symbol:'VLUE', name:'iShares MSCI USA Value Factor ETF',      cat:'Factor / Smart Beta', er:0.15 },
  { symbol:'USMV', name:'iShares MSCI USA Min Vol Factor ETF',    cat:'Factor / Smart Beta', er:0.15 },
  { symbol:'NOBL', name:"ProShares S&P 500 Dividend Aristocrats", cat:'Factor / Smart Beta', er:0.35 },
  { symbol:'DVY',  name:'iShares Select Dividend ETF',            cat:'Factor / Smart Beta', er:0.38 },
  { symbol:'VYM',  name:'Vanguard High Dividend Yield ETF',       cat:'Factor / Smart Beta', er:0.06 },
  { symbol:'SDY',  name:'SPDR S&P Dividend ETF',                  cat:'Factor / Smart Beta', er:0.35 },

  // Fixed Income
  { symbol:'BND',  name:'Vanguard Total Bond Market ETF',         cat:'Fixed Income',        er:0.03 },
  { symbol:'AGG',  name:'iShares Core US Aggregate Bond ETF',     cat:'Fixed Income',        er:0.03 },
  { symbol:'TLT',  name:'iShares 20+ Year Treasury Bond ETF',     cat:'Fixed Income',        er:0.15 },
  { symbol:'LQD',  name:'iShares iBoxx $ Inv Grade Corp Bond ETF',cat:'Fixed Income',        er:0.14 },
  { symbol:'HYG',  name:'iShares iBoxx $ High Yield Corp Bond',   cat:'Fixed Income',        er:0.49 },
  { symbol:'JNK',  name:'SPDR Bloomberg High Yield Bond ETF',     cat:'Fixed Income',        er:0.40 },
  { symbol:'TIP',  name:'iShares TIPS Bond ETF',                  cat:'Fixed Income',        er:0.19 },
  { symbol:'MUB',  name:'iShares National Muni Bond ETF',         cat:'Fixed Income',        er:0.07 },
  { symbol:'SHY',  name:'iShares 1-3 Year Treasury Bond ETF',     cat:'Fixed Income',        er:0.15 },
  { symbol:'IEF',  name:'iShares 7-10 Year Treasury Bond ETF',    cat:'Fixed Income',        er:0.15 },
  { symbol:'BNDX', name:'Vanguard Total International Bond ETF',  cat:'Fixed Income',        er:0.07 },
  { symbol:'EMB',  name:'iShares JP Morgan USD EM Bond ETF',      cat:'Fixed Income',        er:0.39 },
  { symbol:'VCIT', name:'Vanguard Intermediate-Term Corp Bond',   cat:'Fixed Income',        er:0.04 },
  { symbol:'VCSH', name:'Vanguard Short-Term Corp Bond ETF',      cat:'Fixed Income',        er:0.04 },
  { symbol:'BSV',  name:'Vanguard Short-Term Bond ETF',           cat:'Fixed Income',        er:0.04 },
  { symbol:'FLOT', name:'iShares Floating Rate Bond ETF',         cat:'Fixed Income',        er:0.15 },
  { symbol:'JPST', name:'JPMorgan Ultra-Short Income ETF',        cat:'Fixed Income',        er:0.18 },
  { symbol:'NEAR', name:'iShares Short Maturity Bond ETF',        cat:'Fixed Income',        er:0.25 },
  { symbol:'IGIB', name:'iShares Intermediate-Term Corp Bond',    cat:'Fixed Income',        er:0.06 },

  // Commodities & Alts
  { symbol:'GLD',  name:'SPDR Gold Shares',                       cat:'Commodities & Alts',  er:0.40 },
  { symbol:'IAU',  name:'iShares Gold Trust',                     cat:'Commodities & Alts',  er:0.25 },
  { symbol:'GLDM', name:'SPDR Gold MiniShares',                   cat:'Commodities & Alts',  er:0.10 },
  { symbol:'SLV',  name:'iShares Silver Trust',                   cat:'Commodities & Alts',  er:0.50 },
  { symbol:'USO',  name:'United States Oil Fund',                 cat:'Commodities & Alts',  er:0.81 },
  { symbol:'UNG',  name:'United States Natural Gas Fund',         cat:'Commodities & Alts',  er:1.11 },
  { symbol:'DBC',  name:'Invesco DB Commodity Index Tracking Fund',cat:'Commodities & Alts', er:0.85 },
  { symbol:'PDBC', name:'Invesco Optimum Yield Diversified Commodity',cat:'Commodities & Alts',er:0.59},
  { symbol:'CPER', name:'United States Copper Index Fund',        cat:'Commodities & Alts',  er:0.97 },

  // Leveraged / Inverse
  { symbol:'TQQQ', name:'ProShares UltraPro QQQ',                 cat:'Leveraged / Inverse', er:0.88 },
  { symbol:'SQQQ', name:'ProShares UltraPro Short QQQ',           cat:'Leveraged / Inverse', er:0.95 },
  { symbol:'SPXU', name:'ProShares UltraPro Short S&P 500',       cat:'Leveraged / Inverse', er:0.91 },
  { symbol:'SPXS', name:'Direxion Daily S&P 500 Bear 3X',         cat:'Leveraged / Inverse', er:1.01 },
  { symbol:'SH',   name:'ProShares Short S&P 500',                cat:'Leveraged / Inverse', er:0.88 },
  { symbol:'PSQ',  name:'ProShares Short QQQ',                    cat:'Leveraged / Inverse', er:0.95 },
  { symbol:'UVXY', name:'ProShares Ultra VIX Short-Term Futures',  cat:'Leveraged / Inverse', er:0.95 },
  { symbol:'SDOW', name:'ProShares UltraPro Short Dow30',         cat:'Leveraged / Inverse', er:0.95 },
  { symbol:'UDOW', name:'ProShares UltraPro Dow30',               cat:'Leveraged / Inverse', er:0.95 },
];

const SYMBOLS = ETF_UNIVERSE.map(e => e.symbol);
const META = Object.fromEntries(ETF_UNIVERSE.map(e => [e.symbol, e]));

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
    return `<tr onclick="openSnapshot('${e.symbol}')">
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

// ── Snapshot ──────────────────────────────────────────────────────────────────
function openSnapshot(symbol) {
  setActiveTab('snapshot');
  $('snapshotSearch').value = symbol;
  renderSnapshot(symbol);
}

async function renderSnapshot(symbol) {
  const q = quotes[symbol] || {};
  const m = META[symbol];
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
  $('sdER').textContent       = m?.er != null ? fmt(m.er, 2) + '%' : '—';
  $('sdYield').textContent    = q.trailingAnnualDividendYield != null
    ? fmt(q.trailingAnnualDividendYield * 100) + '%' : '—';
  $('sd50d').textContent      = q.fiftyDayAverage != null ? '$' + fmt(q.fiftyDayAverage) : '—';
  $('sd200d').textContent     = q.twoHundredDayAverage != null ? '$' + fmt(q.twoHundredDayAverage) : '—';
  $('sdYTD').className        = cls(q.ytdReturn);
  $('sdYTD').textContent      = q.ytdReturn != null ? fmtPct(q.ytdReturn * 100) : '—';
  $('sd3M').className         = cls(q.trailingThreeMonthReturns);
  $('sd3M').textContent       = q.trailingThreeMonthReturns != null ? fmtPct(q.trailingThreeMonthReturns * 100) : '—';

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
  const qA = quotes[symA] || {};
  const qB = quotes[symB] || {};
  const mA = META[symA] || {};
  const mB = META[symB] || {};

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
    return `<div class="legend-item">
      <span class="legend-dot" style="background:${ds.borderColor}"></span>
      <strong>${ds.label}</strong>
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
function bindAutocomplete(inputId, listId, onSelect) {
  const input = $(inputId);
  const list  = $(listId);

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { list.classList.remove('open'); return; }
    const matches = ETF_UNIVERSE.filter(e =>
      e.symbol.toLowerCase().startsWith(q) || e.name.toLowerCase().includes(q)
    ).slice(0, 8);
    if (!matches.length) { list.classList.remove('open'); return; }
    list.innerHTML = matches.map(e =>
      `<div class="autocomplete-item" data-sym="${e.symbol}">
        <span class="ac-sym">${e.symbol}</span>
        <span class="ac-name">${e.name}</span>
      </div>`
    ).join('');
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
  bindAutocomplete('chartInput', 'autocompleteChart', sym => {
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
  scheduleRefresh();

  // Stocks tab — lazy-load on first visit
  document.querySelector('[data-tab="stocks"]').addEventListener('click', async () => {
    if (!stocksLoaded) {
      stocksLoaded = true;
      $('stocksBody').innerHTML = '<tr><td colspan="12" class="loading-cell">Fetching stock data…</td></tr>';
      await fetchStockQuotes();
      renderStocksTable();
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
