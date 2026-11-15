// Symbols are stored without Yahoo's ".AX" suffix; it is added at the fetch boundary (see yh / bare).

// ── Top 100 ASX Stock Universe ────────────────────────────────────────────────
const STOCK_UNIVERSE = [
  { symbol:'CBA', name:'Commonwealth Bank of Australia', sector:'Financials', description:"Australia's largest bank and the biggest company on the ASX. Dominant in home lending and household deposits, with the country's most-used banking app; also owns Bankwest and ASB in New Zealand.", holdings:['Retail Banking','Business Banking','Institutional Banking & Markets','Bankwest','ASB (New Zealand)','CommSec'] },
  { symbol:'BHP', name:'BHP Group', sector:'Materials', description:"The world's largest diversified miner. Pilbara iron ore generates most of the earnings, alongside a growing copper portfolio, steelmaking coal, and the Jansen potash project in Canada.", holdings:['WA Iron Ore (Pilbara)','Escondida copper (Chile)','Copper South Australia (Olympic Dam)','BMA steelmaking coal','Jansen potash (Canada)'] },
  { symbol:'CSL', name:'CSL Ltd', sector:'Health Care', description:"Global biotech and one of the world's largest plasma-therapy companies. CSL Behring makes immunoglobulins and haemophilia treatments, Seqirus is a top-three influenza vaccine maker, and CSL Vifor covers iron deficiency and kidney disease.", holdings:['CSL Behring (plasma therapies)','CSL Plasma collection network','CSL Seqirus (flu vaccines)','CSL Vifor (iron & nephrology)','Hemgenix gene therapy'] },
  { symbol:'NAB', name:'National Australia Bank', sector:'Financials', description:"One of the big four banks and Australia's largest business lender. Operates retail and private banking, corporate and institutional banking, the digital bank ubank, and Bank of New Zealand.", holdings:['Business & Private Banking','Personal Banking','Corporate & Institutional Banking','Bank of New Zealand','ubank'] },
  { symbol:'WBC', name:'Westpac Banking Corp', sector:'Financials', description:"Australia's oldest bank and a big-four lender with a large mortgage book. Runs a multi-brand model across Westpac, St.George, Bank of Melbourne and BankSA, plus Westpac New Zealand.", holdings:['Consumer Banking','Business & Wealth','Westpac Institutional Bank','St.George / BankSA / Bank of Melbourne','Westpac New Zealand'] },
  { symbol:'ANZ', name:'ANZ Group Holdings', sector:'Financials', description:"Big-four bank with the strongest institutional and trans-Tasman franchise of the majors. Acquired Suncorp Bank in 2024 and is the largest bank in New Zealand.", holdings:['Australia Retail','Australia Commercial','Institutional Banking','ANZ New Zealand','Suncorp Bank','ANZ Plus'] },
  { symbol:'WES', name:'Wesfarmers Ltd', sector:'Consumer Discretionary', description:"Perth-based conglomerate whose retail brands are household names. Bunnings and Kmart drive most of the earnings, complemented by Officeworks, a health division, chemicals and fertilisers, and a lithium joint venture.", holdings:['Bunnings','Kmart Group (Kmart / Target)','Officeworks','Wesfarmers Health (Priceline)','WesCEF (chemicals, energy, fertilisers)','Covalent Lithium'] },
  { symbol:'MQG', name:'Macquarie Group', sector:'Financials', description:"Global financial services group and the world's largest infrastructure asset manager. Earnings are split between annuity-style businesses (asset management, retail banking) and markets-facing commodities trading and advisory.", holdings:['Macquarie Asset Management','Banking & Financial Services','Commodities & Global Markets','Macquarie Capital'] },
  { symbol:'GMG', name:'Goodman Group', sector:'Real Estate', description:"Global industrial property developer, owner and fund manager. Its urban logistics estates are increasingly being redeveloped into data centres, which now make up a large share of its development pipeline.", holdings:['Logistics & warehouse estates','Data centre developments','Goodman funds management partnerships','Development pipeline (Asia-Pacific, Europe, Americas)'] },
  { symbol:'FMG', name:'Fortescue Ltd', sector:'Materials', description:"The world's fourth-largest iron ore producer, shipping from the Pilbara to Asian steel mills. Also runs the Iron Bridge magnetite operation and is decarbonising its mining fleet.", holdings:['Chichester Hub','Solomon Hub','Western Hub (Eliwana)','Iron Bridge magnetite','Port Hedland export operations','Fortescue Zero (decarbonisation tech)'] },
  { symbol:'TLS', name:'Telstra Group', sector:'Communication Services', description:"Australia's largest telecommunications company with the widest mobile network. Mobiles generate the bulk of earnings; it also owns extensive fibre, a majority stake in the Amplitel towers business, and international subsea cables.", holdings:['Mobiles','Fixed (Consumer & Small Business)','Fixed (Enterprise)','InfraCo Fixed / Intercity Fibre','Amplitel (towers)','Telstra International'] },
  { symbol:'RIO', name:'Rio Tinto Ltd', sector:'Materials', description:"Global mining major. Pilbara iron ore is the profit engine, with aluminium, copper and a newly built lithium business providing diversification, and the Simandou iron ore project in Guinea adding growth.", holdings:['Pilbara iron ore','Aluminium (bauxite, alumina, smelters)','Copper (Oyu Tolgoi, Kennecott, Escondida stake)','Lithium (Arcadium, Rincon)','Simandou (Guinea)'] },
  { symbol:'WOW', name:'Woolworths Group', sector:'Consumer Staples', description:"Australia's largest supermarket chain, with more than a thousand stores. Also operates Woolworths New Zealand, Big W, a B2B food distribution arm, and the Everyday Rewards loyalty program.", holdings:['Woolworths Supermarkets','Woolworths New Zealand','Big W','PFD Food Services','Everyday Rewards','Cartology (retail media)'] },
  { symbol:'TCL', name:'Transurban Group', sector:'Industrials', description:"One of the world's largest toll-road operators. Owns or part-owns most urban toll roads in Sydney, Melbourne and Brisbane, plus express lanes in the Washington DC area and Montreal.", holdings:['CityLink (Melbourne)','Sydney network (M2, M5, M7, WestConnex stake)','Brisbane network','West Gate Tunnel','North America express lanes','Linkt tolling'] },
  { symbol:'WDS', name:'Woodside Energy Group', sector:'Energy', description:"Australia's largest oil and gas producer and a major global LNG supplier. Operates the North West Shelf and Pluto LNG plants, is building the Scarborough gas project, and holds international assets from the BHP Petroleum merger.", holdings:['North West Shelf LNG','Pluto LNG','Scarborough / Pluto Train 2','Sangomar oil (Senegal)','Gulf of America assets','Louisiana LNG'] },
  { symbol:'ALL', name:'Aristocrat Leisure', sector:'Consumer Discretionary', description:"One of the world's biggest slot-machine makers, with North America its main market. Also a major publisher of social casino mobile games and a growing supplier of online real-money gaming content.", holdings:['Aristocrat Gaming (land-based machines)','Product Madness (social casino games)','Aristocrat Interactive (iGaming)','Lightning Link / Dragon Link / Buffalo franchises'] },
  { symbol:'WTC', name:'WiseTech Global', sector:'Technology', description:"Logistics software company whose CargoWise platform is used by most of the world's largest freight forwarders. Expanded into broader supply-chain software with the acquisition of e2open.", holdings:['CargoWise platform','Customs & compliance software','Landside logistics','e2open (supply chain software)','Container Transport Optimisation'] },
  { symbol:'QBE', name:'QBE Insurance Group', sector:'Financials', description:"Australia's largest global insurer, writing commercial, specialty and reinsurance lines. Most premium is earned offshore through its North American and International (London / Lloyd's) divisions.", holdings:['International (UK, Europe, Lloyd\'s)','North America','Australia Pacific','QBE Re (reinsurance)','Investment portfolio'] },
  { symbol:'REA', name:'REA Group', sector:'Communication Services', description:"Operator of realestate.com.au, Australia's dominant property listings portal. Earns most of its revenue from agents and vendors paying for premium listings; majority-owned by News Corp.", holdings:['realestate.com.au','realcommercial.com.au','Mortgage Choice','PropTrack (data)','REA India (Housing.com)'] },
  { symbol:'COL', name:'Coles Group', sector:'Consumer Staples', description:"Australia's second-largest supermarket chain, demerged from Wesfarmers in 2018. Runs more than 850 supermarkets plus a liquor arm, and is investing in automated distribution and online fulfilment centres.", holdings:['Coles Supermarkets','Coles Liquor (Liquorland)','Coles Online','Coles 360 (retail media)','Flybuys (50%)'] },
  { symbol:'BXB', name:'Brambles Ltd', sector:'Industrials', description:"Runs CHEP, the world's largest pallet and container pooling business. Manufacturers and retailers rent its reusable blue pallets across roughly 60 countries rather than owning their own.", holdings:['CHEP Americas','CHEP EMEA','CHEP Asia-Pacific','Reusable plastic containers'] },
  { symbol:'XRO', name:'Xero Ltd', sector:'Technology', description:"New Zealand-founded cloud accounting platform for small businesses and their accountants, with millions of subscribers. Strongest in Australia, New Zealand and the UK, and expanding in the US via the Melio payments acquisition.", holdings:['Xero accounting subscriptions','Payroll','Payments','Melio (US bill payments)','Xero App Store ecosystem'] },
  { symbol:'STO', name:'Santos Ltd', sector:'Energy', description:"Australia's second-largest oil and gas producer. Supplies domestic gas and LNG from Queensland, the Northern Territory and Papua New Guinea, and is developing the Pikka oil project in Alaska.", holdings:['PNG LNG stake','GLNG (Queensland)','Barossa / Darwin LNG','Cooper Basin','Pikka (Alaska)','Moomba carbon capture & storage'] },
  { symbol:'SUN', name:'Suncorp Group', sector:'Financials', description:"A pure-play general insurer since selling its bank to ANZ in 2024. One of Australia's two largest home and motor insurers, operating a portfolio of well-known consumer brands.", holdings:['AAMI','Suncorp Insurance','GIO','Apia','Shannons','Vero (commercial & New Zealand)'] },
  { symbol:'RMD', name:'ResMed Inc (CDI)', sector:'Health Care', description:"Global leader in devices for sleep apnoea and respiratory care, founded in Sydney and now US-headquartered. Sells CPAP machines and masks, backed by a large connected-care software platform.", holdings:['AirSense CPAP devices','Masks & accessories','AirView / myAir digital health','Brightree & MatrixCare (out-of-hospital software)'] },
  { symbol:'NST', name:'Northern Star Resources', sector:'Materials', description:"Australia's largest ASX-domiciled gold miner. Operates three production centres in Western Australia and Alaska, and added the large Hemi development project through its acquisition of De Grey Mining.", holdings:['KCGM Super Pit (Kalgoorlie)','Yandal (Jundee, Thunderbox)','Pogo (Alaska)','Hemi project (Pilbara)'] },
  { symbol:'COH', name:'Cochlear Ltd', sector:'Health Care', description:"World leader in implantable hearing devices, with well over half the global cochlear implant market. Earns recurring revenue from sound processor upgrades and services for its installed base.", holdings:['Nucleus cochlear implants','Sound processor upgrades','Baha / Osia acoustic implants','Services'] },
  { symbol:'ORG', name:'Origin Energy', sector:'Utilities', description:"One of Australia's largest electricity and gas retailers and a major generator. Also owns a 27.5% stake in the Australia Pacific LNG export project and a holding in UK retailer Octopus Energy.", holdings:['Energy Markets (retail electricity & gas)','Eraring power station & battery','APLNG stake (27.5%)','Octopus Energy stake','Kraken customer platform'] },
  { symbol:'IAG', name:'Insurance Australia Group', sector:'Financials', description:"The largest general insurer in Australia and New Zealand by premium. Sells home, motor and commercial cover directly and through brokers and motoring-club alliances.", holdings:['NRMA Insurance','CGU','WFI','AMI / State / NZI (New Zealand)','RACV and RACQ alliances'] },
  { symbol:'CPU', name:'Computershare Ltd', sector:'Industrials', description:"Global share registry and corporate services provider. Earns fees for maintaining shareholder records and employee share plans, plus significant interest income on client cash balances.", holdings:['Issuer Services (share registry)','Employee Share Plans','Corporate Trust','Margin income on client balances'] },
  { symbol:'SCG', name:'Scentre Group', sector:'Real Estate', description:"Owner and operator of the Westfield shopping centres in Australia and New Zealand. Its portfolio of around 40 large malls sits in densely populated metropolitan catchments.", holdings:['Westfield Sydney','Westfield Bondi Junction','Westfield Chermside','Westfield Doncaster','Westfield Newmarket (NZ)'] },
  { symbol:'PME', name:'Pro Medicus Ltd', sector:'Health Care', description:"Melbourne-based medical imaging software company. Its Visage 7 platform lets radiologists view very large scans almost instantly and is used by many leading US academic hospitals on long-term contracts.", holdings:['Visage 7 Viewer','Visage 7 Open Archive','Visage 7 Workflow','Visage RIS','AI research partnerships'] },
  { symbol:'JHX', name:'James Hardie Industries', sector:'Materials', description:"The world's largest maker of fibre cement siding and backer board, with North America its main market. Expanded into decking and outdoor products by acquiring AZEK.", holdings:['North America fibre cement','AZEK / TimberTech decking','Asia Pacific fibre cement','Europe (fibre gypsum)'] },
  { symbol:'S32', name:'South32 Ltd', sector:'Materials', description:"Diversified miner spun out of BHP in 2015. Has been reshaping its portfolio towards metals used in electrification, including aluminium, copper and zinc.", holdings:['Worsley Alumina','Hillside & Mozal aluminium','Sierra Gorda copper (45%)','Cannington (silver, lead, zinc)','Hermosa project (Arizona)','Manganese (GEMCO, South Africa)'] },
  { symbol:'SGH', name:'SGH Ltd', sector:'Industrials', description:"Industrial services group formerly known as Seven Group Holdings. Owns the Caterpillar dealership for WA and NSW, building materials producer Boral, and equipment-hire business Coates.", holdings:['WesTrac (Caterpillar dealer)','Boral','Coates (equipment hire)','Beach Energy stake','Seven West Media stake'] },
  { symbol:'EVN', name:'Evolution Mining', sector:'Materials', description:"Australian gold producer with meaningful copper by-product output. Operates mines in NSW, Queensland and Western Australia, and one in Canada.", holdings:['Cowal (NSW)','Ernest Henry (Queensland)','Northparkes (80%)','Mungari (WA)','Red Lake (Canada)','Mt Rawdon'] },
  { symbol:'QAN', name:'Qantas Airways', sector:'Industrials', description:"Australia's national airline and largest domestic carrier. Runs a dual-brand strategy with premium Qantas and low-cost Jetstar, plus a highly profitable frequent flyer business.", holdings:['Qantas Domestic','Qantas International','Jetstar Group','Qantas Loyalty','Qantas Freight'] },
  { symbol:'SHL', name:'Sonic Healthcare', sector:'Health Care', description:"One of the world's largest pathology companies, running laboratories across Australia, Germany, the US, the UK and Switzerland. Also operates radiology and medical centre businesses in Australia.", holdings:['Pathology Australia','Germany laboratories','USA laboratories','UK & Switzerland laboratories','Sonic Imaging (radiology)','Sonic Clinical Services'] },
  { symbol:'FPH', name:'Fisher & Paykel Healthcare', sector:'Health Care', description:"New Zealand maker of respiratory humidification systems used in hospitals and at home. Best known for its Optiflow nasal high-flow therapy and for sleep apnoea masks.", holdings:['Hospital humidification','Optiflow nasal high flow','Anaesthesia products','Homecare (OSA masks)'] },
  { symbol:'CAR', name:'CAR Group', sector:'Communication Services', description:"Owner of carsales.com.au, Australia's leading automotive classifieds site. Now earns more than half its revenue offshore through marketplaces in the US, Brazil and South Korea.", holdings:['carsales (Australia)','Trader Interactive (USA)','Webmotors (Brazil)','Encar (South Korea)','chileautos'] },
  { symbol:'ASX', name:'ASX Ltd', sector:'Financials', description:"Operator of Australia's primary securities exchange. Earns fees from listings, equities and futures trading, clearing and settlement, and market data.", holdings:['Listings','Cash equities trading','Futures & OTC clearing (ASX 24)','Securities & payments (CHESS)','Technology & data'] },
  { symbol:'SOL', name:'Washington H. Soul Pattinson', sector:'Financials', description:"Diversified investment house and one of the oldest companies on the ASX, known for increasing its dividend every year for over two decades. Merged with long-time cross-shareholder Brickworks in 2025.", holdings:['TPG Telecom stake','New Hope stake','Brickworks building products','Private equity portfolio','Credit portfolio','Property'] },
  { symbol:'TLC', name:'The Lottery Corporation', sector:'Consumer Discretionary', description:"Operator of Australia's official lotteries under long-dated exclusive licences in every state except Western Australia. Demerged from Tabcorp in 2022.", holdings:['Powerball','Oz Lotto','Saturday / TattsLotto','Set for Life','Keno','The Lott digital platform'] },
  { symbol:'SGP', name:'Stockland', sector:'Real Estate', description:"Australia's largest residential land developer. Also owns logistics estates, town-centre retail and workplace assets, and a growing land-lease communities business.", holdings:['Masterplanned communities','Land lease communities (Halcyon)','Logistics','Town centres','Workplace'] },
  { symbol:'MPL', name:'Medibank Private', sector:'Financials', description:"Australia's largest private health insurer, covering around four million people. Sells policies under the Medibank and ahm brands and runs a growing health-services arm.", holdings:['Medibank health insurance','ahm','Amplar Health','Overseas student & visitor cover','Myhealth medical centres stake'] },
  { symbol:'APA', name:'APA Group', sector:'Utilities', description:"Australia's largest gas pipeline owner, transporting about half the gas used domestically. Also owns electricity interconnectors, gas-fired and renewable generation, and remote-grid power assets in the Pilbara.", holdings:['East Coast gas grid','Wallumbilla Gladstone Pipeline','Goldfields Gas Pipeline','Pilbara Energy','Basslink & Murraylink interconnectors'] },
  { symbol:'AMC', name:'Amcor plc (CDI)', sector:'Materials', description:"One of the world's largest consumer packaging companies, supplying food, beverage, healthcare and personal-care brands. Combined with Berry Global in 2025 to add scale in containers and closures.", holdings:['Flexible packaging','Rigid plastics & containers','Closures & dispensing','Healthcare packaging'] },
  { symbol:'REH', name:'Reece Ltd', sector:'Industrials', description:"Australia's largest plumbing and bathroom supplies distributor, serving trade customers through hundreds of branches. Also operates in the US Sun Belt.", holdings:['Reece Plumbing','Reece Bathroom Life','Irrigation & Pools','HVAC-R','Civil','Reece USA'] },
  { symbol:'JBH', name:'JB Hi-Fi Ltd', sector:'Consumer Discretionary', description:"Australia's leading consumer electronics and home appliances retailer. Known for a low-cost operating model and high sales per square metre across the JB Hi-Fi and The Good Guys chains.", holdings:['JB Hi-Fi Australia','JB Hi-Fi New Zealand','The Good Guys','e&s (kitchen & bathroom)'] },
  { symbol:'TNE', name:'Technology One', sector:'Technology', description:"Australian enterprise software company selling ERP software as a service. Customers are mainly local government, universities, government agencies and health providers in Australia, New Zealand and the UK.", holdings:['OneCouncil (local government)','OneEducation (universities)','Government & health ERP','SaaS+ implementation','UK business'] },
  { symbol:'NXT', name:'NEXTDC Ltd', sector:'Technology', description:"Australia's largest listed data-centre operator. Builds and runs carrier-neutral facilities in the major capital cities and is expanding into Asia, with demand driven by cloud and AI workloads.", holdings:['Sydney data centres (S1–S7)','Melbourne data centres (M1–M4)','Brisbane, Perth, Adelaide, Darwin facilities','Kuala Lumpur & Tokyo developments','AXON interconnection'] },
  { symbol:'SEK', name:'SEEK Ltd', sector:'Communication Services', description:"Operator of the dominant online employment marketplace in Australia and New Zealand, with leading positions across South-East Asia. Earns revenue from employers paying to advertise roles.", holdings:['SEEK ANZ','SEEK Asia (Jobstreet, Jobsdb)','SEEK Growth Fund stake','Zhaopin stake (China)'] },
  { symbol:'BSL', name:'BlueScope Steel', sector:'Materials', description:"Steelmaker with operations in Australia, North America and Asia. Owns the Port Kembla steelworks and the Colorbond brand locally, and the low-cost North Star mini-mill in Ohio.", holdings:['Australian Steel Products (Port Kembla, Colorbond)','North Star BlueScope (Ohio)','Buildings & Coated Products North America','NS BlueScope (Asia)','New Zealand Steel'] },
  { symbol:'MGR', name:'Mirvac Group', sector:'Real Estate', description:"Diversified property group that develops apartments and housing estates and owns office, industrial, retail and build-to-rent assets, concentrated in Sydney and Melbourne.", holdings:['Residential development','Office portfolio','Industrial (Aspect, Switchyard)','Build-to-rent (LIV)','Retail centres','Funds management'] },
  { symbol:'GPT', name:'The GPT Group', sector:'Real Estate', description:"One of Australia's oldest listed property trusts. Owns and manages shopping centres, office towers and logistics estates, and runs a large wholesale funds platform.", holdings:['Melbourne Central','Highpoint Shopping Centre','Office towers (Sydney, Melbourne)','Logistics portfolio','Funds management'] },
  { symbol:'EDV', name:'Endeavour Group', sector:'Consumer Staples', description:"Australia's largest liquor retailer and hotel operator, demerged from Woolworths in 2021. Owns the Dan Murphy's and BWS chains and more than 350 pubs.", holdings:['Dan Murphy\'s','BWS','ALH Hotels','Pinnacle Drinks','Langton\'s'] },
  { symbol:'AGL', name:'AGL Energy', sector:'Utilities', description:"One of Australia's largest energy retailers and its biggest electricity generator. Is progressively closing its coal plants and replacing them with grid-scale batteries and renewables.", holdings:['Retail electricity & gas','Bayswater power station','Loy Yang A power station','Grid-scale batteries (Torrens Island, Liddell)','Wind, hydro & solar portfolio'] },
  { symbol:'ALD', name:'Ampol Ltd', sector:'Energy', description:"Australia's largest transport fuels supplier. Operates the Lytton refinery in Brisbane, a national service-station network, and Z Energy in New Zealand.", holdings:['Lytton refinery','Ampol retail network','Z Energy (New Zealand)','Trading & shipping','AmpCharge (EV charging)'] },
  { symbol:'TWE', name:'Treasury Wine Estates', sector:'Consumer Staples', description:"One of the world's largest listed wine companies. Its portfolio is led by Penfolds, with a US luxury business built through acquisitions in Napa and Paso Robles.", holdings:['Penfolds','Treasury Americas (DAOU, Frank Family, Stags\' Leap)','Wynns','Pepperjack','19 Crimes','Squealing Pig'] },
  { symbol:'RHC', name:'Ramsay Health Care', sector:'Health Care', description:"Australia's largest private hospital operator, with more than 70 facilities locally. Also holds a majority stake in European operator Ramsay Santé and owns UK hospitals.", holdings:['Ramsay Australia hospitals','Ramsay Santé (France & Nordics)','Ramsay UK','Elysium Healthcare (UK mental health)'] },
  { symbol:'DXS', name:'Dexus', sector:'Real Estate', description:"One of Australia's largest office landlords and real-asset fund managers. Its platform spans CBD office towers, industrial estates, healthcare property and infrastructure.", holdings:['CBD office portfolio','Industrial & logistics','Funds management platform','Healthcare property','Infrastructure (airports)'] },
  { symbol:'VCX', name:'Vicinity Centres', sector:'Real Estate', description:"Shopping-centre landlord with a portfolio weighted to premium destinations. Co-owns Chadstone, Australia's largest mall, and runs the DFO outlet chain.", holdings:['Chadstone (50%)','DFO outlet centres','Queen Victoria Building (stake)','Chatswood Chase','Emporium Melbourne (stake)'] },
  { symbol:'MIN', name:'Mineral Resources', sector:'Materials', description:"Western Australian mining services contractor that also owns iron ore and lithium operations. Its Onslow Iron project is the main earnings driver alongside its crushing and haulage business.", holdings:['Mining Services (CSI)','Onslow Iron','Pilbara Hub iron ore','Wodgina lithium (50%)','Mt Marion lithium (50%)'] },
  { symbol:'PLS', name:'PLS (Pilbara Minerals)', sector:'Materials', description:"Operator of Pilgangoora, one of the world's largest hard-rock lithium mines. Sells spodumene concentrate to battery-chemical makers and holds downstream processing interests.", holdings:['Pilgangoora operation (WA)','Colina project (Brazil)','POSCO lithium hydroxide JV (South Korea)','Mid-stream demonstration plant'] },
  { symbol:'LYC', name:'Lynas Rare Earths', sector:'Materials', description:"The largest producer of separated rare earths outside China. Mines at Mt Weld in Western Australia and processes in Kalgoorlie and Malaysia, supplying magnet makers.", holdings:['Mt Weld mine','Kalgoorlie processing facility','Lynas Malaysia (Kuantan)','NdPr oxide','Heavy rare earths (Dy, Tb)'] },
  { symbol:'ORI', name:'Orica Ltd', sector:'Materials', description:"The world's largest supplier of commercial explosives and blasting systems to mining and infrastructure. Also sells digital blast-optimisation tools and specialty mining chemicals.", holdings:['Blasting Solutions','Digital Solutions','Specialty Mining Chemicals (cyanide)','WebGen wireless initiation'] },
  { symbol:'AIA', name:'Auckland International Airport', sector:'Industrials', description:"Owner and operator of New Zealand's main international gateway. Earns regulated aeronautical charges plus retail, car parking and property income from its large landholding.", holdings:['Aeronautical charges','Retail & duty free','Car parking','Investment property','Terminal integration programme'] },
  { symbol:'ALX', name:'Atlas Arteria', sector:'Industrials', description:"International toll-road owner. Its largest asset is a stake in the APRR motorway network in eastern France, alongside the Chicago Skyway and Dulles Greenway in the US.", holdings:['APRR (France)','ADELAC (France)','Chicago Skyway','Dulles Greenway','Warnow Tunnel (Germany)'] },
  { symbol:'NEM', name:'Newmont Corp (CDI)', sector:'Materials', description:"The world's largest gold miner, listed on the ASX via CDIs after acquiring Newcrest in 2023. Its Australian and PNG assets include Boddington, Tanami, Cadia and Lihir.", holdings:['Boddington (WA)','Tanami (NT)','Cadia (NSW)','Lihir (PNG)','Nevada Gold Mines stake','Americas & Africa operations'] },
  { symbol:'LNW', name:'Light & Wonder Inc', sector:'Consumer Discretionary', description:"Cross-platform games company supplying slot machines and table systems to casinos, plus social casino and online real-money games. Moved to a sole primary listing on the ASX.", holdings:['Gaming (slot machines & systems)','SciPlay (social casino)','iGaming content','Grover Gaming (charitable gaming)'] },
  { symbol:'360', name:'Life360 Inc (CDI)', sector:'Technology', description:"San Francisco-based family safety app with tens of millions of monthly active users. Earns subscription revenue from location sharing and driving safety features, plus hardware and advertising.", holdings:['Life360 subscriptions','Tile trackers','Advertising','Pet & item tracking'] },
  { symbol:'HUB', name:'HUB24 Ltd', sector:'Financials', description:"Fast-growing investment and superannuation platform used by financial advisers. Has consistently led the industry for net inflows, and also sells SMSF administration software.", holdings:['HUB24 platform','Class (SMSF software)','NowInfinity','myprosperity'] },
  { symbol:'NWL', name:'Netwealth Group', sector:'Financials', description:"Founder-led wealth management platform competing with HUB24 for adviser flows. Earns administration fees and a margin on client cash held on the platform.", holdings:['Netwealth wrap platform','Managed accounts','Super & pension accounts','Cash transaction account margin'] },
  { symbol:'SIG', name:'Sigma Healthcare', sector:'Consumer Staples', description:"Pharmacy wholesaler that merged with Chemist Warehouse in 2025, creating one of Australia's largest retail and healthcare groups. Supplies and franchises pharmacies nationwide.", holdings:['Chemist Warehouse','My Chemist','Amcal','Discount Drug Stores','Wholesale distribution','International (NZ, Ireland, China)'] },
  { symbol:'TLX', name:'Telix Pharmaceuticals', sector:'Health Care', description:"Melbourne radiopharmaceutical company. Its prostate cancer imaging agent is the main revenue source, funding a pipeline of imaging and therapeutic candidates for kidney, brain and prostate cancers.", holdings:['Illuccix (prostate imaging)','Gozellix','Zircaix (kidney imaging)','Therapeutics pipeline','RLS radiopharmacy network (USA)'] },
  { symbol:'CHC', name:'Charter Hall Group', sector:'Real Estate', description:"One of Australia's largest property fund managers. Earns management and performance fees on office, industrial, retail and social-infrastructure funds, and co-invests alongside its investors.", holdings:['Funds management','Property investment portfolio','Development investments','Listed funds (CLW, CQR, CQE)'] },
  { symbol:'WHC', name:'Whitehaven Coal', sector:'Energy', description:"Coal producer that shifted towards steelmaking coal by buying the Blackwater and Daunia mines in Queensland. Also mines high-quality thermal coal in the Gunnedah Basin of NSW.", holdings:['Blackwater (Queensland)','Daunia (Queensland)','Maules Creek (NSW)','Narrabri underground','Vickery project'] },
  { symbol:'YAL', name:'Yancoal Australia', sector:'Energy', description:"One of Australia's largest coal exporters, majority-owned by China's Yankuang Energy. Produces mainly thermal coal from large open-cut mines in NSW and Queensland.", holdings:['Moolarben','Mount Thorley Warkworth','Hunter Valley Operations (51%)','Yarrabee','Middlemount (stake)'] },
  { symbol:'HVN', name:'Harvey Norman Holdings', sector:'Consumer Discretionary', description:"Furniture, bedding, appliance and electronics retailer. Australian stores are run by franchisees, while the company owns a large freehold property portfolio and operates stores directly overseas.", holdings:['Franchising operations (Australia)','Property portfolio','Overseas company-operated stores','Domayne','Joyce Mayne'] },
  { symbol:'A2M', name:'The a2 Milk Company', sector:'Consumer Staples', description:"New Zealand dairy company selling milk and infant formula free of the A1 beta-casein protein. China is by far its largest market for infant formula.", holdings:['China label infant formula','English label infant formula','Liquid milk (Australia & USA)','Mataura Valley Milk'] },
  { symbol:'ALQ', name:'ALS Ltd', sector:'Industrials', description:"Global laboratory testing company. Its geochemistry labs lead the market for mineral exploration samples, and its life-sciences labs test environmental, food and pharmaceutical samples.", holdings:['Commodities (geochemistry, metallurgy)','Life Sciences (environmental)','Food & pharmaceutical testing','Inspection'] },
  { symbol:'WOR', name:'Worley Ltd', sector:'Industrials', description:"Global engineering and project-delivery firm serving energy, chemicals and resources clients. A growing share of its work relates to decarbonisation and energy-transition projects.", holdings:['Energy','Chemicals','Resources','Sustainability-related projects','Worley Consulting'] },
  { symbol:'CWY', name:'Cleanaway Waste Management', sector:'Industrials', description:"Australia's largest waste management company. Collects and processes municipal, commercial and hazardous waste through a national network of landfills, transfer stations and recycling plants.", holdings:['Solid Waste Services','Liquid Waste & Health Services','Industrial & Waste Services','Landfills','Recycling & resource recovery'] },
  { symbol:'AZJ', name:'Aurizon Holdings', sector:'Industrials', description:"Australia's largest rail freight operator. Owns the regulated Central Queensland Coal Network track and hauls coal, bulk commodities and containerised freight.", holdings:['Network (Central Queensland Coal Network)','Coal haulage','Bulk','Containerised freight'] },
  { symbol:'BEN', name:'Bendigo and Adelaide Bank', sector:'Financials', description:"Regional bank known for its community-bank branch model and high customer satisfaction. Also owns the digital bank Up and a specialist agribusiness lender.", holdings:['Bendigo Bank','Community Bank network','Up (digital bank)','Rural Bank / agribusiness','Adelaide Bank'] },
  { symbol:'BOQ', name:'Bank of Queensland', sector:'Financials', description:"Regional bank operating several retail brands and a specialist lender to medical professionals. Is midway through a multi-year simplification and digital transformation program.", holdings:['BOQ Retail','ME Bank','Virgin Money Australia','BOQ Specialist','BOQ Finance'] },
  { symbol:'CGF', name:'Challenger Ltd', sector:'Financials', description:"Australia's largest provider of annuities, which pay retirees a guaranteed income. Also owns the Fidante multi-boutique funds management business.", holdings:['Challenger Life (annuities)','Fidante (funds management)','Challenger Investment Management'] },
  { symbol:'SDF', name:'Steadfast Group', sector:'Financials', description:"The largest general insurance broker network in Australasia. Earns income from equity stakes in brokers and underwriting agencies and from its network services.", holdings:['Steadfast broker network','Equity brokers','Underwriting agencies','Steadfast Client Trading Platform','US operations (ISU)'] },
  { symbol:'TPG', name:'TPG Telecom', sector:'Communication Services', description:"Australia's third-largest telco, formed from the merger of TPG and Vodafone Hutchison Australia. Sells mobile and fixed broadband under a range of brands.", holdings:['Vodafone','TPG','iiNet','felix','Lebara','Internode'] },
  { symbol:'NWS', name:'News Corp (CDI)', sector:'Communication Services', description:"Global media company controlled by the Murdoch family. Its most valuable assets are Dow Jones, a majority stake in REA Group, and book publisher HarperCollins.", holdings:['Dow Jones (The Wall Street Journal)','REA Group stake (61%)','HarperCollins','News Corp Australia','News UK','Realtor.com'] },
  { symbol:'MTS', name:'Metcash Ltd', sector:'Consumer Staples', description:"Wholesaler supplying independent retailers across food, liquor and hardware. Its banners compete with the major chains by pooling buying power.", holdings:['Food (IGA, Foodland)','Superior Foods','Liquor (Cellarbrations, The Bottle-O)','Hardware (Mitre 10, Home Hardware)','Total Tools'] },
  { symbol:'IGO', name:'IGO Ltd', sector:'Materials', description:"Battery-minerals company whose main asset is an indirect stake in Greenbushes, the world's largest and lowest-cost hard-rock lithium mine. Also operates the Nova nickel mine.", holdings:['Greenbushes lithium (via TLEA JV)','Kwinana lithium hydroxide refinery','Nova nickel-copper-cobalt','Exploration portfolio'] },
  { symbol:'SFR', name:'Sandfire Resources', sector:'Materials', description:"The largest pure-play copper producer on the ASX. Operates the MATSA mining complex in Spain and the Motheo mine in Botswana.", holdings:['MATSA (Spain)','Motheo (Botswana)','Black Butte project (USA)'] },
  { symbol:'VEA', name:'Viva Energy Group', sector:'Energy', description:"Fuel refiner and retailer that supplies Shell-branded products in Australia. Owns the Geelong refinery and has built a convenience retail business through the Coles Express and OTR acquisitions.", holdings:['Geelong refinery','Convenience & Mobility (Reddy Express, OTR)','Commercial & Industrial fuels','Shell-branded network'] },
  { symbol:'DOW', name:'Downer EDI', sector:'Industrials', description:"Integrated services contractor maintaining roads, rail fleets, utilities networks and government facilities across Australia and New Zealand.", holdings:['Transport (roads & rail)','Utilities','Facilities','Rollingstock maintenance','Defence services'] },
  { symbol:'LLC', name:'Lendlease Group', sector:'Real Estate', description:"Property group refocusing on Australia after years of offshore expansion. Develops large urban projects, builds for third parties, and manages property funds.", holdings:['Investments (funds management)','Development (Australia)','Construction (Australia)','Capital Release Unit (offshore exits)'] },
  { symbol:'EBO', name:'EBOS Group', sector:'Health Care', description:"The largest pharmaceutical wholesaler and distributor in Australasia. Also franchises pharmacies and owns a sizeable pet-care products business.", holdings:['Symbion (pharmacy wholesale)','TerryWhite Chemmart','Institutional healthcare','Contract logistics','Animal Care (Black Hawk, Masterpet)'] },
  { symbol:'ANN', name:'Ansell Ltd', sector:'Health Care', description:"Global maker of protective gloves and clothing for industrial and medical use. Sells surgical gloves, exam gloves and chemical-resistant hand protection in more than 100 countries.", holdings:['Industrial (HyFlex, AlphaTec)','Healthcare (surgical & exam gloves)','Kimtech / KleenGuard PPE','Life sciences'] },
  { symbol:'FLT', name:'Flight Centre Travel Group', sector:'Consumer Discretionary', description:"Travel agency group with leisure and corporate arms in more than 20 countries. The corporate business is one of the largest travel managers globally.", holdings:['Flight Centre brand (leisure)','FCM Travel (corporate)','Corporate Traveller','Scott Dunn (luxury)','Travel Money'] },
  { symbol:'BRG', name:'Breville Group', sector:'Consumer Discretionary', description:"Designer of premium small kitchen appliances, sold in more than 70 countries. Best known for home espresso machines, marketed as Sage in Europe.", holdings:['Breville / Sage','Lelit (espresso)','Baratza (grinders)','Beanz (coffee marketplace)','Kambrook'] },
  { symbol:'MEZ', name:'Meridian Energy', sector:'Utilities', description:"New Zealand's largest electricity generator, producing entirely from renewable hydro and wind. Majority-owned by the New Zealand government.", holdings:['Waitaki hydro scheme','Manapouri hydro station','Wind farms','Retail (Meridian, Powershop NZ)'] },
  { symbol:'GMD', name:'Genesis Minerals', sector:'Materials', description:"Gold producer that has consolidated the Leonora district of Western Australia. Is growing output through a multi-year plan built around two processing hubs.", holdings:['Leonora operations (Gwalia, Ulysses)','Laverton operations','Tower Hill project'] },
];

const STOCK_SYMBOLS = STOCK_UNIVERSE.map(s => s.symbol);

// ── ASX ETF Universe ──────────────────────────────────────────────────────────
// er = management fee (MER), % p.a., checked against the ASX Investment Products monthly report, Oct 2026
const ETF_UNIVERSE = [
  // Australian Equity
  { symbol:'VAS',  name:'Vanguard Australian Shares Index ETF', cat:'Australian Equity', er:0.07, description:"The largest ETF on the ASX. Tracks the S&P/ASX 300, giving exposure to about 300 of the biggest Australian companies in a single low-cost fund.", holdings:['Commonwealth Bank','BHP','CSL','NAB','Westpac','ANZ','Wesfarmers','Macquarie','Goodman Group','Telstra'] },
  { symbol:'A200', name:'Betashares Australia 200 ETF', cat:'Australian Equity', er:0.04, description:"The cheapest broad Australian shares ETF. Tracks the Solactive Australia 200 index of the 200 largest ASX-listed companies.", holdings:['Commonwealth Bank','BHP','CSL','NAB','Westpac','ANZ','Wesfarmers','Macquarie','Goodman Group','Telstra'] },
  { symbol:'IOZ',  name:'iShares Core S&P/ASX 200 ETF', cat:'Australian Equity', er:0.05, description:"BlackRock's core Australian equity fund, tracking the benchmark S&P/ASX 200 index.", holdings:['Commonwealth Bank','BHP','CSL','NAB','Westpac','ANZ','Wesfarmers','Macquarie','Goodman Group','Telstra'] },
  { symbol:'STW',  name:'SPDR S&P/ASX 200 Fund', cat:'Australian Equity', er:0.05, description:"Australia's first ETF, launched in 2001. Tracks the S&P/ASX 200 and remains one of the most heavily traded funds on the exchange.", holdings:['Commonwealth Bank','BHP','CSL','NAB','Westpac','ANZ','Wesfarmers','Macquarie','Goodman Group','Telstra'] },
  { symbol:'SFY',  name:'SPDR S&P/ASX 50 Fund', cat:'Australian Equity', er:0.20, description:"Holds the 50 largest ASX-listed companies, giving a blue-chip tilt with heavier weights to the banks and miners than the ASX 200.", holdings:['Commonwealth Bank','BHP','CSL','NAB','Westpac','ANZ','Wesfarmers','Macquarie','~50 large caps'] },
  { symbol:'ILC',  name:'iShares S&P/ASX 20 ETF', cat:'Australian Equity', er:0.24, description:"A concentrated portfolio of the 20 largest Australian companies. Dominated by the big four banks, BHP and CSL.", holdings:['Commonwealth Bank','BHP','CSL','NAB','Westpac','ANZ','Wesfarmers','Macquarie','Telstra','Woolworths'] },
  { symbol:'VLC',  name:'Vanguard MSCI Australian Large Companies Index ETF', cat:'Australian Equity', er:0.20, description:"Tracks the MSCI Australian Shares Large Cap index of roughly 20 mega-cap companies.", holdings:['Commonwealth Bank','BHP','CSL','NAB','Westpac','ANZ','Wesfarmers','Macquarie','~20 large caps'] },
  { symbol:'MVW',  name:'VanEck Australian Equal Weight ETF', cat:'Australian Equity', er:0.35, description:"Holds around 75 of the largest and most liquid ASX stocks at equal weights, rebalanced quarterly. Reduces the concentration in banks and miners found in market-cap indices.", holdings:['Equal weight — ~75 stocks','~1.3% per holding','Quarterly rebalance','More mid caps, fewer banks vs ASX 200'] },
  { symbol:'EX20', name:'Betashares Australian Ex-20 Portfolio Diversifier ETF', cat:'Australian Equity', er:0.25, description:"Holds the 180 companies ranked 21 to 200 by market cap. Designed to complement a portfolio already heavy in the top 20 blue chips.", holdings:['ASX stocks ranked 21–200','Northern Star','Brambles','Xero','QBE','Cochlear','No big four banks, BHP or CSL'] },
  { symbol:'VSO',  name:'Vanguard MSCI Australian Small Companies Index ETF', cat:'Australian Equity', er:0.30, description:"Broad exposure to smaller ASX-listed companies outside the largest stocks, tracking the MSCI Australian Shares Small Cap index.", holdings:['~170 small & mid caps','Diversified across sectors','Materials & Industrials heavy','No single dominant holding'] },
  { symbol:'ISO',  name:'iShares S&P/ASX Small Ordinaries ETF', cat:'Australian Equity', er:0.55, description:"Tracks the S&P/ASX Small Ordinaries index, covering companies ranked 101 to 300 by market cap.", holdings:['~200 small caps','ASX stocks ranked 101–300','Materials ~25%','Consumer Discretionary','Real Estate'] },
  { symbol:'MVS',  name:'VanEck Small Companies Masters ETF', cat:'Australian Equity', er:0.49, description:"A small-cap fund that screens for liquidity and dividend-paying ability, aiming to avoid the more speculative end of the small-cap market.", holdings:['~80 small caps','Dividend-paying screen','Liquidity screen','Semi-annual rebalance'] },
  { symbol:'AQLT', name:'Betashares Australian Quality ETF', cat:'Australian Equity', er:0.35, description:"Selects around 40 Australian companies scoring highest on return on equity, low leverage and earnings stability.", holdings:['Quality-screened ASX stocks','High return on equity','Low debt','Stable earnings','~40 holdings'] },
  { symbol:'FAIR', name:'Betashares Australian Sustainability Leaders ETF', cat:'Australian Equity', er:0.49, description:"Australian shares screened to exclude fossil fuels, gambling, tobacco and other activities, favouring companies classed as sustainability leaders.", holdings:['Ethically screened ASX stocks','No fossil fuel producers','No big four banks','Healthcare, tech & property heavy'] },
  { symbol:'VETH', name:'Vanguard Ethically Conscious Australian Shares ETF', cat:'Australian Equity', er:0.16, description:"A low-cost broad Australian shares fund that excludes companies with significant business in fossil fuels, alcohol, tobacco, gambling, weapons and adult entertainment.", holdings:['Commonwealth Bank','CSL','NAB','Westpac','ANZ','Wesfarmers','Macquarie','Excludes BHP & energy producers'] },

  // Global Equity
  { symbol:'VGS',  name:'Vanguard MSCI Index International Shares ETF', cat:'Global Equity', er:0.18, description:"The most popular global shares ETF in Australia. Holds around 1,300 large and mid-cap companies across developed markets outside Australia, unhedged.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Alphabet','Meta','Broadcom','Tesla','~70% United States'] },
  { symbol:'VGAD', name:'Vanguard MSCI Index International Shares (Hedged) ETF', cat:'Global Equity', er:0.21, description:"The same developed-markets portfolio as VGS, with foreign currency exposure hedged back to the Australian dollar.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Alphabet','Meta','AUD hedged'] },
  { symbol:'BGBL', name:'Betashares Global Shares ETF', cat:'Global Equity', er:0.08, description:"A low-cost developed-markets ex-Australia fund holding roughly 1,300 companies. Competes directly with VGS at less than half the fee.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Alphabet','Meta','Broadcom','~1,300 companies'] },
  { symbol:'IWLD', name:'iShares Core MSCI World ex Australia ESG ETF', cat:'Global Equity', er:0.09, description:"Developed-market shares outside Australia with ESG screens applied, at a core-fund price.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Alphabet','ESG screened','Developed markets ex Australia'] },
  { symbol:'IOO',  name:'iShares Global 100 ETF', cat:'Global Equity', er:0.40, description:"Holds 100 of the world's largest multinational companies. More concentrated in US mega-cap technology than broad global funds.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Alphabet','Broadcom','Eli Lilly','JPMorgan','100 global blue chips'] },
  { symbol:'IVV',  name:'iShares S&P 500 ETF', cat:'Global Equity', er:0.04, description:"Australian-domiciled fund tracking the S&P 500 index of large US companies, unhedged. One of the largest and cheapest ETFs on the ASX.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Alphabet','Meta','Broadcom','Berkshire Hathaway','Tesla','JPMorgan'] },
  { symbol:'IHVV', name:'iShares S&P 500 AUD Hedged ETF', cat:'Global Equity', er:0.10, description:"S&P 500 exposure with the US dollar hedged back to Australian dollars, removing currency swings from returns.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Alphabet','Meta','AUD hedged'] },
  { symbol:'VTS',  name:'Vanguard US Total Market Shares Index ETF', cat:'Global Equity', er:0.03, description:"Cross-listed version of Vanguard's US total market fund, covering more than 3,500 large, mid and small US companies. US-domiciled, so investors complete a W-8BEN form.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Alphabet','Meta','~3,500 US companies'] },
  { symbol:'VEU',  name:'Vanguard All-World ex-US Shares Index ETF', cat:'Global Equity', er:0.04, description:"Covers developed and emerging markets outside the United States. Often paired with VTS for whole-world exposure.", holdings:['TSMC','Tencent','ASML','Samsung','SAP','Nestlé','Toyota','~3,800 companies'] },
  { symbol:'NDQ',  name:'Betashares Nasdaq 100 ETF', cat:'Global Equity', er:0.48, description:"Tracks the Nasdaq-100 index of the largest non-financial companies on the Nasdaq exchange. The main way Australian investors access US technology leaders.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Broadcom','Meta','Alphabet','Tesla','Netflix','Costco'] },
  { symbol:'HNDQ', name:'Betashares Nasdaq 100 Currency Hedged ETF', cat:'Global Equity', er:0.51, description:"The Nasdaq-100 portfolio of NDQ with US dollar exposure hedged to Australian dollars.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Broadcom','Meta','AUD hedged'] },
  { symbol:'U100', name:'Global X US 100 ETF', cat:'Global Equity', er:0.18, description:"A lower-fee alternative to NDQ, tracking 100 of the largest US-listed non-financial growth companies.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Broadcom','Meta','Alphabet','Tesla'] },
  { symbol:'QUS',  name:'Betashares S&P 500 Equal Weight ETF', cat:'Global Equity', er:0.29, description:"Holds every S&P 500 company at an equal weight, reducing reliance on a handful of mega-cap technology stocks.", holdings:['Equal weight — 500 US stocks','~0.2% per holding','Quarterly rebalance','More Industrials & Financials vs S&P 500'] },
  { symbol:'IJH',  name:'iShares S&P Mid-Cap ETF', cat:'Global Equity', er:0.07, description:"Tracks the S&P MidCap 400 index of medium-sized US companies.", holdings:['~400 US mid caps','Industrials ~22%','Financials ~18%','Technology','Consumer Discretionary'] },
  { symbol:'IJR',  name:'iShares S&P Small-Cap ETF', cat:'Global Equity', er:0.07, description:"Tracks the S&P SmallCap 600 index, which requires companies to be profitable before they are added.", holdings:['~600 US small caps','Profitability screen','Financials','Industrials','Consumer Discretionary'] },
  { symbol:'VISM', name:'Vanguard MSCI International Small Companies Index ETF', cat:'Global Equity', er:0.32, description:"Around 4,000 small companies across developed markets outside Australia.", holdings:['~4,000 small caps','United States ~60%','Japan','United Kingdom','Canada'] },
  { symbol:'VGE',  name:'Vanguard FTSE Emerging Markets Shares ETF', cat:'Global Equity', er:0.48, description:"Broad emerging-markets exposure across China, India, Taiwan, Brazil and others.", holdings:['TSMC','Tencent','Alibaba','HDFC Bank','Reliance Industries','China','India','Taiwan'] },
  { symbol:'IEM',  name:'iShares MSCI Emerging Markets ETF', cat:'Global Equity', er:0.69, description:"Tracks the MSCI Emerging Markets index, which unlike the FTSE equivalent includes South Korea.", holdings:['TSMC','Tencent','Samsung','Alibaba','SK Hynix','China','Taiwan','India','South Korea'] },
  { symbol:'VAE',  name:'Vanguard FTSE Asia ex Japan Shares Index ETF', cat:'Global Equity', er:0.40, description:"Shares across Asia excluding Japan, Australia and New Zealand.", holdings:['TSMC','Tencent','Samsung','Alibaba','AIA Group','China','Taiwan','India','South Korea'] },
  { symbol:'IAA',  name:'iShares Asia 50 ETF', cat:'Global Equity', er:0.29, description:"A concentrated portfolio of 50 of the largest companies in China, Hong Kong, South Korea, Singapore and Taiwan.", holdings:['TSMC','Tencent','Samsung','Alibaba','SK Hynix','AIA Group','50 Asian blue chips'] },
  { symbol:'ASIA', name:'Betashares Asia Technology Tigers ETF', cat:'Global Equity', er:0.67, description:"The 50 largest technology and online retail companies headquartered in Asia outside Japan.", holdings:['TSMC','Samsung','Tencent','Alibaba','SK Hynix','PDD Holdings','Meituan','Infosys'] },
  { symbol:'IZZ',  name:'iShares China Large-Cap ETF', cat:'Global Equity', er:0.60, description:"Tracks 50 of the largest Chinese companies listed in Hong Kong.", holdings:['Tencent','Alibaba','Meituan','Xiaomi','China Construction Bank','ICBC','BYD','JD.com'] },
  { symbol:'NDIA', name:'Global X India Nifty 50 ETF', cat:'Global Equity', er:0.69, description:"Tracks the Nifty 50, the benchmark index of India's 50 largest listed companies.", holdings:['HDFC Bank','Reliance Industries','ICICI Bank','Infosys','Bharti Airtel','Larsen & Toubro','ITC','TCS'] },
  { symbol:'VEQ',  name:'Vanguard FTSE Europe Shares ETF', cat:'Global Equity', er:0.35, description:"Large and mid-cap companies across developed European markets including the UK, France, Germany and Switzerland.", holdings:['ASML','SAP','Nestlé','Novartis','Roche','AstraZeneca','HSBC','Shell','Novo Nordisk'] },
  { symbol:'IEU',  name:'iShares Europe ETF', cat:'Global Equity', er:0.59, description:"Tracks the S&P Europe 350 index of leading companies from developed European markets.", holdings:['ASML','SAP','Nestlé','Novartis','Roche','AstraZeneca','HSBC','Shell'] },
  { symbol:'IJP',  name:'iShares MSCI Japan ETF', cat:'Global Equity', er:0.50, description:"Large and mid-cap Japanese companies, tracking the MSCI Japan index.", holdings:['Toyota','Mitsubishi UFJ','Sony','Hitachi','SoftBank Group','Sumitomo Mitsui','Nintendo','Keyence'] },
  { symbol:'F100', name:'Betashares FTSE 100 ETF', cat:'Global Equity', er:0.45, description:"The 100 largest companies listed on the London Stock Exchange.", holdings:['AstraZeneca','HSBC','Shell','Unilever','Rolls-Royce','BP','RELX','British American Tobacco'] },
  { symbol:'VESG', name:'Vanguard Ethically Conscious International Shares Index ETF', cat:'Global Equity', er:0.18, description:"Developed-market international shares excluding fossil fuels, weapons, tobacco, gambling, alcohol and adult entertainment.", holdings:['NVIDIA','Apple','Microsoft','Amazon','Alphabet','Meta','No fossil fuel companies'] },
  { symbol:'ETHI', name:'Betashares Global Sustainability Leaders ETF', cat:'Global Equity', er:0.59, description:"Around 200 global companies identified as climate leaders that also pass a broad set of ethical screens.", holdings:['NVIDIA','Apple','Visa','Mastercard','Home Depot','ASML','Toyota','~200 screened companies'] },

  // Sector & Thematic
  { symbol:'MVB',  name:'VanEck Australian Banks ETF', cat:'Sector & Thematic', er:0.28, description:"A pure play on Australia's listed banks, dominated by the big four and Macquarie.", holdings:['Commonwealth Bank','NAB','Westpac','ANZ','Macquarie','Bendigo and Adelaide Bank','Bank of Queensland'] },
  { symbol:'QFN',  name:'Betashares Australian Financials Sector ETF', cat:'Sector & Thematic', er:0.34, description:"Tracks the financials sector of the S&P/ASX 200 excluding property trusts, covering banks, insurers and diversified financials.", holdings:['Commonwealth Bank','NAB','Westpac','ANZ','Macquarie','QBE','Suncorp','IAG'] },
  { symbol:'QRE',  name:'Betashares Australian Resources Sector ETF', cat:'Sector & Thematic', er:0.34, description:"Tracks the resources sector of the S&P/ASX 200, combining miners and energy producers.", holdings:['BHP','Rio Tinto','Woodside','Fortescue','Northern Star','Santos','Evolution Mining','South32'] },
  { symbol:'OZR',  name:'SPDR S&P/ASX 200 Resources Fund', cat:'Sector & Thematic', er:0.34, description:"State Street's Australian resources sector fund, tracking the same S&P/ASX 200 Resources index as QRE.", holdings:['BHP','Rio Tinto','Woodside','Fortescue','Northern Star','Santos','Evolution Mining'] },
  { symbol:'MVR',  name:'VanEck Australian Resources ETF', cat:'Sector & Thematic', er:0.35, description:"Australian resources companies with a cap on individual weights, so BHP is less dominant than in market-cap resources funds.", holdings:['BHP','Woodside','Rio Tinto','Fortescue','Northern Star','Santos','Capped weights'] },
  { symbol:'VAP',  name:'Vanguard Australian Property Securities Index ETF', cat:'Sector & Thematic', er:0.23, description:"The largest Australian listed property ETF, tracking the S&P/ASX 300 A-REIT index. Goodman Group makes up a large share of the fund.", holdings:['Goodman Group','Scentre Group','Stockland','Mirvac','GPT','Dexus','Vicinity Centres','Charter Hall'] },
  { symbol:'MVA',  name:'VanEck Australian Property ETF', cat:'Sector & Thematic', er:0.35, description:"Australian REITs with individual holdings capped at 10%, giving a more even spread than market-cap property funds.", holdings:['Goodman Group','Scentre Group','Stockland','Mirvac','GPT','Dexus','Vicinity Centres','10% position cap'] },
  { symbol:'SLF',  name:'SPDR S&P/ASX 200 Listed Property Fund', cat:'Sector & Thematic', er:0.16, description:"Australia's first listed property ETF, tracking the S&P/ASX 200 A-REIT index.", holdings:['Goodman Group','Scentre Group','Stockland','Mirvac','GPT','Dexus','Vicinity Centres'] },
  { symbol:'VBLD', name:'Vanguard Global Infrastructure Index ETF', cat:'Sector & Thematic', er:0.47, description:"Global listed infrastructure companies including utilities, pipelines, toll roads, airports and railways.", holdings:['NextEra Energy','Union Pacific','Enbridge','Southern Co','Transurban','Aena','Utilities ~50%'] },
  { symbol:'IFRA', name:'VanEck FTSE Global Infrastructure (AUD Hedged) ETF', cat:'Sector & Thematic', er:0.20, description:"A low-cost, currency-hedged global infrastructure fund split across utilities, transport and communications infrastructure.", holdings:['NextEra Energy','American Tower','Union Pacific','Enbridge','Transurban','AUD hedged'] },
  { symbol:'ATEC', name:'Betashares S&P/ASX Australian Technology ETF', cat:'Sector & Thematic', er:0.48, description:"Leading ASX-listed technology companies across software, online marketplaces and data centres.", holdings:['WiseTech Global','Xero','Pro Medicus','REA Group','CAR Group','TechnologyOne','NEXTDC','SEEK'] },
  { symbol:'TECH', name:'Global X Morningstar Global Technology ETF', cat:'Sector & Thematic', er:0.45, description:"Global technology companies that Morningstar analysts judge to have durable competitive advantages and attractive valuations.", holdings:['Wide-moat tech companies','Equal weighted','Software','Semiconductors','Morningstar moat screen'] },
  { symbol:'FANG', name:'Global X FANG+ ETF', cat:'Sector & Thematic', er:0.35, description:"An equal-weighted portfolio of just ten highly traded US technology and growth giants.", holdings:['NVIDIA','Meta','Apple','Amazon','Netflix','Alphabet','Microsoft','Broadcom','10 stocks, equal weight'] },
  { symbol:'SEMI', name:'Global X Semiconductor ETF', cat:'Sector & Thematic', er:0.45, description:"Global companies that design, manufacture and equip the semiconductor industry.", holdings:['NVIDIA','TSMC','Broadcom','ASML','AMD','Qualcomm','Applied Materials','Lam Research'] },
  { symbol:'HACK', name:'Betashares Global Cybersecurity ETF', cat:'Sector & Thematic', er:0.67, description:"Global companies whose main business is cybersecurity software, hardware or services.", holdings:['CrowdStrike','Palo Alto Networks','Broadcom','Cisco','Fortinet','Zscaler','Cloudflare','Okta'] },
  { symbol:'RBTZ', name:'Betashares Global Robotics and Artificial Intelligence ETF', cat:'Sector & Thematic', er:0.57, description:"Companies involved in industrial robotics, automation, surgical robots and artificial intelligence.", holdings:['NVIDIA','ABB','Intuitive Surgical','Fanuc','Keyence','SMC Corp','Daifuku'] },
  { symbol:'ACDC', name:'Global X Battery Tech & Lithium ETF', cat:'Sector & Thematic', er:0.69, description:"Companies across the battery supply chain, from lithium miners to cell manufacturers and electric vehicle makers.", holdings:['Lithium miners','Battery cell makers','CATL','Tesla','Panasonic','Pilbara Minerals','Equal weighted'] },
  { symbol:'DRUG', name:'Betashares Global Healthcare Currency Hedged ETF', cat:'Sector & Thematic', er:0.57, description:"The largest global healthcare companies outside Australia, hedged to Australian dollars.", holdings:['Eli Lilly','Johnson & Johnson','AbbVie','Novartis','Roche','AstraZeneca','Merck','UnitedHealth'] },
  { symbol:'IXJ',  name:'iShares Global Healthcare ETF', cat:'Sector & Thematic', er:0.41, description:"Global pharmaceutical, biotechnology and medical device companies, unhedged.", holdings:['Eli Lilly','Johnson & Johnson','AbbVie','Novartis','Roche','AstraZeneca','Merck','UnitedHealth'] },
  { symbol:'GDX',  name:'VanEck Gold Miners ETF', cat:'Sector & Thematic', er:0.53, description:"The largest global gold mining companies. Typically moves more sharply than the gold price itself.", holdings:['Newmont','Agnico Eagle','Barrick','Wheaton Precious Metals','Franco-Nevada','Northern Star','Gold Fields'] },
  { symbol:'URNM', name:'Betashares Global Uranium ETF', cat:'Sector & Thematic', er:0.69, description:"Uranium miners, developers and physical uranium holders, a play on demand for nuclear power.", holdings:['Cameco','Kazatomprom','Sprott Physical Uranium Trust','NexGen Energy','Paladin Energy','Uranium Energy Corp'] },
  { symbol:'DFND', name:'VanEck Global Defence ETF', cat:'Sector & Thematic', er:0.65, description:"Global companies earning most of their revenue from military and defence equipment and services.", holdings:['Palantir','RTX','Leonardo','Thales','Saab','Hanwha Aerospace','Leidos','Elbit Systems'] },

  // Income & Factor
  { symbol:'VHY',  name:'Vanguard Australian Shares High Yield ETF', cat:'Income & Factor', er:0.25, description:"Australian companies with higher forecast dividends than the broader market, excluding property trusts. The largest dividend-focused ETF on the ASX.", holdings:['BHP','Commonwealth Bank','NAB','Westpac','ANZ','Wesfarmers','Telstra','Woodside','Rio Tinto'] },
  { symbol:'SYI',  name:'SPDR MSCI Australia Select High Dividend Yield Fund', cat:'Income & Factor', er:0.20, description:"Australian shares screened for high dividend yield together with quality and dividend sustainability.", holdings:['High-yield ASX stocks','Banks','Miners','Telstra','Quality screen','Dividend sustainability screen'] },
  { symbol:'IHD',  name:'iShares S&P/ASX Dividend Opportunities ESG Screened ETF', cat:'Income & Factor', er:0.23, description:"Fifty high-yielding Australian shares that meet dividend stability criteria and ESG screens.", holdings:['50 high-yield ASX stocks','Stability screen','ESG screened','Stock and sector caps'] },
  { symbol:'ZYAU', name:'Global X S&P/ASX 200 High Dividend ETF', cat:'Income & Factor', er:0.24, description:"Fifty of the highest-yielding companies in the S&P/ASX 200.", holdings:['50 high-yield ASX 200 stocks','Banks','Resources','Energy','Capped weights'] },
  { symbol:'YMAX', name:'Betashares Australian Top 20 Equity Yield Maximiser Fund', cat:'Income & Factor', er:0.64, description:"Holds the 20 largest ASX stocks and sells call options over them to generate extra income, in exchange for giving up some upside in rising markets.", holdings:['Top 20 ASX stocks','Covered call overlay','Quarterly distributions','Capped upside'] },
  { symbol:'QUAL', name:'VanEck MSCI International Quality ETF', cat:'Income & Factor', er:0.40, description:"Around 300 international companies with high return on equity, stable earnings and low debt. One of the largest factor ETFs on the ASX.", holdings:['NVIDIA','Apple','Microsoft','Meta','Eli Lilly','Visa','Mastercard','ASML','Alphabet'] },
  { symbol:'QHAL', name:'VanEck MSCI International Quality (AUD Hedged) ETF', cat:'Income & Factor', er:0.43, description:"The QUAL portfolio with currency exposure hedged to Australian dollars.", holdings:['NVIDIA','Apple','Microsoft','Meta','Eli Lilly','Visa','AUD hedged'] },
  { symbol:'QLTY', name:'Betashares Global Quality Leaders ETF', cat:'Income & Factor', er:0.35, description:"150 global companies ranked highest on a combined score of return on equity, debt, cash flow and earnings stability.", holdings:['150 quality-ranked companies','Technology','Healthcare','Industrials','Capped position sizes'] },
  { symbol:'MOAT', name:'VanEck Morningstar Wide Moat ETF', cat:'Income & Factor', er:0.49, description:"US companies that Morningstar believes have long-lasting competitive advantages and are trading at attractive prices.", holdings:['~50 wide-moat US stocks','Equal weighted','Valuation screen','Quarterly reconstitution'] },
  { symbol:'VVLU', name:'Vanguard Global Value Equity Active ETF', cat:'Income & Factor', er:0.28, description:"An actively managed, rules-based fund that favours global companies trading cheaply relative to their fundamentals.", holdings:['~1,000+ value stocks','Financials','Energy','Industrials','Low price-to-book & price-to-earnings'] },

  // Diversified
  { symbol:'VDHG', name:'Vanguard Diversified High Growth Index ETF', cat:'Diversified', er:0.27, description:"A one-fund portfolio allocating about 90% to shares and 10% to bonds, spread across Australian, international and emerging markets.", holdings:['Australian shares ~36%','International shares ~26%','International shares (hedged) ~16%','Small caps & emerging markets ~12%','Bonds ~10%'] },
  { symbol:'VDGR', name:'Vanguard Diversified Growth Index ETF', cat:'Diversified', er:0.27, description:"A one-fund portfolio with about 70% in shares and 30% in bonds.", holdings:['Australian shares ~28%','International shares ~42%','Bonds ~30%','Rebalanced automatically'] },
  { symbol:'VDBA', name:'Vanguard Diversified Balanced Index ETF', cat:'Diversified', er:0.27, description:"A one-fund portfolio split evenly between growth assets and bonds.", holdings:['Shares ~50%','Bonds ~50%','Australian & international','Rebalanced automatically'] },
  { symbol:'DHHF', name:'Betashares Diversified All Growth ETF', cat:'Diversified', er:0.19, description:"A low-cost all-equity portfolio combining Australian, US, developed-market and emerging-market shares in one fund.", holdings:['Australian shares ~37%','US shares ~40%','Developed markets ex US ~16%','Emerging markets ~7%','100% equities'] },

  // Fixed Income & Cash
  { symbol:'VAF',  name:'Vanguard Australian Fixed Interest Index ETF', cat:'Fixed Income & Cash', er:0.10, description:"Tracks the Bloomberg AusBond Composite index of investment-grade Australian government, semi-government and corporate bonds.", holdings:['Commonwealth government bonds','State government bonds','Supranational bonds','Corporate bonds','Duration ~5 years'] },
  { symbol:'IAF',  name:'iShares Core Composite Bond ETF', cat:'Fixed Income & Cash', er:0.10, description:"BlackRock's core Australian bond fund, tracking the same AusBond Composite index as VAF.", holdings:['Commonwealth government bonds','State government bonds','Supranational bonds','Corporate bonds','Duration ~5 years'] },
  { symbol:'OZBD', name:'Betashares Australian Composite Bond ETF', cat:'Fixed Income & Cash', er:0.19, description:"Australian government and corporate bonds weighted by yield and credit quality rather than by amount of debt on issue.", holdings:['Government bonds','Corporate bonds','Yield-weighted methodology','Investment grade only'] },
  { symbol:'VGB',  name:'Vanguard Australian Government Bond Index ETF', cat:'Fixed Income & Cash', er:0.16, description:"Australian federal and state government bonds only, with no corporate credit exposure.", holdings:['Commonwealth government bonds','State treasury corporation bonds','AAA / AA rated','Duration ~5.5 years'] },
  { symbol:'AGVT', name:'Betashares Australian Government Bond ETF', cat:'Fixed Income & Cash', er:0.22, description:"Longer-dated Australian government and semi-government bonds, typically 7 to 12 years to maturity.", holdings:['Commonwealth government bonds','State government bonds','7–12 year maturities','Longer duration than VGB'] },
  { symbol:'VACF', name:'Vanguard Australian Corporate Fixed Interest Index ETF', cat:'Fixed Income & Cash', er:0.20, description:"Investment-grade corporate bonds issued in Australian dollars.", holdings:['Bank senior bonds','Corporate bonds','Investment grade','Duration ~3.5 years'] },
  { symbol:'CRED', name:'Betashares Australian Investment Grade Corporate Bond ETF', cat:'Fixed Income & Cash', er:0.25, description:"Longer-dated Australian corporate bonds selected for higher yield, with more interest-rate sensitivity than typical corporate bond funds.", holdings:['Fixed-rate corporate bonds','5–10 year maturities','Investment grade','~50 bonds'] },
  { symbol:'PLUS', name:'VanEck Australian Corporate Bond Plus ETF', cat:'Fixed Income & Cash', er:0.32, description:"Higher-yielding Australian corporate bonds, including some subordinated bank debt.", holdings:['Corporate bonds','Bank subordinated debt','Property trust bonds','Investment grade'] },
  { symbol:'FLOT', name:'VanEck Australian Floating Rate ETF', cat:'Fixed Income & Cash', er:0.22, description:"Australian dollar floating-rate notes, mostly from banks. Coupons reset with interest rates, so prices are very stable.", holdings:['Bank floating-rate notes','Big four banks','Foreign bank AUD issues','Duration near zero'] },
  { symbol:'QPON', name:'Betashares Australian Bank Senior Floating Rate Bond ETF', cat:'Fixed Income & Cash', er:0.22, description:"Senior floating-rate bonds issued by Australian banks.", holdings:['Commonwealth Bank','NAB','Westpac','ANZ','Macquarie','Senior floating-rate notes'] },
  { symbol:'SUBD', name:'VanEck Australian Subordinated Debt ETF', cat:'Fixed Income & Cash', er:0.29, description:"Floating-rate Tier 2 subordinated bonds from Australian banks and insurers, paying more than senior debt for sitting lower in the capital structure.", holdings:['Big four bank Tier 2 bonds','Macquarie','Insurer subordinated notes','Floating rate'] },
  { symbol:'HBRD', name:'Betashares Active Australian Hybrids Fund', cat:'Fixed Income & Cash', er:0.55, description:"An actively managed portfolio of bank hybrids, subordinated debt and cash.", holdings:['Bank hybrids','Tier 2 subordinated bonds','Cash','Actively managed'] },
  { symbol:'AAA',  name:'Betashares Australian High Interest Cash ETF', cat:'Fixed Income & Cash', er:0.18, description:"Holds cash in deposit accounts with major Australian banks, paying monthly income. The largest cash ETF on the ASX.", holdings:['Bank deposit accounts','Major Australian banks','Monthly distributions','No bonds'] },
  { symbol:'BILL', name:'iShares Core Cash ETF', cat:'Fixed Income & Cash', er:0.07, description:"Short-term money market securities such as bank bills and negotiable certificates of deposit.", holdings:['Bank bills','Negotiable certificates of deposit','Commercial paper','Maturities under 3 months'] },
  { symbol:'ISEC', name:'iShares Enhanced Cash ETF', cat:'Fixed Income & Cash', er:0.12, description:"Short-term money market instruments and floating-rate notes, aiming for a little more yield than a pure cash fund.", holdings:['Bank bills','Floating-rate notes','Certificates of deposit','Maturities under 1 year'] },
  { symbol:'VIF',  name:'Vanguard International Fixed Interest Index (Hedged) ETF', cat:'Fixed Income & Cash', er:0.20, description:"Government bonds from developed countries, hedged to Australian dollars.", holdings:['US Treasuries','Japanese government bonds','French & German bonds','UK gilts','AUD hedged'] },
  { symbol:'VBND', name:'Vanguard Global Aggregate Bond Index (Hedged) ETF', cat:'Fixed Income & Cash', er:0.20, description:"A broad mix of global government, corporate and securitised bonds, hedged to Australian dollars.", holdings:['Global government bonds','Corporate bonds','Mortgage-backed securities','~10,000 bonds','AUD hedged'] },
  { symbol:'IHCB', name:'iShares Core Global Corporate Bond (AUD Hedged) ETF', cat:'Fixed Income & Cash', er:0.26, description:"Investment-grade corporate bonds from issuers around the world, hedged to Australian dollars.", holdings:['US corporate bonds','European corporate bonds','Banks & industrials','Investment grade','AUD hedged'] },
  { symbol:'IHHY', name:'iShares Global High Yield Bond (AUD Hedged) ETF', cat:'Fixed Income & Cash', er:0.56, description:"Sub-investment-grade corporate bonds from developed markets, offering higher income with higher default risk.", holdings:['BB-rated bonds','B-rated bonds','US & European issuers','AUD hedged'] },
  { symbol:'ILB',  name:'iShares Government Inflation ETF', cat:'Fixed Income & Cash', er:0.18, description:"Australian government inflation-linked bonds, whose capital value rises with the consumer price index.", holdings:['Commonwealth inflation-linked bonds','State inflation-linked bonds','CPI-indexed principal','Long duration'] },

  // Commodities & Crypto
  { symbol:'GOLD',   name:'Global X Physical Gold', cat:'Commodities & Crypto', er:0.40, description:"The oldest gold product on the ASX. Each unit is backed by physical gold bars held in a London vault, unhedged.", holdings:['Physical gold bullion','Vaulted in London','Unhedged (AUD gold price)','Allocated bars'] },
  { symbol:'NUGG',   name:'VanEck Gold Bullion ETF', cat:'Commodities & Crypto', er:0.25, description:"Backed by gold sourced exclusively from Australian mines and stored in Australia.", holdings:['Australian-sourced gold','Stored in Australia','Physical redemption available','Unhedged'] },
  // source:'asx' — Yahoo's feed for these is dead, so quotes come from the ASX website's feed (no history)
  { symbol:'PMGOLD', name:'Perth Mint Gold', cat:'Commodities & Crypto', er:0.15, source:'asx', description:"Gold held by The Perth Mint and guaranteed by the Government of Western Australia. One of the lowest-cost ways to hold gold on the ASX.", holdings:['Physical gold','Held by The Perth Mint','WA government guarantee','1/100 oz per unit'] },
  { symbol:'GLDN',   name:'iShares Physical Gold ETF', cat:'Commodities & Crypto', er:0.18, description:"BlackRock's low-cost physically backed gold fund.", holdings:['Physical gold bullion','Vaulted in London','Unhedged','Allocated bars'] },
  { symbol:'QAU',    name:'Betashares Gold Bullion ETF — Currency Hedged', cat:'Commodities & Crypto', er:0.59, description:"Physical gold with the US dollar exposure hedged, so returns track the US dollar gold price rather than the Australian dollar price.", holdings:['Physical gold bullion','Vaulted in London','AUD hedged','Tracks USD gold price'] },
  { symbol:'ETPMAG', name:'Global X Physical Silver', cat:'Commodities & Crypto', er:0.49, source:'asx', description:"Backed by physical silver held in a London vault.", holdings:['Physical silver bullion','Vaulted in London','Unhedged','Industrial & investment demand'] },
  { symbol:'VBTC',   name:'VanEck Bitcoin ETF', cat:'Commodities & Crypto', er:0.45, description:"The first bitcoin ETF to list on the ASX itself. Gains its exposure through VanEck's US-listed spot bitcoin trust.", holdings:['Bitcoin (via VanEck Bitcoin Trust)','Spot exposure','Unhedged','Very high volatility'] },

  // Geared / Inverse
  { symbol:'GEAR', name:'Betashares Geared Australian Equity Fund', cat:'Geared / Inverse', er:0.78, description:"Borrows to invest in a broad Australian share portfolio, keeping gearing between 50% and 65%. Magnifies both gains and losses. WARNING: high-risk instrument.", holdings:['ASX 200 portfolio','Internal gearing 50–65%','Roughly 2–2.75x exposure','Losses magnified'] },
  { symbol:'GGUS', name:'Betashares Geared US Equity Fund — Currency Hedged', cat:'Geared / Inverse', er:0.80, description:"Borrows to invest in the S&P 500, currency hedged, with gearing held between 50% and 65%. WARNING: high-risk instrument.", holdings:['S&P 500 portfolio','Internal gearing 50–65%','AUD hedged','Losses magnified'] },
  { symbol:'G200', name:'Betashares Wealth Builder Australia 200 Geared Complex ETF', cat:'Geared / Inverse', er:0.35, description:"A moderately geared version of A200, borrowing 30–40% of the portfolio value. Aimed at long-term investors wanting modest leverage.", holdings:['Australia 200 portfolio','Gearing 30–40%','Roughly 1.4–1.7x exposure','Institutional borrowing rates'] },
  { symbol:'GHHF', name:'Betashares Wealth Builder Diversified All Growth Geared Complex ETF', cat:'Geared / Inverse', er:0.35, description:"A moderately geared version of the DHHF all-equity portfolio, borrowing 30–40% of portfolio value.", holdings:['Australian shares','Global shares','Gearing 30–40%','Roughly 1.4–1.7x exposure'] },
  { symbol:'LNAS', name:'Global X Ultra Long Nasdaq 100 Complex ETF', cat:'Geared / Inverse', er:1.00, description:"Targets leveraged long exposure to the Nasdaq-100 of between 2x and 2.75x. For short-term trading only. WARNING: high-risk instrument.", holdings:['Nasdaq-100 futures','2–2.75x long exposure','AUD hedged','Not for long-term holding'] },
  { symbol:'SNAS', name:'Global X Ultra Short Nasdaq 100 Complex ETF', cat:'Geared / Inverse', er:1.00, description:"Targets leveraged short exposure to the Nasdaq-100 of between -2x and -2.75x, rising when US tech stocks fall. WARNING: high-risk instrument.", holdings:['Short Nasdaq-100 futures','-2 to -2.75x exposure','AUD hedged','Loses value in rising markets'] },
  { symbol:'BBOZ', name:'Betashares Australian Equities Strong Bear Complex ETF', cat:'Geared / Inverse', er:1.29, description:"Designed to rise 2% to 2.75% for every 1% fall in the Australian share market on a given day, and fall by a similar multiple when it rises. WARNING: high-risk instrument.", holdings:['Short SPI 200 futures','-2 to -2.75x exposure','Cash','Loses value in rising markets'] },
  { symbol:'BBUS', name:'Betashares US Equities Strong Bear Complex ETF — Currency Hedged', cat:'Geared / Inverse', er:1.32, description:"Designed to rise 2% to 2.75% for every 1% daily fall in the S&P 500, currency hedged. WARNING: high-risk instrument.", holdings:['Short S&P 500 futures','-2 to -2.75x exposure','AUD hedged','Loses value in rising markets'] },
  { symbol:'BEAR', name:'Betashares Australian Equities Bear Complex ETF', cat:'Geared / Inverse', er:1.48, description:"Designed to rise roughly 1% for every 1% daily fall in the Australian share market. A less aggressive hedge than BBOZ. WARNING: decays in rising markets.", holdings:['Short SPI 200 futures','-0.9 to -1.1x exposure','Cash','Hedging tool'] },
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
const yh = s => s.endsWith(".AX") ? s : s + ".AX";
const bare = s => s.replace(/\.AX$/, "");
const fmt = (n, d = 2) => n == null || isNaN(n) ? '—' : n.toLocaleString('en-AU', { minimumFractionDigits: d, maximumFractionDigits: d });
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

// ── Market hours (ASX: 10:00–16:00 Sydney time, Mon–Fri) ───────────────────────────────
function asxStatus() {
  const now = new Date();
  const et = new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Sydney' }));
  const day = et.getDay();      // 0=Sun 6=Sat
  const h = et.getHours();
  const m = et.getMinutes();
  const mins = h * 60 + m;

  if (day === 0 || day === 6) return 'closed';
  if (mins < 600) return mins >= 420 ? 'premarket' : 'closed';  // pre-open 7:00–10:00
  if (mins < 960) return 'open';    // 10:00–16:00
  return 'closed';
}

function updateMarketStatus() {
  const status = asxStatus();
  const dot = $('marketDot');
  const label = $('marketLabel');
  dot.className = 'market-dot ' + status;
  if (status === 'open')       label.textContent = 'Market Open';
  else if (status === 'premarket') label.textContent = 'Pre-Open';
  else                         label.textContent = 'Market Closed';
}

// ── Data fetching ─────────────────────────────────────────────────────────────
async function fetchQuotes() {
  const btn = $('refreshBtn');
  btn.classList.add('spinning');
  try {
    // Batch into groups of 30 to keep URLs manageable
    const viaYahoo = SYMBOLS.filter(s => META[s].source !== 'asx');
    const viaAsx   = SYMBOLS.filter(s => META[s].source === 'asx');
    const batches = [];
    for (let i = 0; i < viaYahoo.length; i += 30) batches.push(viaYahoo.slice(i, i + 30));
    const urls = batches.map(batch => `/api/etf/quote?symbols=${batch.map(yh).join(',')}`);
    if (viaAsx.length) urls.push(`/api/asx/quote?symbols=${viaAsx.join(',')}`);
    const results = await Promise.all(urls.map(url =>
      fetch(url).then(r => r.json()).catch(() => null)
    ));
    results.forEach(res => {
      if (!res) return;
      const list = res?.quoteResponse?.result || [];
      list.forEach(q => { quotes[bare(q.symbol)] = q; });
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
  if (META[symbol]?.source === 'asx') return null;  // the ASX feed has no price history
  const res = await fetch(`/api/etf/history?symbol=${yh(symbol)}&interval=1mo`);
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
  // Auto-refresh disabled — data updates only on manual ↻ button press
  clearInterval(refreshTimer);
  clearInterval(countdownTimer);
  $('countdown').textContent = '';
  updateMarketStatus();
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
    case 'aum':       return (q.netAssets ?? q.marketCap) || 0;
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
    return -sortDir * (vb - va);
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
      <td class="num">${fmtAUM((q.netAssets ?? q.marketCap))}</td>
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
  $('edAUM').textContent        = fmtAUM((q.netAssets ?? q.marketCap));
  $('edER').textContent         = e.er != null ? fmt(e.er, 2) + '%' : '—';
  $('edYield').textContent      = q.dividendYield != null
    ? fmt(q.dividendYield) + '%' : '—';
  $('edDayRange').textContent   = (q.regularMarketDayLow && q.regularMarketDayHigh)
    ? `$${fmt(q.regularMarketDayLow)} – $${fmt(q.regularMarketDayHigh)}` : '—';
  $('ed52w').textContent        = (q.fiftyTwoWeekLow && q.fiftyTwoWeekHigh)
    ? `$${fmt(q.fiftyTwoWeekLow)} – $${fmt(q.fiftyTwoWeekHigh)}` : '—';
  $('ed50d').textContent        = q.fiftyDayAverage != null ? '$' + fmt(q.fiftyDayAverage) : '—';
  $('ed200d').textContent       = q.twoHundredDayAverage != null ? '$' + fmt(q.twoHundredDayAverage) : '—';
  const ytd = q.ytdReturn;
  $('edYTD').className          = cls(ytd);
  $('edYTD').textContent        = ytd != null ? fmtPct(ytd) : '—';
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
  symbol = bare(symbol);
  // Fetch live quote if not already in either cache
  if (!quotes[symbol] && !stockQuotes[symbol]) {
    const res = await fetch(`/api/etf/quote?symbols=${yh(symbol)}`).then(r => r.json()).catch(() => null);
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
  $('snapCat').textContent = m?.cat || m?.sector || '';
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
  $('sdAUM').textContent      = fmtAUM((q.netAssets ?? q.marketCap));
  $('sdER').textContent       = m?.er != null ? fmt(m.er, 2) + '%' : (m?.sector ? '—' : 'n/a');
  $('sdYield').textContent    = q.dividendYield != null
    ? fmt(q.dividendYield) + '%' : '—';
  $('sd50d').textContent      = q.fiftyDayAverage != null ? '$' + fmt(q.fiftyDayAverage) : '—';
  $('sd200d').textContent     = q.twoHundredDayAverage != null ? '$' + fmt(q.twoHundredDayAverage) : '—';
  $('sdYTD').className        = cls(q.ytdReturn);
  $('sdYTD').textContent      = q.ytdReturn != null ? fmtPct(q.ytdReturn) : '—';
  $('sd3M').className         = cls(q.trailingThreeMonthReturns);
  $('sd3M').textContent       = q.trailingThreeMonthReturns != null ? fmtPct(q.trailingThreeMonthReturns) : '—';

  // Description + holdings (if in universe)
  const meta = ALL_META[symbol];
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
  } else if (snapshotChart) {
    snapshotChart.destroy();
    snapshotChart = null;
  }
}

function drawMiniChart(hist) {
  const ctx = $('snapshotChart').getContext('2d');
  if (snapshotChart) snapshotChart.destroy();
  const labels = hist.map(d => d.date.toLocaleDateString('en-AU', { month: 'short', year: '2-digit' }));
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
      const res = await fetch(`/api/etf/quote?symbols=${yh(sym)}`).then(r => r.json()).catch(() => null);
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
    { label: 'AUM',            a: (qA.netAssets ?? qA.marketCap),               b: (qB.netAssets ?? qB.marketCap),               fmt: fmtAUM,                higher: true },
    { label: 'Expense Ratio',  a: mA.er,                      b: mB.er,                      fmt: v => fmt(v, 2) + '%',  higher: false },
    { label: 'Div Yield',      a: qA.dividendYield != null ? qA.dividendYield : null,
                                b: qB.dividendYield != null ? qB.dividendYield : null,
                                fmt: v => fmt(v) + '%', higher: true },
    { label: '50-Day Avg',     a: qA.fiftyDayAverage,         b: qB.fiftyDayAverage,         fmt: v => '$' + fmt(v),     higher: null },
    { label: '200-Day Avg',    a: qA.twoHundredDayAverage,    b: qB.twoHundredDayAverage,    fmt: v => '$' + fmt(v),     higher: null },
    { label: 'YTD Return',     a: qA.ytdReturn != null ? qA.ytdReturn : null,
                                b: qB.ytdReturn != null ? qB.ytdReturn : null,
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
    secondsLeft = asxStatus() === 'open' ? 60 : 300;
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

  // Default chart: VAS vs NDQ
  chartSymbols = ['VAS', 'NDQ'];
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
    case 'aum':       return (q.netAssets ?? q.marketCap) || 0;
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
    return -etfTabSortDir * (vb - va);
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
      <td class="num">${fmtAUM((q.netAssets ?? q.marketCap))}</td>
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
    fetch(`/api/etf/quote?symbols=${batch.map(yh).join(',')}`)
      .then(r => r.json())
      .catch(() => null)
  ));
  results.forEach(res => {
    if (!res) return;
    (res?.quoteResponse?.result || []).forEach(q => { stockQuotes[bare(q.symbol)] = q; });
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
    case 'aum':       return (q.netAssets ?? q.marketCap) || 0;
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
    return -stockSortDir * (vb - va);
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
    const divY   = q.dividendYield;
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
      <td class="num">${fmtAUM((q.netAssets ?? q.marketCap))}</td>
      <td class="num">${pe ? fmt(pe, 1) + 'x' : '—'}</td>
      <td class="num">${divY != null ? fmt(divY) + '%' : '—'}</td>
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
  $('sdMktCap').textContent      = fmtAUM((q.netAssets ?? q.marketCap));
  $('sdPE').textContent          = q.trailingPE ? fmt(q.trailingPE, 1) + 'x' : '—';
  $('sdDivYield').textContent    = q.dividendYield != null
    ? fmt(q.dividendYield) + '%' : '—';
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
