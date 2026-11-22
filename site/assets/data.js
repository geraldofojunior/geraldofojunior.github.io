/* Site content that changes over time: publications, open-source projects, talks.
   To add a paper, copy an entry in PUBLICATIONS and edit it. Fields:
     title, authors (use * for co-first authors), venue, year, kind (conference | journal | magazine | poster | overview),
     first (true for first-author papers), topic (a key of TOPICS), links { paper, arxiv, doi, code, slides, video },
     award (optional text), hidden (true keeps the entry off the page, e.g. while under review). */

var SITE = (window.SITE = window.SITE || {});

SITE.ME = 'G. F. Oliveira';

/* Research topics, in the order of the Research section: the rows of the research map (name) and the
   publication filters (short). Colours live in site.css. */
SITE.TOPICS = [
  { key: 'mem', name: 'Memory systems for AI', short: 'Memory systems for AI' },
  { key: 'dm', name: 'Data movement', short: 'Data movement' },
  { key: 'pum', name: 'Computing inside memory', short: 'Computing inside memory' },
  { key: 'prog', name: 'Programming and system support', short: 'Programming' },
  { key: 'ndp', name: 'Near-data processing', short: 'Near-data processing' },
  { key: 'rel', name: 'DRAM reliability and security', short: 'Reliability' },
  { key: 'arch', name: 'Memory architecture', short: 'Memory architecture' },
  { key: 'other', name: 'Approximate computing', short: 'Approximate computing' },
];

SITE.PUBLICATIONS = [
  // ---------------------------------------------------------------- 2027
  {
    // accepted to HPCA 2027; when the proceedings are out, add the DOI and drop the note
    title: 'FLINT: Efficiently Leveraging High Bandwidth Flash for Capacity-Scalable LLM Inference Acceleration',
    authors: 'G. F. Oliveira, A. Tavakkol, X. Zhu, A. C. Yüzügüler, V. Arulchelvan, L. Cavigelli, R. Andri, M. Sadrosadati, Jia Xinglei, O. Mutlu, Zhou Ke, S. Bergman, J. Zhang',
    venue: 'HPCA', year: 2027, kind: 'conference', first: true, topic: 'mem', note: 'To appear',
    links: { arxiv: 'https://arxiv.org/abs/2608.25062' },
  },
  // ---------------------------------------------------------------- 2026
  {
    title: 'FLINT: Efficiently Exploiting High-Bandwidth Flash for Capacity-Scalable LLM Inference Acceleration',
    authors: 'G. F. Oliveira, X. Zhu, A. C. Yüzügüler, V. Arulchelvan, L. Cavigelli, Luo Longfei, Jia Xinglei, O. Mutlu, Zhou Ke, S. Bergman, A. Tavakkol, J. Zhang',
    venue: 'IEEE CAL', year: 2026, kind: 'journal', first: true, topic: 'mem',
    links: { doi: 'https://doi.org/10.1109/LCA.2026.3729746' },
  },
  {
    title: 'PipeDRAM: A Data-Transposition-Free Processing-Using-DRAM Architecture with Hardware/Software Pipelining',
    authors: 'G. F. Oliveira, A. Olgun, I. E. Yuksel, F. N. Bostanci, P. H. E. Becker, M. Sadrosadati, S. Ghose, J. Gómez-Luna, O. Mutlu',
    venue: 'MICRO', year: 2026, kind: 'conference', first: true, topic: 'pum',
    links: { arxiv: 'https://arxiv.org/abs/2609.30998', code: 'https://github.com/CMU-SAFARI/PipeDRAM' },
  },
  {
    title: 'DaPPA: A Unified Data-Parallel Programming Framework for Efficient Processing-in-Memory Execution',
    authors: 'G. F. Oliveira, A. Kohli, D. Novo, A. Olgun, A. G. Yaglikci, S. Ghose, J. Gómez-Luna, O. Mutlu',
    venue: 'ICCD', year: 2026, kind: 'conference', first: true, topic: 'prog',
    links: { arxiv: 'https://arxiv.org/abs/2310.10168', code: 'https://github.com/CMU-SAFARI/DaPPA' },
  },
  // ---------------------------------------------------------------- 2025
  {
    title: 'Proteus: Achieving High-Performance Processing-Using-DRAM via Dynamic Precision Bit-Serial Arithmetic',
    authors: 'G. F. Oliveira, M. Kabra, Y. Guo, K. Chen, A. G. Yaglikci, M. Soysal, M. Sadrosadati, J. Olivares, S. Ghose, J. Gómez-Luna, O. Mutlu',
    venue: 'ICS', year: 2025, kind: 'conference', first: true, topic: 'pum',
    links: { arxiv: 'https://arxiv.org/abs/2501.17466', code: 'https://github.com/CMU-SAFARI/Proteus', video: 'https://youtu.be/GFJAWzUw6s4' },
  },
  {
    title: 'POSTER: DaPPA: A Data-Parallel Programming Framework for Processing-in-Memory Architectures',
    authors: 'G. F. Oliveira, A. Kohli, D. Novo, A. Olgun, A. G. Yaglikci, S. Ghose, J. Gómez-Luna, O. Mutlu',
    venue: 'PACT', year: 2025, kind: 'poster', first: true, topic: 'prog',
    links: { arxiv: 'https://arxiv.org/abs/2310.10168', doi: 'https://doi.org/10.1109/PACT65351.2025.00047' },
  },
  {
    title: 'In-DRAM True Random Number Generation Using Simultaneous Multiple-Row Activation: An Experimental Study of Real DRAM Chips',
    authors: 'I. E. Yuksel, A. Olgun, F. N. Bostanci, O. Canpolat, G. F. Oliveira, M. Sadrosadati, A. G. Yaglikci, O. Mutlu',
    venue: 'ICCD', year: 2025, kind: 'conference', topic: 'pum',
    links: { arxiv: 'https://arxiv.org/abs/2510.20269', doi: 'https://doi.org/10.1109/ICCD65941.2025.00130' },
  },
  {
    title: 'POSTER: PIMAP: Characterizing a Real Processing-in-Memory System for Analytical Data Processing',
    authors: 'M. Frouzakis, J. Gómez-Luna, G. F. Oliveira, M. Sadrosadati, O. Mutlu',
    venue: 'PACT', year: 2025, kind: 'poster', topic: 'dm',
    links: { paper: 'https://ieeexplore.ieee.org/abstract/document/11282939', doi: 'https://doi.org/10.1109/PACT65351.2025.00050' },
  },
  {
    title: 'MARS: Processing-In-Memory Acceleration of Raw Signal Genome Analysis Inside the Storage Subsystem',
    authors: 'M. Soysal, K. Koliogeorgi, C. Firtina, N. M. Ghiasi, R. Nadig, H. Mao, G. F. Oliveira, Y. Liang, K. Zambaku, M. Sadrosadati, O. Mutlu',
    venue: 'ICS', year: 2025, kind: 'conference', topic: 'ndp',
    links: { arxiv: 'https://arxiv.org/abs/2506.10931', doi: 'https://doi.org/10.1145/3721145.3730428' },
  },
  {
    title: 'Variable Read Disturbance: An Experimental Analysis of Temporal Variation in DRAM Read Disturbance',
    authors: 'A. Olgun, F. N. Bostanci, I. E. Yuksel, A. G. Yaglikci, G. F. Oliveira, H. Luo, O. Canpolat, M. Patel, O. Mutlu',
    venue: 'HPCA', year: 2025, kind: 'conference', topic: 'rel',
    links: { arxiv: 'https://arxiv.org/abs/2502.13075', doi: 'https://doi.org/10.1109/HPCA61900.2025.00069' },
  },
  {
    title: 'Chronus: Understanding and Securing the Cutting-Edge Industry Solutions to DRAM Read Disturbance',
    authors: 'O. Canpolat, A. G. Yaglikci, G. F. Oliveira, A. Olgun, F. N. Bostanci, I. E. Yuksel, H. Luo, O. Ergin, O. Mutlu',
    venue: 'HPCA', year: 2025, kind: 'conference', topic: 'rel',
    links: { arxiv: 'https://arxiv.org/abs/2502.12650', code: 'https://github.com/CMU-SAFARI/Chronus', doi: 'https://doi.org/10.1109/HPCA61900.2025.00071' },
    award: '2026 Intel Hardware Security Academic Award (Recent Publication Award)',
  },
  // ---------------------------------------------------------------- 2024
  {
    title: 'MIMDRAM: An End-to-End Processing-Using-DRAM System for High-Throughput, Energy-Efficient and Programmer-Transparent Multiple-Instruction Multiple-Data Computing',
    authors: 'G. F. Oliveira, A. Olgun, A. G. Yaglikci, F. N. Bostanci, J. Gómez-Luna, S. Ghose, O. Mutlu',
    venue: 'HPCA', year: 2024, kind: 'conference', first: true, topic: 'pum',
    links: { arxiv: 'https://arxiv.org/abs/2402.19080', code: 'https://github.com/CMU-SAFARI/MIMDRAM', doi: 'https://doi.org/10.1109/HPCA57654.2024.00024' },
  },
  {
    title: 'Memory-Centric Computing: Recent Advances in Processing-in-DRAM',
    authors: 'O. Mutlu, A. Olgun, I. E. Yuksel, G. F. Oliveira',
    venue: 'IEDM', year: 2024, kind: 'overview', topic: 'pum',
    links: { arxiv: 'https://arxiv.org/abs/2412.19275', doi: 'https://doi.org/10.1109/IEDM50854.2024.10873410' },
  },
  {
    title: 'Sectored DRAM: A Practical Energy-Efficient and High-Performance Fine-Grained DRAM Architecture',
    authors: 'A. Olgun, F. N. Bostanci, G. F. Oliveira, Y. C. Tugrul, R. Bera, A. G. Yaglikci, H. Hassan, O. Ergin, O. Mutlu',
    venue: 'ACM TACO', year: 2024, kind: 'journal', topic: 'arch',
    links: { arxiv: 'https://arxiv.org/abs/2207.13795', code: 'https://github.com/CMU-SAFARI/Sectored-DRAM', doi: 'https://doi.org/10.1145/3673653' },
  },
  {
    title: 'ABACuS: All-Bank Activation Counters for Scalable and Low Overhead RowHammer Mitigation',
    authors: 'A. Olgun, Y. C. Tugrul, F. N. Bostanci, I. E. Yuksel, H. Luo, S. Rhyner, A. G. Yaglikci, G. F. Oliveira, O. Mutlu',
    venue: 'USENIX Security', year: 2024, kind: 'conference', topic: 'rel',
    links: { arxiv: 'https://arxiv.org/abs/2310.09977', code: 'https://github.com/CMU-SAFARI/ABACuS' },
  },
  {
    title: 'Spatial Variation-Aware Read Disturbance Defenses: Experimental Analysis of Real DRAM Chips and Implications on Future Solutions',
    authors: 'A. G. Yaglikci, Y. C. Tugrul, G. F. Oliveira, I. E. Yuksel, A. Olgun, H. Luo, O. Mutlu',
    venue: 'HPCA', year: 2024, kind: 'conference', topic: 'rel',
    links: { arxiv: 'https://arxiv.org/abs/2402.18652', doi: 'https://doi.org/10.1109/HPCA57654.2024.00048' },
  },
  {
    title: 'Functionally-Complete Boolean Logic in Real DRAM Chips: Experimental Characterization and Analysis',
    authors: 'I. E. Yuksel, Y. C. Tugrul, A. Olgun, F. N. Bostanci, A. G. Yaglikci, G. F. Oliveira, H. Luo, J. Gómez-Luna, M. Sadrosadati, O. Mutlu',
    venue: 'HPCA', year: 2024, kind: 'conference', topic: 'pum',
    links: { arxiv: 'https://arxiv.org/abs/2402.18736', code: 'https://github.com/CMU-SAFARI/FCDRAM', doi: 'https://doi.org/10.1109/HPCA57654.2024.00030' },
  },
  // ---------------------------------------------------------------- 2023
  {
    title: 'Extending Memory Capacity in Consumer Devices with Emerging Non-Volatile Memory: An Experimental Study',
    authors: 'G. F. Oliveira, S. Ghose, J. Gómez-Luna, A. Boroumand, A. Savery, S. Rao, S. Qazi, G. Grignou, R. Thakur, E. Shiu, O. Mutlu',
    venue: 'IEEE Access', year: 2023, kind: 'journal', first: true, topic: 'dm',
    links: { arxiv: 'https://arxiv.org/abs/2111.02325' },
  },
  {
    title: 'Evaluating Machine Learning Workloads on Memory-Centric Computing Systems',
    authors: 'J. Gómez-Luna, Y. Guo, S. Brocard, J. Legriel, R. Cimadomo, G. F. Oliveira, G. Singh, O. Mutlu',
    venue: 'ISPASS', year: 2023, kind: 'conference', topic: 'mem',
    links: { paper: 'https://people.inf.ethz.ch/omutlu/pub/MLonUPMEM-PIM_ispass23.pdf', doi: 'https://doi.org/10.1109/ISPASS57527.2023.00013' },
  },
  {
    title: 'TransPimLib: Efficient Transcendental Functions for Processing-in-Memory Systems',
    authors: 'M. Item, J. Gómez-Luna, Y. Guo, G. F. Oliveira, M. Sadrosadati, O. Mutlu',
    venue: 'ISPASS', year: 2023, kind: 'conference', topic: 'prog',
    links: { paper: 'https://people.inf.ethz.ch/omutlu/pub/TransPIMLib_ispass23.pdf', code: 'https://github.com/CMU-SAFARI/TransPimLib', doi: 'https://doi.org/10.1109/ISPASS57527.2023.00031', arxiv: 'https://arxiv.org/abs/2304.01951' },
  },
  {
    title: 'ALP: Alleviating CPU-Memory Data Movement Overheads in Memory-Centric Systems',
    authors: 'N. M. Ghiasi, N. Vijaykumar, G. F. Oliveira, L. Orosa, I. Fernandez, M. Sadrosadati, K. Kanellopoulos, N. Hajinazar, J. Gómez-Luna, O. Mutlu',
    venue: 'IEEE TETC', year: 2023, kind: 'journal', topic: 'prog',
    links: { paper: 'https://ieeexplore.ieee.org/document/9992268', doi: 'https://doi.org/10.1109/TETC.2022.3226132', arxiv: 'https://arxiv.org/abs/2212.06292' },
  },
  {
    title: 'Casper: Accelerating Stencil Computations using Near-Cache Processing',
    authors: 'A. Denzler, G. F. Oliveira, N. Hajinazar, R. Bera, G. Singh, J. Gómez-Luna, O. Mutlu',
    venue: 'IEEE Access', year: 2023, kind: 'journal', topic: 'ndp',
    links: { arxiv: 'https://arxiv.org/abs/2112.14216', doi: 'https://doi.org/10.1109/ACCESS.2023.3252002' },
  },
  // ---------------------------------------------------------------- 2022
  {
    title: 'Accelerating Neural Network Inference With Processing-in-DRAM: From the Edge to the Cloud',
    authors: 'G. F. Oliveira, J. Gómez-Luna, S. Ghose, O. Mutlu',
    venue: 'IEEE Micro', year: 2022, kind: 'magazine', first: true, topic: 'mem',
    links: { paper: 'https://ieeexplore.ieee.org/document/9869326', arxiv: 'https://arxiv.org/abs/2209.08938', doi: 'https://doi.org/10.1109/MM.2022.3202350' },
  },
  {
    title: 'Heterogeneous Data-Centric Architectures for Modern Data-Intensive Applications: Case Studies in Machine Learning and Databases',
    authors: 'G. F. Oliveira, A. Boroumand, S. Ghose, J. Gómez-Luna, O. Mutlu',
    venue: 'ISVLSI', year: 2022, kind: 'conference', first: true, topic: 'ndp',
    links: { paper: 'https://ieeexplore.ieee.org/abstract/document/9912106', arxiv: 'https://arxiv.org/abs/2205.14664', doi: 'https://doi.org/10.1109/ISVLSI54635.2022.00060' },
  },
  {
    title: 'Methodologies, Workloads, and Tools for Processing-in-Memory: Enabling the Adoption of Data-Centric Architectures',
    authors: 'G. F. Oliveira, J. Gómez-Luna, S. Ghose, O. Mutlu',
    venue: 'ISVLSI', year: 2022, kind: 'conference', first: true, topic: 'dm',
    links: { paper: 'https://ieeexplore.ieee.org/abstract/document/9912064', arxiv: 'https://arxiv.org/abs/2205.14647', doi: 'https://doi.org/10.1109/ISVLSI54635.2022.00058' },
  },
  {
    title: 'A Modern Primer on Processing in Memory',
    authors: 'O. Mutlu, S. Ghose, J. Gómez-Luna, R. Ausavarungnirun, M. Sadrosadati, G. F. Oliveira',
    venue: 'Emerging Computing: From Devices to Systems (Springer)', year: 2022, kind: 'overview', topic: 'ndp',
    note: 'Updated February 2025',
    links: { arxiv: 'https://arxiv.org/abs/2012.03112', doi: 'https://doi.org/10.1007/978-981-16-7487-7_7' },
  },
  {
    title: 'pLUTo: Enabling Massively Parallel Computation in DRAM via Lookup Tables',
    authors: 'J. D. Ferreira, G. Falcao, J. Gómez-Luna, M. Alser, L. Orosa, M. Sadrosadati, J. S. Kim, G. F. Oliveira, T. Shahroodi, A. Nori, O. Mutlu',
    venue: 'MICRO', year: 2022, kind: 'conference', topic: 'pum',
    links: { arxiv: 'https://arxiv.org/abs/2104.07699', code: 'https://github.com/CMU-SAFARI/pLUTo', video: 'https://www.youtube.com/watch?v=9t1FJQ6nNw4', doi: 'https://doi.org/10.1109/MICRO56248.2022.00067' },
  },
  {
    title: 'Flash-Cosmos: In-Flash Bulk Bitwise Operations Using Inherent Computation Capability of NAND Flash Memory',
    authors: 'J. Park, R. Azizi, G. F. Oliveira, M. Sadrosadati, R. Nadig, D. Novo, J. Gómez-Luna, M. Kim, O. Mutlu',
    venue: 'MICRO', year: 2022, kind: 'conference', topic: 'pum',
    links: { arxiv: 'https://arxiv.org/abs/2209.05566', doi: 'https://doi.org/10.1109/MICRO56248.2022.00069' },
  },
  {
    title: 'Understanding RowHammer Under Reduced Wordline Voltage: An Experimental Study Using Real DRAM Devices',
    authors: 'A. G. Yağlıkçı, H. Luo, G. F. Oliveira, A. Olgun, M. Patel, J. Park, H. Hassan, J. S. Kim, L. Orosa, O. Mutlu',
    venue: 'DSN', year: 2022, kind: 'conference', topic: 'rel',
    links: { paper: 'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22.pdf', doi: 'https://doi.org/10.1109/DSN53405.2022.00054', arxiv: 'https://arxiv.org/abs/2206.09999' },
  },
  {
    title: 'Polynesia: Enabling High-Performance and Energy-Efficient Hybrid Transactional/Analytical Databases with Hardware/Software Co-Design',
    authors: 'A. Boroumand, S. Ghose, G. F. Oliveira, O. Mutlu',
    venue: 'ICDE', year: 2022, kind: 'conference', topic: 'ndp',
    links: {
      paper: 'https://people.inf.ethz.ch/omutlu/pub/Polynesia_icde22.pdf',
      slides: 'https://people.inf.ethz.ch/omutlu/pub/Polynesia_icde22-talk.pdf',
      video: 'https://www.youtube.com/watch?v=3IHmaDjtWcE', doi: 'https://doi.org/10.1109/ICDE53745.2022.00270' },
  },
  {
    title: 'Benchmarking a New Paradigm: Experimental Analysis and Characterization of a Real Processing-in-Memory System',
    authors: 'J. Gómez-Luna, I. El Hajj, I. Fernandez, C. Giannoula, G. F. Oliveira, O. Mutlu',
    venue: 'IEEE Access', year: 2022, kind: 'journal', topic: 'dm',
    links: {
      paper: 'https://people.inf.ethz.ch/omutlu/pub/Benchmarking_a_New_Paradigm_Experimental_Analysis_and_Characterization_of_a_Real_Processing-in-Memory_System.pdf',
      code: 'https://github.com/CMU-SAFARI/prim-benchmarks', doi: 'https://doi.org/10.1109/ACCESS.2022.3174101', arxiv: 'https://arxiv.org/abs/2105.03814' },
  },
  // ---------------------------------------------------------------- 2021
  {
    title: 'DAMOV: A New Methodology and Benchmark Suite for Evaluating Data Movement Bottlenecks',
    authors: 'G. F. Oliveira, J. Gómez-Luna, S. Ghose, L. Orosa, N. Vijaykumar, I. Fernandez, M. Sadrosadati, O. Mutlu',
    venue: 'IEEE Access', year: 2021, kind: 'journal', first: true, topic: 'dm',
    links: {
      paper: 'https://people.inf.ethz.ch/omutlu/pub/DAMOV-Bottleneck-Analysis-and-DataMovement-Benchmarks_IEEEaccess21.pdf',
      arxiv: 'https://arxiv.org/abs/2105.03725',
      code: 'https://github.com/CMU-SAFARI/DAMOV',
      slides: 'https://people.inf.ethz.ch/omutlu/pub/DAMOV-Bottleneck-Analysis-and-DataMovement-Benchmarks_arxiv21-talk.pdf',
      video: 'https://www.youtube.com/watch?v=HkMYuYMuZOg', doi: 'https://doi.org/10.1109/ACCESS.2021.3110993' },
  },
  {
    title: 'SIMDRAM: A Framework for Bit-Serial SIMD Processing using DRAM',
    authors: 'N. Hajinazar*, G. F. Oliveira*, S. Gregorio, J. D. Ferreira, N. M. Ghiasi, M. Patel, M. Alser, S. Ghose, J. Gómez-Luna, O. Mutlu',
    venue: 'ASPLOS', year: 2021, kind: 'conference', first: true, topic: 'pum',
    links: {
      paper: 'https://people.inf.ethz.ch/omutlu/pub/SIMDRAM_asplos21.pdf',
      arxiv: 'https://arxiv.org/abs/2105.12839',
      video: 'https://www.youtube.com/watch?v=pmZoAAhvkRQ', doi: 'https://doi.org/10.1145/3445814.3446749' },
  },
  {
    title: 'HARP: Practically and Effectively Identifying Uncorrectable Errors in Memory Chips That Use On-Die Error-Correcting Codes',
    authors: 'M. Patel, G. F. Oliveira, O. Mutlu',
    venue: 'MICRO', year: 2021, kind: 'conference', topic: 'rel',
    links: { paper: 'https://people.inf.ethz.ch/omutlu/pub/HARP-memory-error-profiling_micro21.pdf', code: 'https://github.com/CMU-SAFARI/HARP', doi: 'https://doi.org/10.1145/3466752.3480061', arxiv: 'https://arxiv.org/abs/2109.12697' },
  },
  {
    title: 'Google Neural Network Models for Edge Devices: Analyzing and Mitigating Machine Learning Inference Bottlenecks',
    authors: 'A. Boroumand, S. Ghose, B. Akin, R. Narayanaswami, G. F. Oliveira, X. Ma, E. Shiu, O. Mutlu',
    venue: 'PACT', year: 2021, kind: 'conference', topic: 'mem',
    links: { paper: 'https://people.inf.ethz.ch/omutlu/pub/Google-neural-networks-for-edge-devices-Mensa-Framework_pact21.pdf', doi: 'https://doi.org/10.1109/PACT52795.2021.00019', arxiv: 'https://arxiv.org/abs/2109.14320' },
  },
  // ---------------------------------------------------------------- 2017-2020
  {
    title: 'The Virtual Block Interface: A Flexible Alternative to the Conventional Virtual Memory Framework',
    authors: 'N. Hajinazar, P. Patel, M. Patel, K. Kanellopoulos, S. Ghose, R. Ausavarungnirun, G. F. Oliveira, J. Appavoo, V. Seshadri, O. Mutlu',
    venue: 'ISCA', year: 2020, kind: 'conference', topic: 'arch',
    links: { paper: 'https://people.inf.ethz.ch/omutlu/pub/VBI-virtual-block-interface_isca20.pdf', doi: 'https://doi.org/10.1109/ISCA45697.2020.00089', arxiv: 'https://arxiv.org/abs/2005.09748' },
  },
  {
    title: 'NAPEL: Near-Memory Computing Application Performance Prediction via Ensemble Learning',
    authors: 'G. Singh, J. Gómez-Luna, G. Mariani, G. F. Oliveira, S. Corda, S. Stuijk, O. Mutlu, H. Corporaal',
    venue: 'DAC', year: 2019, kind: 'conference', topic: 'prog',
    links: { paper: 'https://people.inf.ethz.ch/omutlu/pub/NAPEL-near-memory-computing-performance-prediction-via-ML_dac19.pdf', code: 'https://github.com/CMU-SAFARI/ramulator-pim' },
  },
  {
    title: 'Employing Classification-based Algorithms for General-Purpose Approximate Computing',
    authors: 'G. F. Oliveira, L. R. Gonçalves, M. Brandalero, A. C. S. Beck, L. Carro',
    venue: 'DAC', year: 2018, kind: 'conference', first: true, topic: 'other',
    links: { paper: 'https://dl.acm.org/doi/10.1145/3195970.3196043', doi: 'https://doi.org/10.1145/3195970.3196043' },
  },
  {
    title: 'Processing in 3D Memories to Speed Up Operations on Complex Data Structures',
    authors: 'P. C. Santos, G. F. Oliveira, J. P. C. Lima, M. A. Z. Alves, L. Carro, A. C. S. Beck',
    venue: 'DATE', year: 2018, kind: 'conference', topic: 'ndp',
    links: { paper: 'https://ieeexplore.ieee.org/document/8342135', doi: 'https://doi.org/10.23919/DATE.2018.8342135' },
  },
  {
    title: 'A Generic Processing in Memory Cycle Accurate Simulator Under Hybrid Memory Cube Architecture',
    authors: 'G. F. Oliveira, P. C. Santos, M. A. Z. Alves, L. Carro',
    venue: 'SAMOS', year: 2017, kind: 'conference', first: true, topic: 'prog',
    links: { paper: 'https://ieeexplore.ieee.org/document/8344611', doi: 'https://doi.org/10.1109/SAMOS.2017.8344611' },
  },
  {
    title: 'NIM: An HMC-Based Machine for Neuron Computation',
    authors: 'G. F. Oliveira, P. C. Santos, M. A. Z. Alves, L. Carro',
    venue: 'ARC', year: 2017, kind: 'conference', first: true, topic: 'mem',
    links: { paper: 'https://web.inf.ufpr.br/mazalves/wp-content/uploads/sites/13/2019/10/arc2017.pdf', doi: 'https://doi.org/10.1007/978-3-319-56258-2_3' },
  },
  {
    title: 'Operand Size Reconfiguration for Big Data Processing in Memory',
    authors: 'P. C. Santos, G. F. Oliveira, D. G. Tomé, M. A. Z. Alves, E. C. Almeida, L. Carro',
    venue: 'DATE', year: 2017, kind: 'conference', topic: 'ndp',
    links: { paper: 'https://ieeexplore.ieee.org/document/7927081', doi: 'https://doi.org/10.23919/DATE.2017.7927081' },
  },
];
